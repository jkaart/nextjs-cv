import { styles } from '@components/PDFResume'
import { Link, Text, View } from '@react-pdf/renderer'
import { formatProjectDates } from '@utils/formatProjectDates'
import { formatString } from '@utils/formatString'
import type { ProjectMetadata } from '@utils/projects'

interface PDFProjectProps {
  project: ProjectMetadata
}

/**
 * Renders a single project entry in the CV PDF.
 * Displays project title, summary, technologies used, date range, and project links.
 * Formats technologies as a comma-separated list and handles optional URL fields.
 *
 * @param props - Component props containing project metadata
 * @param props.project - The project object with title, summary, technologies, dates, and URLs
 * @returns React element representing the formatted project section in PDF
 *
 * @example
 * ```tsx
 * // Basic usage with a single project
 * const project = {
 *   title: 'React E-commerce Platform',
 *   summary: 'Built a full-stack e-commerce solution using Next.js and Stripe.',
 *   technologies: ['React', 'Next.js', 'TypeScript', 'Stripe'],
 *   startDate: '2023-01',
 *   endDate: '2023-06',
 *   urls: [
 *     { title: 'Live Demo', url: 'https://example.com' },
 *     { title: 'GitHub Repo', url: 'https://github.com/example/repo' }
 *   ]
 * };
 * <PDFProject project={project} />
 * ```
 *
 * @example
 * ```tsx
 * // Usage with multiple projects in a list
 * const projects = await getProjects(5);
 * return (
 *   <View>
 *     {projects.map(project => (
 *       <PDFProject key={project.slug} project={project} />
 *     ))}
 *   </View>
 * );
 * ```
 */
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
        {`Käytetyt teknologiat: ${formatString(technologies)}`}
      </Text>
      <Text style={{ marginBottom: '5px' }}>
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
