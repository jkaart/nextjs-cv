import Contact from '@/app/components/Contact'
import { render, screen } from '@testing-library/react'

describe('Contact', () => {
  const mockContact = {
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Software Engineer',
    image: '',
    homepage: 'https://example.com',
    email: 'john.doe@example.com',
    gitHub: 'https://github.com/johndoe',
    linkedIn: ''
  }

  it('renders heading with correct text', () => {
    render(<Contact contact={mockContact} />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Tiedot')
  })

  it('renders homepage link when provided', () => {
    render(<Contact contact={mockContact} />)
    const links = screen.getAllByRole('link')
    expect(links[0]).toHaveAttribute('href', 'https://example.com')
  })

  it('renders email link with mailto protocol when provided', () => {
    render(<Contact contact={mockContact} />)
    const links = screen.getAllByRole('link')
    expect(links[1]).toHaveAttribute('href', 'mailto://john.doe@example.com')
  })

  it('renders gitHub link when provided', () => {
    render(<Contact contact={mockContact} />)
    const links = screen.getAllByRole('link')
    expect(links[2]).toHaveAttribute('href', 'https://github.com/johndoe')
  })

  it('does not render linkedIn link when empty', () => {
    render(<Contact contact={mockContact} />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(4)
  })

  it('renders all links with target blank attribute', () => {
    render(<Contact contact={mockContact} />)
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
    })
  })

  it('renders correct number of links (4)', () => {
    render(<Contact contact={mockContact} />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4)
  })
})
