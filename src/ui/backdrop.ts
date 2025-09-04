/**
 * A singleton class that manages a backdrop element for modal dialogs.
 * This ensures that only one backdrop is ever created and that it is only
 * hidden when all modals that use it have been closed.
 */
class BackdropManager {
    /** The singleton instance of the BackdropManager. */
    private static instance: BackdropManager;
    /** The HTML element that serves as the backdrop. */
    private backdropElement: HTMLElement;
    /** A counter to track how many modals are currently using the backdrop. */
    private activePanelCount = 0;

    /**
     * The private constructor initializes the backdrop element and appends it to the body.
     * @private
     */
    private constructor() {
        this.backdropElement = document.createElement('div');
        this.backdropElement.className = 'modal-backdrop';
        this.backdropElement.style.display = 'none';
        document.body.appendChild(this.backdropElement);
    }

    /**
     * Gets the singleton instance of the BackdropManager.
     * @returns The single instance of `BackdropManager`.
     */
    public static getInstance(): BackdropManager {
        if (!BackdropManager.instance) {
            BackdropManager.instance = new BackdropManager();
        }
        return BackdropManager.instance;
    }

    /**
     * Shows the backdrop. It increments a counter so that if multiple modals
     * are opened, the backdrop remains visible until all are closed.
     */
    public show() {
        this.activePanelCount++;
        this.backdropElement.style.display = 'block';
    }

    /**
     * Hides the backdrop. It decrements a counter and only hides the element
     * when the counter reaches zero, ensuring it stays for other active modals.
     */
    public hide() {
        this.activePanelCount--;
        if (this.activePanelCount <= 0) {
            this.backdropElement.style.display = 'none';
            this.activePanelCount = 0; // Reset to 0 to prevent negative counts
        }
    }
}

/**
 * The exported singleton instance of the `BackdropManager`.
 * Import this to control the modal backdrop from anywhere in the application.
 *
 * @example
 * import { Backdrop } from './backdrop';
 *
 * // To show the backdrop when a modal opens:
 * Backdrop.show();
 *
 * // To hide the backdrop when a modal closes:
 * Backdrop.hide();
 */
export const Backdrop = BackdropManager.getInstance();
