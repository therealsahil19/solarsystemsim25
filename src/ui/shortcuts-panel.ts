import { getShortcuts, setShortcut, ShortcutAction, ShortcutBinding } from '../state/shortcuts';

// A more user-friendly mapping for action IDs to labels
const actionLabels: { [key in ShortcutAction]?: string } = {
    'toggle-pause': 'Play/Pause Simulation',
    'toggle-debug-hud': 'Toggle Debug Info',
    'reset-time': 'Reset Simulation',
    'toggle-shadows': 'Toggle Shadows',
    'increase-speed': 'Increase Speed',
    'decrease-speed': 'Decrease Speed',
    'toggle-trails': 'Toggle Orbit Trails',
    'frame-selected': 'Frame Selected Body',
    'toggle-help': 'Toggle Help Menu',
    'close-modals': 'Close Menu/Modal',
    'frame-advance': 'Frame-by-Frame Advance',
    'fine-step-forward': 'Fine Step Forward',
    'fine-step-backward': 'Fine Step Backward',
    'select-body-1': 'Select Sun',
    'select-body-2': 'Select Mercury',
    'select-body-3': 'Select Venus',
    'select-body-4': 'Select Earth',
    'select-body-5': 'Select Mars',
    'select-body-6': 'Select Jupiter',
    'select-body-7': 'Select Saturn',
    'select-body-8': 'Select Uranus',
    'select-body-9': 'Select Neptune',
};

const actionTooltips: { [key in ShortcutAction]?: string } = {
    'frame-selected': 'Focus the camera on the currently selected planet or moon.',
    'frame-advance': 'If paused, advances the simulation by a single frame.',
    'fine-step-forward': 'Nudges the simulation time forward by a small amount.',
    'fine-step-backward': 'Nudges the simulation time backward by a small amount.',
};

let activeRemapAction: ShortcutAction | null = null;
let originalButtonText: string = '';

function formatBindingForDisplay(binding: ShortcutBinding): string {
    let parts: string[] = [];
    if (binding.ctrlKey) parts.push('Ctrl');
    if (binding.altKey) parts.push('Alt');
    if (binding.shiftKey) parts.push('Shift');

    const keyMap: { [key: string]: string } = {
        'ArrowUp': '↑', 'ArrowDown': '↓', 'ArrowLeft': '←', 'ArrowRight': '→',
        'Space': 'Space', 'Backquote': '`', 'Minus': '-', 'Equal': '=', 'Period': '.',
    };

    const key = keyMap[binding.code] || binding.code.replace('Key', '').replace('Digit', '');
    parts.push(key);

    return parts.join(' + ');
}

function handleRemap(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (!activeRemapAction) return;

    if (event.code === 'Escape') {
        finishRemap();
        return;
    }

    const newBinding: ShortcutBinding = {
        code: event.code,
        shiftKey: event.shiftKey,
        ctrlKey: event.ctrlKey,
        altKey: event.altKey,
        display: ''
    };
    newBinding.display = formatBindingForDisplay(newBinding);

    setShortcut(activeRemapAction, newBinding);
    finishRemap();
}

function startRemap(action: ShortcutAction, button: HTMLButtonElement) {
    if (activeRemapAction) {
        const oldButton = document.querySelector(`[data-action="${activeRemapAction}"]`) as HTMLButtonElement | null;
        if(oldButton) oldButton.textContent = originalButtonText;
    }

    activeRemapAction = action;
    originalButtonText = button.textContent || 'Remap';
    button.textContent = 'Press a key...';
    window.addEventListener('keydown', handleRemap, { capture: true });
}

function finishRemap() {
    window.removeEventListener('keydown', handleRemap, { capture: true });
    activeRemapAction = null;
    renderShortcutsList();
}

export function renderShortcutsList(filter: string = '') {
    const shortcuts = getShortcuts();
    const container = document.getElementById('shortcuts-list');
    if (!container) return;

    container.innerHTML = '';
    const filterText = filter.toLowerCase();
    const actions = Object.keys(shortcuts).sort() as ShortcutAction[];

    for (const action of actions) {
        const label = actionLabels[action] || action;
        if (filterText && !label.toLowerCase().includes(filterText)) {
            continue;
        }

        const binding = shortcuts[action];

        const actionLabel = document.createElement('span');
        actionLabel.className = 'action-label';
        actionLabel.textContent = label;
        if (actionTooltips[action]) {
            actionLabel.title = actionTooltips[action]!;
        }

        const keyBinding = document.createElement('kbd');
        keyBinding.className = 'key-binding';
        keyBinding.textContent = binding ? binding.display : 'Unbound';

        const remapButton = document.createElement('button');
        remapButton.className = 'control-btn remap-button';
        remapButton.textContent = 'Remap';
        remapButton.dataset.action = action;

        remapButton.addEventListener('click', () => {
            startRemap(action, remapButton);
        });

        container.appendChild(actionLabel);
        container.appendChild(keyBinding);
        container.appendChild(remapButton);
    }
}

export function initShortcutsPanel() {
    const searchInput = document.getElementById('help-search-input') as HTMLInputElement;
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderShortcutsList(searchInput.value);
        });
    }

    // When the overlay is opened, clear the search and re-render
    const helpOverlay = document.getElementById('help-overlay');
    if(helpOverlay) {
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.attributeName === 'class' && !helpOverlay.classList.contains('hidden')) {
                    searchInput.value = '';
                    renderShortcutsList();
                    searchInput.focus();
                }
            }
        });
        observer.observe(helpOverlay, { attributes: true });
    }
}
