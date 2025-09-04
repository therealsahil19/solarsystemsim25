from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    try:
        # 1. Arrange: Go to the application's homepage.
        # Using port 3000 as it is specified in the test:e2e script.
        page.goto("http://localhost:3000")

        # 2. Act: Wait for a key element to be visible.
        # This confirms the page has loaded and the app has initialized.
        app_title = page.get_by_role("heading", name="Solar System Simulator")
        expect(app_title).to_be_visible(timeout=30000) # 30 second timeout

        # 3. Screenshot: Capture the final result for visual verification.
        screenshot_path = "jules-scratch/verification/verification.png"
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

    except Exception as e:
        print(f"An error occurred: {e}")
        # In case of error, still try to take a screenshot for debugging.
        page.screenshot(path="jules-scratch/verification/error.png")
        print("Error screenshot saved to jules-scratch/verification/error.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
