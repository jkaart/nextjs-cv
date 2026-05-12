import PDFWorkExperience from '@components/PDFWorkExperience'
import { View } from '@react-pdf/renderer'
import type { WorkExperience as WorkExperienceType } from '@types'
import { sortWorkExperiences } from '@utils/sortWorkExperiences'

interface PDFWorkExperienceProps {
  workExperiences: WorkExperienceType[]
}

/**
 * Renders a container for work experience entries in the CV PDF.
 * Sorts and limits to the most recent work experience (top 1 only), then renders each entry.
 * Uses the sortWorkExperiences utility to order by date before displaying.
 *
 * @param props - Component props containing an array of WorkExperience objects
 * @param props.workExperiences - Array of WorkExperienceType objects to display
 * @returns React element representing a container with sorted work experience entries
 *
 * @example
 * ```tsx
 * // Usage for displaying the most recent work experience
 * const experiences = [
 *   { id: '1', title: 'Junior Developer', workplaceName: 'Company A', startDate: new Date('2018-01-01'), endDate: new Date('2020-06-30'), job: '' },
 *   { id: '2', title: 'Senior Developer', workplaceName: 'Tech Corp Inc.', startDate: new Date('2020-07-01'), endDate: null, job: 'Led development of microservices architecture' }
 * ]
 * <PDFWorkExperiences workExperiences={experiences} />
 * ```
 */
const PDFWorkExperiences = ({ workExperiences }: PDFWorkExperienceProps) => {
  const sortedWorkExperiences = sortWorkExperiences(workExperiences).slice(0, 1)

  return (
    <View>
      {sortedWorkExperiences.map(workExperience => (
        <PDFWorkExperience
          key={workExperience.id}
          workExperience={workExperience}
        />
      ))}
    </View>
  )
}

export default PDFWorkExperiences
