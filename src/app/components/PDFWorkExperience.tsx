import { Text, View } from '@react-pdf/renderer'
import type { WorkExperience } from '@types'
import { dateToString } from '@utils/dateToString'

interface PDFWorkExperienceProps {
  workExperience: WorkExperience
}

/**
 * Renders a single work experience entry in the CV PDF.
 * Displays job title, workplace name, date range, and job description with proper spacing.
 * Uses bold styling for the job title and applies consistent margins between entries.
 *
 * @param props - Component props containing the WorkExperience object
 * @param props.workExperience - Object with title, workplaceName, startDate, endDate, and job properties
 * @returns React element representing a work experience section with formatted text
 *
 * @example
 * ```tsx
 * // Usage for a single work experience entry
 * const experience = {
 *   id: '1',
 *   title: 'Senior Software Engineer',
 *   workplaceName: 'Tech Corp Inc.',
 *   startDate: new Date('2020-01-01'),
 *   endDate: new Date('2023-12-31'),
 *   job: 'Led development of microservices architecture, mentored junior developers'
 * }
 * <PDFWorkExperience workExperience={experience} />
 * ```
 *
 * @example
 * ```tsx
 * // Usage in a map for multiple experiences
 * {data.workExperience.map(exp => (
 *   <PDFWorkExperience key={exp.id} workExperience={exp} />
 * ))}
 * ```
 */
const PDFWorkExperience = ({ workExperience }: PDFWorkExperienceProps) => (
  <View style={{ marginBottom: '5px', marginLeft: '5px' }}>
    <Text style={{ fontWeight: 'bold' }}>{workExperience.title}</Text>
    <Text>{workExperience.workplaceName}</Text>
    <Text>{`${dateToString(workExperience.startDate)} - ${dateToString(workExperience.endDate)}`}</Text>
    <Text>{workExperience.job}</Text>
  </View>
)

export default PDFWorkExperience
