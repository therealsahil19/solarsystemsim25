import { describe, it, expect } from 'vitest';
import { buildTree } from './tree-view';
import { CelestialBody } from '../data';

const mockBodies: CelestialBody[] = [
    { id: 'sun', parentId: null, name: 'Sun', radius: 1, color: 0, semiMajorAxis: 0, orbitalPeriod: 0, eccentricity: 0 },
    { id: 'earth', parentId: 'sun', name: 'Earth', radius: 1, color: 0, semiMajorAxis: 1, orbitalPeriod: 365, eccentricity: 0.017 },
    { id: 'moon', parentId: 'earth', name: 'Moon', radius: 1, color: 0, semiMajorAxis: 0, orbitalPeriod: 27, eccentricity: 0.05 },
    { id: 'mars', parentId: 'sun', name: 'Mars', radius: 1, color: 0, semiMajorAxis: 1.5, orbitalPeriod: 687, eccentricity: 0.093 },
];

describe('buildTree', () => {
    it('should build a correct tree structure from a flat list', () => {
        const tree = buildTree(mockBodies);

        // Should have one root node (the Sun)
        expect(tree).toHaveLength(1);
        const sun = tree[0];
        expect(sun.id).toBe('sun');
        expect(sun.depth).toBe(0);

        // Sun should have two children (Earth and Mars)
        expect(sun.children).toHaveLength(2);
        const earth = sun.children.find(c => c.id === 'earth');
        const mars = sun.children.find(c => c.id === 'mars');

        expect(earth).toBeDefined();
        expect(mars).toBeDefined();

        // Check Earth's properties
        expect(earth?.parent?.id).toBe('sun');
        expect(earth?.depth).toBe(1);
        expect(earth?.children).toHaveLength(1);

        // Check Moon's properties
        const moon = earth?.children[0];
        expect(moon?.id).toBe('moon');
        expect(moon?.parent?.id).toBe('earth');
        expect(moon?.depth).toBe(2);
        expect(moon?.children).toHaveLength(0);

        // Check Mars' properties
        expect(mars?.parent?.id).toBe('sun');
        expect(mars?.depth).toBe(1);
        expect(mars?.children).toHaveLength(0);
    });

    it('should handle an empty array', () => {
        const tree = buildTree([]);
        expect(tree).toHaveLength(0);
    });
});
