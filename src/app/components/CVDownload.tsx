'use client'

import dynamic from 'next/dynamic'
import PDFResume from './PDFResume'

interface CVDownloadProps {
  label: string
  className?: string
}

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
  { ssr: false }
)

const CVDownload = ({ label, className }: CVDownloadProps) => (
  <PDFDownloadLink className={className} document={<PDFResume />}>
    {label}
  </PDFDownloadLink>
)

export default CVDownload
