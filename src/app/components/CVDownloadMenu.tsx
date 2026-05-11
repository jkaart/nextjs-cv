import CVDownload from '@components/CVDownload'
import Link from 'next/link'

export interface CVDownloadMenuProps {
  lastContentUpdate: string
  meDescriptionRaw: string
}

/**
 * Dropdown menu component that provides options to view or download the CV.
 * Displays a "View" link and a "Download" button, appearing when hovering over
 * the profile section. Uses Tailwind CSS for styling with dark mode support.
 *
 * @interface CVDownloadMenuProps - Props interface for CVDownloadMenu component
 * @param {string} props.lastContentUpdate - Timestamp of last content update shown in PDF footer
 * @param {string} props.meDescriptionRaw - Raw MDX content for the description section of the CV
 *
 * @example
 * ```tsx
 * <CVDownloadMenu
 *   lastContentUpdate='2024-01-15'
 *   meDescriptionRaw={meDescription}
 * />
 * ```
 */
const CVDownloadMenu = ({
  lastContentUpdate,
  meDescriptionRaw
}: CVDownloadMenuProps) => (
  <div
    className='
          dark:bg-blue-100
          dark:text-black
          absolute
          text-sm
          z-100
          top-0
          left-full
          flex
          flex-col
          px-5
          py-1
          ml-2
          border
          rounded-lg
          font-semibold
          '
  >
    <Link href='/pdf-cv'>Näytä</Link>
    <CVDownload
      lastContentUpdate={lastContentUpdate}
      meDescriptionRaw={meDescriptionRaw}
      label='Lataa'
    />
  </div>
)

export default CVDownloadMenu
