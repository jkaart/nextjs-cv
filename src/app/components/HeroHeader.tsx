import type { Me } from '@types'

interface HeroHeaderProps {
  me: Me
}

/**
 * Header component for the hero section that displays the person's full name and job title.
 * Renders two centered heading elements with large typography using Tailwind CSS classes.
 * Includes test IDs for end-to-end testing of the header container, full name, and job title.
 *
 * @interface HeroHeaderProps - Props interface for HeroHeader component
 * @param {Me} props.me - Object containing personal information including firstName, lastName, and jobTitle
 *
 * @example
 * ```tsx
 * // In a page that uses server-side data fetching
 * import HeroHeader from '@components/HeroHeader'
 *
 * const HeaderSection = async () => {
 *   const meData = await getMeData()
 *   return (
 *     <HeroHeader
 *       me={{
 *         firstName: "John",
 *         lastName: "Doe",
 *         jobTitle: "Senior Software Engineer"
 *       }}
 *     />
 *   )
 * }
 * ```
 */
const HeroHeader = ({ me }: HeroHeaderProps) => {
  const fullName = `${me.firstName} ${me.lastName}`
  return (
    <div data-testid='hero-header-container'>
      <h2 data-testid='me-full-name' className='text-4xl text-center'>
        {fullName}
      </h2>
      <h2 data-testid='me-job-title' className='text-3xl text-center mb-2'>
        {me.jobTitle}
      </h2>
    </div>
  )
}

export default HeroHeader
