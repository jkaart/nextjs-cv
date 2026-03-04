"use client"

import { useState } from "react"
import { data, type WorkExperience as WorkExperienceType } from "@/data/data"
import ShowMore from "./common/ShowMore"
import WorkExperience from "./common/WorkExperience"

const WorkExperiences = () => {
  const sortedWorkExperiences = data.workExperience.sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
  const [workExperiences, setWorkExperience] = useState<WorkExperienceType[]>([sortedWorkExperiences[0]])
  return (
    <>
      {workExperiences.map(workExperience => (
        <WorkExperience key={workExperience.id} workExperience={workExperience} />
      ))}
      <ShowMore data={sortedWorkExperiences} setData={setWorkExperience} />
    </>
  )
}

export default WorkExperiences
