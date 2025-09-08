
import { Backdrop } from './backdrop';
import { PanelController, PanelOptions } from './panel-types';

/** The edge of the screen a panel can snap to. */
type PanelSnapEdge = 'left' | 'right' | 'top' | 'bottom' | null;

/**
 * Represents the complete state of a panel, including position, size, and behavior flags.
 * This state is persisted to localStorage.
 */
export type PanelState = {
    /** The x-coordinate of the panel's top-left corner. */
    x: number;
    /** The y-coordinate of the panel's top-left corner. */
    y: number;
    /** The width of the panel in pixels. */
    w: number;
    /** The height of the panel in pixels. */
    h: number;
    /** Whether the panel is currently visible. */
    visible: boolean;
    /** The edge the panel is currently snapped to, or null if not snapped. */
    snapped: PanelSnapEdge;
    /** Whether the panel is pinned, preventing it from being dragged. */
    pinned: boolean;
    /** Whether the panel is minimized. */
    minimized: boolean;
    /** The timestamp of the last time the panel was focused, used for z-indexing. */
    lastFocused: number;
};

/** The distance from a screen edge (in px) to start showing the snap preview. */
const SNAP_THRESHOLD = 32;
/** The distance from a screen edge (in px) to commit the snap. */
const SNAP_DISTANCE = 16;
/** The distance the mouse must move away from a snapped edge to unsnap the panel. */
const UNSNAP_DISTANCE = 24;
/** Gap between docked panels when snapped to an edge (in px). */
const DOCK_GAP = 8;
/** General safe margin from viewport edges (in px). */
const SAFE_MARGIN = 10;

/**
 * Creates a public-facing `PanelController` from a `PanelManager` instance.
 * This acts as an adapter, exposing only the safe, public methods for controlling a panel.
 * @param instance The internal `PanelManager` instance.
 * @returns A `PanelController` object.
 * @private
 */
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
        getState: () => instance.state,
        setPosition: (x: number, y: number) => instance.setPosition(x, y),
    };
}

/**
 * Manages the state and behavior of all UI panels.
 * This class provides a complete windowing system, including dragging, resizing,
 * snapping, pinning, and focus management. It uses a static factory pattern
 * (`createPanel`) to create and manage panel instances.
 */
export class PanelManager {
    private static highestZIndex = 1000;
    /** A map of all active PanelManager instances, keyed by their ID. */
    public static panels: Map<string, PanelManager> = new Map();
    private static controllers: Map<string, PanelController> = new Map();
    private static snapGlow: HTMLElement;
    private static resizeListenerAttached = false;

    public state: PanelState;
    private isDragging = false;
    private dragStartX = 0;
    private dragStartY = 0;
    private isModal = false;

    private events = new Map<string, Array<() => void>>();

    // Bound event listeners for cleanup
    private boundOnDragStart: (e: MouseEvent) => void;
    private boundOnDragMove: (e: MouseEvent) => void;
    private boundOnDragEnd: () => void;

    // --- STATIC API ---

    /**
     * The main factory method for creating a new managed panel.
     * @param id A unique identifier for the panel.
     * @param title The title of the panel (reserved for future use).
     * @param panelEl The root HTML element of the panel.
     * @param options Configuration options for the panel.
     * @returns A `PanelController` to interact with the newly created panel.
     */
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

    /**
     * Retrieves the controller for an existing panel.
     * @param id The ID of the panel.
     * @returns The `PanelController` if found, otherwise `undefined`.
     */
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

        // Ensure panels start within viewport and avoid initial overlaps
        this.clampToViewport();
        this.repositionIfOverlapping('init');

        // Attach a single global resize listener to re-layout docked panels
        if (!PanelManager.resizeListenerAttached) {
            window.addEventListener('resize', () => PanelManager.relayoutAllDocked());
            PanelManager.resizeListenerAttached = true;
        }
    }

    /** Unregisters the panel and removes its element from the DOM. */
    public destroy() {
        PanelManager.panels.delete(this.id);
        PanelManager.controllers.delete(this.id);
        this.panel.remove();
        this.emit('close');
    }

    /** Registers an event listener for panel events. */
    public on(event: string, cb: () => void) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        this.events.get(event)!.push(cb);
    }

    private emit(event: string) {
        this.events.get(event)?.forEach(cb => cb());
    }

    /** Returns the root HTML element for the panel. */
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

    /** Saves the current state of the panel to localStorage. */
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

    /** Toggles the minimized state of the panel. */
    public toggleMinimize() {
        this.state.minimized = !this.state.minimized;
        this.applyState();
        this.saveState();
        this.emit('minimize');
    }

    /** Makes the panel visible and brings it into focus. */
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

        // After showing, ensure panel fits viewport and doesn't collide
        this.clampToViewport();
        if (this.state.snapped) {
            PanelManager.layoutDockedPanelsForEdge(this.state.snapped);
        } else {
            this.repositionIfOverlapping('show');
        }
    }

    /** Hides the panel. */
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

    /** Toggles the visibility of the panel. */
    public toggleVisibility() {
        if (this.state.visible) {
            this.hide();
        } else {
            this.show();
        }
    }

    /**
     * Programmatically sets the position of the panel.
     * @param x The new x-coordinate.
     * @param y The new y-coordinate.
     */
    public setPosition(x: number, y: number) {
        this.state.x = x;
        this.state.y = y;
        this.applyState();
        this.saveState();
    }

    // =================================================================
    // Focus Management
    // =================================================================

    /** Brings the panel to the front by increasing its z-index and updates its focus timestamp. */
    public updateFocus() {
        this.state.lastFocused = Date.now();
        this.panel.style.zIndex = String(++PanelManager.highestZIndex);
        this.saveState();
        this.emit('focus');
    }

    /**
     * Finds the controller for the panel that was most recently focused by the user.
     * @returns The `PanelController` for the most recently focused panel, or `null` if no panels are visible.
     */
    public static getMostRecentlyFocusedController(): PanelController | null {
        const visiblePanels = Array.from(PanelManager.panels.values()).filter(p => p.state.visible);
        if (visiblePanels.length === 0) return null;

        const mostRecentInstance = visiblePanels.reduce((prev, curr) => (prev.state.lastFocused > curr.state.lastFocused ? prev : curr));
        return this.controllers.get(mostRecentInstance.id) || null;
    }

    // =================================================================
    // Pinning
    // =================================================================

    /** Toggles the pinned state of the panel, preventing it from being dragged. */
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
        // Ignore clicks on interactive elements within the header
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

        // If starting a drag from a snapped position, check if we should unsnap
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

        // When drag ends, prevent overlaps and stack docked panels
        this.clampToViewport();
        if (this.state.snapped) {
            PanelManager.layoutDockedPanelsForEdge(this.state.snapped);
        } else {
            this.repositionIfOverlapping('dragend');
        }
    }

    private handleSnapping() {
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
        let activeSnap: PanelSnapEdge = null;

        // Check if panel is close to any edge
        if (this.state.x < SNAP_THRESHOLD) activeSnap = 'left';
        else if (this.state.x + this.state.w > winWidth - SNAP_THRESHOLD) activeSnap = 'right';
        else if (this.state.y < SNAP_THRESHOLD) activeSnap = 'top';
        else if (this.state.y + this.state.h > winHeight - SNAP_THRESHOLD) activeSnap = 'bottom';

        PanelManager.hideSnapPreview();
        if (activeSnap) {
            PanelManager.showSnapPreview(activeSnap);
            // Check if panel is close enough to commit the snap
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

            // After resize, keep in viewport and resolve collisions
            this.clampToViewport();
            if (this.state.snapped) {
                PanelManager.layoutDockedPanelsForEdge(this.state.snapped);
            } else {
                this.repositionIfOverlapping('resizeend');
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        document.body.style.cursor = `${dir}-resize`;
        document.body.style.userSelect = 'none';
    }

    // =================================================================
    // Collision Detection and Docking Layout
    // =================================================================

    /** Returns the current bounding rect of this panel based on state. */
    private getRect(): DOMRect {
        // Use state values as source of truth
        return new DOMRect(this.state.x, this.state.y, this.state.w, this.state.h);
    }

    /** Ensures panel stays within the viewport with a small margin. */
    private clampToViewport() {
        const maxX = Math.max(0, window.innerWidth - this.state.w - SAFE_MARGIN);
        const maxY = Math.max(PanelManager.getSafeTopBoundary(), window.innerHeight - this.state.h - SAFE_MARGIN);
        const minX = SAFE_MARGIN;
        const minY = PanelManager.getSafeTopBoundary();
        this.state.x = Math.min(Math.max(this.state.x, minX), maxX);
        this.state.y = Math.min(Math.max(this.state.y, minY), Math.max(minY, window.innerHeight - this.state.h - SAFE_MARGIN));
        this.applyState();
        this.saveState();
    }

    /** Attempts to resolve overlaps with other panels by nudging this panel. */
    private repositionIfOverlapping(context: 'init' | 'show' | 'dragend' | 'resizeend' = 'init') {
        const others = PanelManager.getVisibleInstances().filter(p => p !== this && !p.state.minimized);
        if (others.length === 0) return;

        // If snapped, dock layout will handle stacking
        if (this.state.snapped) {
            PanelManager.layoutDockedPanelsForEdge(this.state.snapped);
            return;
        }

        let rect = this.getRect();
        const maxIterations = 200;
        let iterations = 0;
        // Choose an initial nudge direction – down-right
        const stepX = 16;
        const stepY = 16;

        function overlapsAny(r: DOMRect, list: PanelManager[]): boolean {
            return list.some(o => PanelManager.rectsOverlap(r, o.getRect()));
        }

        while (overlapsAny(rect, others) && iterations < maxIterations) {
            // Try to move minimally either horizontally or vertically depending on which resolves faster
            // Prefer moving down first to avoid the top bar
            const tryDown = new DOMRect(rect.x, rect.y + stepY, rect.width, rect.height);
            const tryRight = new DOMRect(rect.x + stepX, rect.y, rect.width, rect.height);
            const canDown = tryDown.y + tryDown.height <= window.innerHeight - SAFE_MARGIN;
            const canRight = tryRight.x + tryRight.width <= window.innerWidth - SAFE_MARGIN;

            if (canDown && !overlapsAny(tryDown, others)) {
                rect = tryDown;
            } else if (canRight && !overlapsAny(tryRight, others)) {
                rect = tryRight;
            } else {
                // Move diagonally if both single-axis moves still overlap or are constrained
                const tryDiag = new DOMRect(rect.x + stepX, rect.y + stepY, rect.width, rect.height);
                rect = tryDiag;
            }

            iterations++;
        }

        // Apply the resolved position
        this.state.x = Math.round(rect.x);
        this.state.y = Math.round(Math.max(rect.y, PanelManager.getSafeTopBoundary()));
        this.applyState();
        this.saveState();
    }

    /** Returns visible, non-hidden PanelManager instances. */
    private static getVisibleInstances(): PanelManager[] {
        return Array.from(this.panels.values()).filter(p => p.state.visible && !p.state.minimized);
    }

    /** Overlap test for two rects. */
    private static rectsOverlap(a: DOMRect, b: DOMRect): boolean {
        return !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);
    }

    /** Computes a safe top boundary based on fixed UI like the top bar. */
    private static getSafeTopBoundary(): number {
        const topBar = document.getElementById('top-bar');
        let topBoundary = SAFE_MARGIN;
        if (topBar) {
            const rect = topBar.getBoundingClientRect();
            topBoundary = Math.max(topBoundary, rect.bottom + SAFE_MARGIN);
        }
        return topBoundary;
    }

    /** Public for internal use: returns safe top boundary for instance methods. */
    private static _safeTop(): number { return this.getSafeTopBoundary(); }

    /** Stacks panels docked to a given edge to avoid overlaps. */
    private static layoutDockedPanelsForEdge(edge: PanelSnapEdge) {
        if (!edge) return;
        const panels = this.getVisibleInstances().filter(p => p.state.snapped === edge);
        if (panels.length === 0) return;

        // Sort by lastFocused so the most recently used panel stays nearer the primary corner
        panels.sort((a, b) => b.state.lastFocused - a.state.lastFocused);

        const safeTop = this.getSafeTopBoundary();
        let cursorX = SAFE_MARGIN;
        let cursorY = safeTop;
        const viewportW = window.innerWidth;
        const viewportH = window.innerHeight;

        if (edge === 'left') {
            cursorX = 0;
            cursorY = safeTop;
            for (const p of panels) {
                p.state.x = 0;
                // Wrap vertically if would overflow; start a new column
                if (cursorY + p.state.h > viewportH - SAFE_MARGIN) {
                    cursorY = safeTop;
                }
                p.state.y = cursorY;
                cursorY += p.state.h + DOCK_GAP;
                p.applyState();
                p.saveState();
            }
        } else if (edge === 'right') {
            cursorX = viewportW;
            cursorY = safeTop;
            for (const p of panels) {
                p.state.x = Math.max(0, viewportW - p.state.w);
                if (cursorY + p.state.h > viewportH - SAFE_MARGIN) {
                    cursorY = safeTop;
                }
                p.state.y = cursorY;
                cursorY += p.state.h + DOCK_GAP;
                p.applyState();
                p.saveState();
            }
        } else if (edge === 'top') {
            cursorX = SAFE_MARGIN;
            for (const p of panels) {
                p.state.y = safeTop;
                if (cursorX + p.state.w > viewportW - SAFE_MARGIN) {
                    cursorX = SAFE_MARGIN; // wrap
                }
                p.state.x = cursorX;
                cursorX += p.state.w + DOCK_GAP;
                p.applyState();
                p.saveState();
            }
        } else if (edge === 'bottom') {
            cursorX = SAFE_MARGIN;
            for (const p of panels) {
                p.state.y = Math.max(0, viewportH - p.state.h);
                if (cursorX + p.state.w > viewportW - SAFE_MARGIN) {
                    cursorX = SAFE_MARGIN; // wrap
                }
                p.state.x = cursorX;
                cursorX += p.state.w + DOCK_GAP;
                p.applyState();
                p.saveState();
            }
        }
    }

    /** Re-layouts all docked panels for all edges. */
    private static relayoutAllDocked() {
        (['left', 'right', 'top', 'bottom'] as PanelSnapEdge[]).forEach(edge => this.layoutDockedPanelsForEdge(edge));
    }
}
