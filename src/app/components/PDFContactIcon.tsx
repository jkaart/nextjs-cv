import { Image } from '@react-pdf/renderer'
import type { ContactIconType } from '@types'
import { getContactIconName } from '@utils/getContactIconName'

interface PDFContactIconProps {
  type: ContactIconType
}

const PDFContactIcon = ({ type }: PDFContactIconProps) => (
  <Image src={`/assets/icons/png/other/${getContactIconName(type)}.png`} />
)

export default PDFContactIcon
