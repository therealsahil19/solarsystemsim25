import time
from playwright.sync_api import sync_playwright, Page, expect

def verify_all_fixes(page: Page):
    """
    Consolidated verification script to check all responsive fixes.
    """
    # 1. Navigate to the app and wait for it to load
    page.goto("http://localhost:3000")
    page.wait_for_timeout(3000) # Wait for 3D scene

    # 2. Test control visibility at 375px
    page.set_viewport_size({"width": 375, "height": 812})
    page.wait_for_timeout(500)

    # Check that essential controls are visible
    expect(page.locator("#time-scale-slider")).to_be_visible()
    expect(page.locator("#visual-scale-slider")).to_be_visible()
    expect(page.locator("#help-button")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/screenshot_375px_controls.png")

    # 3. Test Info Panel header at 360px
    page.set_viewport_size({"width": 360, "height": 800})
    # Click on the canvas to select a body and open the panel.
    # A click in the center should select the Sun.
    page.locator("#bg").click()
    page.wait_for_timeout(1000) # Wait for panel to open and animations
    expect(page.locator("#infoPanel")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/screenshot_360px_infopanel.png")
    # Close the info panel to not interfere with next steps
    page.locator("#info-panel-close").click()
    page.wait_for_timeout(500)

    # 4. Test Debug HUD at 640px
    page.set_viewport_size({"width": 640, "height": 800})
    # The debug HUD is hidden by default. The user mentioned a toggle, but it's not in the main UI.
    # I will reveal it by executing javascript, as a user might do via a bookmarklet or console.
    page.evaluate("document.getElementById('debug-hud').classList.remove('hidden')")
    page.wait_for_timeout(500)
    page.screenshot(path="jules-scratch/verification/screenshot_640px_debug_hud.png")
    page.evaluate("document.getElementById('debug-hud').classList.add('hidden')") # Hide it again

    # 5. Test Hamburger Menu and Focus Trap at 375px
    page.set_viewport_size({"width": 375, "height": 812})
    hamburger_button = page.locator("#more-menu-toggle")
    expect(hamburger_button).to_be_visible()
    hamburger_button.click()

    # Wait for the slide-out animation and check if panel is visible
    slide_out_panel = page.locator("#more-menu-content")
    expect(slide_out_panel).to_be_visible()
    page.wait_for_timeout(500)

    # Check focus trap
    page.keyboard.press("Tab")
    # After tabbing, the "Visuals" button should be focused
    visuals_button = page.locator("#visuals-toggle-btn")
    expect(visuals_button).to_be_focused()

    page.screenshot(path="jules-scratch/verification/screenshot_375px_hamburger_open.png")

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        verify_all_fixes(page)
        browser.close()

if __name__ == "__main__":
    main()
