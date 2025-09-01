from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Listen for all console logs
    page.on("console", lambda msg: print(f"BROWSER LOG: {msg.text}"))

    page.goto("http://localhost:3000/solarsystemsim25/")

    # Give the page time to load
    page.wait_for_selector("#main-controls-panel")

    # Screenshot of the initial state
    page.screenshot(path="jules-scratch/verification/01_initial_state.png")

    # Click on the "Visuals" tab
    page.get_by_role("button", name="Visuals").click()
    page.screenshot(path="jules-scratch/verification/02_visuals_tab.png")

    # Click on the "Controls" tab to go back
    page.get_by_role("button", name="Controls").click()

    # Click on the "Select Body..." button
    page.get_by_role("button", name="Select Body...").click()

    # Wait for the modal to appear
    modal = page.locator("#celestial-selector-modal")
    expect(modal).to_be_visible()

    page.screenshot(path="jules-scratch/verification/03_modal_open.png")

    # Select Mars
    page.get_by_role("treeitem", name="🪐 Mars").click()

    # Wait for a moment to let the UI update
    page.wait_for_timeout(1000)

    # Verify that Mars is selected and modal is closed
    expect(page.locator("#info-name")).to_have_text("Mars")
    expect(page.locator("#celestial-selector-modal")).to_be_hidden()

    page.screenshot(path="jules-scratch/verification/04_mars_selected.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
