# AGENTS.md: Solar System Sim 25 Codebase Overview

This file describes the key agents (modules and tools) in the Solar System Sim 25 project, a 3D interactive visualization of the solar system using Three.js. These components handle simulation physics, rendering, UI interactions, and state management. Jules can use this to understand how to modify or extend the sim (e.g., adding new celestial bodies or tweaking orbits).

## 1. Physics Worker (Simulation Engine)
- **What it does**: Offloads orbital calculations to a Web Worker to keep the main UI thread responsive. Computes positions, velocities, and perturbations for planets, moons, and other bodies based on real astronomical data. Supports time acceleration and pausing.
- **How to interact**: 
  - Entry point: `src/physics.worker.ts` (Web Worker script).
  - Initialize via `new Worker(new URL('./physics.worker.ts', import.meta.url))` in `src/main.ts`.
  - Send messages with `postMessage({ type: 'UPDATE_TIME', delta: 3600 })` to advance simulation time.
  - Listen for updates with `onmessage = (e) => { if (e.data.type === 'POSITIONS') { updateBodies(e.data.positions); } }`.
- **Input/Output**:
  - Input: JSON-like objects with `type` (e.g., 'UPDATE_TIME', 'PAUSE'), `delta` (seconds, number), and optional `bodies` (array of celestial data from `src/data.ts`).
  - Output: `{ type: 'POSITIONS', positions: [{ id: 'earth', x: 1.5, y: 0, z: 0.1 }, ...] }` – 3D coordinates in AU units.
- **Dependencies/Interactions**: Relies on `src/data.ts` for initial body data (masses, semi-major axes). Updates `simStore` in `src/state/simStore.ts` via main thread. Integrates with `OrbitManager` for trail rendering.

## 2. Scene Renderer (Three.js Handler)
- **What it does**: Sets up and manages the 3D scene, camera, lights, and rendering loop. Handles real-time updates to celestial body positions and orbits.
- **How to interact**:
  - Entry point: `src/scene/sceneManager.ts`.
  - Initialize: `const scene = new SceneManager(canvas); scene.init();`.
  - Update: Call `scene.updatePositions(positions)` after receiving from Physics Worker; `scene.render()` in the RAF loop.
  - Controls: OrbitControls for user panning/zooming; auto-follow mode via `scene.followBody('earth')`.
- **Input/Output**:
  - Input: Array of position objects `{ id: string, x: number, y: number, z: number }`; camera params like `fov: 75`.
  - Output: None directly (mutates DOM via Three.js renderer); emits events like `onBodyClick(bodyId)` for UI panels.
- **Dependencies/Interactions**: Uses `src/bodies/` for loading 3D models (e.g., `PlanetFactory.create('jupiter')`). Syncs with `uiStore` for visibility toggles. Draws orbits from `OrbitManager`.

## 3. State Managers (Zustand Stores)
- **What it does**: Manages global app state for simulation params (time speed, selected body) and UI (panel visibility, theme).
- **How to interact**:
  - Entry points: `src/state/simStore.ts` (simulation state) and `src/state/uiStore.ts` (UI state).
  - Use: Import `useSimStore` or `useUIStore` in components; e.g., `const timeSpeed = useSimStore((state) => state.timeSpeed);`.
  - Actions: `simStore.setTimeSpeed(10)` or `uiStore.togglePanel('info')`.
- **Input/Output**:
  - Input: Actions like `{ type: 'SET_TIME_SPEED', value: number }`.
  - Output: Reactive state objects, e.g., `{ currentTime: 2025-01-01T00:00:00Z, selectedBody: 'mars', paused: false }`.
- **Dependencies/Interactions**: Listens to Physics Worker for position updates; triggers UI re-renders in `src/ui/`. Persists via localStorage for session resume.

## 4. UI Panel Manager
- **What it does**: Creates draggable, resizable info panels for body details, controls, and stats. Supports pinning and theming.
- **How to interact**:
  - Entry point: `src/ui/panel-manager.ts`.
  - Initialize: `const pm = new PanelManager(); pm.addPanel('info', { content: bodyInfoHTML, position: { x: 10, y: 10 } })`.
  - Update: `pm.updatePanel('info', { title: 'Earth Details', data: { distance: 1 AU } })`.
- **Input/Output**:
  - Input: Panel config objects `{ id: string, content: HTMLElement | string, draggable: boolean }`.
  - Output: DOM mutations; events like `onPanelClose(id)` or `onDragEnd(position)`.
- **Dependencies/Interactions**: Pulls data from `simStore`; integrates with Three.js raycasting for body selection. Uses CSS for styling.

## 5. Orbit and Trail Manager
- **What it does**: Draws orbital paths and dynamic particle trails for bodies, with options for fading and color-coding.
- **How to interact**:
  - Entry points: `src/orbits/orbitManager.ts` and `src/orbits/trailManager.ts`.
  - Initialize: `const om = new OrbitManager(scene); om.drawOrbit('earth', { radius: 1, color: 0x00ff00 });`.
  - Update: `trailManager.addPoint('mars', { x: 1.5, y: 0, z: 0 }); trailManager.fadeOldPoints(1000);`.
- **Input/Output**:
  - Input: Body ID and params like `{ semiMajor: number, eccentricity: number }` from `data.ts`.
  - Output: Three.js Line or BufferGeometry objects added to scene.
- **Dependencies/Interactions**: Uses positions from Physics Worker; toggled via `uiStore`.

## General Notes
- **Running the Sim**: `npm run dev` starts Vite server at localhost:5173. Physics runs at 60fps; scale for performance.
- **Extending**: To add a new body, update `data.ts`, register in Physics Worker, and create model in `bodies/`.
- **Testing**: Use Vitest (`npm test`) for unit tests on utils and stores.
- **Conventions**: All positions in AU; time in Julian days. Errors logged to console; use ESLint for code style.

This overview helps Jules propose changes like "enhance Jupiter's rings" by referencing these modules.
