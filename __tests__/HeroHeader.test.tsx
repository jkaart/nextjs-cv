import '@testing-library/jest-dom'
import HeroHeader from '@components/HeroHeader'
import type { Me } from '@data/data'
import { render, screen } from '@testing-library/react'

describe('HeroHeader', () => {
  const me = {
    firstName: 'Matti',
    lastName: 'Meikäläinen',
    jobTitle: 'Toimitusjohtaja',
    image: {
      src: '',
      altText: 'Kuva minusta'
    }
  } satisfies Me

  it('renders HeroHeader', () => {
    render(<HeroHeader me={me} />)
    const container = screen.getByTestId('hero-header-container')

    expect(container).toBeInTheDocument()
  })

  it('renders H2 headers', () => {
    render(<HeroHeader me={me} />)
    const h2Tags = screen.getAllByRole('heading', { level: 2 })
    expect(h2Tags.length).toEqual(2)
    expect(h2Tags[0]).toBeInTheDocument()
    expect(h2Tags[1]).toBeInTheDocument()
  })

  it('renders fullName header text', () => {
    render(<HeroHeader me={me} />)
    const fullNameElement = screen.getByTestId('me-full-name')

    expect(fullNameElement).toBeInTheDocument()
    expect(fullNameElement).toHaveTextContent(`${me.firstName} ${me.lastName}`)
  })

  it('renders jobTitle header text', () => {
    render(<HeroHeader me={me} />)
    const fullNameElement = screen.getByTestId('me-job-title')

    expect(fullNameElement).toBeInTheDocument()
    expect(fullNameElement).toHaveTextContent(me.jobTitle)
  })
})
