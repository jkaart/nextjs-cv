import { styles } from '@components/PDFResume'
import { Link, Text, View } from '@react-pdf/renderer'
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
      <View>
        {project.urls?.map(url => (
          <View style={{ flexDirection: 'row', gap: 2 }} key={url.url}>
            <Text>{url.title}</Text>
            <Link href={url.url}>{url.url}</Link>
          </View>
        ))}
      </View>
    </View>
  )
}

export default PDFProject
