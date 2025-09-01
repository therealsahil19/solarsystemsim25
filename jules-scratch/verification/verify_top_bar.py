import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # 1. Go to the page
        await page.goto("http://localhost:5173")

        # 2. Wait for the page to load a bit, specifically for a canvas element
        await expect(page.locator("canvas")).to_be_visible(timeout=10000)

        # 3. Take a screenshot of the desktop view
        await page.screenshot(path="jules-scratch/verification/desktop_view.png")

        # 4. Resize for mobile view
        await page.set_viewport_size({"width": 700, "height": 800})

        # 5. Find and click the "More" menu button
        more_menu_toggle = page.locator("#more-menu-toggle")
        await expect(more_menu_toggle).to_be_visible()
        await more_menu_toggle.click()

        # 6. Wait for the menu content to be visible
        more_menu_content = page.locator("#more-menu-content")
        await expect(more_menu_content).to_be_visible()

        # 7. Take a screenshot of the mobile view with the menu open
        await page.screenshot(path="jules-scratch/verification/mobile_view_more_menu.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
