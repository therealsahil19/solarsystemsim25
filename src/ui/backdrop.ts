class BackdropManager {
    private static instance: BackdropManager;
    private backdropElement: HTMLElement;
    private activePanelCount = 0;

    private constructor() {
        this.backdropElement = document.createElement('div');
        this.backdropElement.className = 'modal-backdrop';
        this.backdropElement.style.display = 'none';
        document.body.appendChild(this.backdropElement);
    }

    public static getInstance(): BackdropManager {
        if (!BackdropManager.instance) {
            BackdropManager.instance = new BackdropManager();
        }
        return BackdropManager.instance;
    }

    public show() {
        this.activePanelCount++;
        this.backdropElement.style.display = 'block';
    }

    public hide() {
        this.activePanelCount--;
        if (this.activePanelCount <= 0) {
            this.backdropElement.style.display = 'none';
            this.activePanelCount = 0; // Reset to 0 in case of weirdness
        }
    }
}

export const Backdrop = BackdropManager.getInstance();
