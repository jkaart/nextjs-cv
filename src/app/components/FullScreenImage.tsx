import type { ImageProps } from '@components/ImageGallery'
import Image from 'next/image'

interface FullScreenImageProps {
  selectedImage: ImageProps | null
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageProps | null>>
}

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
