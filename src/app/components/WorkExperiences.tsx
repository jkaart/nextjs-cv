'use client'

import ShowMore from '@components/common/ShowMore'
import WorkExperience from '@components/common/WorkExperience'
import type { WorkExperience as WorkExperienceType } from '@types'
import { sortWorkExperiences } from '@utils/sortWorkExperiences'
import { useState } from 'react'

interface WorkExperiencesProps {
  workExperiences: WorkExperienceType[]
}

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
