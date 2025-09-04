export interface PanelOptions {
    width?: number;
    height?: number;
    draggable?: boolean;
    resizable?: boolean;
    modal?: boolean;
    initialPosition?: { x: number; y: number };
}

export interface PanelController {
    id: string;
    el: HTMLElement;
    focus(): void;
    setMinimized(minimized: boolean): void;
    isMinimized(): boolean;
    toggleVisibility(): void;
    show(): void;
    hide(): void;
    destroy(): void;
    togglePin(): void;
    isPinned(): boolean;
    on(event: 'focus' | 'minimize' | 'close' | 'show' | 'hide', cb: () => void): void;
}
