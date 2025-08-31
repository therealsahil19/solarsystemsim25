import * as THREE from 'three';
import { CelestialBody } from '../data';
import { celestialSelector, celestialSelectorMenu, celestialSelectorToggle } from './dom';

export function createCelestialBodySelector(planetData: CelestialBody[], onSelect: (name: string) => void): void {
    const list = document.createElement('ul');
    list.className = 'dropdown-menu-list';

    planetData.forEach(body => {
        const listItem = document.createElement('li');

        listItem.style.display = 'flex';
        listItem.style.alignItems = 'center';
        listItem.style.gap = '10px';

        const colorCircle = document.createElement('div');
        colorCircle.style.width = '15px';
        colorCircle.style.height = '15px';
        colorCircle.style.borderRadius = '50%';
        colorCircle.style.backgroundColor = `#${new THREE.Color(body.color).getHexString()}`;
        listItem.appendChild(colorCircle);

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
        if (!celestialSelector.contains(event.target as Node)) {
            celestialSelectorMenu.classList.add('hidden');
        }
    });
}
