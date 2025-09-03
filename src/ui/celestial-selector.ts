import { CelestialBody } from '../data';
import { celestialSelectorMenu } from './dom';
import { buildTree, CelestialBodyType, TreeNode } from './tree-view';
import Fuse, { FuseResult } from 'fuse.js';
import { store } from '../state/store';
import { PanelManager } from './panel-manager';

type ViewMode = 'hierarchy' | 'type';
type FuseDataItem = CelestialBody & { type: CelestialBodyType };

let treeNodes: TreeNode[] = [];
let allNodes: TreeNode[] = [];
let flatNodeMap = new Map<string, TreeNode>();
let fuse: Fuse<FuseDataItem>;
let activeNodeId: string | null = null;
let currentView: ViewMode = 'hierarchy';
let onSelectCallback: (id: string) => void;
let currentFilterType: CelestialBodyType | 'all' = 'all';
const favoritedIds = new Set<string>();
let showFavoritesOnly = false;

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

function createTypeSpan(node: TreeNode): HTMLSpanElement {
    const typeSpan = document.createElement('span');
    typeSpan.className = 'node-type';
    typeSpan.textContent = node.type.charAt(0).toUpperCase() + node.type.slice(1);
    return typeSpan;
}

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


function renderNode(node: TreeNode): HTMLLIElement {
    const li = document.createElement('li');
    li.dataset.id = node.id;
    li.className = 'tree-node';
    li.style.paddingLeft = `${node.depth * 18}px`;
    li.setAttribute('role', 'treeitem');
    li.setAttribute('aria-expanded', String(node.children.length > 0 ? node.expanded : false));
    if (node.spec.edu?.shortDescription) {
        li.title = node.spec.edu.shortDescription;
    }

    const content = document.createElement('div');
    content.className = 'tree-node-content';

    const chevron = document.createElement('span');
    chevron.className = 'chevron';
    if (node.children.length > 0) {
        chevron.textContent = node.expanded ? '▼' : '▶';
    }
    content.appendChild(chevron);

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

    if (node.children.length > 0) {
        const ul = document.createElement('ul');
        ul.className = 'tree-level';
        ul.setAttribute('role', 'group');
        ul.style.display = node.expanded ? 'block' : 'none';
        node.children.forEach(child => {
            const childEl = renderNode(child);
            child.element = childEl;
            ul.appendChild(childEl);
        });
        li.appendChild(ul);
    }

    node.element = li;
    return li;
}

function renderHierarchyView() {
    const ul = document.createElement('ul');
    ul.className = 'tree-root';
    ul.setAttribute('role', 'tree');
    treeNodes.forEach(node => ul.appendChild(renderNode(node)));
    celestialSelectorMenu.appendChild(ul);
}

function renderByTypeView() {
    const nodesByType = new Map<CelestialBodyType, TreeNode[]>();
    allNodes.forEach(node => {
        if (!nodesByType.has(node.type)) {
            nodesByType.set(node.type, []);
        }
        nodesByType.get(node.type)!.push(node);
    });

    nodesByType.forEach(nodes => nodes.sort((a, b) => a.name.localeCompare(b.name)));

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

function render() {
    celestialSelectorMenu.innerHTML = '';
    if (currentView === 'hierarchy') {
        renderHierarchyView();
    } else {
        renderByTypeView();
    }
    filterTree();
}


function updateDomVisibility() {
    flatNodeMap.forEach(node => {
        if (node.element) {
            const isVisible = node.visible && (!node.parent || node.parent.expanded && node.parent.element?.style.display !== 'none');
            node.element.style.display = isVisible ? '' : 'none';
            if (node.children.length > 0) {
                const ul = node.element.querySelector('ul');
                if (ul) ul.style.display = node.expanded ? 'block' : 'none';
                const chevron = node.element.querySelector('.chevron');
                if (chevron) {
                    chevron.textContent = node.expanded ? '▼' : '▶';
                    node.element.setAttribute('aria-expanded', String(node.expanded));
                }
            }
        }
    });

    store.subscribe(updateSelectionFromState);
    updateSelectionFromState();
}

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

    if (currentView === 'hierarchy') {
        allNodes.forEach(node => node.visible = false);
        finalVisibleIds.forEach(id => {
            let current = flatNodeMap.get(id);
            while(current) {
                current.visible = true;
                if (!noFilters) { // Expand only when filters are active
                    current.expanded = true;
                }
                current = current.parent || undefined;
            }
        });
        if (noFilters) {
             allNodes.forEach(n => n.expanded = false);
        }
        updateDomVisibility();
    } else {
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
}

function getVisibleNodes(): TreeNode[] {
    if (currentView === 'type') return []; // Disable keyboard nav for type view for now

    const visible: TreeNode[] = [];
    function traverse(nodes: TreeNode[]) {
        for (const node of nodes) {
            if (node.visible && node.element && node.element.style.display !== 'none') {
                visible.push(node);
                if (node.expanded && node.children.length > 0) {
                    traverse(node.children);
                }
            }
        }
    }
    traverse(treeNodes);
    return visible;
}

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

function updateSelectionFromState() {
    const { selectedBodyId } = store.getState();
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

function debounce(func: (...args: any[]) => void, delay: number) {
    let timeoutId: number;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            func(...args);
        }, delay);
    };
}

export function createCelestialBodySelector(bodies: CelestialBody[], onSelect: (id:string) => void): void {
    const panel = document.getElementById('celestial-selector-panel')!;
    if (!panel) return;

    const openBtn = document.getElementById('open-celestial-selector-btn')!;
    const closeBtn = panel.querySelector('#close-celestial-selector-btn') as HTMLElement;
    const minimizeBtn = panel.querySelector('.minimize-btn') as HTMLElement;
    const header = panel.querySelector('.panel-header') as HTMLElement;

feature/UI-UX-improvements
    const panelManager = new PanelManager(panel);
    panelManager.makeDraggable(header);
    panelManager.makeResizable();

    const openPanel = () => {
        panel.classList.remove('hidden');
        (panelManager as any).bringToFront();
=======
    const panelManager = new PanelManager(modal, 'celestialSelector.v1');
    panelManager.makeDraggable(header);
    minimizeBtn.addEventListener('click', () => panelManager.minimize());
    // Per user request, min height is 50vh, but PanelManager deals in px.
    // This is a reasonable approximation. A more robust solution might involve
    // converting vh to px on resize, but this is sufficient for now.
    const minHeight = window.innerHeight * 0.5;
    panelManager.makeResizable(300, minHeight);

    const openPanel = () => {
        modalContainer.classList.remove('hidden');
main
    };
    const closePanel = () => panel.classList.add('hidden');

feature/UI-UX-improvements
    openBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (panel.classList.contains('hidden')) {
            openPanel();
        } else {
=======
    const closePanel = () => {
        modalContainer.classList.add('hidden');
    };

    openBtn.addEventListener('click', openPanel);
    closeBtn.addEventListener('click', closePanel);
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
main
            closePanel();
        }
    });

    closeBtn.addEventListener('click', closePanel);
    minimizeBtn.addEventListener('click', () => panelManager.minimize());

    onSelectCallback = (id) => {
        onSelect(id);
feature/UI-UX-improvements
        // We don't close the panel anymore since it's a persistent panel
=======
        // Do not close the panel on selection, allow user to browse
main
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

    // Add Favorites Toggle Button
    const categoryTabsContainer = document.getElementById('category-tabs')!;
    const favToggleContainer = document.createElement('div');
    favToggleContainer.style.padding = "5px 0 10px 5px";
    favToggleContainer.innerHTML = `
        <label style="display: flex; align-items: center; cursor: pointer; gap: 8px; font-weight: 500; color: #f0c420;">
            <input type="checkbox" id="favorites-filter-toggle">
            Show Favorites Only
        </label>
    `;
    categoryTabsContainer.parentNode!.insertBefore(favToggleContainer, categoryTabsContainer);

    const favToggle = document.getElementById('favorites-filter-toggle') as HTMLInputElement;
    favToggle.addEventListener('change', () => {
        showFavoritesOnly = favToggle.checked;
        filterTree();
    });

    celestialSelectorMenu.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;

        const groupHeader = target.closest('.list-group-header');
        if (currentView === 'type' && groupHeader) {
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

        if (currentView === 'hierarchy' && target.classList.contains('chevron')) {
            node.expanded = !node.expanded;
            updateDomVisibility();
        } else {
            onSelectCallback(node.id);
        }
    });

    const searchInput = document.getElementById('selector-search-input') as HTMLInputElement;
    searchInput.addEventListener('input', debounce(() => filterTree(), 300));

    const categories: (CelestialBodyType | 'all')[] = ['all', 'star', 'planet', 'moon'];

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
            categoryTabsContainer.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            filterTree();
        });
        categoryTabsContainer.appendChild(tab);
    });

    const viewRadios = document.querySelectorAll<HTMLInputElement>('input[name="selector-view"]');
    viewRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            currentView = radio.value as ViewMode;
            render();
        });
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
