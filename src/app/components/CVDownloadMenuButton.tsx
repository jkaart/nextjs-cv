'use client'

import CVDownloadMenu, {
  type CVDownloadMenuProps
} from '@components/CVDownloadMenu'
import { useState } from 'react'
import { FaRegFilePdf as PdfIcon } from 'react-icons/fa6'

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
