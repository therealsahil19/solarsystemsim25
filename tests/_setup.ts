import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    // 1. Disable animations and transitions to prevent flakiness.
    await page.addInitScript(() => {
      // Mock matchMedia for `prefers-reduced-motion`.
      window.matchMedia = (query) => ({
        matches: query.includes('prefers-reduced-motion'),
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      });
      // Inject CSS to disable all animations and transitions.
      const style = document.createElement('style');
      style.innerHTML = `
        *, *::before, *::after {
          transition-duration: 0s !important;
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          scroll-behavior: auto !important;
        }
      `;
      document.head.appendChild(style);
    });

    // Use the modified page object in the test.
    await use(page);
  },
});

export { expect };
