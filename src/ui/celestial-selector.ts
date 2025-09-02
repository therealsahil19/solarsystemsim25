import { CelestialBody } from '../data';
import { celestialSelectorMenu } from './dom';
import { buildTree, CelestialBodyType, TreeNode } from './tree-view';
import Fuse, { FuseResult } from 'fuse.js';
feature/interactivity-visual-feedback
import { store } from '../state/store';
=======
import { PanelManager } from './panel-manager';
main

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

    if (!query && selectedType === 'all') {
        allNodes.forEach(node => {
            node.visible = true;
            if (node.element) node.element.style.display = '';
        });

        if (currentView === 'hierarchy') {
            allNodes.forEach(n => n.expanded = false);
            updateDomVisibility();
        } else {
            document.querySelectorAll('.list-group').forEach(el => (el as HTMLElement).style.display = '');
            document.querySelectorAll('.list-group-children').forEach(el => (el as HTMLElement).style.display = 'block');
            document.querySelectorAll('.list-group-header .chevron').forEach(el => el.textContent = '▼');
        }
        return;
    }

    const searchClauses: ({ [key: string]: string })[] = [];
    if (query) {
        searchClauses.push({ name: query });
    }
    if (selectedType !== 'all') {
        searchClauses.push({ type: selectedType });
    }

    const results = searchClauses.length > 0
        ? fuse.search({ $and: searchClauses })
        : allNodes.map(node => ({ item: node.spec as FuseDataItem, score: 1 }));
    const visibleIds = new Set(results.map(r => r.item.id));

    if (currentView === 'hierarchy') {
        allNodes.forEach(node => node.visible = false);
        visibleIds.forEach(id => {
            let current = flatNodeMap.get(id);
            while(current) {
                current.visible = true;
                current.expanded = true;
                current = current.parent || undefined;
            }
        });
        updateDomVisibility();
    } else {
        allNodes.forEach(node => {
            if (node.element) {
                node.element.style.display = visibleIds.has(node.id) ? '' : 'none';
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

feature/interactivity-visual-feedback
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
=======
function debounce(func: (...args: any[]) => void, delay: number) {
    let timeoutId: number;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            func(...args);
        }, delay);
    };
main
}

export function createCelestialBodySelector(bodies: CelestialBody[], onSelect: (id:string) => void): void {
    const modalContainer = document.getElementById('celestial-selector-modal')!;
    const modal = modalContainer.querySelector('.modal-content') as HTMLElement;
    const openBtn = document.getElementById('open-celestial-selector-btn')!;
    const closeBtn = document.getElementById('close-celestial-selector-btn')!;
    const minimizeBtn = modal.querySelector('.minimize-btn') as HTMLElement;
    const header = modal.querySelector('.panel-header') as HTMLElement;

    const panelManager = new PanelManager(modal);
    panelManager.makeDraggable(header);
    minimizeBtn.addEventListener('click', () => panelManager.minimize());
    panelManager.makeResizable();

    const openModal = () => {
        modalContainer.classList.remove('hidden');
        PanelManager.showBackdrop();
    };

    const closeModal = () => {
        modalContainer.classList.add('hidden');
        PanelManager.hideBackdrop();
    };

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            closeModal();
        }
    });

    onSelectCallback = (id) => {
        onSelect(id);
        closeModal();
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

    const categoryTabsContainer = document.getElementById('category-tabs')!;
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
