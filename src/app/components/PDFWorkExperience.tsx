import { Text, View } from '@react-pdf/renderer'
import type { WorkExperience } from '@/data/data'
import { dateToString } from '@/utils/dateToString'

interface PDFWorkExperienceProps {
  workExperience: WorkExperience
}

const PDFWorkExperience = ({ workExperience }: PDFWorkExperienceProps) => (
  <View style={{ marginBottom: '5px', marginLeft: '5px' }}>
    <Text style={{ fontWeight: 'bold' }}>{workExperience.title}</Text>
    <Text>{workExperience.workplaceName}</Text>
    <Text>{`${dateToString(workExperience.startDate)} - ${dateToString(workExperience.endDate)}`}</Text>
    <Text>{workExperience.job}</Text>
  </View>
)

export default PDFWorkExperience
