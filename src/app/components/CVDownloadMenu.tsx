import CVDownload from '@components/CVDownload'
import Link from 'next/link'

export interface CVDownloadMenuProps {
  lastContentUpdate: string
  meDescriptionRaw: string
  pdfFileName: string
}

/**
 * Dropdown menu component that provides options to view or download the CV.
 * Displays a "View" link and a "Download" button, appearing when hovering over
 * the profile section. Uses Tailwind CSS for styling with dark mode support.
 * The pdfFileName prop is passed to CVDownload to control the downloaded file name.
 *
 * @interface CVDownloadMenuProps - Props interface for CVDownloadMenu component
 * @param {string} props.lastContentUpdate - Timestamp of last content update shown in PDF footer
 * @param {string} props.meDescriptionRaw - Raw MDX content for the description section of the CV
 * @param {string} props.pdfFileName - The file name for the downloaded PDF (e.g., 'johndoe-cv.pdf')
 *
 * @example
 * ```tsx
 * // Basic usage with default file naming
 * <CVDownloadMenu
 *   lastContentUpdate='2024-01-15'
 *   meDescriptionRaw={meDescription}
 *   pdfFileName='johndoe-cv.pdf'
 * />
 *
 * // Usage with custom file name for specific scenarios
 * <CVDownloadMenu
 *   lastContentUpdate={new Date().toISOString().split('T')[0]}
 *   meDescriptionRaw={meDescription}
 *   pdfFileName={`${name.toLowerCase().replace(' ', '-')}-full-cv.pdf`}
 * />
 * ```
 */
const CVDownloadMenu = ({
  lastContentUpdate,
  meDescriptionRaw,
  pdfFileName
}: CVDownloadMenuProps) => (
  <div
    className='
          dark:bg-blue-100
          dark:text-black
          bg-blue-100
          text-black
          w-25
          h-12
          absolute
          text-sm
          z-100
          -top-2
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
      pdfFileName={pdfFileName}
    />
  </div>
)

export default CVDownloadMenu
