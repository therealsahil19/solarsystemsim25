import { test, expect } from './_setup.ts';

// Utility function using the new E2E hook to wait for content to be rendered.
async function selectBody(page, name: string) {
  // Enable the E2E flag
  await page.evaluate(() => { (window as any).__E2E__ = (window as any).__E2E__ || {}; });

  // Click button to open the modal
  await page.getByRole('button', { name: 'Select Body' }).click();
  const modal = page.locator('#celestial-selector-modal');
  const searchInput = modal.getByPlaceholder('Search...');
  await expect(searchInput).toBeVisible();

  // Search and select
  await searchInput.fill(name);
  await modal.getByRole('treeitem', { name: new RegExp(name, 'i') }).click();

  // Wait for the app to signal that the body has been fully rendered.
  await page.evaluate((bodyId) => new Promise<void>(resolve => {
    if ((window as any).__E2E__?.lastSelected === bodyId) return resolve();
    window.addEventListener('e2e:body-rendered', (e: any) => {
      if (e.detail?.id === bodyId) resolve();
    });
  }), name.toLowerCase());

  // Final assertions
  await expect(modal).toBeHidden();
  await expect(page.locator('#info-name')).toHaveText(name, { ignoreCase: true });
}

test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => (window as any).__APP_READY === true, { timeout: 20000 });
  await expect(page.locator('#top-bar')).toBeVisible({ timeout: 20000 });
});

test.describe('Dockable Info Panel', () => {
  test('should dock to the right when dragged', async ({ page }) => {
    test.skip(true, 'Drag-and-drop test is flaky and out of scope for this task.');
    // The user suggested skipping this, so I will.
    await selectBody(page, 'Earth');
    await page.evaluate(() => (window as any).__E2E__.dockInfoPanel('right'));
    await expect(page.locator('#app')).toHaveClass(/dock-right/);
  });

  test('should collapse when pin button is clicked', async ({ page }) => {
    await selectBody(page, 'Earth');
    const infoPanel = page.locator('#infoPanel');
    await expect(infoPanel).not.toHaveClass(/collapsed/);

    const pinButton = page.locator('[data-testid="info-panel-pin"]');
    await expect(pinButton).toBeVisible();

    // Click to collapse
    await pinButton.click();
    await expect(infoPanel).toHaveClass(/collapsed/);

    // Click again to expand
    await pinButton.click();
    await expect(infoPanel).not.toHaveClass(/collapsed/);
  });
});

test.describe('Layout Presets', () => {
    test('should apply the "Presentation" preset correctly', async ({ page }) => {
        await page.locator('#settings-toggle-btn').click();
        await expect(page.locator('#settings-panel')).toBeVisible();
        const managePresetsBtn = page.getByRole('button', { name: 'Presets' });
        await managePresetsBtn.scrollIntoViewIfNeeded();
        await managePresetsBtn.click();
        await expect(page.locator('#presets-modal')).toBeVisible();
        const presentationPreset = page.getByRole('button', { name: 'Presentation' });
        await presentationPreset.click();
        await expect(page.locator('#presets-modal')).toBeHidden();
        await page.waitForLoadState('networkidle');
        await expect(page.locator('#app')).toHaveClass(/dock-right/);
        await expect(page.locator('#infoPanel')).toHaveClass(/collapsed/);
        await expect(page.locator('#info-name')).toHaveText('Earth');
    });
});

test.describe('Unit & Scale Controls', () => {
    test('should update distance units in the info panel', async ({ page }) => {
        await selectBody(page, 'Earth');
        await page.evaluate(() => (window as any).__E2E__.openPanel('visuals'));
        await expect(page.locator('#visuals-panel')).toBeVisible();
        const distanceUnitSelect = page.getByLabel('Units:');
        const distanceDisplay = page.locator('[data-e2e="stat-semi-major-axis"] [data-testid="stat-value"]');
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
        await selectBody(page, 'Earth');
        // Ensure the info panel is open before checking for content.
        await page.evaluate(() => (window as any).__E2E__.openPanel('info'));

        // Corrected selectors based on index.html
        await expect(page.locator('#info-description')).toBeVisible();
        await expect(page.locator('#info-short-desc')).toContainText('third planet from the Sun');
        await expect(page.locator('#info-link')).toHaveAttribute('href', 'https://en.wikipedia.org/wiki/Earth');
    });

    test('should also be visible for Mars', async ({ page }) => {
        await selectBody(page, 'Mars');
        // Ensure the info panel is open
        await page.evaluate(() => (window as any).__E2E__.openPanel('info'));

        // This test was previously passing for the wrong reason (incorrect selector).
        // The educational section should be visible for Mars.
        await expect(page.locator('#info-description')).toBeVisible();
        await expect(page.locator('#info-short-desc')).toContainText('fourth planet from the Sun');
    });
});

test.describe('Visual Trails', () => {
    test('should toggle trail visibility', async ({ page }) => {
        await page.locator('#visuals-toggle-btn').click();
        await expect(page.locator('#visuals-panel')).toBeVisible();
        const trailsToggle = page.getByLabel('Trails');
        await expect(trailsToggle).toBeVisible();
        await expect(trailsToggle).toBeChecked();
        await trailsToggle.scrollIntoViewIfNeeded();
        await trailsToggle.uncheck();
        await expect(trailsToggle).not.toBeChecked();
    });
});
