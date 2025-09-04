import { CelestialBody } from "../data";

/**
 * Defines the type of a celestial body, used for styling and identification in the UI.
 */
export type CelestialBodyType = 'star' | 'planet' | 'moon';

/**
 * Represents a single node in the hierarchical tree of celestial bodies.
 * It contains the original data spec, links to parent and children, and state for the UI.
 */
export interface TreeNode {
  /** The unique ID of the celestial body. */
  id: string;
  /** The name of the celestial body. */
  name: string;
  /** The raw data specification for the celestial body. */
  spec: CelestialBody;
  /** An array of child nodes (e.g., moons of a planet). */
  children: TreeNode[];
  /** A reference to the parent node, or null if it's a root node. */
  parent?: TreeNode | null;
  /** The depth of the node in the tree (0 for roots). */
  depth: number;
  /** Whether the node is currently expanded in the UI to show its children. */
  expanded: boolean;
  /** Whether the node is currently visible (used for filtering/search). */
  visible: boolean;
  /** A reference to the HTMLLIElement that represents this node in the DOM. */
  element: HTMLLIElement | null;
  /** The type of the celestial body. */
  type: CelestialBodyType;
}

/**
 * Builds a hierarchical tree structure from a flat array of celestial body specifications.
 * It determines parent-child relationships based on the `parentId` property.
 * @param specs A flat array of `CelestialBody` data objects.
 * @returns An array of `TreeNode` objects representing the roots of the tree (e.g., the Sun).
 */
export function buildTree(specs: CelestialBody[]): TreeNode[] {
  const map = new Map<string, TreeNode>();

  // First pass: create a TreeNode for each spec and put it in a map.
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

  // Second pass: link nodes together into a tree structure.
  const roots: TreeNode[] = [];
  map.forEach(node => {
    const pid = node.spec.parentId;
    if (pid && map.has(pid)) {
      // This is a child node.
      const parent = map.get(pid)!;
      node.parent = parent;
      node.depth = parent.depth + 1;
      parent.children.push(node);
    } else {
      // This is a root node.
      roots.push(node);
    }
  });

  return roots;
}

// The rendering of the tree is handled directly in `celestial-selector.ts`
// for better event handling and integration with the component's state.
