'use client'

import { type Dispatch, type SetStateAction, useState } from 'react'

interface ShowMoreProps<T> {
  data: T[]
  setData: Dispatch<SetStateAction<T[]>>
}

/**
 * A toggle button component to show/hide all items in a list or show only the first item.
 * Initially shows all items; clicking toggles between showing all and showing just the first item.
 * Used for pagination control in lists like job experiences, projects, skills, languages, and educations.
 * Displays Finnish text: "Näytä lisää" (Show more) when expanded, "Näytä vähemmän" (Show less) when collapsed.
 *
 * @template T - The type of data items being displayed (e.g., JobExperience, Project, Skill, Language, Education)
 * @interface ShowMoreProps<T> - Props interface for generic ShowMore component
 * @param {T[]} props.data - Array of data items to display; when showMore is true displays all items, when false shows only first item [data[0]]
 * @param {(prev: T[]) => T[]} props.setData - State updater function that receives current state and returns new array; used to toggle between full list and single-item view
 *
 * @example Basic usage with job experiences (shows all initially)
 * ```tsx
 * import ShowMore from './common/ShowMore'
 * import { useState } from 'react'
 * import type { JobExperience } from '@types'
 *
 * const [experiences, setExperiences] = useState<JobExperience[]>([...])
 *
 * <ShowMore data={experiences} setData={setExperiences} />
 * ```
 *
 * @example Usage with projects list (toggles between all and first project)
 * ```tsx
 * import ShowMore from './common/ShowMore'
 * import { useState } from 'react'
 * import type { Project } from '@types'
 *
 * const [projects, setProjects] = useState<Project[]>([...])
 *
 * <ShowMore data={projects} setData={setProjects} />
 * ```
 *
 * @example Integration with Educations component for education history pagination
 * ```tsx
 * import ShowMore from './common/ShowMore'
 * import { useState } from 'react'
 * import type { Education } from '@types'
 *
 * const [educations, setEducations] = useState<Education[]>([...])
 *
 * <div className="space-y-8">
 *   <h2>Koulutus</h2>
 *   <Educations educations={educations} />
 *   <ShowMore data={educations} setData={setEducations} />
 * </div>
 * ```
 *
 * @example Usage with skills list (shows all skills initially)
 * ```tsx
 * import ShowMore from './common/ShowMore'
 * import { useState } from 'react'
 * import type { Skill } from '@types'
 *
 * const [skills, setSkills] = useState<Skill[]>([...])
 *
 * <div className="space-y-4">
 *   <h2>Taidot</h2>
 *   <SkillList skills={skills} />
 *   <ShowMore data={skills} setData={setSkills} />
 * </div>
 * ```
 */
const ShowMore = <T,>({ data, setData }: ShowMoreProps<T>) => {
  const [showMore, setShowMore] = useState<boolean>(true)

  const showMoreHandler = () => {
    if (showMore) {
      setShowMore(false)
      return setData(data)
    }
    setShowMore(true)
    return setData([data[0]])
  }

  return (
    <div className='text-center'>
      <button
        className='cursor-pointer hover:text-shadow-md hover:text-shadow-gray-400 dark:hover:text-shadow-gray-600'
        type='button'
        onClick={showMoreHandler}
      >
        {showMore ? 'Näytä lisää' : 'Näytä vähemmän'}
      </button>
    </div>
  )
}

export default ShowMore
