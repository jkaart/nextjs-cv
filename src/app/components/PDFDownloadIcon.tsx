import Image from 'next/image'

const PDFDownloadIcon = () => (
  <Image
    src='/assets/icons/svg/other/file-pdf.svg'
    alt='Icon: pdf'
    className='dark:invert'
    width={40}
    height={40}
  />
)

export default PDFDownloadIcon
