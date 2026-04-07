import type { Image as MeImage } from '@data/data'
import Image from 'next/image'

export interface MePhotoProps {
  image: MeImage
}

const MePhoto = ({ image }: MePhotoProps) => (
  <div className='flex flex-row justify-center items-center'>
    <Image
      className='rounded-md bg-gray-500'
      width={173}
      height={230}
      src={image.src}
      alt={image.altText}
    />
  </div>
)

export default MePhoto
