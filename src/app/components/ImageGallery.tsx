'use client'

import FullScreenImage from '@components/FullScreenImage'
import Image from 'next/image'
import { useState } from 'react'
import {
  FaArrowCircleLeft as ArrowLeft,
  FaArrowCircleRight as ArrowRight
} from 'react-icons/fa'

export interface ImageProps {
  src: string
  alt: string
}

/**
 * Props interface for ImageGallery component.
 * Contains the images array and slug identifier needed to render the gallery.
 */
interface ImageGalleryProps {
  images: string[]
  slug: string
}

interface ArrowButtonProps {
  direction: 'prev' | 'next'
  images: ImageProps[]
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  className?: string
}

interface PrevAndNextButtonProps {
  images: ImageProps[]
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  className?: string
}

/**
 * Previous navigation button component for image gallery carousel.
 * Renders a left-pointing arrow icon that users can click to navigate to the previous image.
 * Uses circular navigation logic: when at index 0, clicking prev wraps around to last image.
 * Accepts optional className for custom styling and positioning within flex container.
 *
 * @param {ImageProps[]} props.images - Array of ImageProps objects containing src and alt properties
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setCurrentIndex - State updater function to change current image index
 * @param {string} [props.className] - Optional CSS class name for styling (e.g., 'mx-1' for margin)
 *
 * @example
 * ```tsx
 * const [currentIndex, setCurrentIndex] = useState(0)
 * const galleryImages = [
 *   { src: '/images/photo1.jpg', alt: 'Photo 1' },
 *   { src: '/images/photo2.jpg', alt: 'Photo 2' }
 * ]
 * <PrevButton images={galleryImages} setCurrentIndex={setCurrentIndex} className='mx-1' />
 * // Renders left arrow button; clicking navigates from index 0 to last image, or decrements index otherwise
 * ```
 */
const PrevButton = ({
  images,
  setCurrentIndex,
  className
}: PrevAndNextButtonProps) => {
  const prevSlide = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length
    )
  }

  return (
    <div className='my-auto'>
      <button className={className} onClick={prevSlide} type='button'>
        <ArrowLeft data-testid='left-arrow' className='w-10 h-10' />
      </button>
    </div>
  )
}

/**
 * Next navigation button component for image gallery carousel.
 * Renders a right-pointing arrow icon that users can click to navigate to the next image.
 * Uses circular navigation logic: when at last index, clicking next wraps around to first image.
 * Accepts optional className for custom styling and positioning within flex container.
 *
 * @param {ImageProps[]} props.images - Array of ImageProps objects containing src and alt properties
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setCurrentIndex - State updater function to change current image index
 * @param {string} [props.className] - Optional CSS class name for styling (e.g., 'mx-1' for margin)
 *
 * @example
 * ```tsx
 * const [currentIndex, setCurrentIndex] = useState(0)
 * const galleryImages = [
 *   { src: '/images/photo1.jpg', alt: 'Photo 1' },
 *   { src: '/images/photo2.jpg', alt: 'Photo 2' }
 * ]
 * <NextButton images={galleryImages} setCurrentIndex={setCurrentIndex} className='mx-1' />
 * // Renders right arrow button; clicking navigates from last index to 0, or increments index otherwise
 * ```
 */
const NextButton = ({
  images,
  setCurrentIndex,
  className
}: PrevAndNextButtonProps) => {
  const nextSlide = () => {
    setCurrentIndex(
      prevIndex => (prevIndex + 1 + images.length) % images.length
    )
  }

  return (
    <div className='my-auto'>
      <button className={className} onClick={nextSlide} type='button'>
        <ArrowRight data-testid='right-arrow' className='w-10 h-10' />
      </button>
    </div>
  )
}

/**
 * Wrapper component that delegates to either PrevButton or NextButton based on direction prop.
 * Provides a unified interface for gallery navigation with consistent props structure.
 * Direction 'prev' renders left arrow, direction 'next' renders right arrow.
 * Accepts optional className for margin and positioning within flex container.
 *
 * @param {'prev' | 'next'} props.direction - Navigation direction: 'prev' for left arrow or 'next' for right arrow
 * @param {ImageProps[]} props.images - Array of ImageProps objects containing src and alt properties
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setCurrentIndex - State updater function to change current image index
 * @param {string} [props.className] - Optional CSS class name for styling (e.g., 'mx-1' for margin)
 *
 * @example
 * ```tsx
 * const [currentIndex, setCurrentIndex] = useState(0)
 * const galleryImages = [
 *   { src: '/images/photo1.jpg', alt: 'Photo 1' },
 *   { src: '/images/photo2.jpg', alt: 'Photo 2' }
 * ]
 * <ArrowButton direction='prev' images={galleryImages} setCurrentIndex={setCurrentIndex} className='mx-1' />
 * // Renders PrevButton with left arrow for previous navigation
 * ```
 */
const ArrowButton = ({
  direction,
  images,
  setCurrentIndex,
  className
}: ArrowButtonProps) => {
  return direction === 'prev' ? (
    <PrevButton
      images={images}
      className={className}
      setCurrentIndex={setCurrentIndex}
    />
  ) : (
    <NextButton
      images={images}
      className={className}
      setCurrentIndex={setCurrentIndex}
    />
  )
}

/**
 * Image gallery component that renders navigation arrows and displays the current image.
 * Manages state for selected image (for full-screen overlay) and current index (for carousel).
 * Maps images array to ImageProps with dynamically generated alt text based on slug.
 * Handles user interactions: clicking an image opens FullScreenImage overlay, arrow buttons navigate through images.
 *
 * @param {string[]} props.images - Array of image source URLs to display in the gallery
 * @param {string} props.slug - Slug identifier used to generate alt text for all images (e.g., 'my-project')
 *
 * @example
 * ```tsx
 * const projectImages = ['/images/project1-1.jpg', '/images/project1-2.jpg']
 * <ImageGallery images={projectImages} slug='my-first-project' />
 * // Renders: Gallery with left/right arrows showing "my-first-project project image 1" and "my-first-project project image 2"
 * ```
 *
 * @example
 * ```tsx
 * const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null)
 * const galleryImages = ['/images/photo1.jpg', '/images/photo2.jpg']
 * <ImageGallery images={galleryImages} slug='photography' />
 * // Clicking an image opens FullScreenImage overlay with "photography project image X" alt text
 * ```
 */
const ImageGallery = ({ images, slug }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const imagePropsArray: ImageProps[] = images.map((src, index) => ({
    src,
    alt: `${slug} project image ${index + 1}`
  }))

  return (
    <>
      <div
        data-testid='image-gallery'
        className='flex flex-row justify-center items-center w-full max-w-4xl mx-auto'
      >
        <div className='flex justify-start'>
          <ArrowButton
            direction='prev'
            images={imagePropsArray}
            setCurrentIndex={setCurrentIndex}
            className='mx-1'
          />
        </div>
        <div data-testid='image-container' className='w-full'>
          <button
            key={currentIndex}
            onClick={() =>
              setSelectedImage({
                src: images[currentIndex],
                alt: `${slug} project image ${currentIndex + 1}`
              })
            }
            type='button'
            className='w-full'
          >
            <div className='relative w-full h-75 lg:h-150'>
              <Image
                alt={`${slug} project image ${currentIndex + 1}`}
                src={images[currentIndex]}
                fill
                sizes='100vw, 100vh'
                data-testid='selected-image'
                className='object-contain mb-0 mt-0'
                priority
              />
            </div>
          </button>
        </div>
        <div className='flex justify-end'>
          <ArrowButton
            direction='next'
            images={imagePropsArray}
            setCurrentIndex={setCurrentIndex}
            className='mx-1'
          />
        </div>
      </div>
      {selectedImage && (
        <FullScreenImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </>
  )
}

export default ImageGallery
