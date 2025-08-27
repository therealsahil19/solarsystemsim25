export const infoPanel = document.getElementById('info-panel');
export const infoName = document.getElementById('info-name');
export const infoRadius = document.getElementById('info-radius');
export const infoDistance = document.getElementById('info-distance');
export const infoPeriod = document.getElementById('info-period');
export const speedSlider = document.getElementById('speed-slider');
export const canvas = document.querySelector('#bg');

export const selectionPanel = document.getElementById('selection-panel');
export const celestialSelector = document.getElementById('celestial-selector');
export const celestialSelectorToggle = document.getElementById('celestial-selector-toggle');
export const celestialSelectorMenu = document.getElementById('celestial-selector-menu');
export const freeCameraButton = document.getElementById('free-camera-btn');

export function createCelestialBodySelector(planetData, onSelect) {
    const list = document.createElement('ul');
    list.className = 'dropdown-menu-list';

    planetData.forEach(body => {
        const listItem = document.createElement('li');

        const bodyName = document.createElement('div');
        bodyName.textContent = body.name;
        listItem.appendChild(bodyName);

        listItem.dataset.name = body.name;

        if (body.moons && body.moons.length > 0) {
            listItem.classList.add('has-moons');
            const toggle = document.createElement('span');
            toggle.textContent = '>';
            listItem.prepend(toggle);

            const moonList = document.createElement('ul');
            moonList.className = 'moon-list hidden';
            body.moons.forEach(moon => {
                const moonListItem = document.createElement('li');
                moonListItem.textContent = moon.name;
                moonListItem.dataset.name = moon.name;
                moonListItem.addEventListener('click', (e) => {
                    e.stopPropagation();
                    onSelect(moon.name);
                    celestialSelectorMenu.classList.add('hidden');
                });
                moonList.appendChild(moonListItem);
            });
            listItem.appendChild(moonList);

            listItem.addEventListener('click', () => {
                moonList.classList.toggle('hidden');
            });

            bodyName.addEventListener('click', (e) => {
                e.stopPropagation();
                onSelect(body.name);
            });
        } else {
            bodyName.addEventListener('click', () => {
                onSelect(body.name);
                celestialSelectorMenu.classList.add('hidden');
            });
        }

        list.appendChild(listItem);
    });

    celestialSelectorMenu.appendChild(list);

    celestialSelectorToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        celestialSelectorMenu.classList.toggle('hidden');
    });

    // Hide dropdown if clicked outside
    window.addEventListener('click', (event) => {
        if (!celestialSelector.contains(event.target)) {
            celestialSelectorMenu.classList.add('hidden');
        }
    });
}
