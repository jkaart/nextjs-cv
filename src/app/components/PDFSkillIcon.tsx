import { Image, View } from '@react-pdf/renderer'
import type { SelectedDevIconName } from '@selectedDevIconTypes'

/**
 * Props interface for the PDFIcon component.
 *
 * @interface
 */
interface IconProps {
  /** The name of the icon to render (used to fetch corresponding SVG paths) */
  iconName: SelectedDevIconName
}

/**
 * A React PDF client-side component that dynamically loads and renders SVG icons based on icon name.
 * Uses getDevIconPath utility to fetch icon paths, then displays them in a 24x24px View container.
 * Implements lazy loading with useEffect to prevent hydration issues - returns null during initial render until icon data is loaded.
 *
 * @component
 *
 * @example Basic usage in a CV context
 * ```typescript
 * import PDFIcon from './PDFIcon'
 *
 * const App = () => (
 *   <PDFIcon iconName="email" />
 * )
 * ```
 *
 * @example With conditional rendering based on data
 * ```typescript
 * import PDFIcon from './PDFIcon'
 * import { Data } from '@types'
 *
 * const App = ({ data }: { data: Data }) => (
 *   <PDFIcon iconName={data.email ? 'email' : null} />
 * )
 * ```
 */
const PDFSkillIcon = ({ iconName }: IconProps) => {
  return (
    <View style={{ width: '24px', height: '24px' }}>
      <Image src={`/assets/icons/png/dev-icons/${iconName}.png`} />
    </View>
  )
}

export default PDFSkillIcon
