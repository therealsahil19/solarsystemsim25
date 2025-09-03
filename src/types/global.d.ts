declare global {
  namespace Shepherd {
    class Tour {}
  }

  interface Window {
    _activeCameraTween?: { stop?: () => void } | null;
    // E2E testing hooks
    __E2E__?: {
      app?: any;
      lastSelected?: string | null;
    };
  }
}

export {};
