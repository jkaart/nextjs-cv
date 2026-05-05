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
