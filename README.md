# Solar System Sim 25

[![CI](https://github.com/therealsahil19/solarsystemsim25/actions/workflows/ci.yml/badge.svg)](https://github.com/therealsahil19/solarsystemsim25/actions)
[![Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://therealsahil19.github.io/solarsystemsim25/)
[![Codecov](https://codecov.io/gh/therealsahil19/solarsystemsim25/branch/main/graph/badge.svg)](https://codecov.io/gh/therealsahil19/solarsystemsim25)
![type-coverage](https://img.shields.io/badge/type%20coverage-XX%25-brightgreen)

A 3D interactive solar system simulator built with JavaScript and Three.js. This project provides a dynamic visualization of our solar system, allowing users to explore the planets, their moons, and other celestial phenomena.

## Getting Started

To run the simulation locally, follow these steps:

1.  Clone the repository:
    ```sh
    git clone https://github.com/therealsahil19/solarsystemsim25.git
    cd solarsystemsim25
    ```
2.  Install the dependencies:
    ```sh
    npm install
    ```
3.  Start the development server:
    ```sh
    npm run dev
    ```
This will open the simulation in your default browser.

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
    *   **Realistic Planetary Rings:** Each of the four gas giants features a unique and detailed ring system:
        *   **Jupiter:** A faint, wispy, and dusty main ring with even fainter "gossamer" rings.
        *   **Saturn:** Its iconic, bright, and icy ring system with distinct A, B, and C bands, separated by the Cassini Division.
        *   **Uranus:** A system of narrow, dark, charcoal-gray rings.
        *   **Neptune:** Dim, patchy, and bluish-tinted rings, featuring bright, clumpy arcs in the outer Adams ring.
