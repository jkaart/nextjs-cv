import PDFEducation from '@components/PDFEducation'
import type { Education as EducationType } from '@data/data'
import { View } from '@react-pdf/renderer'
import { sortEducations } from '@utils/sortEducations'

interface PDFEducationsProps {
  educations: EducationType[]
}

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
