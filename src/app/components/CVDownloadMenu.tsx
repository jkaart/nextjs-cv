import CVDownload from '@components/CVDownload'
import Link from 'next/link'

export interface CVDownloadMenuProps {
  lastContentUpdate: string
  meDescriptionRaw: string
}

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
