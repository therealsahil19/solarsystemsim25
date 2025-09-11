import { test, expect } from '@playwright/test';

test.describe('Non-Functional Feature Tests', () => {

  test('3D Solar System Visualization: Renders the sun, planets, and major moons', async ({ page }) => {
    page.on('console', msg => console.log(msg.text()));
    await page.addInitScript(() => {
        localStorage.setItem('onboarding-tour-shown', 'true');
    });
    await page.goto('/');
    await page.waitForFunction(() => (window as any).__APP_INSTANCE);

    // Check for the main canvas where the 3D scene is rendered
    const canvas = page.locator('canvas#bg');
    await expect(canvas).toBeVisible();

    // Check for the top bar which contains controls
    const topBar = page.locator('#top-bar');
    await expect(topBar).toBeVisible();

    // Check that the main settings panel is initially hidden
    const mainPanel = page.locator('#mainPanel');
    await expect(mainPanel).toBeHidden();

    // Open the main panel using the E2E helper
    await page.evaluate(() => {
        (window as any).__E2E__.openPanel('main');
    });

    // Now check that the main panel is visible
    await expect(mainPanel).toBeVisible();
  });
  test('Dynamic Orbital Simulation: Planets move over time', async ({ page }) => {
    await page.addInitScript(() => {
        localStorage.setItem('onboarding-tour-shown', 'true');
    });
    await page.goto('/');
    await page.waitForFunction(() => (window as any).__APP_INSTANCE);

    const getMarsPosition = () => {
      return page.evaluate(() => {
        const app = (window as any).__APP_INSTANCE;
        const marsData = app.simulation.bodyMap.get('mars');
        return marsData.physicsPosition;
      });
    };

    await page.waitForFunction(() => {
        const app = (window as any).__APP_INSTANCE;
        const marsData = app.simulation.bodyMap.get('mars');
        return marsData.physicsPosition.x !== 0;
    });
    const initialPosition = await getMarsPosition();
    expect(initialPosition).toBeDefined();

    // Wait for the simulation to run for a bit
    await page.waitForTimeout(2000);

    const finalPosition = await getMarsPosition();
    expect(finalPosition).toBeDefined();

    // Check that the position has changed on at least one axis.
    const positionChanged = initialPosition.x !== finalPosition.x ||
                            initialPosition.y !== finalPosition.y ||
                            initialPosition.z !== finalPosition.z;

    expect(positionChanged).toBe(true);
  });
  test('Adjustable Simulation Speed: Slider changes the time scale', async ({ page }) => {
    await page.addInitScript(() => {
        localStorage.setItem('onboarding-tour-shown', 'true');
    });
    await page.goto('/');
    await page.waitForFunction(() => (window as any).__APP_INSTANCE);

    const getTimeScale = () => {
      return page.evaluate(() => {
        const app = (window as any).__APP_INSTANCE;
        return app.store.getState().timeScale;
      });
    };

    const initialTimeScale = await getTimeScale();

    // Set the slider to a new value
    const slider = page.locator('#time-scale-slider');
    await slider.fill('0.8'); // Corresponds to a high time scale

    const finalTimeScale = await getTimeScale();

    expect(finalTimeScale).not.toEqual(initialTimeScale);
  });
  test('Celestial Body Selector: Can select a planet', async ({ page }) => {
    await page.addInitScript(() => {
        localStorage.setItem('onboarding-tour-shown', 'true');
    });
    await page.goto('/');
    await page.waitForFunction(() => (window as any).__APP_INSTANCE);

    await page.evaluate(async () => {
        const app = (window as any).__APP_INSTANCE;
        await app.onBodySelected('earth');
    });

    // The info panel should appear and show "Earth"
    const infoPanel = page.locator('#infoPanel');
    await expect(infoPanel).toBeVisible();
    const infoName = page.locator('#info-name');
    await expect(infoName).toHaveText('Earth');
  });

  test('Camera and Interaction: Solar System View button works correctly', async ({ page }) => {
    await page.addInitScript(() => {
        localStorage.setItem('onboarding-tour-shown', 'true');
    });
    await page.goto('/');
    await page.waitForFunction(() => (window as any).__APP_INSTANCE);
    await page.evaluate(async () => {
        const app = (window as any).__APP_INSTANCE;
        await app.onBodySelected('earth');
    });

    // The info panel should appear and show "Earth"
    const infoPanel = page.locator('#infoPanel');
    await expect(infoPanel).toBeVisible();
    const infoName = page.locator('#info-name');
    await expect(infoName).toHaveText('Earth');

    // The "Solar System View" button should be visible
    const solarSystemViewButton = page.locator('#free-camera-btn');
    await expect(solarSystemViewButton).toBeVisible();

    // Click the "Solar System View" button
    await solarSystemViewButton.click();
    await page.waitForTimeout(100);

    // The button should now be hidden
    await expect(solarSystemViewButton).toBeHidden();

    // Check that panning is re-enabled
    const getIsPanEnabled = () => {
      return page.evaluate(() => {
        const e2e = (window as any).__E2E__;
        return e2e.controls.enablePan;
      });
    };

    expect(await getIsPanEnabled()).toBe(true);
  });

  test('UI and Information: Info panel can be closed', async ({ page }) => {
    await page.addInitScript(() => {
        localStorage.setItem('onboarding-tour-shown', 'true');
    });
    await page.goto('/');
    await page.waitForFunction(() => (window as any).__APP_INSTANCE);

    await page.evaluate(async () => {
        const app = (window as any).__APP_INSTANCE;
        await app.onBodySelected('earth');
    });

    const infoPanel = page.locator('#infoPanel');
    await expect(infoPanel).toBeVisible();

    await page.evaluate(() => {
        const app = (window as any).__APP_INSTANCE;
        app.infoPanelManager.hide();
    });

    await expect(infoPanel).toBeHidden();
  });

  test('UI and Information: Info panel has colored border', async ({ page }) => {
    await page.addInitScript(() => {
        localStorage.setItem('onboarding-tour-shown', 'true');
    });
    await page.goto('/');
    await page.waitForFunction(() => (window as any).__APP_INSTANCE);

    await page.evaluate(async () => {
        const app = (window as any).__APP_INSTANCE;
        await app.onBodySelected('earth');
    });

    const infoPanelHeader = page.locator('#infoPanelHeader');
    const borderColor = await infoPanelHeader.evaluate((el) => {
        return window.getComputedStyle(el).borderTopColor;
    });
    expect(borderColor).not.toEqual('rgba(0, 0, 0, 0)');
  });

  test('UI and Information: Info panel has tooltips', async ({ page }) => {
    await page.addInitScript(() => {
        localStorage.setItem('onboarding-tour-shown', 'true');
    });
    await page.goto('/');
    await page.waitForFunction(() => (window as any).__APP_INSTANCE);

    await page.evaluate(async () => {
        const app = (window as any).__APP_INSTANCE;
        await app.onBodySelected('earth');
    });

    const semiMajorAxisStat = page.locator('[data-e2e="stat-semi-major-axis"]');
    await page.evaluate(() => {
        (window as any).__E2E__.showTooltip('stat-semi-major-axis');
    });

    const tooltipText = semiMajorAxisStat.locator('.tooltip-text');
    await expect(tooltipText).toBeVisible();
    await expect(tooltipText).toHaveText('The average distance from its parent body.');
  });

  test('Astronomical Scenery: Renders starry background', async ({ page }) => {
    await page.addInitScript(() => {
        localStorage.setItem('onboarding-tour-shown', 'true');
    });
    await page.goto('/');
    await page.waitForFunction(() => (window as any).__APP_INSTANCE);

    console.log(await page.evaluate(() => (window as any).__E2E__));
    const starfieldExists = await page.evaluate(() => {
        const e2e = (window as any).__E2E__;
        return e2e.scene.children.some((obj) => obj.name === 'starfield');
    });

    expect(starfieldExists).toBe(true);
  });
});
