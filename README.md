# Solar System Sim 25

[![CI](https://github.com/therealsahil19/solarsystemsim25/actions/workflows/ci.yml/badge.svg)](https://github.com/therealsahil19/solarsystemsim25/actions)
[![Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://therealsahil19.github.io/solarsystemsim25/)
[![Codecov](https://codecov.io/gh/therealsahil19/solarsystemsim25/branch/main/graph/badge.svg)](https://codecov.io/gh/therealsahil19/solarsystemsim25)
![type-coverage](https://img.shields.io/badge/type%20coverage-XX%25-brightgreen)

A 3D interactive solar system simulator built with TypeScript and Three.js. This project provides a dynamic visualization of our solar system, allowing users to explore the planets, their moons, and other celestial phenomena.

## Getting Started

To run the simulation locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/therealsahil19/solarsystemsim25.git
    cd solarsystemsim25
    ```
2.  **Install the dependencies:**
    ```sh
    npm install
    ```
3.  **Start the development server:**
    ```sh
    npm run dev
    ```
This will open the simulation in your default browser at `http://localhost:5173`.

## Project Architecture

The simulation is built with a modular architecture to separate concerns. Here's a high-level overview:

-   **Rendering Engine**: Core 3D rendering is handled by **Three.js**. The scene setup, camera, lighting, and renderer are initialized in the `src/scene/` directory.
-   **State Management**: Global application state (e.g., selected body, time scale, UI settings) is managed by **Zustand**. This provides a simple, centralized store for state that can be accessed and updated from any part of the application. See `src/state/store.ts`.
-   **Physics Engine**: Orbital calculations are offloaded to a **Web Worker** (`src/physics.worker.ts`) to prevent blocking the main UI thread. The main thread sends the current simulation time to the worker, and the worker calculates and sends back the new positions of all celestial bodies.
-   **UI Components**: The user interface is built with standard HTML, CSS, and TypeScript. A custom `PanelManager` (`src/ui/panel-manager.ts`) provides a windowing system for draggable, resizable, and pinnable panels.

## Code Structure

The source code is located in the `src/` directory and is organized as follows:

-   `main.ts`: The main entry point of the application. It initializes all modules and starts the animation loop.
-   `data.ts`: Contains all the static data for celestial bodies, including their physical properties, orbital parameters, and educational content.
-   `scene/`: Manages the Three.js scene, camera, renderer, and controls.
-   `state/`: Contains the Zustand store, state definitions, and preset/shortcut management.
-   `bodies/`: Code for creating the 3D models of celestial bodies, including complex ring systems.
-   `orbits/`: Manages the creation and rendering of both static orbit lines and dynamic trails.
-   `ui/`: Contains all UI-related code, including the panel manager, celestial body selector, info panels, and various UI components.
-   `utils/`: A collection of utility functions for tasks like scaling, unit conversion, and asset loading.
-   `workers/`: Contains the physics web worker for off-thread calculations.

## Available Scripts

In the project directory, you can run the following scripts:

-   `npm run dev` or `npm start`: Runs the app in development mode with hot-reloading.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run preview`: Serves the production build locally to preview it.
-   `npm test`: Runs the test suite using Vitest.
-   `npm run lint`: Lints the codebase using ESLint and Prettier, automatically fixing issues where possible.
-   `npm run typecheck`: Runs the TypeScript compiler to check for type errors without emitting files.

## Features

### Core Simulation
*   **3D Solar System Visualization:** Renders the sun, planets, and major moons in a 3D space using Three.js, with realistic textures and lighting.
*   **Dynamic Orbital Simulation:** Planets and moons orbit their parent bodies based on real-world orbital periods.
*   **Adjustable Simulation Speed:** The simulation speed is adjustable from 0.5x up to 128x, with a new slider design that includes markings for each speed level.

### Camera and Interaction
*   **Advanced Camera Controls:**
    *   **Focus Mode:** Click on any celestial body in the 3D view or select it from the menu to focus the camera on it.
    *   **Rotation:** When focused on an object, you can freely rotate the camera around it to view it from any angle.
    *   **Zoom Limits:** The camera has a maximum zoom-in based on the object's size and a maximum zoom-out that keeps the Oort cloud in view.
    *   **Solar System View:** A "Solar System View" button allows you to detach the camera from any focused object and explore the entire system freely.
    *   **Smooth Transitions:** The camera performs smooth, animated transitions when selecting a new object.
*   **Celestial Body Selector:** A hierarchical dropdown menu allows for easy navigation and selection of any celestial body, including planets and their moons.

### UI and Information
*   **Interactive Information Panel:**
    *   Displays key data (radius, distance from the sun, orbital period, etc.) for any selected celestial body.
    *   The panel is draggable, resizable, and closable for a customizable viewing experience.
    *   Features a dynamic colored border that matches the color of the selected celestial body.
    *   Includes tooltips to explain astronomical terms.

### Astronomical Scenery
*   **Rich Starry Background:** The scene includes a vast, starry background with 10,000 stars to create an immersive environment.
*   **Asteroid Belt:** A procedurally generated asteroid belt is rendered between the orbits of Mars and Jupiter.
*   **Oort Cloud:** A representation of the Oort cloud is included at the edge of the solar system, defining the boundary of the simulation.
*   **Detailed Planetary Systems:**
    *   **Earth's Clouds:** Earth is rendered with a dynamic, transparent cloud layer.
    *   **Realistic Planetary Rings:** Each of the four gas giants features a unique and detailed ring system.

## Contributing

Contributions are welcome! Please follow these guidelines:

1.  **Fork the repository** and create a new branch for your feature or bug fix.
2.  **Follow the existing code style.** This project uses Prettier for automatic formatting and ESLint for linting.
3.  **Document your code.** All public functions, classes, and types should have JSDoc comments explaining their purpose, parameters, and return values.
4.  **Submit a pull request** with a clear description of your changes.
