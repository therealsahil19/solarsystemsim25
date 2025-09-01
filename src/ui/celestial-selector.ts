import { CelestialBody } from '../data';
import { celestialSelectorMenu } from './dom';
import { buildTree, TreeNode } from './tree-view';
import Fuse from 'fuse.js';

let treeNodes: TreeNode[] = [];
let flatNodeMap = new Map<string, TreeNode>();
let fuse: Fuse<CelestialBody>;
let activeNodeId: string | null = null;

function renderNode(node: TreeNode): HTMLLIElement {
    const li = document.createElement('li');
    li.dataset.id = node.id;
    li.className = 'tree-node';
    li.style.paddingLeft = `${node.depth * 18}px`;
    li.setAttribute('role', 'treeitem');
    li.setAttribute('aria-expanded', String(node.children.length > 0 ? node.expanded : false));

    const content = document.createElement('div');
    content.className = 'tree-node-content';

    // Determine type and set tooltip and icon
    let type: 'Star' | 'Planet' | 'Moon';
    let iconContent: string;
    if (node.spec.parentId === null) {
        type = 'Star';
        iconContent = '⭐';
    } else if (node.spec.parentId === 'sun') {
        type = 'Planet';
        iconContent = '🪐';
    } else {
        type = 'Moon';
        iconContent = '🌕';
    }

    const distance = type === 'Planet' ? `${node.spec.semiMajorAxis.toFixed(2)} AU` : `${(node.spec.semiMajorAxisKm || 0).toLocaleString()} km`;
    const orbiting = node.spec.parentId || 'N/A';
    content.title = `Type: ${type}\nRadius: ${node.spec.radius.toLocaleString()} km\nOrbiting: ${orbiting}\nDistance: ${distance}`;

    const chevron = document.createElement('span');
    chevron.className = 'chevron';
    if (node.children.length > 0) {
        chevron.textContent = node.expanded ? '▼' : '▶';
    }
    content.appendChild(chevron);

    const icon = document.createElement('span');
    icon.className = 'node-icon';
    icon.textContent = iconContent;
    content.appendChild(icon);

    const name = document.createElement('span');
    name.className = 'node-name';
    name.textContent = node.name;
    content.appendChild(name);

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
}

function filterTree(query: string) {
    if (!query) {
        flatNodeMap.forEach(node => {
            node.visible = true;
            node.expanded = true;
        });
        updateDomVisibility();
        return;
    }

    const results = fuse.search(query);
    const visibleIds = new Set(results.map(r => r.item.id));

    flatNodeMap.forEach(node => node.visible = false);

    visibleIds.forEach(id => {
        let current = flatNodeMap.get(id);
        while(current) {
            current.visible = true;
            current.expanded = true;
            current = current.parent || undefined;
        }
    });

    updateDomVisibility();
}

function getVisibleNodes(): TreeNode[] {
    const visible: TreeNode[] = [];
    function traverse(nodes: TreeNode[]) {
        for (const node of nodes) {
            if (node.visible) {
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

export function createCelestialBodySelector(bodies: CelestialBody[], onSelect: (name: string) => void): void {
    treeNodes = buildTree(bodies);
    treeNodes.forEach(root => {
        function walk(node: TreeNode) {
            flatNodeMap.set(node.id, node);
            node.children.forEach(walk);
        }
        walk(root);
    });

    fuse = new Fuse(bodies, { keys: ['name'], threshold: 0.4 });

    celestialSelectorMenu.innerHTML = '';
    const ul = document.createElement('ul');
    ul.className = 'tree-root';
    ul.setAttribute('role', 'tree');
    treeNodes.forEach(node => ul.appendChild(renderNode(node)));
    celestialSelectorMenu.appendChild(ul);

    ul.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const nodeEl = target.closest('.tree-node');
        if (!nodeEl || !(nodeEl instanceof HTMLLIElement)) return;
        const nodeId = nodeEl.dataset.id!;
        const node = flatNodeMap.get(nodeId)!;

        if (target.classList.contains('chevron')) {
            node.expanded = !node.expanded;
            updateDomVisibility();
        } else {
            onSelect(node.name);
        }
    });

    const searchInput = document.getElementById('selector-search-input') as HTMLInputElement;
    searchInput.addEventListener('input', () => filterTree(searchInput.value));

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
                    const node = flatNodeMap.get(activeNodeId);
                    if (node) onSelect(node.name);
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
