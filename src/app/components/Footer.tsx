import type { Me } from '@types'
import { dateToString } from '@utils/dateToString'
import { getLastContentUpdate } from '@utils/projects'
import Image from 'next/image'
import Link from 'next/link'

interface FooterProps {
  me: Me
  sourceCodeUrl?: string
}

/**
 * Component that renders the footer section of the CV page.
 * Displays copyright information, last content update timestamp, attribution
 * for favicon, and optional link for project source code with open source icon.
 * The footer uses Tailwind CSS for styling with support for dark mode.
 *
 *
 * @interface FooterProps - Props interface for Footer component
 * @param {Me} props.me - Object containing personal information (firstName, lastName) for copyright display
 * @param {string} props.sourceCodeUrl - Optional url for project source code
 *
 * @example
 * ```tsx
 * <Footer me={{ firstName: 'John', lastName: 'Doe' }} sourceCodeUrl='https://github.com/user/repo' />
 * ```
 */
const Footer = async ({ me, sourceCodeUrl }: FooterProps) => {
  const lastUpdated = await getLastContentUpdate()

  return (
    <footer
      className={`items-center w-full ${sourceCodeUrl ? 'grid lg:grid-cols-3 grid-cols-1 gap-2' : 'flex flex-col py-5 '}`}
    >
      {sourceCodeUrl && (
        <div className='lg:text-start order-2 lg:order-1 lg:ms-2 mx-auto'>
          <Link
            className='cursor-pointer'
            target='_blank'
            rel='noopener noreferrer'
            href={sourceCodeUrl}
          >
            <Image
              alt='Open source repository'
              width={48}
              height={48}
              src={'/assets/icons/svg/other/open-source.svg'}
              className='dark:invert'
            />
          </Link>
        </div>
      )}
      <div
        className={`text-center flex flex-col ${sourceCodeUrl ? 'order-1 lg:order-2' : ''}`}
      >
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
      </div>
    </footer>
  )
}

export default Footer
