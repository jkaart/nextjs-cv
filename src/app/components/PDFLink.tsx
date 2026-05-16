import PDFSvgIcon from '@components/PDFSvgIcon'
import { Link, View } from '@react-pdf/renderer'
import { extractIconPaths } from '@utils/getDevIcon'
import { getIcon, type IconType } from '@utils/getIcon'
import { normalizeUrl } from '@utils/normalizeUrl'

/**
 * Props interface for the PDFLink component.
 *
 * @interface
 */
interface PDFLinkProps {
  /** The type of icon to display (e.g., 'email', 'phone', 'website') */
  iconType: IconType
  /** The URL or link source to render as a clickable link */
  src: string
}

/**
 * A React PDF component that displays an icon alongside a clickable link.
 * Renders an icon (based on the provided iconType) followed by the link text,
 * with the URL normalized for proper PDF rendering. Returns null if the icon fails to load.
 *
 * @component
 *
 * @example Basic usage with email link
 * ```typescript
 * import PDFLink from './PDFLink'
 * import type { IconType } from '@utils/getIcon'
 *
 * const App = () => (
 *   <PDFLink iconType='email' src='mailto:john@example.com' />
 * )
 * ```
 *
 * @example Usage with website link
 * ```typescript
 * import PDFLink from './PDFLink'
 *
 * const App = () => (
 *   <PDFLink iconType='website' src='https://www.example.com' />
 * )
 * ```
 */
const PDFLink = ({ iconType, src }: PDFLinkProps) => {
  const Icon = getIcon(iconType)
  if (Icon instanceof Error) return null

  const result = extractIconPaths(Icon)
  if (!result || !result.viewBox || !result.paths) return null

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
        <PDFSvgIcon iconPaths={result} />
      </View>
      <View>
        <Link src={normalizeUrl(src)}>{src}</Link>
      </View>
    </View>
  )
}

export default PDFLink
