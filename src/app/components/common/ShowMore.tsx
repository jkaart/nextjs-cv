'use client'

import { type Dispatch, type SetStateAction, useState } from 'react'

interface ShowMoreProps<T> {
  data: T[]
  setData: Dispatch<SetStateAction<T[]>>
}

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
