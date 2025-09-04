// src/e2e-hooks.ts
/**
 * This module provides lightweight helpers for Playwright End-to-End (E2E) tests.
 * It is only loaded when the application is in 'test' mode, as controlled by an
 * import statement in `src/main.ts`. It attaches helper functions to the `window`
 * object, allowing test scripts to interact with the application's internal state.
 */

import { PanelManager } from './ui/panel-manager';

// --- App Readiness ---
// This system provides a signal for Playwright to wait for, ensuring the app is fully initialized.

/** A type alias for the main application object, using `any` for flexibility in testing. @private */
type AppLike = any;

/** A queue for callbacks to be executed once the application is ready. @private */
const _readyCallbacks: Array<(app?: AppLike) => void> = [];

// Initialize flags on the window object for E2E test communication.
(window as any).__APP_READY = false;
(window as any).__APP_INSTANCE = null;

/**
 * A global function attached to `window` that allows test scripts to queue callbacks
 * which will be executed once the app is fully initialized. If the app is already
 * ready, the callback is executed immediately.
 * @param cb The callback function to execute. It receives the app instance as an argument.
 * @internal
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
 * Attaches the main E2E helper object (`__E2E__`) to the `window` object.
 * This object contains functions that test scripts can call to manipulate the app's state.
 * @param app The main application instance.
 * @private
 */
function attachE2EHelpers(app?: AppLike) {
  if (!app) {
    console.warn('E2E helpers attached without an app instance.');
  }

  /**
   * The main E2E helper object exposed on the `window`.
   * @internal
   */
  (window as any).__E2E__ = {
    /**
     * Opens a UI panel by a simplified ID.
     * @param panelId The alias for the panel to open.
     */
    openPanel: (panelId: 'info' | 'visuals' | 'settings' | 'edu' | 'celestialSelector' | 'presets') => {
      // Map E2E aliases to the actual IDs used when creating the panels.
      const panelMap = {
          info: 'infoPanel',
          visuals: 'visuals-panel',
          settings: 'settings-panel',
          edu: 'infoPanel', // 'edu' is an alias for the info panel
          celestialSelector: 'celestialSelector',
          presets: 'presets',
      };
      const effectiveId = panelMap[panelId] || panelId;

      const controller = PanelManager.getController(effectiveId);
      if (controller) {
        controller.show(); // Ensures it's visible and brought to the front
      } else {
        console.error(`E2E: Panel controller with ID "${effectiveId}" not found.`);
      }
    },

    /**
     * Applies a named layout preset.
     * @deprecated This will cause a page reload and is not ideal for testing. Driving the UI directly is preferred.
     * @param name The name of the preset to apply.
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
     * Sets the distance unit used for displaying distances in the UI.
     * @param unit The distance unit to set.
     */
    setUnits: (unit: 'au' | 'km' | 'earthR') => {
      app.store.getState().setDistanceUnit(unit);
    },

    /**
     * Toggles the visibility of orbital trails by updating the central state.
     * @param on `true` to enable trails, `false` to disable them.
     */
    toggleTrails: (on: boolean) => {
      app.store.getState().setTrailsEnabled(on);
    },
  };
}

/**
 * This function is called by the main application bootstrap (`main.ts`) when the app
 * is fully initialized and interactive. It signals that the app is ready and executes
 * any pending callbacks.
 * @param app The main application instance.
 * @internal
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
