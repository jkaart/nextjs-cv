import Image from 'next/image'

const PDFDownloadIcon = () => (
  <Image
    src='/assets/icons/svg/other/file-pdf.svg'
    alt='Icon: pdf'
    className='dark:invert hover:scale-125'
    width={40}
    height={40}
  />
)

export default PDFDownloadIcon
