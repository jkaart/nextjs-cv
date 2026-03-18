"use client"

import { useState } from "react"
import type { Education as EducationType } from "@/data/data"
import Education from "./common/Education"
import ShowMore from "./common/ShowMore"

interface EducationsProps {
  educations: EducationType[]
}

const Educations = ({ educations }: EducationsProps) => {
  const sortedEducations = educations.sort((a, b) => b.yearOfDecree - a.yearOfDecree)
  const [educationsState, setEducationsState] = useState<EducationType[]>([sortedEducations[0]])
  return (
    <>
      {educationsState.map(education => (
        <Education key={education.id} education={education} />
      ))}
      <ShowMore data={sortedEducations} setData={setEducationsState} />
    </>
  )
}

export default Educations
