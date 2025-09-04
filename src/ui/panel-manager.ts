/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Backdrop } from './backdrop';
import { PanelController, PanelOptions } from './panel-types';

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

// Helper function to create a controller from an instance
function createController(instance: PanelManager): PanelController {
    return {
        id: instance.id,
        el: instance.getPanelElement(),
        focus: () => instance.updateFocus(),
        setMinimized: (minimized: boolean) => {
            if (instance.state.minimized !== minimized) {
                instance.toggleMinimize();
            }
        },
        isMinimized: () => instance.state.minimized,
        toggleVisibility: () => instance.toggleVisibility(),
        show: () => instance.show(),
        hide: () => instance.hide(),
        destroy: () => instance.destroy(),
        togglePin: () => instance.togglePin(),
        isPinned: () => instance.state.pinned,
        on: (event, cb) => instance.on(event, cb),
    };
}

export class PanelManager {
    private static highestZIndex = 1000;
    public static panels: Map<string, PanelManager> = new Map();
    private static controllers: Map<string, PanelController> = new Map();
    private static snapGlow: HTMLElement;

    public state: PanelState;
    private isDragging = false;
    private dragStartX = 0;
    private dragStartY = 0;
    private isModal = false;

    private events = new Map<string, Array<() => void>>();

    // Bound event listeners
    private boundOnDragStart: (e: MouseEvent) => void;
    private boundOnDragMove: (e: MouseEvent) => void;
    private boundOnDragEnd: () => void;

    // --- NEW STATIC API ---

    public static createPanel(
        id: string,
        title: string, // Title is not used yet, but good for future use
        panelEl: HTMLElement,
        options: PanelOptions = {},
    ): PanelController {
        if (this.controllers.has(id)) {
            return this.controllers.get(id)!;
        }

        const headerEl = panelEl.querySelector('.panel-header') as HTMLElement;
        const closeBtn = panelEl.querySelector('.close-btn, .close-button, #close-celestial-selector-btn, #close-presets-modal-btn') as HTMLElement | null;
        const minimizeBtn = panelEl.querySelector('.minimize-btn') as HTMLElement | null;

        if (!headerEl) {
            console.error(`PanelManager: Panel with id "${id}" must have a child element with class ".panel-header"`);
        }

        const instance = new PanelManager(id, panelEl, headerEl || panelEl, options);

        if (closeBtn) {
            closeBtn.addEventListener('click', () => instance.hide());
        }
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', () => instance.toggleMinimize());
        }

        const controller = createController(instance);
        this.controllers.set(id, controller);

        return controller;
    }

    public static getController(id: string): PanelController | undefined {
        return this.controllers.get(id);
    }


    // --- INSTANCE LOGIC ---

    private constructor(
        public id: string,
        private panel: HTMLElement,
        private header: HTMLElement,
        private options: PanelOptions = {},
    ) {
        PanelManager.panels.set(this.id, this);
        this.state = this.loadState();
        this.isModal = options.modal || false;

        this.boundOnDragStart = this.onDragStart.bind(this);
        this.boundOnDragMove = this.onDragMove.bind(this);
        this.boundOnDragEnd = this.onDragEnd.bind(this);

        this.init();
    }

    private init() {
        this.applyState();
        if (this.options.draggable !== false) {
            this.makeDraggable();
        }
        if (this.options.resizable !== false) {
            this.makeResizable();
        }

        this.panel.addEventListener('mousedown', () => this.updateFocus(), true);
    }

    public destroy() {
        // Unregister and remove from DOM
        PanelManager.panels.delete(this.id);
        PanelManager.controllers.delete(this.id);
        this.panel.remove();
        this.emit('close');
    }

    public on(event: string, cb: () => void) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        this.events.get(event)!.push(cb);
    }

    private emit(event: string) {
        this.events.get(event)?.forEach(cb => cb());
    }

    public getPanelElement(): HTMLElement {
        return this.panel;
    }

    // =================================================================
    // State and Visibility
    // =================================================================

    private loadState(): PanelState {
        const storedState = localStorage.getItem(`solarsim.panel.${this.id}`);
        let loadedState: Partial<PanelState> = {};
        if (storedState) {
            try {
                loadedState = JSON.parse(storedState);
            } catch (e) {
                console.error(`Failed to parse stored state for panel ${this.id}:`, e);
            }
        }

        const defaultState: PanelState = {
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

        const optionsState: Partial<PanelState> = {};
        if (this.options.initialPosition?.x !== undefined) {
            optionsState.x = this.options.initialPosition.x;
        }
        if (this.options.initialPosition?.y !== undefined) {
            optionsState.y = this.options.initialPosition.y;
        }
        if (this.options.width !== undefined) {
            optionsState.w = this.options.width;
        }
        if (this.options.height !== undefined) {
            optionsState.h = this.options.height;
        }

        return { ...defaultState, ...optionsState, ...loadedState };
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
    }

    public toggleMinimize() {
        this.state.minimized = !this.state.minimized;
        this.applyState();
        this.saveState();
        this.emit('minimize');
    }

    public show() {
        if (this.state.visible) {
            this.updateFocus(); // Still bring to front if already visible
            return;
        }
        this.state.visible = true;
        this.applyState();
        this.updateFocus();
        this.saveState();
        if (this.isModal) {
            Backdrop.show();
        }
        this.emit('show');
    }

    public hide() {
        if (!this.state.visible) return;
        this.state.visible = false;
        this.applyState();
        this.saveState();
        if (this.isModal) {
            Backdrop.hide();
        }
        this.emit('hide');
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

    public updateFocus() {
        this.state.lastFocused = Date.now();
        this.panel.style.zIndex = String(++PanelManager.highestZIndex);
        this.saveState();
        this.emit('focus');
    }

    public static getMostRecentlyFocusedController(): PanelController | null {
        const visiblePanels = Array.from(PanelManager.panels.values()).filter(p => p.state.visible);
        if (visiblePanels.length === 0) return null;

        const mostRecentInstance = visiblePanels.reduce((prev, curr) => (prev.state.lastFocused > curr.state.lastFocused ? prev : curr));
        return this.controllers.get(mostRecentInstance.id) || null;
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
        this.header.style.cursor = 'grab';
    }

    private onDragStart(e: MouseEvent) {
        if (e.button !== 0 || this.state.pinned) return;
        if ((e.target as HTMLElement).closest('button, input, select, textarea')) {
            return;
        }

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

    private static hideSnapPreview() {
        if (this.snapGlow) {
            this.snapGlow.className = 'snap-glow';
        }
    }

    private flashSnapConfirmation() {
        this.panel.classList.add('snap-flash');
        setTimeout(() => this.panel.classList.remove('snap-flash'), 150);
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
}
