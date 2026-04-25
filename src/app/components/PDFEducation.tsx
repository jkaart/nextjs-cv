import { Text, View } from '@react-pdf/renderer'
import type { Education as EducationType } from '@types'

interface PDFEducationsProps {
  education: EducationType
}

const PDFEducation = ({ education }: PDFEducationsProps) => {
  return (
    <View style={{ marginBottom: '5px', marginLeft: '5px' }}>
      <Text style={{ fontWeight: 'bold' }}>{education.professionalTitle}</Text>
      <Text>{education.education}</Text>
      <Text>{education.academy}</Text>
      <Text>{education.degree}</Text>
      <Text>{education.yearOfDecree}</Text>
    </View>
  )
}

export default PDFEducation
