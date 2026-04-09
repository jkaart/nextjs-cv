'use client'

import PDFProject from '@components/PDFProject'
import { View } from '@react-pdf/renderer'
import type { ProjectMetadata } from '@utils/projects'

interface PDFProjectsProps {
  projects: ProjectMetadata[]
}

const PDFProjects = ({ projects }: PDFProjectsProps) => (
  <View style={{ marginLeft: '5px' }}>
    {projects.map(project => (
      <PDFProject key={project.slug} project={project} />
    ))}
  </View>
)

export default PDFProjects
