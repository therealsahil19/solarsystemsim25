import { CelestialBody } from "../data";

export interface TreeNode {
  id: string;
  name: string;
  spec: CelestialBody;
  children: TreeNode[];
  parent?: TreeNode | null;
  depth: number;
  expanded: boolean;
  visible: boolean;
  element: HTMLLIElement | null;
}

export function buildTree(specs: CelestialBody[]): TreeNode[] {
  const map = new Map<string, TreeNode>();

  specs.forEach(s => {
    map.set(s.id, {
      id: s.id,
      name: s.name,
      spec: s,
      children: [],
      parent: null,
      depth: 0,
      expanded: true, // Start with everything expanded
      visible: true,
      element: null,
    });
  });

  const roots: TreeNode[] = [];
  map.forEach(node => {
    const pid = node.spec.parentId;
    if (pid && map.has(pid)) {
      const parent = map.get(pid)!;
      node.parent = parent;
      node.depth = parent.depth + 1;
      parent.children.push(node);
    } else {
      roots.push(node);
    }
  });

  return roots;
}

// The rendering will be handled directly in the celestial-selector.ts for better event handling
// and performance, so we don't need a separate renderTree function here.
