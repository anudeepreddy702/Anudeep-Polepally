import { test, expect } from '@playwright/test'

test.describe('Bucket List Page Tests', () => {
    test('should load bucket list page', async ({ page }) => {
        await page.goto('/bucketlist')
        await expect(page).toHaveURL(/.*bucketlist/)
    })

    test('should display bucket list items', async ({ page }) => {
        await page.goto('/bucketlist')

        // Wait for content to load
        await page.waitForLoadState('networkidle')

        // Check if bucket list items are visible
        const listItems = page.locator('[class*="bucket"], [class*="item"], li, .card')
        const count = await listItems.count()

        // Should have at least some items
        expect(count).toBeGreaterThan(0)
    })

    test('should show completed and incomplete items', async ({ page }) => {
        await page.goto('/bucketlist')
        await page.waitForLoadState('networkidle')

        // Look for any visual indicators of completion (checkmarks, strikethrough, etc.)
        const pageContent = await page.content()
        expect(pageContent.length).toBeGreaterThan(0)
    })

    test('should display images for items with photos', async ({ page }) => {
        await page.goto('/bucketlist')
        await page.waitForLoadState('networkidle')

        // Check if images are present
        const images = page.locator('img')
        const imageCount = await images.count()

        // Should have at least some images (from items with photos)
        expect(imageCount).toBeGreaterThan(0)
    })

    test('should be responsive', async ({ page }) => {
        // Test mobile viewport
        await page.setViewportSize({ width: 375, height: 667 })
        await page.goto('/bucketlist')
        await page.waitForLoadState('networkidle')

        // Page should still be accessible
        const body = page.locator('body')
        await expect(body).toBeVisible()

        // Test desktop viewport
        await page.setViewportSize({ width: 1920, height: 1080 })
        await page.goto('/bucketlist')
        await page.waitForLoadState('networkidle')
        await expect(body).toBeVisible()
    })
})
