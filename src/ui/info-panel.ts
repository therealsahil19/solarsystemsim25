import * as dom from './dom';

type PanelState = {
    side: 'left' | 'right';
    isPinned: boolean;
    width: number;
    isCollapsed: boolean;
};

const PANEL_STATE_KEY = 'solarsim.panel.v1';

function savePanelState(state: PanelState) {
    try {
        localStorage.setItem(PANEL_STATE_KEY, JSON.stringify(state));
    } catch (e) {
        console.error("Failed to save panel state:", e);
    }
}

function loadPanelState(): PanelState | null {
    const stored = localStorage.getItem(PANEL_STATE_KEY);
    if (stored) {
        try {
            // Add validation to ensure the stored state is valid
            const parsed = JSON.parse(stored);
            if (parsed && typeof parsed === 'object' && 'side' in parsed && 'isPinned' in parsed && 'width' in parsed) {
                return parsed;
            }
        } catch (e) {
            console.error("Failed to parse panel state:", e);
            localStorage.removeItem(PANEL_STATE_KEY);
        }
    }
    return null;
}

export function initInfoPanel(): void {
    const app = document.getElementById('app')!;
    const panel = document.getElementById('infoPanel') as HTMLElement;
    const header = document.getElementById('panelHeader') as HTMLElement;
    const resizer = document.getElementById('resizer') as HTMLElement;
    const pinBtn = document.getElementById('pinBtn') as HTMLButtonElement;
    const closeBtn = document.getElementById('info-panel-close') as HTMLButtonElement;

    let state: PanelState = loadPanelState() || {
        side: 'left',
        isPinned: true,
        width: 320,
        isCollapsed: false, // isCollapsed is derived from !isPinned
    };

    function applyState() {
        // Apply classes for docking
        app.classList.toggle('dock-right', state.side === 'right');
        panel.classList.toggle('dock-left', state.side === 'left');
        panel.classList.toggle('dock-right', state.side === 'right');
        resizer.classList.toggle('dock-left', state.side === 'left');
        resizer.classList.toggle('dock-right', state.side === 'right');

        // Pinning implies the panel is not collapsed by default
        const isCurrentlyCollapsed = !state.isPinned;
        panel.classList.toggle('collapsed', isCurrentlyCollapsed);

        // Apply width only if not collapsed
        if (!isCurrentlyCollapsed) {
            panel.style.width = `${state.width}px`;
        } else {
            panel.style.width = ''; // Let CSS handle collapsed width
        }

        pinBtn.setAttribute('aria-pressed', String(state.isPinned));
        pinBtn.textContent = state.isPinned ? '📌' : '➡️';
    }

    applyState();

    header.addEventListener('pointerdown', (e: PointerEvent) => {
        if (!header.classList.contains('draggable') || (e.target as HTMLElement).closest('button')) {
            return;
        }

        header.classList.add('dragging');
        document.body.style.cursor = 'grabbing';

        const onPointerUp = (e: PointerEvent) => {
            header.classList.remove('dragging');
            document.body.style.cursor = '';

            const dropX = e.clientX;
            const targetSide = (dropX < window.innerWidth / 2) ? 'left' : 'right';

            if (targetSide !== state.side) {
                state.side = targetSide;
                applyState();
                savePanelState(state);
            }

            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerup', onPointerUp);
        };

        const onPointerMove = (e: PointerEvent) => {
            // This can be used to show a ghost panel if desired
        };

        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp, { once: true });
    });

    pinBtn.addEventListener('click', () => {
        state.isPinned = !state.isPinned;
        applyState();
        savePanelState(state);
    });

    resizer.addEventListener('pointerdown', (e: PointerEvent) => {
        e.preventDefault();
        e.stopPropagation();
        isResizing = true;
        document.body.style.cursor = 'ew-resize';

        const onPointerMove = (e: PointerEvent) => {
            if (!isResizing) return;
            let newWidth = state.side === 'left' ? e.clientX : window.innerWidth - e.clientX;
            newWidth = Math.max(280, Math.min(newWidth, window.innerWidth * 0.6));
            state.width = newWidth;
            panel.style.width = `${state.width}px`;
        };

        const onPointerUp = () => {
            isResizing = false;
            document.body.style.cursor = '';
            savePanelState(state);
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerup', onPointerUp);
        };

        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp, { once: true });
    });
    let isResizing = false;

    closeBtn.addEventListener('click', () => {
        panel.classList.add('hidden');
    });
}

export function updateInfoPanelColor(color: string): void {
    const header = document.getElementById('panelHeader');
    if(header) {
        header.style.borderBottomColor = color;
    }
}
