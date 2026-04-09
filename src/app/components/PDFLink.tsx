import { Link, Text, View } from '@react-pdf/renderer'
import { validateUrl } from '@utils/validators'

interface PDFLinkProps {
  title: string
  src: string
}

const PDFLink = ({ title, src }: PDFLinkProps) => (
  <View style={{ flexDirection: 'row', gap: '2px' }}>
    <View>
      <Text>{title}:</Text>
    </View>
    <View>
      <Link src={validateUrl(src)}>{src}</Link>
    </View>
  </View>
)

export default PDFLink
