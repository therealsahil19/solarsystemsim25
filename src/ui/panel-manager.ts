/* eslint-disable @typescript-eslint/no-non-null-assertion */
type PanelSnapEdge = 'left' | 'right' | 'top' | 'bottom' | null;

export type PanelState = {
    x: number;
    y: number;
    w: number;
    h: number;
    visible: boolean;
    snapped: PanelSnapEdge;
    pinned: boolean;
    minimized: boolean;
    lastFocused: number;
};

const SNAP_THRESHOLD = 32;
const SNAP_DISTANCE = 16;
const UNSNAP_DISTANCE = 24;

export class PanelManager {
    private static highestZIndex = 1000;
    public static panels: Map<string, PanelManager> = new Map();
    private static snapGlow: HTMLElement;

    public state: PanelState;
    private isDragging = false;
    private dragStartX = 0;
    private dragStartY = 0;
feat/responsive-design-overhaul
    private panelStartX = 0;
    private panelStartY = 0;
    private storageKey: string | null = null;
=======
main

    // Bound event listeners
    private boundOnDragStart: (e: MouseEvent) => void;
    private boundOnDragMove: (e: MouseEvent) => void;
    private boundOnDragEnd: () => void;

feature/UI-UX-improvements
    private static snapThreshold = 30;
    private static snapGlows: { [key: string]: HTMLElement } = {};

    constructor(panel: HTMLElement) {
=======
feat/responsive-design-overhaul
    constructor(panel: HTMLElement, storageKey: string | null = null) {
main
        this.panel = panel;
        this.storageKey = storageKey;
=======
    constructor(
        public id: string,
        private panel: HTMLElement,
        private header: HTMLElement,
        private closeButton?: HTMLElement,
    ) {
        PanelManager.panels.set(this.id, this);
        this.state = this.loadState();

        this.boundOnDragStart = this.onDragStart.bind(this);
main
        this.boundOnDragMove = this.onDragMove.bind(this);
        this.boundOnDragEnd = this.onDragEnd.bind(this);

        this.init();
    }

    private init() {
feat/responsive-design-overhaul
        this.bringToFront();
        this.panel.addEventListener('mousedown', () => this.bringToFront());
feature/UI-UX-improvements
        if (!PanelManager.snapGlows['top']) {
            PanelManager.snapGlows['top'] = document.getElementById('snap-glow-top')!;
            PanelManager.snapGlows['right'] = document.getElementById('snap-glow-right')!;
            PanelManager.snapGlows['bottom'] = document.getElementById('snap-glow-bottom')!;
            PanelManager.snapGlows['left'] = document.getElementById('snap-glow-left')!;
        }
=======
        this.loadState();
=======
        this.applyState();
        this.makeDraggable();
        this.makeResizable();

        this.panel.addEventListener('mousedown', () => this.updateFocus(), true);
        this.closeButton?.addEventListener('click', () => this.hide());
    }

    // =================================================================
    // State and Visibility
    // =================================================================

    private loadState(): PanelState {
        const storedState = localStorage.getItem(`solarsim.panel.${this.id}`);
        if (storedState) {
            try {
                // If we have a stored state, use it, but provide defaults for any missing keys.
                const parsed = JSON.parse(storedState);
                const defaultsForMerging: PanelState = {
                    x: 50, y: 50, w: 320, h: 480, visible: true, snapped: null, pinned: false, minimized: false, lastFocused: 0
                };
                return { ...defaultsForMerging, ...parsed };
            } catch (e) {
                console.error(`Failed to parse stored state for panel ${this.id}:`, e);
            }
        }

        // If no stored state exists, create a default state based on the initial HTML.
        return {
            x: this.panel.offsetLeft,
            y: this.panel.offsetTop,
            w: this.panel.offsetWidth || 320,
            h: this.panel.offsetHeight || 480,
            visible: !this.panel.classList.contains('hidden'),
            snapped: null,
            pinned: false,
            minimized: false,
            lastFocused: 0,
        };
    }

    public saveState() {
        localStorage.setItem(`solarsim.panel.${this.id}`, JSON.stringify(this.state));
    }

    private applyState() {
        if (this.state.visible) {
            this.panel.classList.remove('hidden');
        } else {
            this.panel.classList.add('hidden');
        }
        this.panel.style.left = `${this.state.x}px`;
        this.panel.style.top = `${this.state.y}px`;
        this.panel.style.width = `${this.state.w}px`;
        this.panel.style.height = `${this.state.h}px`;

        this.panel.classList.toggle('pinned', this.state.pinned);
        this.panel.classList.toggle('minimized', this.state.minimized);
main
    }

    public toggleMinimize() {
        this.state.minimized = !this.state.minimized;
        this.applyState();
        this.saveState();
    }

    public show() {
        this.state.visible = true;
        this.applyState();
        this.updateFocus();
        this.saveState();
      main
    }

    public hide() {
        this.state.visible = false;
        this.applyState();
        this.saveState();
    }

    public toggleVisibility() {
        if (this.state.visible) {
            this.hide();
        } else {
            this.show();
        }
    }

    // =================================================================
    // Focus Management
    // =================================================================

    private updateFocus() {
        this.state.lastFocused = Date.now();
        this.panel.style.zIndex = String(++PanelManager.highestZIndex);
        this.saveState();
    }

    public static getMostRecentlyFocusedPanel(): PanelManager | null {
        const visiblePanels = Array.from(PanelManager.panels.values()).filter(p => p.state.visible);
        if (visiblePanels.length === 0) return null;

        return visiblePanels.reduce((prev, curr) => (prev.state.lastFocused > curr.state.lastFocused ? prev : curr));
    }

    // =================================================================
    // Pinning
    // =================================================================

    public togglePin() {
        this.state.pinned = !this.state.pinned;
        this.panel.classList.toggle('pinned', this.state.pinned);
        this.saveState();
    }

    // =================================================================
    // Dragging and Snapping
    // =================================================================

    private makeDraggable() {
        this.header.addEventListener('mousedown', this.boundOnDragStart);
    }

    private onDragStart(e: MouseEvent) {
        if (e.button !== 0 || this.state.pinned) return;
        e.preventDefault();
        e.stopPropagation();

        this.isDragging = true;
        this.updateFocus();

        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;

        document.addEventListener('mousemove', this.boundOnDragMove);
        document.addEventListener('mouseup', this.boundOnDragEnd, { once: true });

        this.header.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';

        if (this.state.snapped) {
            const checkUnsnap = (moveEvent: MouseEvent) => {
                const dx = Math.abs(moveEvent.clientX - this.dragStartX);
                const dy = Math.abs(moveEvent.clientY - this.dragStartY);
                if (dx > UNSNAP_DISTANCE || dy > UNSNAP_DISTANCE) {
                    this.state.snapped = null;
                    this.saveState();
                    document.removeEventListener('mousemove', checkUnsnap);
                }
            };
            document.addEventListener('mousemove', checkUnsnap);
        }
    }

    private onDragMove(e: MouseEvent) {
        if (!this.isDragging) return;

        const dx = e.clientX - this.dragStartX;
        const dy = e.clientY - this.dragStartY;
        this.state.x += dx;
        this.state.y += dy;

        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;

        this.handleSnapping();
        this.applyState();
    }

    private onDragEnd() {
        this.isDragging = false;
        this.header.style.cursor = 'grab';
        document.body.style.userSelect = '';
        document.removeEventListener('mousemove', this.boundOnDragMove);

        PanelManager.hideSnapPreview();
        if (this.state.snapped) {
            this.flashSnapConfirmation();
        }
        this.saveState();
    }

    private handleSnapping() {
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
        let activeSnap: PanelSnapEdge = null;

feature/UI-UX-improvements
        // --- Snapping and Glow Logic ---
        const { snapThreshold } = PanelManager;
        let snapX = false, snapY = false;

        // Hide all glows initially
        Object.values(PanelManager.snapGlows).forEach(el => el.classList.remove('visible'));

        // Left edge
        if (newLeft < snapThreshold) {
            newLeft = 0;
            snapX = true;
            PanelManager.snapGlows.left.classList.add('visible');
        }
        // Right edge
        if (newLeft + rect.width > winWidth - snapThreshold) {
            newLeft = winWidth - rect.width;
            snapX = true;
            PanelManager.snapGlows.right.classList.add('visible');
        }
        // Top edge
        if (newTop < snapThreshold) {
            newTop = 0;
            snapY = true;
            PanelManager.snapGlows.top.classList.add('visible');
        }
        // Bottom edge
        if (newTop + rect.height > winHeight - snapThreshold) {
            newTop = winHeight - rect.height;
            snapY = true;
            PanelManager.snapGlows.bottom.classList.add('visible');
        }

        // Boundary checks
        if (newLeft < 0) newLeft = 0;
        if (newTop < 0) newTop = 0;
        if (newLeft + rect.width > winWidth) newLeft = winWidth - rect.width;
        if (newTop + rect.height > winHeight) newTop = winHeight - rect.height;


        this.panel.style.left = `${newLeft}px`;
        this.panel.style.top = `${newTop}px`;
    }

    private onDragEnd() {
        this.isDragging = false;
        document.removeEventListener('mousemove', this.boundOnDragMove);
        // 'mouseup' listener is removed in onDragStart with { once: true }
=======
        if (this.state.x < SNAP_THRESHOLD) activeSnap = 'left';
        else if (this.state.x + this.state.w > winWidth - SNAP_THRESHOLD) activeSnap = 'right';
        else if (this.state.y < SNAP_THRESHOLD) activeSnap = 'top';
        else if (this.state.y + this.state.h > winHeight - SNAP_THRESHOLD) activeSnap = 'bottom';

        PanelManager.hideSnapPreview();
        if (activeSnap) {
            PanelManager.showSnapPreview(activeSnap);
            if (
                (activeSnap === 'left' && this.state.x < SNAP_DISTANCE) ||
                (activeSnap === 'right' && this.state.x + this.state.w > winWidth - SNAP_DISTANCE) ||
                (activeSnap === 'top' && this.state.y < SNAP_DISTANCE) ||
                (activeSnap === 'bottom' && this.state.y + this.state.h > winHeight - SNAP_DISTANCE)
            ) {
                this.state.snapped = activeSnap;
                if (activeSnap === 'left') this.state.x = 0;
                if (activeSnap === 'right') this.state.x = winWidth - this.state.w;
                if (activeSnap === 'top') this.state.y = 0;
                if (activeSnap === 'bottom') this.state.y = winHeight - this.state.h;
            }
        } else {
            this.state.snapped = null;
        }
    }

    private static showSnapPreview(edge: PanelSnapEdge) {
        if (!this.snapGlow) {
            this.snapGlow = document.createElement('div');
            this.snapGlow.className = 'snap-glow';
            document.body.appendChild(this.snapGlow);
        }
        this.snapGlow.className = `snap-glow ${edge} visible`;
    }
main

feat/responsive-design-overhaul
        this.header!.style.cursor = 'grab';
        document.body.style.userSelect = '';
feature/UI-UX-improvements

        // Hide all glows
        Object.values(PanelManager.snapGlows).forEach(el => el.classList.remove('visible'));
=======
        this.saveState();
=======
    private static hideSnapPreview() {
        if (this.snapGlow) {
            this.snapGlow.className = 'snap-glow';
        }
    }

    private flashSnapConfirmation() {
        this.panel.classList.add('snap-flash');
        setTimeout(() => this.panel.classList.remove('snap-flash'), 150);
main
main
    }

    // =================================================================
    // Resizing
    // =================================================================

    private makeResizable(minWidth = 250, minHeight = 150) {
        const directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
        directions.forEach(dir => {
            const handle = document.createElement('div');
            handle.className = `resizer-handle ${dir}`;
            this.panel.appendChild(handle);
            handle.addEventListener('mousedown', (e) => this.onResizeStart(e, dir, minWidth, minHeight));
        });
    }

    private onResizeStart(e: MouseEvent, dir: string, minWidth: number, minHeight: number) {
        if (this.state.pinned) return;
        e.stopPropagation();
        e.preventDefault();
        this.updateFocus();

        const startX = e.clientX;
        const startY = e.clientY;
        const startW = this.state.w;
        const startH = this.state.h;
        const startLeft = this.state.x;
        const startTop = this.state.y;

        const onMouseMove = (moveEvent: MouseEvent) => {
            const dx = moveEvent.clientX - startX;
            const dy = moveEvent.clientY - startY;

            if (dir.includes('e')) {
                this.state.w = Math.max(minWidth, startW + dx);
            }
            if (dir.includes('w')) {
                const newWidth = Math.max(minWidth, startW - dx);
                this.state.x = startLeft + (startW - newWidth);
                this.state.w = newWidth;
            }
            if (dir.includes('s')) {
                this.state.h = Math.max(minHeight, startH + dy);
            }
            if (dir.includes('n')) {
                const newHeight = Math.max(minHeight, startH - dy);
                this.state.y = startTop + (startH - newHeight);
                this.state.h = newHeight;
            }

            this.state.snapped = null;
            this.applyState();
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
            this.saveState();
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        document.body.style.cursor = `${dir}-resize`;
        document.body.style.userSelect = 'none';
    }
feat/responsive-design-overhaul

    public static showBackdrop() {
        if (!this.backdrop) {
            this.backdrop = document.createElement('div');
            this.backdrop.className = 'modal-backdrop';
            document.body.appendChild(this.backdrop);
        }
        this.backdrop.style.display = 'block';
        document.body.classList.add('modal-open');
    }

    public static hideBackdrop() {
        if (this.backdrop) {
            this.backdrop.style.display = 'none';
        }
        document.body.classList.remove('modal-open');
    }

    private saveState() {
        if (!this.storageKey) return;
        const state = {
            left: this.panel.style.left,
            top: this.panel.style.top,
            width: this.panel.style.width,
            height: this.panel.style.height,
        };
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(state));
        } catch (e) {
            console.error("Failed to save panel state to localStorage", e);
        }
    }

    private loadState() {
        if (!this.storageKey) return;
        try {
            const storedState = localStorage.getItem(this.storageKey);
            if (storedState) {
                const state = JSON.parse(storedState);
                if (state.left) this.panel.style.left = state.left;
                if (state.top) this.panel.style.top = state.top;
                if (state.width) this.panel.style.width = state.width;
                if (state.height) this.panel.style.height = state.height;
            }
        } catch (e) {
            console.error("Failed to load panel state from localStorage", e);
        }
    }
=======
main
}
