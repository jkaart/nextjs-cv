'use client'

import PDFResume from '@components/PDFResume'
import useProjects from '@hooks/useProjects'
import dynamic from 'next/dynamic'

interface PDFClientProps {
  meDescriptionRaw: string
}

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFViewer),
  { ssr: false }
)

const PDFClient = ({ meDescriptionRaw }: PDFClientProps) => {
  const { projects, loading } = useProjects()

  if (loading || !projects) return <div>Loading...</div>
  return (
    <PDFViewer className='w-full h-svh'>
      <PDFResume meDescriptionRaw={meDescriptionRaw} projects={projects} />
    </PDFViewer>
  )
}

export default PDFClient
