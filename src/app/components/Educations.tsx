"use client"

import { useState } from "react"
import { data, type Education as EducationType } from "@/data/data"
import Education from "./common/Education"
import ShowMore from "./common/ShowMore"

const Educations = () => {
  const sortedEducations = data.education.sort((a, b) => b.yearOfDecree - a.yearOfDecree)
  const [educations, setEducations] = useState<EducationType[]>([sortedEducations[0]])
  return (
    <>
      {educations.map(education => (
        <Education key={education.id} education={education} />
      ))}
      <ShowMore data={sortedEducations} setData={setEducations} />
    </>
  )
}

export default Educations
