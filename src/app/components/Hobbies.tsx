import type { Hobby } from '@types'
import { formatString } from '@utils/formatString'
import { sortHobbies } from '@utils/sortHobbies'
import HeadingH2 from './common/HeadingH2'

interface HobbiesProps {
  hobbies: Hobby[]
}

/**
 * Renders a hobbies section with alphabetical sorting and formatted comma-separated display.
 * Displays the "Harrastukset" (hobbies) section header followed by all hobby items sorted alphabetically.
 * Uses formatString utility to convert array into clean, readable comma-separated text for Finnish language output.
 * Ideal for displaying leisure activities, interests, and personal pursuits in a CV/resume context.
 *
 * @interface HobbiesProps - Props interface for Hobbies component
 * @param {string[]} props.hobbies - Array of hobby strings representing leisure activities and interests (e.g., ['reading', 'hiking', 'cooking', 'photography']). Items are sorted alphabetically before display using sortHobbies utility. Empty array will show only the section header without any content
 *
 * @example Basic usage with sample hobbies data
 * ```tsx
 * <Hobbies hobbies={['reading', 'hiking', 'cooking', 'photography']} />
 * // Output: Harrastukset
 * //         cooking, hiking, photography ja reading
 * ```
 *
 * @example Usage with full data object from context (data.hobby array)
 * ```tsx
 * import Hobbies from './Hobbies'
 *
 * const App = () => {
 *   const data = useData() // hypothetical data context
 *
 *   return <Hobbies hobbies={data.hobby} />
 * }
 * ```
 *
 * @example Empty hobbies list (will display only section header "Harrastukset")
 * ```tsx
 * import Hobbies from './Hobbies'
 *
 * const NoHobbies = () => (
 *   <Hobbies hobbies={[]} />
 *   // Output: Harrastukset (no hobby items)
 * )
 * ```
 *
 * @example Multiple hobbies in different contexts with Tailwind spacing
 * ```tsx
 * import Hobbies from './Hobbies'
 *
 * const HobbySections = () => (
 *   <div className="space-y-8">
 *     <section>
 *       <h2>Harrastukset</h2>
 *       <Hobbies hobbies={['reading', 'hiking']} />
 *     </section>
 *     <section>
 *       <h2>Vapaa-aika</h2>
 *       <Hobbies hobbies={['cooking', 'photography', 'gardening']} />
 *     </section>
 *   </div>
 * )
 * ```
 *
 * @example Rendering in a CV profile section with layout context
 * ```tsx
 * import Hobbies from './Hobbies'
 *
 * const ProfileSection = () => (
 *   <section className="mb-8">
 *     <h2>Harrastukset</h2>
 *     <div className="space-y-4">
 *       <Hobbies hobbies={['reading', 'hiking', 'cooking']} />
 *     </div>
 *   </section>
 * )
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
