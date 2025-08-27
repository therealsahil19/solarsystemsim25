# Manual Testing Guide for Solar System Sim 25

## 1. Introduction

This document provides a manual testing script to ensure that all features of the Solar System Sim 25 application are working correctly. Please follow the steps for each test case and verify that the actual result matches the expected result.

## 2. Setup

Before you begin testing, you need to run the application locally.

1.  **Open a terminal** in the root directory of the project.
2.  Run the command `npm install` to ensure all dependencies are present. (Note: This step may not work in the agent's environment, but is required for a human tester).
3.  Run the command `npm start` to launch the local development server.
4.  Open the URL provided by the server (usually `http://localhost:5173` or similar) in a web browser.

## 3. Test Cases

---

### Test Area: Scene & Basic Navigation

| Test Case ID | Description                                     | Steps                                                                                                                              | Expected Result                                                                                                  |
| :----------- | :---------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| **SN-01**    | **Application Loads Successfully**              | 1. Complete the setup steps. <br> 2. Observe the browser window.                                                                   | The application loads without any visible errors. The 3D scene with a sun, planets, and a starry background is displayed. |
| **SN-02**    | **Basic Camera Controls**                       | 1. Left-click and drag the mouse. <br> 2. Right-click and drag the mouse. <br> 3. Use the mouse scroll wheel.                         | 1. The camera rotates around the current focus point (the Sun, by default). <br> 2. The camera pans across the scene. <br> 3. The camera zooms in and out. |

---

### Test Area: Celestial Body Selection

| Test Case ID | Description                                     | Steps                                                                                                                              | Expected Result                                                                                                  |
| :----------- | :---------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| **SEL-01**   | **Select Planet by Clicking**                   | 1. In the 3D scene, move the camera and click directly on the planet Mars.                                                         | The camera smoothly animates to focus on Mars. The Info Panel appears on the right, displaying information for Mars. |
| **SEL-02**   | **Select Planet from Dropdown**                 | 1. Click the "Select a Celestial Body" dropdown toggle. <br> 2. Click on "Jupiter" in the list.                                      | The camera smoothly animates to focus on Jupiter. The Info Panel appears, displaying information for Jupiter. The dropdown menu closes. |
| **SEL-03**   | **Select Moon from Dropdown**                   | 1. Click the dropdown toggle. <br> 2. Click the `>` symbol next to "Earth" to expand the moon list. <br> 3. Click on "Moon".         | The camera smoothly animates to focus on the Moon. The Info Panel appears, displaying information for the Moon. The dropdown menu closes. |
| **SEL-04**   | **Deselect by Clicking Empty Space**            | 1. Select any planet. <br> 2. Click on any empty part of the background.                                                           | The camera is freed (no longer follows the planet). The Info Panel becomes hidden. The "Free Camera" button becomes hidden. |
| **SEL-05**   | **Dropdown Closes on Outside Click**            | 1. Click the dropdown toggle to open the menu. <br> 2. Click anywhere outside of the dropdown menu area.                              | The dropdown menu closes.                                                                                        |

---

### Test Area: Information Panel

| Test Case ID | Description                                     | Steps                                                                                                                              | Expected Result                                                                                                  |
| :----------- | :---------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| **IP-01**    | **Verify Panel Data and Color**                 | 1. Select "Earth". <br> 2. Observe the Info Panel.                                                                                 | The panel displays the correct name, radius, distance, and period for Earth. The top border of the panel is blue. |
| **IP-02**    | **Drag Panel**                                  | 1. Select any planet to show the panel. <br> 2. Click and hold the header of the Info Panel. <br> 3. Drag it to a new position.       | The panel moves smoothly with the mouse cursor.                                                                  |
| **IP-03**    | **Resize Panel**                                | 1. Select any planet to show the panel. <br> 2. Click and hold the handle in the bottom-right corner. <br> 3. Drag to resize.        | The panel's width and height change smoothly with the mouse cursor.                                              |
| **IP-04**    | **Close Panel**                                 | 1. Select any planet to show the panel. <br> 2. Click the 'X' button in the top-right corner of the panel.                           | The Info Panel becomes hidden.                                                                                   |

---

### Test Area: Camera & Simulation Controls

| Test Case ID | Description                                     | Steps                                                                                                                              | Expected Result                                                                                                  |
| :----------- | :---------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| **CSC-01**   | **Free Camera Button**                          | 1. Select any planet. <br> 2. The "Free Camera" button appears. Click it. <br> 3. Try to rotate/pan/zoom the camera.                 | The camera is no longer locked to the planet and can be moved freely. The "Free Camera" button becomes hidden.     |
| **CSC-02**   | **Simulation Speed Slider**                     | 1. Move the speed slider at the top of the screen to the far right (fastest). <br> 2. Move the slider to the far left (slowest).      | 1. The planets orbit the sun noticeably faster. <br> 2. The planets orbit the sun noticeably slower.              |

---

### Test Area: Visual Features

| Test Case ID | Description                                     | Steps                                                                                                                              | Expected Result                                                                                                  |
| :----------- | :---------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| **VF-01**    | **Verify Asteroid Belt**                        | 1. Pan and zoom the camera to the region between Mars and Jupiter.                                                                 | A diffuse ring of small, rocky points representing the asteroid belt is visible.                                 |
| **VF-02**    | **Verify Oort Cloud**                           | 1. Zoom the camera all the way out.                                                                                                | A sparse, spherical shell of points representing the Oort cloud is visible at the far edges of the scene.        |
| **VF-03**    | **Verify Ring Systems**                         | 1. Select Saturn, Uranus, and Neptune one by one. <br> 2. Observe their rings closely.                                             | Each planet has a visible and visually distinct ring system, as described in the project's `README.md` file.     |
| **VF-04**    | **Verify Retrograde Orbit**                     | 1. Select Neptune. <br> 2. Observe the motion of its moon Triton compared to its other moons.                                      | Triton should orbit Neptune in the opposite direction to Proteus and Nereid.                                     |
