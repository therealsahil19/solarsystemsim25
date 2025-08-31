export interface ShortcutBinding {
    code: string;
    shiftKey?: boolean;
    ctrlKey?: boolean;
    altKey?: boolean;
    display: string;
}

// A comprehensive list of all possible actions
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

export type ShortcutMap = { [action in ShortcutAction]?: ShortcutBinding };

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

const LOCAL_STORAGE_KEY = 'solar-system-shortcuts';

let currentShortcuts: ShortcutMap = { ...defaultShortcuts };

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

function saveShortcuts() {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentShortcuts));
    } catch (error) {
        console.error("Failed to save shortcuts to localStorage", error);
    }
}

export function getShortcuts(): Readonly<ShortcutMap> {
    return currentShortcuts;
}

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
            currentShortcuts[act as ShortcutAction] = undefined;
        }
    }

    currentShortcuts[action] = binding;
    saveShortcuts();
}

export function resetShortcuts() {
    currentShortcuts = { ...defaultShortcuts };
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    // We should probably also notify the UI to re-render here.
    // For now, we can rely on the user re-opening the modal.
}

// Load shortcuts on module initialization
loadShortcuts();
