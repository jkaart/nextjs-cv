import type { Me } from '@types'
import { dateToString } from '@utils/dateToString'
import { getLastContentUpdate } from '@utils/projects'

interface FooterProps {
  me: Me
}

/**
 * Component that renders the footer section of the CV page.
 * Displays copyright information, last content update timestamp, and attribution
 * for icons used in the project. The footer uses Tailwind CSS for styling with
 * support for dark mode.
 *
 * @interface FooterProps - Props interface for Footer component
 * @param {Me} props.me - Object containing personal information (firstName, lastName) for copyright display
 *
 * @example
 * ```tsx
 * <Footer me={{ firstName: 'John', lastName: 'Doe' }} />
 * ```
 */
const Footer = async ({ me }: FooterProps) => {
  const lastUpdated = await getLastContentUpdate()

  return (
    <footer className='w-full py-5 text-center flex flex-col'>
      <span>
        &#169; 2026 {me.firstName} {me.lastName}
      </span>
      <span>Sisältö päivitetty: {dateToString(lastUpdated, 'date')}</span>
      <span>
        <a
          className='text-xs'
          href='https://www.flaticon.com/free-icons/resume-and-cv'
          title='resume and cv icons'
        >
          Resume and cv icons created by feen - Flaticon
        </a>
      </span>
    </footer>
  )
}

export default Footer
