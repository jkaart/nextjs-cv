import { View } from '@react-pdf/renderer'
import type { Education as EducationType } from '@/data/data'
import { sortEducations } from '@/utils/sortEducations'
import PDFEducation from './PDFEducation'

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
