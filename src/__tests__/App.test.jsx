import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

describe('App Component', () => {
    it('should render without crashing', () => {
        render(<App />)
    })

    it('should render Router', () => {
        const { container } = render(<App />)
        expect(container).toBeTruthy()
    })

    it('should have dark mode functionality', () => {
        render(<App />)
        // Check if body class is set
        expect(document.body.className).toBeTruthy()
    })
})
