import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/__tests__/setup.js',
        css: true,
        pool: 'forks',
        poolOptions: {
            forks: {
                singleFork: true,
            },
        },
        exclude: [
            '**/node_modules/**',
            '**/dist/**',
            '**/e2e/**',
            '**/.{idea,git,cache,output,temp}/**'
        ],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: [
                'node_modules/',
                'src/__tests__/',
                'e2e/',
                '*.config.js',
                'dist/'
            ]
        }
    }
})
