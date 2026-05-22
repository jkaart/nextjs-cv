'use client'

import PDFProject from '@components/PDFProject'
import { Link, Text, View } from '@react-pdf/renderer'
import type { ProjectMetadata } from '@types'
import { getBaseUrl } from '@utils/getBaseUrl'

/**
 * Renders a list of project entries in the CV PDF.
 * Maps over an array of project metadata and renders each as a PDFProject component,
 * with left margin applied to the container for proper spacing.
 *
 * @param props - Component props containing projects array
 * @param props.projects - Array of ProjectMetadata objects to display
 * @returns React element representing the list of formatted project sections in PDF
 *
 * @example
 * ```tsx
 * // Basic usage with a single project
 * const projects = [
 *   {
 *     title: 'React E-commerce Platform',
 *     summary: 'Built a full-stack e-commerce solution using Next.js and Stripe.',
 *     technologies: ['React', 'Next.js', 'TypeScript', 'Stripe'],
 *     startDate: '2023-01',
 *     endDate: '2023-06'
 *   }
 * ];
 * <PDFProjects projects={projects} />
 * ```
 *
 * @example
 * ```tsx
 * // Usage with multiple projects fetched from data directory
 * const allProjects = await getProjects();
 * return (
 *   <Page>
 *     <PDFProjects projects={allProjects} />
 *   </Page>
 * );
 * ```
 */
interface PDFProjectsProps {
  projects: ProjectMetadata[]
}

const PDFProjects = ({ projects }: PDFProjectsProps) => {
  const projectsUrl = `${getBaseUrl()}/projects`

  return (
    <View style={{ marginLeft: '5px' }}>
      {projects.map(project => (
        <PDFProject key={project.slug} project={project} />
      ))}
      <View
        style={{
          marginTop: '10px',
          flexDirection: 'row',
          gap: 2,
          justifyContent: 'center'
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>Lisää projekteja:</Text>
        <Link href={projectsUrl}>{projectsUrl}</Link>
      </View>
    </View>
  )
}

export default PDFProjects
