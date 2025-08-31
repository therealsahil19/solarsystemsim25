import * as dom from './dom';

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
        panelStartX = dom.infoPanel.offsetLeft;
        panelStartY = dom.infoPanel.offsetTop;
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', onDragEnd);
    });

    function onDrag(e: MouseEvent) {
        if (!isDragging) return;
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        dom.infoPanel.style.left = `${panelStartX + dx}px`;
        dom.infoPanel.style.top = `${panelStartY + dy}px`;
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
        panelStartWidth = dom.infoPanel.offsetWidth;
        panelStartHeight = dom.infoPanel.offsetHeight;
        document.addEventListener('mousemove', onResize);
        document.addEventListener('mouseup', onResizeEnd);
        e.stopPropagation(); // Prevent dragging while resizing
    });

    function onResize(e: MouseEvent) {
        if (!isResizing) return;
        const dx = e.clientX - resizeStartX;
        const dy = e.clientY - resizeStartY;
        dom.infoPanel.style.width = `${panelStartWidth + dx}px`;
        dom.infoPanel.style.height = `${panelStartHeight + dy}px`;
    }

    function onResizeEnd() {
        isResizing = false;
        document.removeEventListener('mousemove', onResize);
        document.removeEventListener('mouseup', onResizeEnd);
    }

    // --- Closable ---
    closeButton.addEventListener('click', () => {
        dom.infoPanel.classList.add('hidden');
    });

    // --- Collapsible Advanced Details ---
    dom.advancedDetailsToggle.addEventListener('click', () => {
        dom.advancedDetailsContent.classList.toggle('hidden');
    });
}

export function updateInfoPanelColor(color: string): void {
    dom.infoPanel.style.borderTopColor = color;
}

export function updateInfoPanelForBody(data: any, type: string, color: string): void {
    dom.smallInfoCard.classList.remove('hidden');
    dom.cardTitle.textContent = data.name;
    dom.cardThumb.src = data.texture || '';
    dom.cardThumb.alt = `${data.name} thumbnail`;

    dom.infoName.textContent = data.name;
    updateInfoPanelColor(color);

    dom.infoImageContainer.innerHTML = '';
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");
    rect.setAttribute("fill", color);
    svg.appendChild(rect);
    dom.infoImageContainer.appendChild(svg);

    dom.infoBasicStats.innerHTML = '';
    const stats: { [key: string]: { value: string; tooltip?: string | null } } = {
        'Radius': { value: `${data.radius.toLocaleString()} km` },
        'Distance': {
            value: type === 'moon' ? `${Math.round(data.semiMajorAxisKm).toLocaleString()} km` : `${data.semiMajorAxis} AU`,
            tooltip: type !== 'moon' ? 'Astronomical Unit: the average distance from Earth to the Sun.' : null
        },
        'Orbital Period': {
            value: `${data.orbitalPeriod} days`,
            tooltip: 'The time it takes for the object to complete one orbit around its parent body.'
        }
    };

    for (const [key, { value, tooltip }] of Object.entries(stats)) {
        const strong = document.createElement('strong');
        strong.textContent = `${key}:`;

        const span = document.createElement('span');
        span.textContent = value;

        if (tooltip) {
            const tooltipSpan = document.createElement('span');
            tooltipSpan.className = 'tooltip';
            tooltipSpan.textContent = '(?)';
            const tooltipText = document.createElement('span');
            tooltipText.className = 'tooltip-text';
            tooltipText.textContent = tooltip;
            tooltipSpan.appendChild(tooltipText);
            span.appendChild(tooltipSpan);
        }

        dom.infoBasicStats.appendChild(strong);
        dom.infoBasicStats.appendChild(span);
    }

    const advancedStats: { [key: string]: string } = {};
    if (data.axialTilt) {
        advancedStats['Axial Tilt'] = `${data.axialTilt}°`;
    }
    if (data.rings) {
        advancedStats['Rings'] = `${data.rings.bands.length} main bands`;
    }

    if (Object.keys(advancedStats).length > 0) {
        dom.infoAdvancedDetails.classList.remove('hidden');
        dom.advancedDetailsContent.innerHTML = '';
        for (const [key, value] of Object.entries(advancedStats)) {
            const strong = document.createElement('strong');
            strong.textContent = `${key}:`;
            const span = document.createElement('span');
            span.textContent = value;
            dom.advancedDetailsContent.appendChild(strong);
            dom.advancedDetailsContent.appendChild(span);
        }
    } else {
        dom.infoAdvancedDetails.classList.add('hidden');
    }

    dom.infoPanel.classList.remove('hidden');
    dom.freeCameraButton.classList.remove('hidden');
}
