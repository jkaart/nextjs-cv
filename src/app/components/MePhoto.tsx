import type { Image as MeImage } from '@types'
import Image from 'next/image'

export interface MePhotoProps {
  image: MeImage
}

/**
 * Displays a personal photo with fallback handling for missing images.
 * Renders a centered image component using Next.js Image optimization,
 * showing nothing if the source URL is empty.
 *
 * @param {MePhotoProps} props - Component props containing image data
 * @param {MeImage} props.image - The image object with src and alt text
 * @param {string} props.image.src - The URL of the photo to display
 * @param {string} props.image.altText - Alternative text for accessibility
 *
 * @example
 * ```tsx
 * // Basic usage with a profile photo
 * <MePhoto image={{
 *   src: '/images/profile.jpg',
 *   altText: 'Profile picture'
 * }} />
 *
 * // Usage in a personal info section
 * const profileImage = {
 *   src: '/images/me-photo.png',
 *   altText: 'My photo'
 * }
 * <section>
 *   <MePhoto image={profileImage} />
 *   <h2>About Me</h2>
 * </section>
 *
 * // Conditional rendering based on image availability
 * {user.photo && (
 *   <div className="flex items-center gap-4">
 *     <MePhoto image={user.photo} />
 *     <UserInfo user={user} />
 *   </div>
 * )}
 * ```
 */
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
