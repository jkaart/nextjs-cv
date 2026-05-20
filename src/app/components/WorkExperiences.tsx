'use client'

import ShowMore from '@components/common/ShowMore'
import WorkExperience from '@components/common/WorkExperience'
import type { WorkExperience as WorkExperienceType } from '@types'
import { sortWorkExperiences } from '@utils/sortWorkExperiences'
import { useState } from 'react'

interface WorkExperiencesProps {
  workExperiences: WorkExperienceType[]
}

/**
 * Renders work experiences section with automatic sorting and pagination.
 * Displays professional work history sorted by recency (most recent first).
 * Shows only the latest work experience initially, with a "Show More" button to view additional entries when multiple experiences exist.
 * Automatically sorts workExperiences in reverse chronological order using sortWorkExperiences utility.
 *
 * @interface WorkExperiencesProps - Props interface for WorkExperiences component
 * @param {WorkExperienceType[]} props.workExperiences - Array of work experience objects containing: id (unique identifier), title (job position/title like 'Senior Software Developer'), workplaceName (company/organization name such as 'Tech Corp Oy' or 'Google Finland'), job (detailed description of responsibilities and achievements in Finnish), startDate (format YYYY-MM-DD), endDate (empty string '' if currently employed, otherwise completion date in YYYY-MM-DD format). Entries are automatically sorted by most recent first before rendering
 *
 * @example
 * ```tsx
 * // Display multiple work experiences with pagination (shows latest entry + Show More button)
 * <WorkExperiences workExperiences={[
 *   { id: 1, title: 'Senior Software Developer', workplaceName: 'Tech Corp Oy', job: 'Led team of 5 developers to build scalable web applications using React and Node.js. Implemented CI/CD pipelines reducing deployment time by 40%.', startDate: '2021-03-01', endDate: '2023-12-31' },
 *   { id: 2, title: 'Junior Developer', workplaceName: 'StartUp Co.', job: 'Developed features for customer-facing mobile application. Collaborated with design team to implement user-friendly interfaces.', startDate: '2019-06-15', endDate: '' }
 * ]} />
 *
 * // Single work experience (no pagination UI shown)
 * <WorkExperiences workExperiences={[
 *   { id: 1, title: 'Software Engineer', workplaceName: 'Google Finland', job: 'Built scalable systems serving millions of users. Optimized database queries improving performance by 60%.', startDate: '2020-01-01', endDate: '' }
 * ]} />
 *
 * // Usage with full data object from context (automatically sorted by recency)
 * <WorkExperiences workExperiences={data.workExperiences} />
 * ```
 */
const WorkExperiences = ({ workExperiences }: WorkExperiencesProps) => {
  const sortedWorkExperiences = sortWorkExperiences(workExperiences)

  const [workExperiencesState, setWorkExperienceState] = useState<
    WorkExperienceType[]
  >(workExperiences.length ? [sortedWorkExperiences[0]] : [])
  return (
    <>
      {workExperiencesState.map(workExperience => (
        <WorkExperience
          key={workExperience.id}
          workExperience={workExperience}
        />
      ))}
      {workExperiences.length > 1 ? (
        <ShowMore
          data={sortedWorkExperiences}
          setData={setWorkExperienceState}
        />
      ) : null}
    </>
  )
}

export default WorkExperiences
