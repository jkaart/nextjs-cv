import { styles } from '@components/PDFResume'
import { Text, View } from '@react-pdf/renderer'
import { formatProjectDates } from '@utils/formatProjectDates'
import { formatTechnologiesString } from '@utils/formatTechnologiesString'
import type { ProjectMetadata } from '@utils/projects'

interface PDFProjectProps {
  project: ProjectMetadata
}

const PDFProject = ({ project }: PDFProjectProps) => {
  const technologies = project.technologies ? project.technologies.sort() : []

  const { startDate, endDate } = formatProjectDates(
    project.startDate,
    project.endDate
  )

  return (
    <View style={{ marginBottom: '10px' }}>
      <Text style={styles.h6}>{project.title}</Text>
      <Text style={{ marginBottom: '5px' }}>{project.summary}</Text>
      <Text style={{ fontWeight: 'bold', marginBottom: '5px' }}>
        {`Käytetyt teknologiat: ${formatTechnologiesString(technologies)}`}
      </Text>
      <Text>
        {startDate} - {endDate}
      </Text>
    </View>
  )
}

export default PDFProject
