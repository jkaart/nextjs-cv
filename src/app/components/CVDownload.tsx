'use client'

import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFResume from './PDFResume'

const CVDownload = () => {
  return <PDFDownloadLink document={<PDFResume />}>Lataa PDF</PDFDownloadLink>
}

export default CVDownload
