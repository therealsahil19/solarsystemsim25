from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Wait for the server to start
        time.sleep(10)

        page.goto("http://localhost:3002/solarsystemsim25/")

        # Give the app time to load
        page.wait_for_selector('#app-title', timeout=20000)

        # Default is hybrid, take a screenshot
        page.screenshot(path="jules-scratch/verification/hybrid.png")

        # Switch to realistic
        page.select_option('#scale-preset-select', 'realistic')
        # Wait for transition
        page.wait_for_timeout(500)
        page.screenshot(path="jules-scratch/verification/realistic.png")

        # Switch to educational
        page.select_option('#scale-preset-select', 'educational')
        # Wait for transition
        page.wait_for_timeout(500)
        page.screenshot(path="jules-scratch/verification/educational.png")

        browser.close()

if __name__ == "__main__":
    run()
