'use client'

import FullScreenImage from '@components/FullScreenImage'
import Image from 'next/image'
import { useState } from 'react'

export interface ImageProps {
  src: string
  alt: string
}

interface ImageGalleryProps {
  images: string[]
  slug: string
}

const ImageGallery = ({ images, slug }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null)

  return (
    <>
      <div className='mx-2'>
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() =>
              setSelectedImage({
                src,
                alt: `${slug} project image ${index + 1}`
              })
            }
            type='button'
          >
            <Image
              alt={`${slug} project image ${index + 1}`}
              src={src}
              width={800}
              height={480}
            />
          </button>
        ))}
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
