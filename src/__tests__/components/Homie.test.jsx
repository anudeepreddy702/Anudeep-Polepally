import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import Homie from '../../Group/Homie'

const MockHomie = ({ darkMode = false, toggleMode = () => { } }) => (
    <BrowserRouter>
        <Homie darkMode={darkMode} toggleMode={toggleMode} />
    </BrowserRouter>
)

describe('Homie Component', () => {
    it('should render without crashing', () => {
        render(<MockHomie />)
    })

    it('should display main heading', () => {
        render(<MockHomie />)
        expect(screen.getByText('Life is an Adventure')).toBeInTheDocument()
    })

    it('should display intro text', () => {
        render(<MockHomie />)
        expect(screen.getByText(/I believe life is best measured/i)).toBeInTheDocument()
    })

    it('should display CTA buttons', () => {
        render(<MockHomie />)
        expect(screen.getByText('Read My Story')).toBeInTheDocument()
        expect(screen.getByText('View My Bucket List')).toBeInTheDocument()
    })

    it('should have images', () => {
        render(<MockHomie />)
        const images = screen.getAllByRole('img')
        expect(images.length).toBeGreaterThan(0)
    })

    it('should render with dark mode', () => {
        render(<MockHomie darkMode={true} />)
        expect(screen.getByText('Life is an Adventure')).toBeInTheDocument()
    })
})
