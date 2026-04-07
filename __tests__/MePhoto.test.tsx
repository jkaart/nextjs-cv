import MePhoto from '@components/MePhoto'
import type { Image as MeImage } from '@data/data'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('MePhoto', () => {
  const image: MeImage = {
    src: '/assets/me/photo.png',
    altText: 'Photo'
  }

  beforeEach(() => {
    render(<MePhoto image={image} />)
  })

  it('renders MePhoto', () => {
    const mePhoto = screen.getByAltText(image.altText)
    expect(mePhoto).toBeInTheDocument()
  })

  it('renders Image with correct src', () => {
    const img = screen.getByRole('img')
    expect(img.getAttribute('src')).toMatch(/photo\.png/)
  })

  it('renders Image with correct alt text', () => {
    const img = screen.getByAltText(image.altText)
    expect(img).toHaveAttribute('alt', image.altText)
  })

  it('renders container div with flex classes', () => {
    const container = screen.getByRole('img').closest('div')
    expect(container).toHaveClass('flex-row flex justify-center items-center', {
      exact: true
    })
  })

  it('renders Image with correct width', () => {
    const img = screen.getByRole('img')
    expect(img.getAttribute('width')).toBe('173')
  })

  it('renders Image with correct height', () => {
    const img = screen.getByRole('img')
    expect(img.getAttribute('height')).toBe('230')
  })

  it('renders Image with rounded-md class', () => {
    const img = screen.getByRole('img')
    expect(img).toHaveClass('rounded-md')
  })

  it('renders Image with bg-gray-500 class', () => {
    const img = screen.getByRole('img')
    expect(img).toHaveClass('bg-gray-500')
  })
})
