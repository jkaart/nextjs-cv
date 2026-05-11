'use client'

import CVDownloadMenu, {
  type CVDownloadMenuProps
} from '@components/CVDownloadMenu'
import { useState } from 'react'
import { FaRegFilePdf as PdfIcon } from 'react-icons/fa6'

/**
 * Button component that toggles a dropdown menu for viewing or downloading the CV.
 * Displays a PDF icon that, when clicked, shows/hides the CVDownloadMenu with options
 * to view the CV on a separate page or download it as a PDF file. Uses React state
 * to manage menu visibility and Tailwind CSS for styling.
 *
 * @interface CVDownloadMenuProps - Props interface for CVDownloadMenuButton component
 * @param {string} props.lastContentUpdate - Timestamp of last content update shown in PDF footer
 * @param {string} props.meDescriptionRaw - Raw MDX content for the description section of the CV
 *
 * @example
 * ```tsx
 * <CVDownloadMenuButton
 *   lastContentUpdate='2024-01-15'
 *   meDescriptionRaw={meDescription}
 * />
 * ```
 */
const CVDownloadMenuButton = ({
  lastContentUpdate,
  meDescriptionRaw
}: CVDownloadMenuProps) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='relative cursor-pointer'>
      <PdfIcon onClick={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <CVDownloadMenu
          lastContentUpdate={lastContentUpdate}
          meDescriptionRaw={meDescriptionRaw}
        />
      )}
    </div>
  )
}

export default CVDownloadMenuButton
