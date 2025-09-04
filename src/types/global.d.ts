declare global {
  /**
   * Extends the global namespace to include a declaration for Shepherd.js,
   * a library for creating guided tours.
   */
  namespace Shepherd {
    /**
     * A basic declaration for the Shepherd Tour class. This provides minimal
     * type information to TypeScript without needing the full type definitions.
     */
    class Tour {}
  }

  /**
   * Extends the global Window interface to include custom properties used
   * throughout the application.
   */
  interface Window {
    /**
     * A handle to the currently active camera animation (tween).
     * This allows the animation to be interrupted or stopped from anywhere in the code.
     * @internal
     */
    _activeCameraTween?: { stop?: () => void } | null;

    /**
     * A global object used as a hook for end-to-end (E2E) testing frameworks.
     * It provides a way for test scripts to interact with the application's
     * internal state and objects.
     * @internal
     */
    __E2E__?: {
      /** A reference to the main application object or key modules. */
      app?: any;
      /** The ID of the last celestial body selected by the user or a test script. */
      lastSelected?: string | null;
    };
  }
}

// This export statement is required to make this file a module,
// which allows augmenting the global namespace.
export {};
