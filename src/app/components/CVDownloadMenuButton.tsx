'use client'

import CVDownloadMenu, {
  type CVDownloadMenuProps
} from '@components/CVDownloadMenu'
import PDFDownloadIcon from '@components/PDFDownloadIcon'
import { useState } from 'react'

/**
 * Button component that triggers a dropdown menu for CV download options.
 * Displays a PDF icon and shows a menu with "View" link and "Download" button
 * when clicked. The menu appears to the right of the button.
 * This client component conditionally renders the menu based on local state.
 *
 * @interface CVDownloadMenuButtonProps - Props interface for CVDownloadMenuButton component
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
      <button type='button' onClick={() => setShowMenu(!showMenu)}>
        <PDFDownloadIcon />
      </button>
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
