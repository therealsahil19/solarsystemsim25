import re
from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Listen for console messages
    page.on("console", lambda msg: print(f"PAGE LOG: {msg.text}"))

    # 1. Navigate to the app
    page.goto("http://localhost:3000/solarsystemsim25/")

    # 2. Open the celestial body selector and click on Mars
    page.get_by_role("button", name="Select Body").click()

    # Wait for the selector menu to be populated
    celestial_selector_menu = page.locator("#celestial-selector-menu")
    expect(celestial_selector_menu.get_by_role("treeitem", name="Sun")).to_be_visible(timeout=10000)

    # Expand the Sun node to reveal the planets
    sun_node = page.locator(".tree-node", has=page.locator(".node-name:has-text('Sun')"))
    sun_node.locator(".chevron").first.click()

    # Click on Mars
    page.get_by_role("treeitem", name="Mars").locator(".node-name").click()

    # 3. Wait for the panel to be visible and verify its content
    info_panel = page.locator("#infoPanel")
    expect(info_panel).to_be_visible()

    # Check for the new data fields
    expect(info_panel.get_by_text("Mass:")).to_be_visible()
    expect(info_panel.get_by_text("Density:")).to_be_visible()
    expect(info_panel.get_by_text("Gravity:")).to_be_visible()
    expect(info_panel.get_by_text("Inclination:")).to_be_visible()

    # Check for the image and link
    expect(page.locator("#info-image")).to_be_visible()
    expect(page.locator("#info-image")).to_have_attribute("src", re.compile(r".+"))
    expect(page.get_by_role("link", name="Learn more on Wikipedia")).to_be_visible()

    # 4. Verify the pill buttons and click "Follow"
    follow_button = page.locator("#btn-follow")
    expect(follow_button).to_be_visible()
    expect(follow_button).to_have_attribute("aria-pressed", "false")
    follow_button.click()

    # 5. Verify the "Follow" button is now active
    expect(follow_button).to_have_attribute("aria-pressed", "true")

    # 6. Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)

print("Verification script executed and screenshot taken.")
