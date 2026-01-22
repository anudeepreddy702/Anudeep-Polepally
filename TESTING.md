# Testing Documentation

This document provides comprehensive information about the testing infrastructure for the portfolio website.

## Table of Contents

- [Overview](#overview)
- [Testing Stack](#testing-stack)
- [Running Tests](#running-tests)
- [Unit Tests](#unit-tests)
- [E2E Tests](#e2e-tests)
- [Performance Tests](#performance-tests)
- [Writing New Tests](#writing-new-tests)
- [CI/CD Integration](#cicd-integration)

## Overview

This project uses a comprehensive testing strategy that includes:

- **Unit Tests**: Testing individual components and functions
- **E2E Tests**: Testing complete user flows and interactions
- **Performance Tests**: Testing page performance, accessibility, and SEO

## Testing Stack

- **[Vitest](https://vitest.dev/)**: Fast unit test framework with native ESM support
- **[React Testing Library](https://testing-library.com/react)**: Testing React components
- **[Playwright](https://playwright.dev/)**: E2E testing across multiple browsers
- **[Lighthouse](https://github.com/GoogleChrome/lighthouse)**: Performance and quality auditing

## Running Tests

### Unit Tests

Run all unit tests:
```bash
npm test
```

Run tests in watch mode (recommended during development):
```bash
npm test -- --watch
```

Run tests with UI:
```bash
npm run test:ui
```

Generate coverage report:
```bash
npm run test:coverage
```

### E2E Tests

Run E2E tests (headless):
```bash
npm run test:e2e
```

Run E2E tests with UI (interactive mode):
```bash
npm run test:e2e:ui
```

Run specific test file:
```bash
npx playwright test e2e/navigation.spec.js
```

Run tests in a specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Performance Tests

**Important**: Make sure the dev server is running first!

```bash
# Terminal 1: Start dev server
npm run dev

# Terminal 2: Run performance tests
npm run test:perf
```

The performance test will:
- Measure Core Web Vitals (LCP, CLS, TBT, Speed Index)
- Test Performance, Accessibility, Best Practices, and SEO
- Generate an HTML report in `lighthouse-reports/`

## Unit Tests

### Test Structure

Unit tests are located in `src/__tests__/` directory:

```
src/__tests__/
├── setup.js                    # Test setup and global mocks
├── App.test.jsx               # App component tests
├── components/
│   ├── Homie.test.jsx        # Home page tests
│   └── NotFound.test.jsx     # 404 page tests
└── data/
    └── bucketList.test.js    # Data validation tests
```

### Example Unit Test

```javascript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MyComponent from '../MyComponent'

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <MyComponent />
      </BrowserRouter>
    )
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

### What to Test

- Component rendering
- User interactions (clicks, inputs)
- Conditional rendering
- Props handling
- Data validation
- Edge cases

## E2E Tests

### Test Structure

E2E tests are located in the `e2e/` directory:

```
e2e/
├── navigation.spec.js    # Navigation flow tests
├── darkmode.spec.js      # Dark mode toggle tests
├── bucketlist.spec.js    # Bucket list page tests
├── 404.spec.js           # 404 page tests
└── cmc.spec.js           # Money transfer comparison tests
```

### Example E2E Test

```javascript
import { test, expect } from '@playwright/test'

test('should navigate to about page', async ({ page }) => {
  await page.goto('/')
  await page.click('text=About')
  await expect(page).toHaveURL(/.*about/)
})
```

### What to Test

- User flows (navigation, form submission)
- Cross-page functionality
- Responsive design
- Browser compatibility
- Dark mode persistence
- Error handling

## Performance Tests

### Metrics Tracked

The Lighthouse test tracks:

1. **Performance Score** (Target: 90+)
   - Largest Contentful Paint (LCP)
   - Cumulative Layout Shift (CLS)
   - Total Blocking Time (TBT)
   - Speed Index

2. **Accessibility Score** (Target: 90+)
   - ARIA attributes
   - Color contrast
   - Semantic HTML
   - Keyboard navigation

3. **Best Practices Score** (Target: 90+)
   - HTTPS usage
   - Console errors
   - Image optimization
   - Security headers

4. **SEO Score** (Target: 90+)
   - Meta tags
   - Heading structure
   - Mobile-friendliness
   - Crawlability

### Reading Reports

After running `npm run test:perf`, open the generated HTML report:

```bash
# Windows
start lighthouse-reports/lighthouse-[timestamp].html

# Mac/Linux
open lighthouse-reports/lighthouse-[timestamp].html
```

## Writing New Tests

### Adding a Unit Test

1. Create a new test file in `src/__tests__/`
2. Import necessary testing utilities
3. Write test cases using `describe` and `it`
4. Use React Testing Library for component tests

Example:
```javascript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MyNewComponent from '../MyNewComponent'

describe('MyNewComponent', () => {
  it('should display title', () => {
    render(<MyNewComponent title="Test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
```

### Adding an E2E Test

1. Create a new `.spec.js` file in `e2e/`
2. Import Playwright test utilities
3. Write test scenarios

Example:
```javascript
import { test, expect } from '@playwright/test'

test.describe('My Feature', () => {
  test('should work correctly', async ({ page }) => {
    await page.goto('/my-page')
    await page.click('button')
    await expect(page.locator('.result')).toBeVisible()
  })
})
```

## CI/CD Integration

### GitHub Actions Example

Create `.github/workflows/test.yml`:

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test
      - run: npx playwright install --with-deps
      - run: npm run test:e2e
```

## Coverage Goals

Aim for the following coverage targets:

- **Statements**: 70%+
- **Branches**: 60%+
- **Functions**: 70%+
- **Lines**: 70%+

View coverage report:
```bash
npm run test:coverage
```

Then open `coverage/index.html` in your browser.

## Troubleshooting

### Tests Failing Due to Missing Dependencies

```bash
npm install
npx playwright install
```

### E2E Tests Timing Out

Increase timeout in `playwright.config.js`:
```javascript
timeout: 30000, // 30 seconds
```

### Performance Tests Not Running

Make sure dev server is running:
```bash
npm run dev
```

Then in another terminal:
```bash
npm run test:perf
```

### Coverage Not Generating

Install coverage provider:
```bash
npm install -D @vitest/coverage-v8
```

## Best Practices

1. **Keep tests simple and focused**: One test should test one thing
2. **Use descriptive test names**: Test names should explain what they test
3. **Avoid testing implementation details**: Test behavior, not implementation
4. **Use data-testid sparingly**: Prefer accessible queries (getByRole, getByText)
5. **Mock external dependencies**: Don't make real API calls in tests
6. **Run tests before committing**: Ensure all tests pass locally
7. **Keep tests fast**: Slow tests won't be run frequently

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/)
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
