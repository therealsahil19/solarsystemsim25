/**
 * Defines the structure for a keyboard shortcut binding.
 */
export interface ShortcutBinding {
    /** The `KeyboardEvent.code` value for the key (e.g., 'KeyW', 'Space'). */
    code: string;
    /** Whether the Shift key must be pressed. */
    shiftKey?: boolean;
    /** Whether the Ctrl key must be pressed. */
    ctrlKey?: boolean;
    /** Whether the Alt key must be pressed. */
    altKey?: boolean;
    /** A user-friendly string to display for this shortcut (e.g., 'Shift + W'). */
    display: string;
}

/**
 * A comprehensive list of all possible actions that can be triggered by a shortcut.
 */
export type ShortcutAction =
    | 'toggle-pause'
    | 'toggle-debug-hud'
    | 'reset-time'
    | 'toggle-shadows'
    | 'increase-speed'
    | 'decrease-speed'
    | 'toggle-trails'
    | 'frame-selected'
    | 'toggle-help'
    | 'close-modals'
    | 'frame-advance'
    | 'fine-step-forward'
    | 'fine-step-backward'
    | 'select-body-1'
    | 'select-body-2'
    | 'select-body-3'
    | 'select-body-4'
    | 'select-body-5'
    | 'select-body-6'
    | 'select-body-7'
    | 'select-body-8'
    | 'select-body-9';

/**
 * A map that associates `ShortcutAction` strings with their corresponding `ShortcutBinding`.
 */
export type ShortcutMap = { [action in ShortcutAction]?: ShortcutBinding };

/**
 * The default shortcut configuration for the application.
 * @private
 */
const defaultShortcuts: ShortcutMap = {
    'toggle-pause': { code: 'Space', display: 'Space' },
    'toggle-debug-hud': { code: 'Backquote', display: '`' },
    'reset-time': { code: 'KeyR', display: 'R' },
    'toggle-shadows': { code: 'KeyS', display: 'S' },
    'increase-speed': { code: 'Equal', display: '=' },
    'decrease-speed': { code: 'Minus', display: '-' },
    'toggle-trails': { code: 'KeyT', display: 'T' },
    'frame-selected': { code: 'KeyF', display: 'F' },
    'toggle-help': { code: 'KeyH', display: 'H' },
    'close-modals': { code: 'Escape', display: 'Esc' },
    'frame-advance': { code: 'Period', display: '.' },
    'fine-step-forward': { code: 'ArrowRight', shiftKey: true, display: 'Shift + →' },
    'fine-step-backward': { code: 'ArrowLeft', shiftKey: true, display: 'Shift + ←' },
    'select-body-1': { code: 'Digit1', display: '1' },
    'select-body-2': { code: 'Digit2', display: '2' },
    'select-body-3': { code: 'Digit3', display: '3' },
    'select-body-4': { code: 'Digit4', display: '4' },
    'select-body-5': { code: 'Digit5', display: '5' },
    'select-body-6': { code: 'Digit6', display: '6' },
    'select-body-7': { code: 'Digit7', display: '7' },
    'select-body-8': { code: 'Digit8', display: '8' },
    'select-body-9': { code: 'Digit9', display: '9' },
};

/**
 * The key used to store custom shortcut settings in `localStorage`.
 * @private
 */
const LOCAL_STORAGE_KEY = 'solar-system-shortcuts';

/**
 * The current, in-memory representation of the shortcut map.
 * @private
 */
let currentShortcuts: ShortcutMap = { ...defaultShortcuts };

/**
 * Loads custom shortcuts from `localStorage` and merges them with the defaults.
 * This ensures that the app starts with the user's saved preferences, while
 * also accommodating any new shortcuts added to the default map.
 * @private
 */
function loadShortcuts() {
    try {
        const storedShortcuts = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedShortcuts) {
            const parsed = JSON.parse(storedShortcuts);
            // Merge stored shortcuts with defaults to handle cases where new shortcuts are added
            currentShortcuts = { ...defaultShortcuts, ...parsed };
        }
    } catch (error) {
        console.error("Failed to load shortcuts from localStorage", error);
        currentShortcuts = { ...defaultShortcuts };
    }
}

/**
 * Saves the current shortcut map to `localStorage`.
 * @private
 */
function saveShortcuts() {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentShortcuts));
    } catch (error) {
        console.error("Failed to save shortcuts to localStorage", error);
    }
}

/**
 * Returns a read-only version of the current shortcut map.
 * @returns The current `ShortcutMap`.
 */
export function getShortcuts(): Readonly<ShortcutMap> {
    return currentShortcuts;
}

/**
 * Sets a new binding for a specific shortcut action and saves it to `localStorage`.
 * If the new binding is already in use by another action, it will be un-assigned from the old action.
 * @param action The action to re-bind.
 * @param binding The new shortcut binding.
 */
export function setShortcut(action: ShortcutAction, binding: ShortcutBinding) {
    // Before setting a new shortcut, we must ensure no other action uses the same binding.
    // If it does, we should un-assign it from the old action.
    for (const act in currentShortcuts) {
        const existingBinding = currentShortcuts[act as ShortcutAction];
        if (
            existingBinding &&
            existingBinding.code === binding.code &&
            !!existingBinding.shiftKey === !!binding.shiftKey &&
            !!existingBinding.ctrlKey === !!binding.ctrlKey &&
            !!existingBinding.altKey === !!binding.altKey
        ) {
            delete currentShortcuts[act as ShortcutAction];
        }
    }

    currentShortcuts[action] = binding;
    saveShortcuts();
}

/**
 * Resets all shortcuts to their default values and clears them from `localStorage`.
 */
export function resetShortcuts() {
    currentShortcuts = { ...defaultShortcuts };
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    // We should probably also notify the UI to re-render here.
    // For now, we can rely on the user re-opening the modal.
}

// Load shortcuts on module initialization
loadShortcuts();
