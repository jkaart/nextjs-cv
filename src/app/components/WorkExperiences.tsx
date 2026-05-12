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
 * Renders a list of work experiences with pagination.
 * Displays the most recent work experience by default and allows users to view additional entries via a "Show More" button.
 * Automatically sorts work experiences in reverse chronological order (most recent first).
 * Uses ShowMore component for pagination when multiple work experiences exist.
 *
 * @param props - Component props containing work experiences data
 * @param props.workExperiences - Array of WorkExperienceType objects to display, sorted by most recent first
 *
 * @example
 * ```tsx
 * // Display all work experiences with pagination
 * <WorkExperiences workExperiences={[
 *   { id: 1, title: 'Senior Developer', workplaceName: 'Tech Corp', job: 'Led team of developers...', startDate: '2021-03-01', endDate: '2023-12-31' },
 *   { id: 2, title: 'Junior Developer', workplaceName: 'StartUp Co.', job: 'Developed features...', startDate: '2019-06-15', endDate: '' }
 * ]} />
 *
 * // Single work experience (no pagination)
 * <WorkExperiences workExperiences={[
 *   { id: 1, title: 'Software Engineer', workplaceName: 'Google', job: 'Built scalable systems...', startDate: '2020-01-01', endDate: '' }
 * ]} />
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
