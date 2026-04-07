import '@testing-library/jest-dom'
import HamburgerMenu from '@components/HamburgerMenu'
import { render, screen } from '@testing-library/react'

describe('HamburgerMenu', () => {
  const defaultProps = {
    state: false,
    onClick: jest.fn()
  }

  it('renders button when closed', () => {
    render(<HamburgerMenu {...defaultProps} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    const container = screen.getByTestId('hamburger-menu')
    expect(container).toHaveClass('absolute lg:hidden')
  })

  it('renders button with expanded classes when open', () => {
    render(<HamburgerMenu state={true} onClick={jest.fn()} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    const container = screen.getByTestId('hamburger-menu')
    expect(container).toHaveClass(
      'absolute lg:hidden flex top-0 py-2 px-2 z-50 w-full bg-background'
    )
  })

  it('calls onClick when button is clicked', () => {
    const handleClick = jest.fn()
    render(<HamburgerMenu state={false} onClick={handleClick} />)
    screen.getByRole('button').click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('has three span elements for hamburger lines', () => {
    render(<HamburgerMenu {...defaultProps} />)
    const spans = screen.getAllByTestId('hamburger-line')
    expect(spans.length).toBe(3)
  })

  it('transforms middle line to opacity-0 when open', () => {
    render(<HamburgerMenu state={true} onClick={jest.fn()} />)
    const spans = screen.getAllByTestId('hamburger-line')
    // Middle span is the second one (index 1)
    expect(spans[1]).toHaveClass('opacity-0')
  })

  it('rotates top and bottom lines when open', () => {
    render(<HamburgerMenu state={true} onClick={jest.fn()} />)
    const spans = screen.getAllByTestId('hamburger-line')
    // Top span is the first one (index 0) - should have rotate-45 translate-y-2.5
    expect(spans[0]).toHaveClass('rotate-45', 'translate-y-2.5')
    // Bottom span is the third one (index 2) - should have -rotate-45 -translate-y-2.5
    expect(spans[2]).toHaveClass('-rotate-45', '-translate-y-2.5')
  })

  it('does not transform lines when closed', () => {
    render(<HamburgerMenu state={false} onClick={jest.fn()} />)
    const spans = screen.getAllByTestId('hamburger-line')
    expect(spans[0]).not.toHaveClass('rotate-45', 'translate-y-2.5')
    expect(spans[1]).not.toHaveClass('opacity-0')
    expect(spans[2]).not.toHaveClass('-rotate-45', '-translate-y-2.5')
  })

  it('has button with type="button"', () => {
    render(<HamburgerMenu {...defaultProps} />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
  })
})
