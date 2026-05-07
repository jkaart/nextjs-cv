import PDFSvgIcon from '@components/PDFSvgIcon'
import { Link, View } from '@react-pdf/renderer'
import { extractIconPaths } from '@utils/getDevIcon'
import { getIcon, type IconType } from '@utils/getIcon'
import { validateUrl } from '@utils/validators'

interface PDFLinkProps {
  iconType: IconType
  src: string
}

const PDFLink = ({ iconType, src }: PDFLinkProps) => {
  const Icon = getIcon(iconType)
  if (Icon instanceof Error) return null

  const result = extractIconPaths(Icon)
  if (!result || !result.viewBox || !result.paths) return null

  console.log(iconType, result.viewBox, result.paths)

  return (
    <View style={{ flexDirection: 'row', gap: '2px', alignItems: 'center' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '18px',
          height: '18px'
        }}
      >
        <PDFSvgIcon viewBox={result.viewBox} paths={result.paths} />
      </View>
      <View>
        <Link src={validateUrl(src)}>{src}</Link>
      </View>
    </View>
  )
}

export default PDFLink
