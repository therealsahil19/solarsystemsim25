declare global {
  interface Window {
    _activeCameraTween?: { stop?: () => void };
    // other custom globals
  }
}
export {};
