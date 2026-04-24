'use client'

import PDFResume from '@components/PDFResume'
import useProjects from '@hooks/useProjects'
import dynamic from 'next/dynamic'

interface CVDownloadProps {
  label: string
  meDescriptionRaw: string
  lastContentUpdate: string
  className?: string
}

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
  { ssr: false }
)

const CVDownload = ({
  label,
  meDescriptionRaw,
  lastContentUpdate,
  className
}: CVDownloadProps) => {
  const { projects, loading } = useProjects()
  if (loading || !projects) return <div>Loading...</div>
  return (
    <PDFDownloadLink
      className={className}
      document={
        <PDFResume
          lastContentUpdate={lastContentUpdate}
          meDescriptionRaw={meDescriptionRaw}
          projects={projects}
        />
      }
    >
      {label}
    </PDFDownloadLink>
  )
}

export default CVDownload
