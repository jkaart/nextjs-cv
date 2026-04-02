'use client'

import { View } from '@react-pdf/renderer'
import type { ProjectMetadata } from '@/utils/projects'
import PDFProject from './PDFProject'

interface PDFProjectsProps {
  projects: ProjectMetadata[]
}

const PDFProjects = ({ projects }: PDFProjectsProps) => (
  <View>
    {projects.map(project => (
      <PDFProject key={project.slug} project={project} />
    ))}
  </View>
)

export default PDFProjects
