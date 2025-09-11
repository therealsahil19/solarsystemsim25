import { CelestialBody } from '../data';
import { celestialSelectorMenu } from './dom';
import { buildTree, CelestialBodyType, TreeNode } from './tree-view';
import Fuse from 'fuse.js';
import simStore from '../state/simStore';
import { PanelManager } from './panel-manager';

/** Defines the two main view modes for the selector: hierarchical tree or flat list grouped by type. */
type ViewMode = 'hierarchy' | 'type';
/** The data structure used by Fuse.js for searching. */
type FuseDataItem = CelestialBody & { type: CelestialBodyType };

// --- Module-level state ---
/** @private The root nodes of the celestial body tree. */
let treeNodes: TreeNode[] = [];
/** @private A flat list of all tree nodes for easier iteration. */
const allNodes: TreeNode[] = [];
/** @private A map from node ID to the corresponding TreeNode object for quick lookups. */
const flatNodeMap = new Map<string, TreeNode>();
/** @private The Fuse.js instance for fuzzy searching. */
let fuse: Fuse<FuseDataItem>;
/** @private The ID of the currently focused node for keyboard navigation. */
let activeNodeId: string | null = null;
/** @private The currently active view mode. */
let currentView: ViewMode = 'type';
/** @private The callback function to execute when a body is selected. */
let onSelectCallback: (id: string) => void;
/** @private The currently selected filter category. */
let currentFilterType: CelestialBodyType | 'all' = 'all';
/** @private A set of IDs for bodies that the user has favorited. */
const favoritedIds = new Set<string>();
/** @private A flag indicating whether to show only favorited items. */
let showFavoritesOnly = false;
/** @private Unsubscribe handle for the selection subscription to avoid duplicate subscriptions. */
let unsubscribeSelection: (() => void) | null = null;

/**
 * Creates a favorite button for a tree node.
 * @param node The tree node to create the button for.
 * @returns An HTMLButtonElement for favoriting.
 * @private
 */
function createFavoriteButton(node: TreeNode): HTMLButtonElement {
    const favoriteBtn = document.createElement('button');
    favoriteBtn.className = 'favorite-btn';
    favoriteBtn.innerHTML = '&#9733;'; // Unicode star
    if (favoritedIds.has(node.id)) {
        favoriteBtn.classList.add('favorited');
    }
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the row from being selected
        if (favoritedIds.has(node.id)) {
            favoritedIds.delete(node.id);
            favoriteBtn.classList.remove('favorited');
        } else {
            favoritedIds.add(node.id);
            favoriteBtn.classList.add('favorited');
        }
        if (showFavoritesOnly) {
            filterTree();
        }
    });
    return favoriteBtn;
}

/**
 * Creates a span element to display the type of a celestial body.
 * @param node The tree node.
 * @returns An HTMLSpanElement displaying the type.
 * @private
 */
function createTypeSpan(node: TreeNode): HTMLSpanElement {
    const typeSpan = document.createElement('span');
    typeSpan.className = 'node-type';
    typeSpan.textContent = node.type.charAt(0).toUpperCase() + node.type.slice(1);
    return typeSpan;
}

/**
 * Renders a single list item for the "group by type" view.
 * @param node The tree node to render.
 * @returns An HTMLLIElement representing the node.
 * @private
 */
function renderListItem(node: TreeNode): HTMLLIElement {
    const li = document.createElement('li');
    li.dataset.id = node.id;
    li.className = 'tree-node';
    li.style.paddingLeft = '25px';
    li.setAttribute('role', 'listitem');
    if (node.spec.edu?.shortDescription) {
        li.title = node.spec.edu.shortDescription;
    }

    const content = document.createElement('div');
    content.className = 'tree-node-content';

    const chevronPlaceholder = document.createElement('span');
    chevronPlaceholder.className = 'chevron';
    content.appendChild(chevronPlaceholder);

    const colorDot = document.createElement('span');
    colorDot.className = 'color-dot';
    colorDot.style.backgroundColor = `#${node.spec.color.toString(16).padStart(6, '0')}`;
    content.appendChild(colorDot);

    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = `assets/${node.type}.svg`;
    icon.alt = `${node.type} icon`;
    content.appendChild(icon);

    const name = document.createElement('span');
    name.className = 'node-name';
    name.textContent = node.name;
    content.appendChild(name);

    content.appendChild(createTypeSpan(node));

    const stats = document.createElement('span');
    stats.className = 'node-stats';
    stats.textContent = `${node.spec.radius.toLocaleString()} km`;
    content.appendChild(stats);

    content.appendChild(createFavoriteButton(node));

    li.appendChild(content);
    node.element = li;
    return li;
}

/**
 * Renders a single node and its children for the hierarchical tree view.
 * @param node The tree node to render.
 * @returns An HTMLLIElement representing the node and its subtree.
 * @private
 */

/**
 * Renders the entire selector content in "group by type" view mode.
 * @private
 */
function renderByTypeView() {
    const nodesByType = new Map<CelestialBodyType, TreeNode[]>();
    allNodes.forEach(node => {
        if (!nodesByType.has(node.type)) {
            nodesByType.set(node.type, []);
        }
        nodesByType.get(node.type)!.push(node);
    });


    const ul = document.createElement('ul');
    ul.className = 'list-root';
    celestialSelectorMenu.appendChild(ul);

    const typeOrder: CelestialBodyType[] = ['star', 'planet', 'moon'];

    typeOrder.forEach(type => {
        if (nodesByType.has(type)) {
            const nodes = nodesByType.get(type)!;
            const groupLi = document.createElement('li');
            groupLi.className = 'list-group';

            const header = document.createElement('div');
            header.className = 'list-group-header';
            const typeName = type.charAt(0).toUpperCase() + type.slice(1);
            header.innerHTML = `<span class="chevron">▼</span> ${typeName}s (${nodes.length})`;
            groupLi.appendChild(header);

            const childrenUl = document.createElement('ul');
            childrenUl.className = 'list-group-children';
            nodes.forEach(node => {
                childrenUl.appendChild(renderListItem(node));
            });
            groupLi.appendChild(childrenUl);
            ul.appendChild(groupLi);
        }
    });
}

/**
 * Main render function that clears the current view and re-renders it based on the active mode.
 * @private
 */
function render() {
    celestialSelectorMenu.innerHTML = '';
    renderByTypeView();
    filterTree();
}

/**
 * Filters the displayed nodes based on the current search query, type filter, and favorites toggle.
 * @private
 */
function filterTree() {
    const searchInput = document.getElementById('selector-search-input') as HTMLInputElement;
    const query = searchInput.value;
    const selectedType = currentFilterType;

    const hasQuery = !!query;
    const hasTypeFilter = selectedType !== 'all';
    const noFilters = !hasQuery && !hasTypeFilter && !showFavoritesOnly;

    let finalVisibleIds: Set<string>;

    if (noFilters) {
        finalVisibleIds = new Set(allNodes.map(n => n.id));
    } else {
        let searchResultIds: Set<string>;

        if (hasQuery || hasTypeFilter) {
            const searchClauses: ({ [key: string]: string })[] = [];
            if (hasQuery) searchClauses.push({ name: query });
            if (hasTypeFilter) searchClauses.push({ type: selectedType });

            const results = fuse.search({ $and: searchClauses });
            searchResultIds = new Set(results.map(r => r.item.id));
        } else {
            searchResultIds = new Set(allNodes.map(n => n.id));
        }

        if (showFavoritesOnly) {
            finalVisibleIds = new Set([...searchResultIds].filter(id => favoritedIds.has(id)));
        } else {
            finalVisibleIds = searchResultIds;
        }
    }

    allNodes.forEach(node => {
        if (node.element) {
            node.element.style.display = finalVisibleIds.has(node.id) ? '' : 'none';
        }
    });
    document.querySelectorAll('.list-group').forEach(group => {
        const children = group.querySelector('.list-group-children');
        const hasVisibleChild = Array.from(children?.querySelectorAll('.tree-node') || []).some(
            child => (child as HTMLElement).style.display !== 'none'
        );
        (group as HTMLElement).style.display = hasVisibleChild ? '' : 'none';
    });
}

/**
 * Gets a flat list of all currently visible nodes in the hierarchy view for keyboard navigation.
 * @returns An array of `TreeNode` objects.
 * @private
 */
function getVisibleNodes(): TreeNode[] {
    return []; // Disable keyboard nav for now
}

/**
 * Sets the currently active/focused node for keyboard navigation.
 * @param nodeId The ID of the node to activate, or null to deactivate all.
 * @private
 */
function setActiveNode(nodeId: string | null) {
    if (activeNodeId) {
        flatNodeMap.get(activeNodeId)?.element?.classList.remove('focused');
    }
    activeNodeId = nodeId;
    if (activeNodeId) {
        const node = flatNodeMap.get(activeNodeId);
        if (node?.element) {
            node.element.classList.add('focused');
            node.element.scrollIntoView({ block: 'nearest' });
        }
    }
}

/**
 * Updates the 'selected' class on nodes based on the global state from the Zustand store.
 * @private
 */
function updateSelectionFromState() {
    const { selectedBodyId } = simStore.getState();
    flatNodeMap.forEach((node) => {
        if (node.element) {
            if (node.id === selectedBodyId) {
                node.element.classList.add('selected');
            } else {
                node.element.classList.remove('selected');
            }
        }
    });
}

/**
 * A standard debounce utility function.
 * @param func The function to debounce.
 * @param delay The debounce delay in milliseconds.
 * @returns A debounced version of the function.
 * @private
 */
function debounce(func: (...args: any[]) => void, delay: number) {
    let timeoutId: number;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            func(...args);
        }, delay);
    };
}

/**
 * Initializes the entire celestial body selector component.
 * This function builds the data tree, sets up the Fuse.js search,
 * renders the initial view, and attaches all necessary event listeners.
 * @param bodies The flat array of `CelestialBody` data.
 * @param onSelect The callback function to execute when a user selects a body.
 */
export function createCelestialBodySelector(bodies: CelestialBody[], onSelect: (id:string) => void): void {
    // Matches <div id="celestialSelector" ...> in index.html
    const panelEl = document.getElementById('celestialSelector');
    if (!panelEl) return;

    const panelController = PanelManager.createPanel(
        'celestialSelector',
        'Celestial Selector',
        panelEl,
        {
            width: 320,
            height: Math.min(window.innerHeight * 0.7, 600),
        }
    );

    const openBtn = document.getElementById('open-celestial-selector-btn');
    if (openBtn) {
        openBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            panelController.toggleVisibility();
        });
    }

    // Wire up panel header buttons to the controller
    const closeBtn = document.getElementById('celestialSelector-close') as HTMLButtonElement | null;
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            panelController.hide();
        });
    }
    const pinBtn = document.getElementById('celestialSelector-pin') as HTMLButtonElement | null;
    if (pinBtn) {
        pinBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            panelController.togglePin();
            pinBtn.setAttribute('aria-pressed', String(panelController.isPinned()));
        });
        // initialize aria state
        pinBtn.setAttribute('aria-pressed', String(panelController.isPinned()));
    }
    const minimizeBtn = document.getElementById('celestialSelector-minimize') as HTMLButtonElement | null;
    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            panelController.setMinimized(!panelController.isMinimized());
        });
    }

    onSelectCallback = (id) => {
        onSelect(id);
    };

    treeNodes = buildTree(bodies);
    treeNodes.forEach(root => {
        function walk(node: TreeNode) {
            flatNodeMap.set(node.id, node);
            allNodes.push(node);
            node.children.forEach(walk);
        }
        walk(root);
    });

    const fuseData = allNodes.map(node => ({
        ...node.spec,
        type: node.type,
    }));
    fuse = new Fuse(fuseData, { keys: ['name', 'type'], threshold: 0.4, includeScore: true });

    render();

    // Ensure we subscribe only once to selection changes
    if (unsubscribeSelection) {
        unsubscribeSelection();
        unsubscribeSelection = null;
    }
    unsubscribeSelection = simStore.subscribe(
        (s) => s.selectedBodyId,
        () => updateSelectionFromState()
    );
    updateSelectionFromState();

    // Add Favorites Toggle Button
    const categoryTabsContainer = document.getElementById('category-tabs');
    if (categoryTabsContainer && categoryTabsContainer.parentNode) {
        const favToggleContainer = document.createElement('div');
        favToggleContainer.style.padding = "5px 0 10px 5px";
        favToggleContainer.innerHTML = `
            <label style="display: flex; align-items: center; cursor: pointer; gap: 8px; font-weight: 500; color: #f0c420;">
                <input type="checkbox" id="favorites-filter-toggle">
                Show Favorites Only
            </label>
        `;
        categoryTabsContainer.parentNode.insertBefore(favToggleContainer, categoryTabsContainer);

        const favToggle = document.getElementById('favorites-filter-toggle') as HTMLInputElement;
        if (favToggle) {
            favToggle.addEventListener('change', () => {
                showFavoritesOnly = favToggle.checked;
                filterTree();
            });
        }
    }

    celestialSelectorMenu.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;

        const groupHeader = target.closest('.list-group-header');
        if (groupHeader) {
            const childrenUl = groupHeader.nextElementSibling as HTMLUListElement;
            const chevron = groupHeader.querySelector('.chevron');
            if (childrenUl) {
                const isExpanded = childrenUl.style.display !== 'none';
                childrenUl.style.display = isExpanded ? 'none' : 'block';
                if (chevron) chevron.textContent = isExpanded ? '▶' : '▼';
            }
            return;
        }

        const nodeEl = target.closest('.tree-node');
        if (!nodeEl || !(nodeEl instanceof HTMLLIElement)) return;
        const nodeId = nodeEl.dataset.id!;
        const node = flatNodeMap.get(nodeId)!;
        onSelectCallback(node.id);
    });

    const searchInput = document.getElementById('selector-search-input') as HTMLInputElement;
    searchInput.addEventListener('input', debounce(() => filterTree(), 300));

    const categories: (CelestialBodyType | 'all')[] = ['all', 'star', 'planet', 'moon'];
    const categoryTabs = document.getElementById('category-tabs')!;
    categories.forEach(category => {
        const tab = document.createElement('button');
        tab.className = 'category-tab';
        tab.dataset.category = category;

        let text = category.charAt(0).toUpperCase() + category.slice(1);
        if (category !== 'all') text += 's';
        tab.textContent = text;

        if (category === currentFilterType) {
            tab.classList.add('active');
        }

        tab.addEventListener('click', () => {
            currentFilterType = category;
            categoryTabs.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            filterTree();
        });
        categoryTabs.appendChild(tab);
    });


    searchInput.addEventListener('keydown', (e: KeyboardEvent) => {
        const visibleNodes = getVisibleNodes();
        if (visibleNodes.length === 0) return;

        let currentIndex = activeNodeId ? visibleNodes.findIndex(n => n.id === activeNodeId) : -1;

        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                currentIndex = Math.min(currentIndex + 1, visibleNodes.length - 1);
                setActiveNode(visibleNodes[currentIndex].id);
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (currentIndex === -1) currentIndex = 1;
                currentIndex = Math.max(currentIndex - 1, 0);
                setActiveNode(visibleNodes[currentIndex].id);
                break;
            case 'Enter':
                if (activeNodeId) {
                    onSelectCallback(activeNodeId);
                }
                break;
            case 'ArrowRight': {
                const node = activeNodeId ? flatNodeMap.get(activeNodeId) : null;
                if (node && node.children.length > 0 && !node.expanded) {
                    node.expanded = true;
                    updateDomVisibility();
                }
                break;
            }
            case 'ArrowLeft': {
                const node = activeNodeId ? flatNodeMap.get(activeNodeId) : null;
                if (node && node.children.length > 0 && node.expanded) {
                    node.expanded = false;
                    updateDomVisibility();
                } else if (node?.parent) {
                    setActiveNode(node.parent.id);
                }
                break;
            }
        }
    });
}
