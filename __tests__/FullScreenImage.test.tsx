import FullScreenImage from '@components/FullScreenImage'
import ImageGallery, { type ImageProps } from '@components/ImageGallery'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('FullScreenImage', () => {
  const mockSetSelectedImage = jest.fn()
  const mockImage: ImageProps = {
    src: 'http://localhost/image.jpg',
    alt: 'Test image'
  }

  it('renders nothing when selectedImage is null', () => {
    render(
      <FullScreenImage
        selectedImage={null}
        setSelectedImage={mockSetSelectedImage}
      />
    )
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('renders FullScreenImage with correct image source and alt text', () => {
    const encodedUrl = encodeURIComponent(mockImage.src)

    render(
      <FullScreenImage
        selectedImage={mockImage}
        setSelectedImage={mockSetSelectedImage}
      />
    )

    const img = screen.getByRole('img')
    expect(img).toHaveAttribute(
      'src',
      `/_next/image?url=${encodedUrl}&w=3840&q=75`
    )
    expect(img).toHaveAttribute('alt', mockImage.alt)
  })

  it('renders image with correct dimensions', () => {
    render(
      <FullScreenImage
        selectedImage={mockImage}
        setSelectedImage={mockSetSelectedImage}
      />
    )
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('width', '1280')
    expect(img).toHaveAttribute('height', '720')
  })

  it('renders close button when image is selected', () => {
    render(
      <FullScreenImage
        selectedImage={mockImage}
        setSelectedImage={mockSetSelectedImage}
      />
    )
    const closeButton = screen.getByRole('button')
    expect(closeButton).toBeInTheDocument()
  })

  it('calls setSelectedImage with null when close button is clicked', () => {
    render(
      <FullScreenImage
        selectedImage={mockImage}
        setSelectedImage={mockSetSelectedImage}
      />
    )
    const closeButton = screen.getByRole('button')
    closeButton.click()
    expect(mockSetSelectedImage).toHaveBeenCalledWith(null)
  })

  it('renders container with correct className', () => {
    render(
      <FullScreenImage
        selectedImage={mockImage}
        setSelectedImage={mockSetSelectedImage}
      />
    )
    const container = screen.getByRole('img').closest('div')
    expect(container).toHaveClass(
      'fixed',
      'top-0',
      'left-0',
      'w-full',
      'h-full',
      'flex',
      'justify-center',
      'items-center'
    )
  })

  it('renders FullScreenImage within ImageGallery component', () => {
    const images = ['http://localhost/image1.jpg']
    const slug = 'test-project'
    render(<ImageGallery images={images} slug={slug} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
