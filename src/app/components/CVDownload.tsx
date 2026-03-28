'use client'

import dynamic from 'next/dynamic'
import PDFResume from './PDFResume'

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
  { ssr: false }
)

const CVDownload = () => {
  return <PDFDownloadLink document={<PDFResume />}>Lataa PDF</PDFDownloadLink>
}

export default CVDownload
