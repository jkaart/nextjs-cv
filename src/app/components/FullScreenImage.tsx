import type { ImageProps } from '@components/ImageGallery'
import Image from 'next/image'

interface FullScreenImageProps {
  selectedImage: ImageProps | null
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageProps | null>>
}

/**
 * Component that displays a selected image in full-screen mode with an overlay.
 * Shows the image centered on screen with a black background and provides a way
 * to close the view by clicking anywhere or using the built-in button. The component
 * conditionally renders null when no image is selected.
 *
 * @interface FullScreenImageProps - Props interface for FullScreenImage component
 * @param {ImageProps | null} props.selectedImage - Image object containing src and alt text, or null to hide the overlay
 * @param {React.Dispatch<React.SetStateAction<ImageProps | null>>} props.setSelectedImage - Function to update the selected image state (pass null to close)
 *
 * @example
 * ```tsx
 * const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null)
 *
 * <FullScreenImage
 *   selectedImage={selectedImage}
 *   setSelectedImage={setSelectedImage}
 * />
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
