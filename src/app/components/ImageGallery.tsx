'use client'

import Image from "next/image"
import { useState } from "react"
import FullScreenImage from "./FullScreenImage"

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
      <div className="mx-2">
        {images.map((src, index) => (
          <button key={src} onClick={() => setSelectedImage({ src, alt: `${slug} project image ${index + 1}` })} type="button">
            <Image alt={`${slug} project image ${index + 1}`} src={src} width={1280} height={720} />
          </button>
        ))}
      </div>
      <FullScreenImage selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </>
  )
}

export default ImageGallery
