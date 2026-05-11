import HeadingH2 from '@components/common/HeadingH2'
import type { ReactNode } from 'react'

interface SectionProps {
  title: string
  children: ReactNode
}

/**
 * Renders a section container with a heading and content area.
 * Used to group related content under a common title with styled background.
 *
 * @param {SectionProps} props - Component props containing the section configuration
 * @param {string} props.title - The section heading text (e.g., "Work Experience", "Projects")
 * @param {ReactNode} props.children - The content to display inside the section (e.g., job entries, project cards)
 *
 * @example
 * ```tsx
 * <Section title="Work Experience">
 *   <JobExperience />
 * </Section>
 *
 * <Section title="Projects">
 *   <ProjectCard title="My Project" />
 * </Section>
 * ```
 */
const Section = ({ title, children }: SectionProps) => (
  <section data-testid='section'>
    <div className='border rounded-md p-2 mb-3 bg-primary-background'>
      <HeadingH2 text={title} />
      {children}
    </div>
  </section>
)

export default Section
