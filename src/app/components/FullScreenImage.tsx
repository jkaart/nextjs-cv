import type { ImageProps } from '@components/ImageGallery'
import Image from 'next/image'

interface FullScreenImageProps {
  selectedImage: ImageProps | null
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageProps | null>>
}

/**
 * Full-screen image overlay component that displays a selected gallery image.
 * Renders on top of the main gallery when an image is clicked, providing a larger view.
 * Includes close button and backdrop for accessibility and user experience.
 * Automatically unmounts when no image is selected (selectedImage prop is null).
 * Uses Next.js Image component with fixed positioning for responsive full-screen display.
 *
 * @interface FullScreenImageProps - Props interface for FullScreenImage component
 * @param {ImageProps | null} props.selectedImage - The image to display in full screen mode, containing src and alt properties; pass null to hide the overlay
 * @param {React.Dispatch<React.SetStateAction<ImageProps | null>>} props.setSelectedImage - State updater function to close overlay by setting selectedImage to null
 *
 * @example
 * ```tsx
 * import { useState } from 'react'
 * type ImageProps = { src: string; alt: string }
 *
 * const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null)
 *
 * <FullScreenImage
 *   selectedImage={selectedImage}
 *   setSelectedImage={setSelectedImage}
 * />
 * // Renders full-screen overlay with close button when selectedImage is not null; hides when null
 * ```
 */
const FullScreenImage = ({
  selectedImage,
  setSelectedImage
}: FullScreenImageProps) => {
  if (!selectedImage) {
    return null
  }
  return (
    <div className='fixed inset-0 flex items-center justify-center z-100 bg-black/90'>
      <div className='relative flex w-full max-w-7xl h-auto px-4 items-center justify-center'>
        <button onClick={() => setSelectedImage(null)} type='button'>
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={1280}
            height={720}
            data-testid='fullscreen-image'
            className='w-full h-auto scale-100'
          />
        </button>
      </div>
    </div>
  )
}

export default FullScreenImage
