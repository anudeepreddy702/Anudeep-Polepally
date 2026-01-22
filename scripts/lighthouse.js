import lighthouse from 'lighthouse'
import * as chromeLauncher from 'chrome-launcher'
import fs from 'fs'
import path from 'path'

const url = 'http://localhost:5173'

async function runLighthouse() {
    console.log('🚀 Starting Lighthouse performance test...\n')

    // Launch Chrome
    const chrome = await chromeLauncher.launch({
        chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox']
    })

    const options = {
        logLevel: 'info',
        output: 'html',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        port: chrome.port,
    }

    try {
        // Run Lighthouse
        const runnerResult = await lighthouse(url, options)

        // Extract scores
        const { lhr } = runnerResult
        const categories = lhr.categories

        console.log('\n📊 Lighthouse Results:\n')
        console.log('━'.repeat(50))

        // Performance
        const perfScore = Math.round(categories.performance.score * 100)
        console.log(`⚡ Performance:     ${perfScore}/100 ${getScoreEmoji(perfScore)}`)

        // Accessibility
        const a11yScore = Math.round(categories.accessibility.score * 100)
        console.log(`♿ Accessibility:   ${a11yScore}/100 ${getScoreEmoji(a11yScore)}`)

        // Best Practices
        const bpScore = Math.round(categories['best-practices'].score * 100)
        console.log(`✅ Best Practices:  ${bpScore}/100 ${getScoreEmoji(bpScore)}`)

        // SEO
        const seoScore = Math.round(categories.seo.score * 100)
        console.log(`🔍 SEO:             ${seoScore}/100 ${getScoreEmoji(seoScore)}`)

        console.log('━'.repeat(50))

        // Core Web Vitals
        console.log('\n📈 Core Web Vitals:\n')
        const metrics = lhr.audits

        if (metrics['largest-contentful-paint']) {
            const lcp = metrics['largest-contentful-paint'].displayValue
            console.log(`🎨 LCP (Largest Contentful Paint): ${lcp}`)
        }

        if (metrics['cumulative-layout-shift']) {
            const cls = metrics['cumulative-layout-shift'].displayValue
            console.log(`📐 CLS (Cumulative Layout Shift):  ${cls}`)
        }

        if (metrics['total-blocking-time']) {
            const tbt = metrics['total-blocking-time'].displayValue
            console.log(`⏱️  TBT (Total Blocking Time):      ${tbt}`)
        }

        if (metrics['speed-index']) {
            const si = metrics['speed-index'].displayValue
            console.log(`🏃 Speed Index:                     ${si}`)
        }

        // Save HTML report
        const reportDir = path.join(process.cwd(), 'lighthouse-reports')
        if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir, { recursive: true })
        }

        const reportPath = path.join(reportDir, `lighthouse-${Date.now()}.html`)
        fs.writeFileSync(reportPath, runnerResult.report)

        console.log(`\n📄 Full report saved to: ${reportPath}`)

        // Check if scores meet thresholds
        console.log('\n🎯 Score Analysis:\n')
        const thresholds = {
            performance: 90,
            accessibility: 90,
            'best-practices': 90,
            seo: 90
        }

        let allPassed = true
        for (const [category, threshold] of Object.entries(thresholds)) {
            const score = Math.round(categories[category].score * 100)
            const passed = score >= threshold
            allPassed = allPassed && passed

            const status = passed ? '✅ PASS' : '❌ FAIL'
            const categoryName = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')
            console.log(`${status} ${categoryName}: ${score}/${threshold}`)
        }

        console.log('\n' + '━'.repeat(50))
        if (allPassed) {
            console.log('✅ All performance thresholds met!')
        } else {
            console.log('⚠️  Some thresholds not met. Check the report for details.')
        }
        console.log('━'.repeat(50) + '\n')

    } catch (error) {
        console.error('❌ Error running Lighthouse:', error)
        process.exit(1)
    } finally {
        await chrome.kill()
    }
}

function getScoreEmoji(score) {
    if (score >= 90) return '🟢'
    if (score >= 50) return '🟡'
    return '🔴'
}

// Check if server is running
console.log(`🔍 Checking if dev server is running at ${url}...`)
console.log('💡 Make sure to run "npm run dev" in another terminal first!\n')

runLighthouse().catch(error => {
    console.error('Fatal error:', error)
    process.exit(1)
})
