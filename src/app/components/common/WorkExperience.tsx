import type { WorkExperience as WorkExperienceType } from '@types'
import { dateToString } from '@utils/dateToString'

interface WorkExperienceProps {
  workExperience: WorkExperienceType
}

/**
 * Renders an individual work experience entry component displaying job title, company name, employment dates, and detailed job description.
 * Used within the WorkExperiences container to display each work experience item in a list format with styled typography.
 * Automatically formats date strings using the dateToString utility function for consistent display format.
 *
 * @interface WorkExperienceProps - Props interface for WorkExperience component
 * @param {WorkExperienceType} props.workExperience - The work experience object containing:
 *   - `title` (string): Job or position title held at the workplace (e.g., "Senior Software Developer", "Junior Frontend Engineer")
 *   - `workplaceName` (string): Full name of the company, organization, or institution where work was performed (e.g., "Tech Corp Oy", "Google Finland", "StartUp Co.")
 *   - `job` (string): Detailed description of responsibilities, achievements, and key contributions in Finnish language; may include metrics like team size, performance improvements, or project outcomes
 *   - `startDate` (string): Employment start date in YYYY-MM-DD format (e.g., "2021-03-01", "2019-06-15")
 *   - `endDate` (string): Employment end date in YYYY-MM-DD format or empty string '' for current/ongoing positions; use empty string to indicate still employed at the workplace
 *
 * @example
 * ```tsx
 * // Completed work experience with specific end date
 * <WorkExperience workExperience={{
 *   title: 'Senior Developer',
 *   workplaceName: 'Tech Solutions Inc.',
 *   job: 'Led a team of 5 developers building scalable web applications using React and Node.js. Implemented CI/CD pipelines reducing deployment time by 40%.',
 *   startDate: '2021-03-01',
 *   endDate: '2023-12-31'
 * }} />
 *
 * // Current work experience (ongoing position)
 * <WorkExperience workExperience={{
 *   title: 'Junior Developer',
 *   workplaceName: 'StartUp Co.',
 *   job: 'Developed and maintained customer-facing features for a SaaS platform. Collaborated with design team to implement user-friendly interfaces.',
 *   startDate: '2019-06-15',
 *   endDate: ''
 * }} />
 *
 * // Multiple work experiences (rendered within WorkExperiences container)
 * <WorkExperiences workExperiences={[
 *   { id: 1, title: 'Senior Software Developer', workplaceName: 'Tech Corp Oy', job: 'Led team of 5 developers to build scalable web applications using React and Node.js. Implemented CI/CD pipelines reducing deployment time by 40%.', startDate: '2021-03-01', endDate: '2023-12-31' },
 *   { id: 2, title: 'Junior Developer', workplaceName: 'StartUp Co.', job: 'Developed features for customer-facing mobile application. Collaborated with design team to implement user-friendly interfaces.', startDate: '2019-06-15', endDate: '' }
 * ]} />
 *
 * // Usage with full data object from context (dates automatically formatted)
 * <WorkExperience workExperience={data.currentPosition} />
 * ```
 */
const WorkExperience = ({ workExperience }: WorkExperienceProps) => {
  return (
    <div className='mb-2' data-testid='work-experience'>
      <ul>
        <li className='font-semibold'>{workExperience.title}</li>
        <li>{workExperience.workplaceName}</li>
        <li>{`${dateToString(workExperience.startDate)} - ${dateToString(workExperience.endDate)}`}</li>
        <li>{workExperience.job}</li>
      </ul>
    </div>
  )
}

export default WorkExperience
