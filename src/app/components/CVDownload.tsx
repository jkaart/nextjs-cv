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

/**
 * Renders a PDF download link that generates and downloads the user's CV.
 * Uses dynamic import to load @react-pdf/renderer client-side only.
 * Triggers CV generation when clicked, including latest 3 projects from useProjects hook.
 *
 * @param {CVDownloadProps} props - Component props containing label and resume data
 * @param {string} props.label - Text displayed on the download button/link
 * @param {string} props.meDescriptionRaw - Raw MDX content for the description section of the CV
 * @param {string} props.lastContentUpdate - Last update timestamp shown in PDF footer
 * @param {string} [props.className] - Optional CSS class name for styling the download link
 *
 * @example
 * ```tsx
 * <CVDownload
 *   label='Lataa CV'
 *   meDescriptionRaw={meDescription}
 *   lastContentUpdate='2024-01-15'
 * />
 * ```
 */
const CVDownload = ({
  label,
  meDescriptionRaw,
  lastContentUpdate,
  className
}: CVDownloadProps) => {
  const { projects, loading } = useProjects(3)
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
