export function initInfoPanel() {
    const infoPanel = document.getElementById('info-panel');
    const header = document.getElementById('info-panel-header');
    const closeButton = document.getElementById('info-panel-close');
    const resizeHandle = document.getElementById('info-panel-resize-handle');

    // --- Draggable ---
    let isDragging = false;
    let dragStartX, dragStartY, panelStartX, panelStartY;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        panelStartX = infoPanel.offsetLeft;
        panelStartY = infoPanel.offsetTop;
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', onDragEnd);
    });

    function onDrag(e) {
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
    let resizeStartX, resizeStartY, panelStartWidth, panelStartHeight;

    resizeHandle.addEventListener('mousedown', (e) => {
        isResizing = true;
        resizeStartX = e.clientX;
        resizeStartY = e.clientY;
        panelStartWidth = infoPanel.offsetWidth;
        panelStartHeight = infoPanel.offsetHeight;
        document.addEventListener('mousemove', onResize);
        document.addEventListener('mouseup', onResizeEnd);
        e.stopPropagation(); // Prevent dragging while resizing
    });

    function onResize(e) {
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
    const advancedToggle = document.getElementById('advanced-details-toggle');
    const advancedContent = document.getElementById('advanced-details-content');

    advancedToggle.addEventListener('click', () => {
        advancedContent.classList.toggle('hidden');
    });
}

export function updateInfoPanelColor(color) {
    const infoPanel = document.getElementById('info-panel');
    infoPanel.style.borderTopColor = color;
}
