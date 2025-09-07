from playwright.sync_api import sync_playwright, expect
import sys

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Listen for all console messages and print them to stderr
        page.on("console", lambda msg: print(f"BROWSER_CONSOLE: {msg.text}", file=sys.stderr))

        try:
            # Navigate to the correct port
            page.goto("http://localhost:5175/", timeout=90000)

            # Wait for the canvas element, which is the root of the 3D scene.
            canvas = page.locator("#bg")
            expect(canvas).to_be_visible(timeout=30000)

            # Add a longer wait to ensure all assets have time to load and the scene to render.
            page.wait_for_timeout(10000)

            # Take a new screenshot for analysis.
            page.screenshot(path="jules-scratch/verification/verification_final.png")

        except Exception as e:
            print(f"An error occurred during Playwright execution: {e}", file=sys.stderr)
            page.screenshot(path="jules-scratch/verification/error_screenshot.png")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
