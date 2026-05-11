'use client'

import { type Dispatch, type SetStateAction, useState } from 'react'

interface ShowMoreProps<T> {
  data: T[]
  setData: Dispatch<SetStateAction<T[]>>
}

/**
 * A toggle button to show/hide all items in a list or show only the first item.
 * Initially shows all items; clicking toggles between showing all and showing just the first item.
 *
 * @template T - The type of data items (e.g., JobExperience, Project)
 * @param {ShowMoreProps<T>} props - Component props containing data and state setter
 * @param {T[]} props.data - Array of data items to display (e.g., all job experiences or projects)
 * @param {(prev: T[]) => T[]} props.setData - State updater function to control visibility (show all vs show first item only)
 *
 * @example
 * ```tsx
 * const [experiences, setExperiences] = useState<JobExperience[]>([...])
 * <ShowMore data={experiences} setData={setExperiences} />
 *
 * const [projects, setProjects] = useState<Project[]>([...])
 * <ShowMore data={projects} setData={setProjects} />
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
