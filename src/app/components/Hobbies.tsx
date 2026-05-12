import type { Hobby } from '@types'
import { formatString } from '@utils/formatString'
import { sortHobbies } from '@utils/sortHobbies'
import HeadingH2 from './common/HeadingH2'

interface HobbiesProps {
  hobbies: Hobby[]
}

/**
 * Renders the Hobbies section of a CV with sorted and formatted hobby list.
 * Displays Finnish heading "Harrastukset" followed by alphabetically sorted hobbies
 * formatted as a comma-separated list with proper Finnish conjunctions (', ' between items,
 * ' ja ' before last item).
 *
 * @param {HobbiesProps} props - Component props containing the hobbies array
 * @param {Hobby[]} props.hobbies - Array of hobby strings to display. Hobbies are sorted alphabetically
 *                                  and formatted with Finnish conjunctions for natural listing.
 *
 * @example
 * ```tsx
 * <Hobbies hobbies={['reading', 'hiking', 'cooking']} />
 * // Renders: "Harrastukset" followed by "hiking, cooking ja reading" (sorted alphabetically)
 *
 * const hobbies = ['gaming', 'photography', 'cycling']
 * <Hobbies hobbies={hobbies} />
 * // Renders: "Harrastukset" followed by "cycling, gaming ja photography"
 * ```
 */
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
