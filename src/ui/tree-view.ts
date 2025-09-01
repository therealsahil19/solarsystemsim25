import { CelestialBody } from "../data";

export type CelestialBodyType = 'star' | 'planet' | 'moon';

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
  type: CelestialBodyType;
}

export function buildTree(specs: CelestialBody[]): TreeNode[] {
  const map = new Map<string, TreeNode>();

  specs.forEach(s => {
    let type: CelestialBodyType;
    if (!s.parentId) {
      type = 'star';
    } else if (s.parentId === 'sun') {
      type = 'planet';
    } else {
      type = 'moon';
    }

    map.set(s.id, {
      id: s.id,
      name: s.name,
      spec: s,
      children: [],
      parent: null,
      depth: 0,
      expanded: false, // Default to collapsed
      visible: true,
      element: null,
      type: type,
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
