export class LayoutManager {
  private toggleButton: HTMLElement | null = null;

  public init() {
    // The init method is called after DOMContentLoaded, so the body will exist.
    this.createToggleButton();
  }

  private createToggleButton() {
    this.toggleButton = document.createElement('button');
    this.toggleButton.className = 'sidebar-toggle';
    this.toggleButton.innerHTML = '☰';
    this.toggleButton.setAttribute('aria-label', 'Toggle sidebar');
    this.toggleButton.setAttribute('aria-controls', 'sidebar');
    this.toggleButton.setAttribute('aria-expanded', 'false');

    this.toggleButton.addEventListener('click', () => this.toggleSidebar());

    // Appending to the body is still safer for `position: fixed` elements.
    document.body.appendChild(this.toggleButton);
  }

  private toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && this.toggleButton) {
      const isOpen = sidebar.classList.toggle('open');
      this.toggleButton.setAttribute('aria-expanded', String(isOpen));
    } else {
        console.error("LayoutManager: .sidebar element not found. Cannot toggle.");
    }
  }
}
