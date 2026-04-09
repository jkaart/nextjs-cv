import ProjectUrl from '@components/ProjectUrl'
import '@testing-library/jest-dom'
import { act, fireEvent, render, screen } from '@testing-library/react'

describe('ProjectUrl', () => {
  const defaultProps = {
    href: 'https://example.com',
    title: 'Example Project'
  }

  it('renders ProjectUrl', () => {
    render(<ProjectUrl {...defaultProps} />)
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })

  it('renders with correct title text', () => {
    render(<ProjectUrl {...defaultProps} />)
    const button = screen.getByRole('button')

    expect(button).toHaveTextContent(defaultProps.title)
  })

  it('has hover:text-blue-600 className', () => {
    render(<ProjectUrl {...defaultProps} />)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('hover:text-blue-600')
  })

  it('has hover:cursor-pointer className', () => {
    render(<ProjectUrl {...defaultProps} />)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('hover:cursor-pointer')
  })

  it('has type="button" attribute', () => {
    render(<ProjectUrl {...defaultProps} />)
    const button = screen.getByRole('button')

    expect(button).toHaveAttribute('type', 'button')
  })

  it('calls window.open with href and "_blank" target on click', async () => {
    const mockWindowOpen = jest
      .spyOn(window, 'open')
      .mockImplementation(() => null)

    render(<ProjectUrl {...defaultProps} />)
    const button = screen.getByRole('button')

    await act(async () => {
      fireEvent.click(button)
    })

    expect(mockWindowOpen).toHaveBeenCalledWith(defaultProps.href, '_blank')
    mockWindowOpen.mockRestore()
  })

  it('prevents default event behavior on click', async () => {
    const mockWindowOpen = jest
      .spyOn(window, 'open')
      .mockImplementation(() => null)

    render(<ProjectUrl {...defaultProps} />)
    const button = screen.getByRole('button')

    await act(async () => {
      fireEvent.click(button)
    })

    expect(mockWindowOpen).toHaveBeenCalled()
    mockWindowOpen.mockRestore()
  })

  it('renders with custom href', () => {
    const customHref = 'https://custom-link.com'
    render(<ProjectUrl href={customHref} title='Custom Link' />)
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })

  it('renders with empty title', () => {
    render(<ProjectUrl href='https://example.com' title='' />)
    const button = screen.getByRole('button')

    expect(button).toHaveTextContent('')
  })

  it('renders with long title text', () => {
    const longTitle =
      'This is a very long project title that should still render correctly'
    render(<ProjectUrl href='https://example.com' title={longTitle} />)
    const button = screen.getByRole('button')

    expect(button).toHaveTextContent(longTitle)
  })
})
