import type { WorkExperience as WorkExperienceType } from '@types'
import { dateToString } from '@utils/dateToString'

interface WorkExperienceProps {
  workExperience: WorkExperienceType
}

/**
 * Renders a work experience entry with title, workplace name, dates, and job description.
 *
 * @param {WorkExperienceProps} props - Component props containing work experience data
 * @param {WorkExperienceType} props.workExperience - The work experience object to display
 * @param {string} props.workExperience.title - The job or position title (e.g., "Software Developer")
 * @param {string} props.workExperience.workplaceName - The name of the company or organization (e.g., "Tech Corp")
 * @param {string} props.workExperience.job - Description of responsibilities and achievements
 * @param {string} props.workExperience.startDate - Start date in YYYY-MM-DD format (e.g., "2020-01-15")
 * @param {string} props.workExperience.endDate - End date in YYYY-MM-DD format or empty string for current position
 *
 * @example
 * ```tsx
 * <WorkExperience workExperience={{
 *   title: 'Senior Developer',
 *   workplaceName: 'Tech Solutions Inc.',
 *   job: 'Led a team of 5 developers building scalable web applications using React and Node.js.',
 *   startDate: '2021-03-01',
 *   endDate: '2023-12-31'
 * }} />
 *
 * <WorkExperience workExperience={{
 *   title: 'Junior Developer',
 *   workplaceName: 'StartUp Co.',
 *   job: 'Developed and maintained customer-facing features for a SaaS platform.',
 *   startDate: '2019-06-15',
 *   endDate: ''
 * }} />
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
