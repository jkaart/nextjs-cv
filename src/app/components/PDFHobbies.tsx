import { Text, View } from '@react-pdf/renderer'
import type { Hobby } from '@types'
import { capitalizeString } from '@utils/capitalizeString'
import { convertToString } from '@utils/convertToString'

/**
 * Props interface for the PDFHobbies component.
 *
 * @interface
 */
interface PDFHobbiesProps {
  /** Array of hobby records to display in the CV (formatted as a bulleted list) */
  hobbies: Hobby[]
}

/**
 * A React PDF component that renders a bulleted list of hobbies from the CV data.
 * Uses convertToString utility to convert the hobbies array into a formatted string with bullet points and proper line breaks.
 *
 * @component
 *
 * @example Basic usage in a CV context
 * ```typescript
 * import PDFHobbies from './PDFHobbies'
 * import { Data } from '@types'
 *
 * const App = ({ data }: { data: Data }) => (
 *   <PDFHobbies hobbies={data.hobby} />
 * )
 * ```
 *
 * @example With filtered hobby entries
 * ```typescript
 * import PDFHobbies from './PDFHobbies'
 * import { View } from '@react-pdf/renderer'
 * import { Data } from '@types'
 *
 * const App = ({ data }: { data: Data }) => (
 *   <View>
 *     <PDFHobbies hobbies={data.hobby.filter(h => h.name === 'Lukeminen')} />
 *   </View>
 * )
 * ```
 */
const PDFHobbies = ({ hobbies }: PDFHobbiesProps) => (
  <View style={{ marginLeft: '5px' }}>
    <Text>{capitalizeString(convertToString(hobbies))}</Text>
  </View>
)

export default PDFHobbies
