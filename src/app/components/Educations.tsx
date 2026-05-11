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
 * Component that displays education history with a "show more" feature.
 * Renders the first education entry by default and provides an option to view
 * additional entries through a ShowMore component. Educations are sorted in
 * reverse chronological order using the sortEducations utility function.
 *
 * @interface EducationsProps - Props interface for Educations component
 * @param {EducationType[]} props.educations - Array of education objects containing degree, institution, dates, and descriptions
 *
 * @example
 * ```tsx
 * <Educations educations={[
 *   { id: '1', degree: 'Bachelor of Science', institution: 'University Name' },
 *   { id: '2', degree: 'Master of Arts', institution: 'Another University' }
 * ]} />
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
