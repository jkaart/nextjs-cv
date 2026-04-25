import PDFWorkExperience from '@components/PDFWorkExperience'
import { View } from '@react-pdf/renderer'
import type { WorkExperience as WorkExperienceType } from '@types'
import { sortWorkExperiences } from '@utils/sortWorkExperiences'

interface PDFWorkExperienceProps {
  workExperiences: WorkExperienceType[]
}

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
