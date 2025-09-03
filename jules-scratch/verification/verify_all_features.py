import re
from playwright.sync_api import Page, expect, sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        # Navigate to the app
        page.goto("http://localhost:3001/solarsystemsim25/")

        # 1. Verify Quick Access Toolbar
        quick_access_toolbar = page.locator("#quick-access-toolbar")
        expect(quick_access_toolbar).to_be_visible()

        # Check for fade out/in
        page.wait_for_timeout(5000)
        expect(quick_access_toolbar).to_be_hidden()
        page.hover("body")
        expect(quick_access_toolbar).to_be_visible()


        # 2. Test Quick Access Toolbar button
        earth_button = page.locator('button[data-body="Earth"]')
        earth_button.click()
        info_name = page.locator("#info-name")
        expect(info_name).to_have_text("Earth")

        # 3. Test Detailed Selector Panel
        page.locator("#open-celestial-selector-btn").click()
        selector_panel = page.locator("#celestial-selector-panel")
        expect(selector_panel).to_be_visible()

        # Test favorites filter
        # First, favorite a body
        page.locator('.tree-node[data-id="Mars"] .favorite-btn').click()

        fav_toggle = page.locator("#favorites-filter-toggle")
        fav_toggle.check()
        expect(page.locator('.tree-node[data-id="Mars"]')).to_be_visible()
        expect(page.locator('.tree-node[data-id="Earth"]')).to_be_hidden()
        fav_toggle.uncheck()

        # Close the panel
        page.locator("#close-celestial-selector-btn").click()
        expect(selector_panel).to_be_hidden()

        # 4. Test Contextual HUD
        # Close info panel to enable HUD
        page.locator("#info-panel-close").click()
        expect(page.locator("#infoPanel")).to_be_hidden()

        # Click on a planet (approximated by clicking the canvas)
        # This is a bit of a guess since we can't easily target a 3D object
        # We'll click near the center and hope it hits the Sun
        page.locator("#bg").click(position={"x": 600, "y": 400})

        hud = page.locator("#contextual-hud")
        expect(hud).to_be_visible(timeout=2000) # Give it time to appear

        # Test HUD button
        hud.locator("#hud-info-btn").click()
        expect(page.locator("#infoPanel")).to_be_visible()

        # 5. Test Visual Affordances
        # Pill button flash
        follow_button = page.locator("#btn-follow")
        follow_button.click()
        expect(follow_button).to_have_class(re.compile(r'flash'))

        # Time-scale slider tooltip
        slider = page.locator("#time-scale-slider")
        tooltip = page.locator("#time-scale-tooltip")
        slider.hover()
        expect(tooltip).to_have_class(re.compile(r'visible'))

        # 6. Take a screenshot
        page.screenshot(path="jules-scratch/verification/verification.png")
        print("Verification script completed successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")
        page.screenshot(path="jules-scratch/verification/error.png")
    finally:
        browser.close()

with sync_playwright() as p:
    run(p)
