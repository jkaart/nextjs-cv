'use client'

import CVDownloadMenu, {
  type CVDownloadMenuProps
} from '@components/CVDownloadMenu'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { FaRegFilePdf as PdfIcon } from 'react-icons/fa6'

/**
 * Button component that toggles a dropdown menu for viewing or downloading the CV.
 * Displays a PDF icon that, when clicked, shows/hides the CVDownloadMenu with options
 * to view the CV on a separate page or download it as a PDF file. Uses React state
 * to manage menu visibility and Tailwind CSS for styling.
 * The pdfFileName prop is passed through to control the downloaded file name.
 *
 * @interface CVDownloadMenuProps - Props interface for CVDownloadMenuButton component
 * @param {string} props.lastContentUpdate - Timestamp of last content update shown in PDF footer
 * @param {string} props.meDescriptionRaw - Raw MDX content for the description section of the CV
 * @param {string} props.pdfFileName - The file name for the downloaded PDF (e.g., 'johndoe-cv.pdf')
 *
 * @example
 * ```tsx
 * // Basic usage with default file naming
 * <CVDownloadMenuButton
 *   lastContentUpdate='2024-01-15'
 *   meDescriptionRaw={meDescription}
 *   pdfFileName='johndoe-cv.pdf'
 * />
 *
 * // Usage with custom file name for specific scenarios
 * <CVDownloadMenuButton
 *   lastContentUpdate={new Date().toISOString().split('T')[0]}
 *   meDescriptionRaw={meDescription}
 *   pdfFileName={`${name.toLowerCase().replace(' ', '-')}-full-cv.pdf`}
 * />
 * ```
 */
const CVDownloadMenuButton = ({
  lastContentUpdate,
  meDescriptionRaw,
  pdfFileName
}: CVDownloadMenuProps) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='relative cursor-pointer'>
      <Icon
        icon='fa6-regular:file-pdf'
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && (
        <CVDownloadMenu
          lastContentUpdate={lastContentUpdate}
          meDescriptionRaw={meDescriptionRaw}
          pdfFileName={pdfFileName}
        />
      )}
    </div>
  )
}

export default CVDownloadMenuButton
