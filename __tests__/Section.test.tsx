import Section from '@/app/components/common/Section'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Section', () => {
  it('renders Section', () => {
    render(<Section title="Title"><p></p></Section>)
    const section = screen.getByTestId('section')
    expect(section).toBeInTheDocument()
  })

  it('renders H2 title as section children', () => {
    const { getByRole, getByTestId } = render(<Section title="Title"><p></p></Section>)
    const section = getByTestId('section')
    const heading = getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(section).toContainElement(heading)
  })

})
