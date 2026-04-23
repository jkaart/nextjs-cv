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
