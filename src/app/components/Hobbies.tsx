import type { Hobby } from '@types'
import { formatString } from '@utils/formatString'
import { sortHobbies } from '@utils/sortHobbies'
import HeadingH2 from './common/HeadingH2'

interface HobbiesProps {
  hobbies: Hobby[]
}

const Hobbies = ({ hobbies }: HobbiesProps) => {
  const sortedHobbies = sortHobbies(hobbies)
  const hobbiesString = formatString(sortedHobbies)
  return (
    <div>
      <HeadingH2 text='Harrastukset' />
      <div>{hobbiesString}</div>
    </div>
  )
}

export default Hobbies
