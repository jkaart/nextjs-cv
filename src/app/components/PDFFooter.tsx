import { StyleSheet, Text, View } from '@react-pdf/renderer'

/**
 * Props interface for the PDFFooter component.
 *
 * @interface
 */
interface PDFFooterProps {
  /** The date when the CV content was last updated (displayed in footer) */
  lastContentUpdate: string
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontSize: '8px',
    position: 'absolute',
    bottom: '10px',
    left: 0,
    right: 0,
    width: '100%'
  }
})

/**
 * A React PDF component that renders a footer section displaying document creation date and content update timestamp.
 * Shows "Luotu" (created) with current generation date and "Sisältö päivitetty" (content updated) with the provided lastContentUpdate value.
 * Styled with centered text, 8px font size, absolute positioning at bottom 10px, spanning full width.
 *
 * @component
 *
 * @example Basic usage in a CV context
 * ```typescript
 * import PDFFooter from './PDFFooter'
 *
 * const App = () => (
 *   <PDFFooter lastContentUpdate="2024-01-15" />
 * )
 * ```
 *
 * @example With dynamic content update date
 * ```typescript
 * import PDFFooter from './PDFFooter'
 * import { Data } from '@types'
 *
 * const App = ({ data }: { data: Data }) => (
 *   <PDFFooter lastContentUpdate={data.me.updatedAt} />
 * )
 * ```
 */
const PDFFooter = ({ lastContentUpdate }: PDFFooterProps) => {
  const now = new Date()
  const date = now.toLocaleDateString('fi-FI')

  return (
    <View style={styles.container}>
      <Text>Luotu: {date}</Text>
      <Text>Sisältö päivitetty: {lastContentUpdate}</Text>
    </View>
  )
}

export default PDFFooter
