import * as THREE from 'three';

export function setupInteractions(camera, selectableObjects, sun, domElements, simulation) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    window.addEventListener('click', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(selectableObjects);

        if (intersects.length > 0) {
            const clicked = intersects[0].object;
            simulation.selectedObject = clicked;
            simulation.focusTarget = clicked;
            updateInfoPanel(clicked.userData);
        } else {
            simulation.selectedObject = null;
            simulation.focusTarget = sun; // Focus on sun if nothing is clicked
            domElements.infoPanel.classList.add('hidden');
        }
    });

    domElements.speedSlider.addEventListener('input', (event) => {
        simulation.speed = Number(event.target.value);
    });

    function updateInfoPanel(data) {
        domElements.infoName.textContent = data.name;
        domElements.infoRadius.textContent = `${data.data.radius.toLocaleString()} km`;
        domElements.infoDistance.textContent = data.type === 'moon'
            ? `${Math.round(data.data.semiMajorAxisKm).toLocaleString()} km (from ${data.parent.name})`
            : `${data.data.semiMajorAxis} AU`;
        domElements.infoPeriod.textContent = `${data.data.orbitalPeriod} days`;
        domElements.infoPanel.classList.remove('hidden');
    }

    // Initial state
    simulation.focusTarget = sun;
}
