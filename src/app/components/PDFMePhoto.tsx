import type { MePhotoProps } from '@components/MePhoto'
import { Image } from '@react-pdf/renderer'

const MePhoto = ({ image }: MePhotoProps) => {
  return (
    <view
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5px'
      }}
    >
      <Image
        style={{
          width: '4cm',
          borderRadius: '6px',
          border: '1px solid black',
          backgroundColor: '#cad5e2'
        }}
        src={image.src}
      />
    </view>
  )
}

export default MePhoto
