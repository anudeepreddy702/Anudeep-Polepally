import { test, expect } from '@playwright/test'

test.describe('Navigation Tests', () => {
    test('should navigate to home page', async ({ page }) => {
        await page.goto('/')
        await expect(page).toHaveTitle(/Andy's World/)
        await expect(page.locator('h2')).toContainText('Life is an Adventure')
    })

    test('should navigate to bucket list page', async ({ page }) => {
        await page.goto('/')
        await page.click('text=View My Bucket List')
        await expect(page).toHaveURL(/.*bucketlist/)
    })

    test('should navigate to about page', async ({ page }) => {
        await page.goto('/')
        await page.click('text=Read My Story')
        await expect(page).toHaveURL(/.*about/)
    })

    test('should navigate using navigation menu', async ({ page }) => {
        await page.goto('/')

        // Test navigation to different pages
        const links = ['About', 'Resources', 'About Site']

        for (const linkText of links) {
            const link = page.locator(`nav a:has-text("${linkText}")`)
            if (await link.count() > 0) {
                await link.first().click()
                await page.waitForLoadState('networkidle')
                await page.goto('/')
            }
        }
    })

    test('should handle back navigation', async ({ page }) => {
        await page.goto('/')
        await page.click('text=View My Bucket List')
        await page.goBack()
        await expect(page.locator('h2')).toContainText('Life is an Adventure')
    })
})
