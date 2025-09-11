/**
 * Defines the set of options available when creating a new panel.
 */
export interface PanelOptions {
    /** The initial width of the panel in pixels. */
    width?: number;
    /** The initial height of the panel in pixels. */
    height?: number;
    /** Whether the panel can be dragged by the user. Defaults to `true`. */
    draggable?: boolean;
    /** Whether the panel can be resized by the user. Defaults to `true`. */
    resizable?: boolean;
    /** If `true`, the panel will have a modal backdrop. Defaults to `false`. */
    modal?: boolean;
    /** The initial position of the panel on the screen. */
    initialPosition?: { x: number; y: number };
}

/**
 * Defines the public API for a panel controller.
 * This interface provides a consistent way to interact with and manage panels,
 * regardless of their specific content or implementation.
 */
import { PanelState } from "./panel-manager";

export interface PanelController {
    /** The unique ID of the panel. */
    id: string;
    /** The main HTML element of the panel. */
    el: HTMLElement;
    /** Brings the panel to the front and gives it focus. */
    focus(): void;
    /** Programmatically sets the minimized state of the panel. */
    setMinimized(minimized: boolean): void;
    /** Returns `true` if the panel is currently minimized. */
    isMinimized(): boolean;
    /** Toggles the visibility of the panel. */
    toggleVisibility(): void;
    /** Shows the panel. */
    show(): void;
    /** Hides the panel. */
    hide(): void;
    /** Removes the panel from the DOM and cleans up its resources. */
    destroy(): void;
    /** Toggles the pinned state of the panel. */
    togglePin(): void;
    /** Returns `true` if the panel is currently pinned. */
    isPinned(): boolean;
    /**
     * Registers an event listener for panel events.
     * @param event The name of the event to listen for.
     * @param cb The callback function to execute when the event occurs.
     */
    on(event: 'focus' | 'minimize' | 'close' | 'show' | 'hide', cb: () => void): void;
    /** Returns the current state of the panel. */
    getState(): PanelState;
    /** Sets the position of the panel. */
    setPosition(x: number, y: number): void;
    /** Sets the size of the panel. */
    setSize(width: number, height: number): void;
}
