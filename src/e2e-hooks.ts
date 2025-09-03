// src/e2e-hooks.ts
// Lightweight helpers for Playwright e2e tests.
// Gate: only loaded in test mode via import in src/main.ts

import { PanelManager } from './ui/panel-manager';

// --- App Readiness ---
// This provides a signal for Playwright to wait for, ensuring the app is fully initialized.

type AppLike = any; // Using 'any' as the app structure is complex and not formally typed.

const _readyCallbacks: Array<(app?: AppLike) => void> = [];

// Initialize flags on the window object.
(window as any).__APP_READY = false;
(window as any).__APP_INSTANCE = null;

/**
 * Allows queuing of callbacks that will be executed once the app is ready.
 * If the app is already ready, the callback is executed immediately.
 */
(window as any).__onAppReady = (cb: (app?: AppLike) => void) => {
  if ((window as any).__APP_READY) {
    try {
      cb((window as any).__APP_INSTANCE);
    } catch (e) {
      console.error('Error in __onAppReady callback:', e);
    }
  } else {
    _readyCallbacks.push(cb);
  }
};

/**
 * Attaches the main E2E helper object to the window.
 * This is called once the app is ready.
 */
function attachE2EHelpers(app?: AppLike) {
  if (!app) {
    console.warn('E2E helpers attached without an app instance.');
  }

  // Expose the E2E helper object.
  (window as any).__E2E__ = {
    /**
     * Opens a UI panel by its ID.
     * These are the floating panels for settings, visuals, etc.
     */
    openPanel: (panelId: 'info' | 'visuals' | 'settings' | 'edu') => {
      // The 'edu' section is inside the main info panel.
      const effectiveId = panelId === 'edu' ? 'infoPanel' : `${panelId}-panel`;
      const panel = document.getElementById(effectiveId);
      if (panel) {
        panel.classList.remove('hidden');
        // Instantiating a PanelManager for the element will call `bringToFront()` in its constructor,
        // ensuring it has the highest z-index and is not obscured.
        new PanelManager(panel);
      } else {
        console.error(`E2E: Panel with ID "${effectiveId}" not found.`);
      }
    },

    /**
     * Applies a named layout preset.
     * NOTE: This will cause a page reload, as it's how the app currently handles presets.
     * Tests using this should expect a reload. The current tests drive the UI directly, which is preferred.
     */
    setPreset: (name: string) => {
      const preset = app.presets.getAllPresets().find((p: any) => p.name === name);
      if (preset) {
        app.presets.applyPreset(preset);
      } else {
        console.error(`E2E: Preset "${name}" not found.`);
      }
    },

    /**
     * Sets the distance unit used for display.
     */
    setUnits: (unit: 'au' | 'km' | 'earthR') => {
      app.store.getState().setDistanceUnit(unit);
    },

    /**
     * Toggles the visibility of orbital trails by updating the central state.
     * The TrailManager will pick up this change on its next update cycle.
     */
    toggleTrails: (on: boolean) => {
      app.store.getState().setTrailsEnabled(on);
    },
  };
}

/**
 * This function is called by the main application bootstrap (`main.ts`)
 * when the app is fully initialized and interactive.
 */
(window as any).__e2eNotifyReady = (app?: AppLike) => {
  (window as any).__APP_INSTANCE = app || null;
  attachE2EHelpers(app);

  // Set the ready flag to true.
  (window as any).__APP_READY = true;

  // Execute any queued callbacks.
  while (_readyCallbacks.length > 0) {
    const cb = _readyCallbacks.shift();
    if (cb) {
      try {
        cb(app);
      } catch (e) {
        console.error('Error executing ready callback:', e);
      }
    }
  }
};

// Export an empty object to satisfy TypeScript's module requirement.
export {};
