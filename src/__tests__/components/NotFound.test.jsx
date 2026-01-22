import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import NotFound from '../../Group/NotFound'

const MockNotFound = ({ darkMode = false, toggleMode = () => { } }) => (
    <BrowserRouter>
        <NotFound darkMode={darkMode} toggleMode={toggleMode} />
    </BrowserRouter>
)

describe('NotFound Component', () => {
    it('should render without crashing', () => {
        render(<MockNotFound />)
    })

    it('should display 404 error', () => {
        render(<MockNotFound />)
        expect(screen.getByText('404')).toBeInTheDocument()
    })

    it('should display "Page Not Found" message', () => {
        render(<MockNotFound />)
        expect(screen.getByText('Page Not Found')).toBeInTheDocument()
    })

    it('should display error description', () => {
        render(<MockNotFound />)
        expect(screen.getByText(/Oops! The page you're looking for doesn't exist/i)).toBeInTheDocument()
    })

    it('should have "Go Home" link', () => {
        render(<MockNotFound />)
        const homeLink = screen.getByText('Go Home')
        expect(homeLink).toBeInTheDocument()
        expect(homeLink.closest('a')).toHaveAttribute('href', '/')
    })

    it('should have "Go Back" button', () => {
        render(<MockNotFound />)
        expect(screen.getByText('Go Back')).toBeInTheDocument()
    })

    it('should render with dark mode class', () => {
        const { container } = render(<MockNotFound darkMode={true} />)
        expect(container.querySelector('.appdark')).toBeInTheDocument()
    })

    it('should render with light mode class', () => {
        const { container } = render(<MockNotFound darkMode={false} />)
        expect(container.querySelector('.app')).toBeInTheDocument()
    })
})
