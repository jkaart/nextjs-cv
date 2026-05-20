import type { Me } from '@types'

interface HeroHeaderProps {
  me: Me
}

/**
 * Renders a hero header component for displaying personal information.
 * Shows the full name and job title in centered layout with Tailwind styling.
 * Uses data-testid attributes for testing purposes.
 *
 * @interface HeroHeaderProps - Props interface for HeroHeader component
 * @param {Me} props.me - The person object containing firstName, lastName, and jobTitle fields. These values are displayed prominently in the hero section with appropriate heading levels (h2). First name and last name are concatenated to form the full name display
 *
 * @example Basic usage with simple profile data
 * ```tsx
 * import HeroHeader from './HeroHeader'
 *
 * <HeroHeader me={{ firstName: 'John', lastName: 'Doe', jobTitle: 'Software Developer' }} />
 * // Output: John Doe (h2)
 * //         Software Developer (h2)
 * ```
 *
 * @example Rendering in a CV profile section with Tailwind layout classes
 * ```tsx
 * import HeroHeader from './HeroHeader'
 *
 * const ProfileSection = () => (
 *   <section className="mb-8">
 *     <HeroHeader me={{ firstName: 'Jane', lastName: 'Smith', jobTitle: 'Full Stack Developer' }} />
 *   </section>
 * )
 * ```
 *
 * @example Multiple hero headers for different roles or contexts
 * ```tsx
 * import HeroHeader from './HeroHeader'
 *
 * const RoleHeaders = () => (
 *   <div className="space-y-8">
 *     {// Current role }
 *     <HeroHeader me={{ firstName: 'John', lastName: 'Doe', jobTitle: 'Senior React Developer' }} />
 *
 *     {// Previous role }
 *     <HeroHeader me={{ firstName: 'John', lastName: 'Doe', jobTitle: 'Junior Frontend Developer' }} />
 *   </div>
 * )
 * ```
 *
 * @example Hero header with Finnish context (local developer profile)
 * ```tsx
 * import HeroHeader from './HeroHeader'
 *
 * const FinnishProfile = () => (
 *   <section className="mb-8">
 *     <HeroHeader me={{ firstName: 'Matti', lastName: 'Virtanen', jobTitle: 'Ohjelmistokehittäjä' }} />
 *   </section>
 * )
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
