import * as THREE from 'three';
import { initScene } from './scene';
import { createScene } from './app/scene';
import * as dom from './components/dom';
import { Simulation } from './app/simulation';
import { initShortcutsPanel } from './components/shortcuts-panel';
import { initPresetsPanel } from './components/presets-panel';
import { initMainPanel } from './components/main-panel';
import { initTopBar } from './components/top-bar';
import { setupQuickAccessToolbar } from './components/quick-access-toolbar';
import { initContextualHud } from './components/contextual-hud';
import { initOnboardingTour } from './components/onboarding-tour';
import { LayoutManager } from './components/layout-manager';
import { createCelestialBodySelector } from './components/celestial-selector';
import { celestialBodyData } from './data';
import { InfoPanelManager } from './components/info-panel-manager';
import { setupKeyboardShortcuts } from './keyboard';
import { setupInteractions } from './interactions';
import store from './state/store';
import { camera, controls } from './scene';

async function start() {
    if (import.meta.env.MODE === 'test') {
        await import('./e2e-hooks');
    }

    initScene(dom.canvas);

    const { celestialObjects, selectableObjects, bodyMap, sun, asteroidUniforms } = createScene();
    const simulation = new Simulation(celestialObjects, bodyMap, sun, asteroidUniforms);

    const infoPanelManager = new InfoPanelManager();

    function onBodySelected(id: string) {
        simulation.onBodySelected(id, selectableObjects);
    }

    createCelestialBodySelector(celestialBodyData, onBodySelected);

    function resetSimulation() {
        store.getState().setSimTime(0);
        if (sun) {
            simulation.simulation.focusTarget = sun;
        }
        store.getState().setSelectedBodyId('Sun');
        camera.position.set(0, 150, 400);
        controls.target.set(0, 0, 0);
        store.getState().setPaused(false);
        onBodySelected('Sun');
        dom.smallInfoCard.classList.add('hidden');
    }

    if (!sun) {
        throw new Error("Sun object was not initialized, cannot set up interactions.");
    }
    const allOrbits = celestialObjects.map((o: any) => o.orbit).filter(o => o) as THREE.Line[];
    setupInteractions(camera, selectableObjects, sun, simulation.simulation, onBodySelected, controls, resetSimulation, allOrbits);
    setupKeyboardShortcuts(simulation.simulation, [], onBodySelected, camera, controls);

    initShortcutsPanel();
    initPresetsPanel();
    initMainPanel();
    initTopBar();
    setupQuickAccessToolbar();
    initContextualHud();
    initOnboardingTour();

    new LayoutManager().init();

    simulation.start();

    const app = {
        store: store,
        // renderer: {
        //     trails: trailManager
        // },
    };
    if ((window as any).__e2eNotifyReady) {
        (window as any).__e2eNotifyReady(app);
    } else {
        (window as any).__APP_READY = true;
    }
}

window.addEventListener('DOMContentLoaded', start);
