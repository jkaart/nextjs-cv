'use client'

import dynamic from 'next/dynamic'
import PDFResume from '../components/PDFResume'

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFViewer),
  { ssr: false }
)

const PDFPage = () => {
  return <PDFViewer className='w-full h-svh'>{<PDFResume />}</PDFViewer>
}

export default PDFPage
