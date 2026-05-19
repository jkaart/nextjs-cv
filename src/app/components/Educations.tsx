'use client'

import Education from '@components/common/Education'
import ShowMore from '@components/common/ShowMore'
import type { Education as EducationType } from '@types'
import { sortEducations } from '@utils/sortEducations'
import { useState } from 'react'

interface EducationsProps {
  educations: EducationType[]
}

/**
 * Renders education history section with automatic sorting and pagination controls.
 * Displays educational background entries sorted by recency (most recent first) using sortEducations utility from @utils/sortEducations.
 * Shows only the latest education entry initially, with a "Show More" button to view additional entries when multiple educations exist.
 * Uses Education component for individual entry rendering and ShowMore component for pagination controls.
 *
 * @interface EducationsProps - Props interface for Educations component
 * @param {EducationType[]} props.educations - Array of education objects containing: id (unique identifier), degree (e.g., 'Bachelor of Science', 'Master of Arts'), institutionName (educational institution name like 'University of Helsinki' or 'Aalto University'), startDate (format YYYY-MM-DD), endDate (empty string '' if currently studying, otherwise completion date in YYYY-MM-DD format), and optional description field for additional details about the program. Entries are automatically sorted by most recent first before rendering using sortEducations utility
 * @param {string} props.educations.id - Unique identifier for each education entry, used as React key when mapping array to Education components
 * @param {string} props.educations.degree - Type or level of degree (e.g., 'Bachelor of Science', 'Master of Arts') displayed in individual Education component
 * @param {string} props.educations.institutionName - Full name of educational institution where the program was completed, displayed prominently in Education component
 * @param {string} props.educations.startDate - Start date of education program in YYYY-MM-DD format, used by sortEducations utility for chronological sorting
 * @param {string} [props.educations.endDate] - Optional end/completion date in YYYY-MM-DD format; empty string '' indicates currently ongoing studies. Used by sortEducations utility to determine recency order
 * @param {string} [props.educations.description] - Optional additional details about the educational program, not directly rendered but available for future use or extended functionality
 *
 * @example Basic usage with multiple educations (shows latest entry + Show More button)
 * ```tsx
 * import Educations from './Educations'
 * import type { Education } from '@types'
 *
 * const educations: Education[] = [
 *   { id: '1', degree: 'Master of Science in Computer Science', institutionName: 'University of Helsinki', startDate: '2019-09-01', endDate: '2021-05-31' },
 *   { id: '2', degree: 'Bachelor of Arts in Mathematics', institutionName: 'Aalto University', startDate: '2015-09-01', endDate: '' }
 * ]
 *
 * <Educations educations={educations} />
 * ```
 *
 * @example Single education entry (no pagination UI shown)
 * ```tsx
 * import Educations from './Educations'
 *
 * const singleEducation = [
 *   { id: '1', degree: 'Bachelor of Science', institutionName: 'University Name' }
 * ]
 *
 * <Educations educations={singleEducation} />
 * ```
 *
 * @example Usage with full data object from context (automatically sorted by recency)
 * ```tsx
 * import Educations from './Educations'
 *
 * const App = () => {
 *   const data = useData() // hypothetical data context
 *
 *   return <Educations educations={data.educations} />
 * }
 * ```
 *
 * @example Multiple education entries in different contexts with Tailwind styling
 * ```tsx
 * import Educations from './Educations'
 *
 * const ProfileSection = () => (
 *   <section className="mb-8">
 *     <h2>Koulutus</h2>
 *     <div className="space-y-8">
 *       <Educations educations={[
 *         { id: '1', degree: 'Master of Science', institutionName: 'University of Helsinki', startDate: '2019-09-01', endDate: '2021-05-31' },
 *         { id: '2', degree: 'Bachelor of Arts', institutionName: 'Aalto University', startDate: '2015-09-01', endDate: '' }
 *       ]} />
 *     </div>
 *   </section>
 * )
 * ```
 */
const Educations = ({ educations }: EducationsProps) => {
  const sortedEducations = sortEducations(educations)
  const [educationsState, setEducationsState] = useState<EducationType[]>(
    educations.length ? [sortedEducations[0]] : []
  )
  return (
    <>
      {educationsState.map(education => (
        <Education key={education.id} education={education} />
      ))}
      {educations.length > 1 ? (
        <ShowMore data={sortedEducations} setData={setEducationsState} />
      ) : null}
    </>
  )
}

export default Educations
