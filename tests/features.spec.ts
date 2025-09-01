import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Dockable Info Panel', () => {
  test('should dock to the right when dragged', async ({ page }) => {
    // 1. Select a body to make the panel visible
    await page.locator('#selector-search-input').fill('Earth');
    await page.locator('.tree-node[data-id="earth"]').click();
    await page.waitForSelector('#infoPanel:not(.hidden)');

    // 2. Check that the panel is initially docked left
    const app = page.locator('#app');
    await expect(app).not.toHaveClass(/dock-right/);
    const infoPanel = page.locator('#infoPanel');
    await expect(infoPanel).toBeVisible();

    // 3. Drag the panel header to the right side of the screen
    const header = page.locator('#panelHeader');
    const viewportSize = page.viewportSize();
    if (!viewportSize) throw new Error('Could not get viewport size');

    await header.dragTo(page.locator('body'), {
      targetPosition: { x: viewportSize.width - 100, y: 100 },
    });

    // 4. Assert that the panel is now docked right
    await expect(app).toHaveClass(/dock-right/);
  });

  test('should collapse when pin button is clicked', async ({ page }) => {
    await page.locator('#selector-search-input').fill('Earth');
    await page.locator('.tree-node[data-id="earth"]').click();
    await page.waitForSelector('#infoPanel:not(.hidden)');

    const infoPanel = page.locator('#infoPanel');
    await expect(infoPanel).not.toHaveClass(/collapsed/);

    await page.locator('#pinBtn').click();
    await expect(infoPanel).toHaveClass(/collapsed/);

    await page.locator('#pinBtn').click();
    await expect(infoPanel).not.toHaveClass(/collapsed/);
  });
});

test.describe('Layout Presets', () => {
    test('should apply the "Presentation" preset correctly', async ({ page }) => {
        await page.locator('#manage-presets-btn').click();
        await page.locator('.preset-item button[data-id="builtin-presentation"]').click();

        // Wait for the page to reload and animations to finish
        await page.waitForLoadState('domcontentloaded');
        await page.waitForTimeout(1000);

        // Assert panel is on the right and unpinned (collapsed)
        await expect(page.locator('#app')).toHaveClass(/dock-right/);
        await expect(page.locator('#infoPanel')).toHaveClass(/collapsed/);

        // Assert Earth is selected
        await expect(page.locator('#info-name')).toHaveText('Earth');
    });
});

test.describe('Unit & Scale Controls', () => {
    test('should update distance units in the info panel', async ({ page }) => {
        await page.locator('#selector-search-input').fill('Earth');
        await page.locator('.tree-node[data-id="earth"]').click();
        await page.waitForSelector('#infoPanel:not(.hidden)');

        const distanceUnitSelect = page.locator('#distance-unit-select');
        const distanceDisplay = page.locator('#info-basic-stats > span').nth(1);

        await distanceUnitSelect.selectOption('km');
        await expect(distanceDisplay).toContainText('km');

        await distanceUnitSelect.selectOption('au');
        await expect(distanceDisplay).toContainText('AU');

        await distanceUnitSelect.selectOption('earthR');
        await expect(distanceDisplay).toContainText('R⊕');
    });
});

test.describe('Educational Sidebar', () => {
    test('should be visible for Earth and contain correct info', async ({ page }) => {
        await page.locator('#selector-search-input').fill('Earth');
        await page.locator('.tree-node[data-id="earth"]').click();
        await page.waitForSelector('#edu-section:not(.hidden)');

        await expect(page.locator('#edu-short-desc')).toContainText('third planet from the Sun');
        await expect(page.locator('#edu-link')).toHaveAttribute('href', 'https://en.wikipedia.org/wiki/Earth');
    });

    test('should be hidden for Mars', async ({ page }) => {
        await page.locator('#selector-search-input').fill('Mars');
        await page.locator('.tree-node[data-id="mars"]').click();
        await page.waitForSelector('#infoPanel:not(.hidden)');

        await expect(page.locator('#edu-section')).toBeHidden();
    });
});

test.describe('Visual Trails', () => {
    test('should toggle trail visibility', async ({ page }) => {
        // This is hard to test without access to the scene graph.
        // A possible approach would be to expose trail visibility on a debug object.
        // For now, we'll just test the UI control.
        const trailsToggle = page.locator('#trails-enabled-toggle');
        await expect(trailsToggle).toBeChecked();
        await trailsToggle.uncheck();
        await expect(trailsToggle).not.toBeChecked();
    });
});
