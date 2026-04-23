import type { Image as MeImage } from '@data/data'
import Image from 'next/image'

export interface MePhotoProps {
  image: MeImage
}

const MePhoto = ({ image }: MePhotoProps) => (
  <div className='flex flex-row justify-center items-center'>
    {image.src !== '' && (
      <Image
        className='rounded-md bg-gray-500'
        loading='eager'
        width={173}
        height={230}
        src={image.src}
        alt={image.altText}
      />
    )}
  </div>
)

export default MePhoto
