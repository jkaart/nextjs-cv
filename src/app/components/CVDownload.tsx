'use client'

import dynamic from 'next/dynamic'
import PDFResume from './PDFResume'

interface CVDownloadProps {
  label: string
}

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
  { ssr: false }
)

const CVDownload = ({ label }: CVDownloadProps) => {
  return <PDFDownloadLink document={<PDFResume />}>{label}</PDFDownloadLink>
}

export default CVDownload
