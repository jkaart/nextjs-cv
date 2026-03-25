import IconLink from '@/app/components/common/IconLink'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('IconLink', () => {
  const href = 'http://localhost'

  it('renders IconLink', () => {
    render(<IconLink href={href} iconType='homePage' />)
    const Component = screen.getByTestId('icon-link')

    expect(Component).toBeInTheDocument()
  })

  it(`href attribute are ${href}`, () => {
    render(<IconLink href={href} iconType='homePage' />)
    const Component = screen.getByTestId('icon-link')

    expect(Component).toHaveAttribute('href', href)
  })

  it('renders with right icon', () => {
    render(<IconLink href={href} iconType='homePage' />)
    const icon = screen.getByTestId('react-icon-homepage')

    expect(icon).toBeVisible()
  })
})