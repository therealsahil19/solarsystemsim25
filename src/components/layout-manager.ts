import uiStore from '../state/uiStore';

import uiStore from '../state/uiStore';

export class LayoutManager {
  private toggleButton: HTMLElement | null = null;
  private leftCollapseButton: HTMLElement | null = null;
  private rightCollapseButton: HTMLElement | null = null;

  public init() {
    this.createToggleButton();
    this.createLeftCollapseButton();
    this.createRightCollapseButton();

    uiStore.subscribe(
      (state) => state.isLeftSidebarCollapsed,
      (isCollapsed) => this.updateSidebarState('.sidebar', isCollapsed, this.leftCollapseButton, '◀', '▶')
    );

    uiStore.subscribe(
      (state) => state.isRightSidebarCollapsed,
      (isCollapsed) => this.updateSidebarState('.controls', isCollapsed, this.rightCollapseButton, '▶', '◀')
    );
  }

  private updateSidebarState(
    selector: string,
    isCollapsed: boolean,
    button: HTMLElement | null,
    expandIcon: string,
    collapseIcon: string
  ) {
    const element = document.querySelector(selector);
    const appContainer = document.querySelector('.app-container');
    if (element && appContainer) {
      element.classList.toggle('collapsed', isCollapsed);
      appContainer.classList.toggle(`${selector.substring(1)}-collapsed`, isCollapsed);
      if (button) {
        button.innerHTML = isCollapsed ? expandIcon : collapseIcon;
      }
    }
  }

  private createToggleButton() {
    this.toggleButton = document.createElement('button');
    this.toggleButton.className = 'sidebar-toggle';
    this.toggleButton.innerHTML = '☰';
    this.toggleButton.setAttribute('aria-label', 'Toggle sidebar');
    this.toggleButton.setAttribute('aria-controls', 'sidebar');
    this.toggleButton.setAttribute('aria-expanded', 'false');
    this.toggleButton.addEventListener('click', () => this.toggleSidebar());
    document.body.appendChild(this.toggleButton);
  }

  private createLeftCollapseButton() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) {
      console.error('LayoutManager: .sidebar element not found.');
      return;
    }
    this.leftCollapseButton = this.createCollapseButton(
      sidebar,
      'left',
      () => uiStore.getState().toggleLeftSidebar(),
      '◀'
    );
  }

  private createRightCollapseButton() {
    const controls = document.querySelector('.controls');
    if (!controls) {
      console.error('LayoutManager: .controls element not found.');
      return;
    }
    this.rightCollapseButton = this.createCollapseButton(
      controls,
      'right',
      () => uiStore.getState().toggleRightSidebar(),
      '▶'
    );
  }

  private createCollapseButton(
    parent: Element,
    position: 'left' | 'right',
    action: () => void,
    initialIcon: string
  ): HTMLElement {
    const button = document.createElement('button');
    button.className = `sidebar-collapse-toggle ${position}`;
    button.innerHTML = initialIcon;
    button.setAttribute('aria-label', `Collapse ${position} sidebar`);
    button.addEventListener('click', action);
    parent.prepend(button);
    return button;
  }

  private toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && this.toggleButton) {
      const isOpen = sidebar.classList.toggle('open');
      this.toggleButton.setAttribute('aria-expanded', String(isOpen));
    } else {
      console.error('LayoutManager: .sidebar element not found.');
    }
  }
}
