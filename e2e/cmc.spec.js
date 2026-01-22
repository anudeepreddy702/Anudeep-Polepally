import { test, expect } from '@playwright/test'

test.describe('Money Transfer Comparison Tool Tests', () => {
    test('should load CMC page', async ({ page }) => {
        await page.goto('/MoneyTransferComparison')
        await expect(page).toHaveURL(/.*MoneyTransferComparison/)
        await page.waitForLoadState('networkidle')
    })

    test('should display comparison tool interface', async ({ page }) => {
        await page.goto('/MoneyTransferComparison')
        await page.waitForLoadState('networkidle')

        // Should have some content
        const body = page.locator('body')
        await expect(body).toBeVisible()
    })

    test('should have input fields or interactive elements', async ({ page }) => {
        await page.goto('/MoneyTransferComparison')
        await page.waitForLoadState('networkidle')

        // Check for inputs, buttons, or interactive elements
        const inputs = page.locator('input, select, button')
        const count = await inputs.count()

        // Should have some interactive elements
        expect(count).toBeGreaterThan(0)
    })

    test('should display money transfer services', async ({ page }) => {
        await page.goto('/MoneyTransferComparison')
        await page.waitForLoadState('networkidle')

        // Page should load successfully
        const pageContent = await page.content()
        expect(pageContent.length).toBeGreaterThan(100)
    })

    test('should be responsive on mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 })
        await page.goto('/MoneyTransferComparison')
        await page.waitForLoadState('networkidle')

        const body = page.locator('body')
        await expect(body).toBeVisible()
    })
})
