import './styles/style.css';
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
import { setupKeyboardShortcuts } from './keyboard';
import { setupInteractions } from './interactions';
import simStore from './state/simStore';
import uiStore from './state/uiStore';
import { camera, controls } from './scene';
import { InfoPanelManager } from './components/info-panel-manager';

async function start() {
    if (import.meta.env.MODE === 'test') {
        await import('./e2e-hooks');
    }

    initScene(dom.canvas);

    const { celestialObjects, selectableObjects, bodyMap, sun, asteroidUniforms } = await createScene();
    const simulation = new Simulation(celestialObjects, bodyMap, sun, asteroidUniforms);
    const infoPanelManager = new InfoPanelManager();

    function onBodySelected(id: string) {
        simulation.onBodySelected(id, selectableObjects);
        const entry = bodyMap.get(id);
        if (entry) {
            infoPanelManager.updateContent({ data: entry.data, mesh: entry.mesh });
        }
    }

    createCelestialBodySelector(celestialBodyData, onBodySelected);

    function resetSimulation() {
        simStore.getState().setSimTime(0);
        if (sun) {
            simulation.simulation.focusTarget = sun;
        }
        simStore.getState().setSelectedBodyId('sun');
        camera.position.set(0, 150, 400);
        controls.target.set(0, 0, 0);
        simStore.getState().setPaused(false);
        onBodySelected('sun');
        dom.smallInfoCard.classList.add('hidden');
    }

    if (!sun) {
        throw new Error("Sun object was not initialized, cannot set up interactions.");
    }

    // Start simulation first so orbits are created by OrbitManager.init()
    simulation.start();

    // After orbits exist, wire interactions and keyboard
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

    // Simulation already started above

    const app = {
        // Back-compat: expose a store-like object for E2E helpers expecting app.store.getState()
        store: {
            getState: () => ({
                ...simStore.getState(),
                // UI slice values/actions exposed for tests
                distanceUnit: uiStore.getState().distanceUnit,
                setDistanceUnit: uiStore.getState().setDistanceUnit,
            })
        },
        simulation,
    } as any;
    if ((window as any).__e2eNotifyReady) {
        (window as any).__e2eNotifyReady(app);
    } else {
        (window as any).__APP_READY = true;
    }
}

window.addEventListener('DOMContentLoaded', start);
