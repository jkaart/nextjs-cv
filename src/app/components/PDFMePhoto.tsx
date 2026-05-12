import type { MePhotoProps } from '@components/MePhoto'
import { Image, View } from '@react-pdf/renderer'

/**
 * Props interface for the PDFMePhoto component.
 *
 * @interface
 */
interface PDFMePhotoProps extends MePhotoProps {}

/**
 * A React PDF component that displays a personal photo with consistent styling.
 * Renders an image in a flex container with centered alignment and bottom margin,
 * using fixed dimensions (4cm width) with rounded corners and a light blue background.
 *
 * @component
 *
 * @example Basic usage with profile photo
 * ```typescript
 * import PDFMePhoto from './PDFMePhoto'
 * import type { MeImage } from '@types'
 *
 * const userProfile = {
 *   photo: {
 *     src: '/images/profile.jpg',
 *     altText: 'Profile picture'
 *   }
 * }
 *
 * const App = () => (
 *   <PDFMePhoto image={userProfile.photo} />
 * )
 * ```
 *
 * @example Usage in a personal info section
 * ```typescript
 * import PDFMePhoto from './PDFMePhoto'
 *
 * const profileImage = {
 *   src: '/images/me-photo.png',
 *   altText: 'My photo'
 * }
 *
 * const App = () => (
 *   <View>
 *     <PDFMePhoto image={profileImage} />
 *     <h2>About Me</h2>
 *   </View>
 * )
 * ```
 */
const PDFMePhoto = ({ image }: PDFMePhotoProps) => (
  <View style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
    <Image
      style={{
        width: '4cm',
        borderRadius: '6px',
        border: '1px solid black',
        backgroundColor: '#cad5e2'
      }}
      src={image.src}
    />
  </View>
)

export default PDFMePhoto
