import { test, expect } from '@playwright/test';

test.describe('Smoke Test', () => {
  test('should load the main page and have the correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Solar System Sim 25/);
  });

  test('should have a celestial body selector', async ({ page }) => {
    await page.goto('/');
    const selector = page.locator('#celestial-selector-toggle');
    await expect(selector).toBeVisible();
    await expect(selector).toHaveText('Select a Celestial Body');
  });
});
