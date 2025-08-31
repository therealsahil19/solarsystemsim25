import { infoPanel, advancedDetailsToggle, advancedDetailsContent } from './dom';

export function initInfoPanel(): void {
    const header = document.getElementById('info-panel-header') as HTMLDivElement;
    const closeButton = document.getElementById('info-panel-close') as HTMLButtonElement;
    const resizeHandle = document.getElementById('info-panel-resize-handle') as HTMLDivElement;

    // --- Draggable ---
    let isDragging = false;
    let dragStartX: number, dragStartY: number, panelStartX: number, panelStartY: number;

    header.addEventListener('mousedown', (e: MouseEvent) => {
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        panelStartX = infoPanel.offsetLeft;
        panelStartY = infoPanel.offsetTop;
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', onDragEnd);
    });

    function onDrag(e: MouseEvent) {
        if (!isDragging) return;
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        infoPanel.style.left = `${panelStartX + dx}px`;
        infoPanel.style.top = `${panelStartY + dy}px`;
    }

    function onDragEnd() {
        isDragging = false;
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('mouseup', onDragEnd);
    }

    // --- Resizable ---
    let isResizing = false;
    let resizeStartX: number, resizeStartY: number, panelStartWidth: number, panelStartHeight: number;

    resizeHandle.addEventListener('mousedown', (e: MouseEvent) => {
        isResizing = true;
        resizeStartX = e.clientX;
        resizeStartY = e.clientY;
        panelStartWidth = infoPanel.offsetWidth;
        panelStartHeight = infoPanel.offsetHeight;
        document.addEventListener('mousemove', onResize);
        document.addEventListener('mouseup', onResizeEnd);
        e.stopPropagation(); // Prevent dragging while resizing
    });

    function onResize(e: MouseEvent) {
        if (!isResizing) return;
        const dx = e.clientX - resizeStartX;
        const dy = e.clientY - resizeStartY;
        infoPanel.style.width = `${panelStartWidth + dx}px`;
        infoPanel.style.height = `${panelStartHeight + dy}px`;
    }

    function onResizeEnd() {
        isResizing = false;
        document.removeEventListener('mousemove', onResize);
        document.removeEventListener('mouseup', onResizeEnd);
    }

    // --- Closable ---
    closeButton.addEventListener('click', () => {
        infoPanel.classList.add('hidden');
    });

    // --- Collapsible Advanced Details ---
    advancedDetailsToggle.addEventListener('click', () => {
        advancedDetailsContent.classList.toggle('hidden');
    });
}

export function updateInfoPanelColor(color: string): void {
    infoPanel.style.borderTopColor = color;
}
