'use client'

import { useState } from 'react'
import type { WorkExperience as WorkExperienceType } from '@/data/data'
import { sortWorkExperiences } from '@/utils/sortWorkExperiences'
import ShowMore from './common/ShowMore'
import WorkExperience from './common/WorkExperience'

interface WorkExperiencesProps {
  workExperiences: WorkExperienceType[]
}

const WorkExperiences = ({ workExperiences }: WorkExperiencesProps) => {
  const sortedWorkExperiences = sortWorkExperiences(workExperiences)

  const [workExperiencesState, setWorkExperienceState] = useState<
    WorkExperienceType[]
  >([sortedWorkExperiences[0]])
  return (
    <>
      {workExperiencesState.map(workExperience => (
        <WorkExperience
          key={workExperience.id}
          workExperience={workExperience}
        />
      ))}
      <ShowMore data={sortedWorkExperiences} setData={setWorkExperienceState} />
    </>
  )
}

export default WorkExperiences
