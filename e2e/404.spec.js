import { test, expect } from '@playwright/test'

test.describe('404 Page Tests', () => {
    test('should show 404 page for invalid routes', async ({ page }) => {
        await page.goto('/this-page-does-not-exist')

        // Should show 404 content
        await expect(page.locator('text=404')).toBeVisible()
        await expect(page.locator('text=Page Not Found')).toBeVisible()
    })

    test('should display error message', async ({ page }) => {
        await page.goto('/invalid-route-12345')

        // Should show descriptive error message
        // Should show descriptive error message
        await expect(page.getByText(/doesn't exist/i)).toBeVisible()
    })

    test('should have "Go Home" link', async ({ page }) => {
        await page.goto('/non-existent-page')

        const homeLink = page.locator('a:has-text("Go Home")')
        await expect(homeLink).toBeVisible()

        // Click and verify navigation
        await homeLink.click()
        await expect(page).toHaveURL('/')
    })

    test('should have "Go Back" button', async ({ page }) => {
        // First visit home
        await page.goto('/')

        // Then visit invalid page
        await page.goto('/invalid-page')

        const backButton = page.locator('button:has-text("Go Back")')
        await expect(backButton).toBeVisible()

        // Click back button
        await backButton.click()

        // Should navigate back to home
        await expect(page).toHaveURL('/')
    })

    test('should render with navigation and footer', async ({ page }) => {
        await page.goto('/404-test-page')

        // Should still have navigation
        const nav = page.locator('nav')
        await expect(nav.first()).toBeVisible()

        // Should still have footer
        const footer = page.locator('footer')
        if (await footer.count() > 0) {
            await expect(footer.first()).toBeVisible()
        }
    })

    test('should work with dark mode', async ({ page }) => {
        await page.goto('/non-existent')

        // Find dark mode toggle
        const toggleButton = page.locator('button:has-text("🌙"), button:has-text("☀️")').first()

        if (await toggleButton.count() > 0) {
            await toggleButton.click()
            await page.waitForTimeout(300)

            // Page should still be functional
            await expect(page.locator('text=404')).toBeVisible()
        }
    })
})
