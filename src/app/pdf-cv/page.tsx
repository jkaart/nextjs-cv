'use client'

import { PDFViewer } from '@react-pdf/renderer'
import PDFResume from '../components/PDFResume'

const PDFPage = () => {
  return <PDFViewer className='w-full h-svh'>{<PDFResume />}</PDFViewer>
}

export default PDFPage
