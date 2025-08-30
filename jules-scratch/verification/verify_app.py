from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:3000/solarsystemsim25/")

        # Wait for the canvas to be ready
        page.wait_for_selector('canvas')

        # Take a screenshot of the initial state
        page.screenshot(path="jules-scratch/verification/initial_state.png")

        # Open the celestial body selector
        page.click('#celestial-selector-toggle')

        # Add a small delay to allow the dropdown to appear
        page.wait_for_timeout(500)

        # Click on Mars
        mars_selector = 'li[data-name="Mars"] div:nth-child(2)'
        page.wait_for_selector(mars_selector)
        page.click(mars_selector)

        # Wait for the animation to complete
        page.wait_for_timeout(1500)

        # Take a screenshot of the scene with Mars focused
        page.screenshot(path="jules-scratch/verification/verification.png")

        browser.close()

if __name__ == "__main__":
    run()
