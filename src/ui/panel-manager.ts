export class PanelManager {
    private static highestZIndex = 1000;
    private static backdrop: HTMLElement | null = null;
    private panel: HTMLElement;
    private header: HTMLElement | null = null;
    private isDragging = false;
    private dragStartX = 0;
    private dragStartY = 0;
    private panelStartX = 0;
    private panelStartY = 0;
    private storageKey: string | null = null;

    // Bound event listeners
    private boundOnDragMove: (e: MouseEvent) => void;
    private boundOnDragEnd: () => void;

    constructor(panel: HTMLElement, storageKey: string | null = null) {
        this.panel = panel;
        this.storageKey = storageKey;
        this.boundOnDragMove = this.onDragMove.bind(this);
        this.boundOnDragEnd = this.onDragEnd.bind(this);
        this.init();
    }

    private init() {
        this.bringToFront();
        this.panel.addEventListener('mousedown', () => this.bringToFront());
        this.loadState();
    }

    public makeDraggable(header: HTMLElement) {
        this.header = header;
        this.header.addEventListener('mousedown', this.onDragStart.bind(this));
    }

    public minimize() {
        this.panel.classList.toggle('minimized');
    }

    private bringToFront() {
        this.panel.style.zIndex = String(++PanelManager.highestZIndex);
    }

    private onDragStart(e: MouseEvent) {
        if (e.button !== 0) return; // Only allow left-click to drag
        this.isDragging = true;
        this.bringToFront();

        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;

        const rect = this.panel.getBoundingClientRect();
        this.panelStartX = rect.left;
        this.panelStartY = rect.top;

        document.addEventListener('mousemove', this.boundOnDragMove);
        document.addEventListener('mouseup', this.boundOnDragEnd);

        this.header!.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    }

    private onDragMove(e: MouseEvent) {
        if (!this.isDragging) return;

        const dx = e.clientX - this.dragStartX;
        const dy = e.clientY - this.dragStartY;

        let newLeft = this.panelStartX + dx;
        let newTop = this.panelStartY + dy;

        const rect = this.panel.getBoundingClientRect();
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;

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
        document.removeEventListener('mouseup', this.boundOnDragEnd);

        this.header!.style.cursor = 'grab';
        document.body.style.userSelect = '';
        this.saveState();
    }

    public makeResizable(minWidth = 250, minHeight = 150) {
        const directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
        directions.forEach(dir => {
            const handle = document.createElement('div');
            handle.className = `resizer-handle ${dir}`;
            this.panel.appendChild(handle);
            handle.addEventListener('mousedown', (e) => this.onResizeStart(e, dir, minWidth, minHeight));
        });
    }

    private onResizeStart(e: MouseEvent, dir: string, minWidth: number, minHeight: number) {
        e.stopPropagation();
        e.preventDefault();
        this.bringToFront();

        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = this.panel.offsetWidth;
        const startHeight = this.panel.offsetHeight;
        const startLeft = this.panel.offsetLeft;
        const startTop = this.panel.offsetTop;

        const onMouseMove = (moveEvent: MouseEvent) => {
            const dx = moveEvent.clientX - startX;
            const dy = moveEvent.clientY - startY;

            if (dir.includes('e')) {
                const newWidth = Math.max(minWidth, startWidth + dx);
                this.panel.style.width = `${newWidth}px`;
            }
            if (dir.includes('w')) {
                const newWidth = Math.max(minWidth, startWidth - dx);
                if (newWidth > minWidth) {
                    this.panel.style.width = `${newWidth}px`;
                    this.panel.style.left = `${startLeft + dx}px`;
                }
            }
            if (dir.includes('s')) {
                const newHeight = Math.max(minHeight, startHeight + dy);
                this.panel.style.height = `${newHeight}px`;
            }
            if (dir.includes('n')) {
                const newHeight = Math.max(minHeight, startHeight - dy);
                if (newHeight > minHeight) {
                    this.panel.style.height = `${newHeight}px`;
                    this.panel.style.top = `${startTop + dy}px`;
                }
            }
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
}
