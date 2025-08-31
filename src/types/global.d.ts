declare global {
  interface Window {
    _activeCameraTween?: { stop?: () => void } | null;
    // other custom globals
  }
}
export {};
