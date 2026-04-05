'use client'

import Education from '@components/common/Education'
import ShowMore from '@components/common/ShowMore'
import type { Education as EducationType } from '@data/data'
import { sortEducations } from '@utils/sortEducations'
import { useState } from 'react'

interface EducationsProps {
  educations: EducationType[]
}

const Educations = ({ educations }: EducationsProps) => {
  const sortedEducations = sortEducations(educations)
  const [educationsState, setEducationsState] = useState<EducationType[]>([
    sortedEducations[0]
  ])
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
