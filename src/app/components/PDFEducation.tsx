import { Text, View } from '@react-pdf/renderer'
import type { Education as EducationType } from '@types'

/**
 * Props interface for the PDFEducation component.
 *
 * @interface
 */
interface PDFEducationsProps {
  /** Single education record to display in the CV */
  education: EducationType
}

/**
 * A React PDF component that renders a single education entry from the CV data.
 * Displays professional title, institution name, degree type, and graduation year.
 * Each education item is styled with bold formatting for the professional title
 * and includes consistent spacing (5px margin bottom/left) for proper layout flow.
 *
 * @component
 *
 * @example Basic usage in a CV context
 * ```typescript
 * import PDFEducation from './PDFEducation'
 * import { Data } from '@types'
 *
 * const App = ({ data }: { data: Data }) => (
 *   <PDFEducation education={data.education[0]} />
 * )
 * ```
 *
 * @example With multiple education entries
 * ```typescript
 * import PDFEducation from './PDFEducation'
 * import { View } from '@react-pdf/renderer'
 * import { Data } from '@types'
 *
 * const App = ({ data }: { data: Data }) => (
 *   <View>
 *     {data.education.map(edu => (
 *       <PDFEducation key={edu.id} education={edu} />
 *     ))}
 *   </View>
 * )
 * ```
 */
const PDFEducation = ({ education }: PDFEducationsProps) => (
  <View style={{ marginBottom: '5px', marginLeft: '5px' }}>
    <Text style={{ fontWeight: 'bold' }}>{education.professionalTitle}</Text>
    <Text>{education.education}</Text>
    <Text>{education.academy}</Text>
    <Text>{education.degree}</Text>
    <Text>{education.dateOfGraduation.getFullYear()}</Text>
  </View>
)

export default PDFEducation
