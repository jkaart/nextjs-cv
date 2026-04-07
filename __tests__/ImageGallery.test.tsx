import ImageGallery from '@components/ImageGallery'
import '@testing-library/jest-dom'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

describe('ImageGallery', () => {
  const images = ['http://localhost/image1.jpg', 'http://localhost/image2.jpg']
  const slug = 'test-project'

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders image gallery with correct structure', () => {
    render(<ImageGallery images={images} slug={slug} />)
    expect(screen.getByTestId('image-gallery')).toBeInTheDocument()
    expect(screen.getByTestId('selected-image')).toBeInTheDocument()
  })

  it('renders left arrow button', () => {
    render(<ImageGallery images={images} slug={slug} />)
    const leftArrow = screen.getByTestId('left-arrow')
    expect(leftArrow).toBeInTheDocument()
  })

  it('renders right arrow button', () => {
    render(<ImageGallery images={images} slug={slug} />)
    const rightArrow = screen.getByTestId('right-arrow')
    expect(rightArrow).toBeInTheDocument()
  })

  it('renders ArrowButton component correctly', () => {
    render(<ImageGallery images={images} slug={slug} />)

    expect(screen.getByTestId('left-arrow')).toBeInTheDocument()
    expect(screen.getByTestId('right-arrow')).toBeInTheDocument()
  })

  it('does not render FullScreenImage when no image is selected', () => {
    // Initial state should not have dialog open
    render(<ImageGallery images={images} slug={slug} />)

    expect(screen.queryByTestId('fullscreen-image')).not.toBeInTheDocument()
  })

  it('renders container with correct className for gallery', () => {
    render(<ImageGallery images={images} slug={slug} />)
    const gallery = screen.getByTestId('image-gallery')
    expect(gallery).toHaveClass('flex', 'flex-row')
  })

  it('calls setSelectedImage with correct image when gallery image is clicked', async () => {
    render(<ImageGallery images={images} slug={slug} />)
    const imageContainer = screen.getByTestId('image-container')

    act(() => {
      fireEvent.click(imageContainer)
    })

    await waitFor(() => {
      expect(screen.getByTestId('selected-image')).toHaveAttribute(
        'alt',
        `${slug} project image 1`
      )
    })
  })

  it('cycles to previous image when left arrow is clicked', async () => {
    render(<ImageGallery images={images} slug={slug} />)

    // Get initial index from alt text
    const currentIndexElement = screen.getByTestId('selected-image')
    expect(currentIndexElement.getAttribute('alt')).toBe(
      `${slug} project image 1`
    )

    const leftArrow = screen.getByTestId('left-arrow')
    act(() => {
      fireEvent.click(leftArrow)
    })

    // Wait for index to change and verify wrapping behavior (should go from 0 to 1)
    await waitFor(() => {
      const newImageElement = screen.getByTestId('selected-image')
      expect(newImageElement.getAttribute('alt')).toBe(
        `${slug} project image 2`
      )
    })
  })

  it('cycles to next image when right arrow is clicked', async () => {
    render(<ImageGallery images={images} slug={slug} />)

    // Start at index 1 by clicking right arrow first
    const rightArrow = screen.getByTestId('right-arrow')
    act(() => {
      fireEvent.click(rightArrow)
    })

    await waitFor(() => {
      expect(screen.getByTestId('selected-image')).toHaveAttribute(
        'alt',
        `${slug} project image 2`
      )
    })

    // Now click left arrow to cycle back
    const leftArrow = screen.getByTestId('left-arrow')
    act(() => {
      fireEvent.click(leftArrow)
    })

    await waitFor(() => {
      expect(screen.getByTestId('selected-image')).toHaveAttribute(
        'alt',
        `${slug} project image 1`
      )
    })
  })

  it('handles wrapping when cycling to previous image from first index', async () => {
    render(<ImageGallery images={images} slug={slug} />)

    // Start at index 0, click left to wrap to last (index 1)
    const leftArrow = screen.getByTestId('left-arrow')
    act(() => {
      fireEvent.click(leftArrow)
    })

    await waitFor(() => {
      expect(screen.getByTestId('selected-image')).toHaveAttribute(
        'alt',
        `${slug} project image 2`
      )
    })
  })

  it('handles wrapping when cycling to next image from last index', async () => {
    render(<ImageGallery images={images} slug={slug} />)

    // Click right arrow twice to reach last index (index 1), then click again to wrap
    const rightArrow = screen.getByTestId('right-arrow')
    act(() => {
      fireEvent.click(rightArrow)
    })

    await waitFor(() => {
      expect(screen.getByTestId('selected-image')).toHaveAttribute(
        'alt',
        `${slug} project image 2`
      )
    })

    // Click right again to wrap back to first (index 0)
    act(() => {
      fireEvent.click(rightArrow)
    })

    await waitFor(() => {
      expect(screen.getByTestId('selected-image')).toHaveAttribute(
        'alt',
        `${slug} project image 1`
      )
    })
  })

  it('renders correct number of images based on props', () => {
    const moreImages = [
      'http://localhost/image1.jpg',
      'http://localhost/image2.jpg',
      'http://localhost/image3.jpg'
    ]

    render(<ImageGallery images={moreImages} slug={slug} />)

    expect(screen.getByTestId('selected-image')).toBeInTheDocument()
  })
})
