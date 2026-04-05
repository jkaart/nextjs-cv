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
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center'>
      <button onClick={() => setSelectedImage(null)} type='button'>
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          width={1280}
          height={720}
        />
      </button>
    </div>
  )
}
export default FullScreenImage
