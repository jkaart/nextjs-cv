import { Text, View } from '@react-pdf/renderer'
import type { ProjectMetadata } from '@/utils/projects'

interface PDFProjectProps {
  project: ProjectMetadata
}

const PDFProject = ({ project }: PDFProjectProps) => (
  <View>
    <Text style={{ fontSize: '14px', fontWeight: 'bold' }}>
      {project.title}
    </Text>
    <Text style={{ fontSize: '12px' }}>{project.summary}</Text>
  </View>
)

export default PDFProject
