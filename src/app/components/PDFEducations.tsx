import PDFEducation from '@components/PDFEducation'
import { View } from '@react-pdf/renderer'
import type { Education as EducationType } from '@types'
import { sortEducations } from '@utils/sortEducations'

/**
 * Props interface for the PDFEducations component.
 *
 * @interface
 */
interface PDFEducationsProps {
  /** Array of education records to display in the CV (only the most recent one is shown) */
  educations: EducationType[]
}

/**
 * A React PDF component that renders a list of education entries from the CV data.
 * Sorts the education array by date and displays only the most recent entry using slice(0, 1).
 * Each education item is rendered as an individual PDFEducation component with proper keying.
 *
 * @component
 *
 * @example Basic usage in a CV context
 * ```typescript
 * import PDFEducations from './PDFEducations'
 * import { Data } from '@types'
 *
 * const App = ({ data }: { data: Data }) => (
 *   <PDFEducations educations={data.education} />
 * )
 * ```
 *
 * @example With filtered education entries
 * ```typescript
 * import PDFEducations from './PDFEducations'
 * import { View } from '@react-pdf/renderer'
 * import { Data } from '@types'
 *
 * const App = ({ data }: { data: Data }) => (
 *   <View>
 *     <PDFEducations educations={data.education.filter(e => e.degree === 'Yliopistotutkinto')} />
 *   </View>
 * )
 * ```
 */
const PDFEducations = ({ educations }: PDFEducationsProps) => {
  const sortedEducations = sortEducations(educations).slice(0, 1)
  return (
    <View>
      {sortedEducations.map(education => (
        <PDFEducation key={education.id} education={education} />
      ))}
    </View>
  )
}

export default PDFEducations
