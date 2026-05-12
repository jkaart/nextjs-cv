'use client'

import PDFResume from '@components/PDFResume'
import useProjects from '@hooks/useProjects'
import dynamic from 'next/dynamic'
import type { HTMLProps } from 'react'

interface CVDownloadProps {
  label: string
  meDescriptionRaw: string
  lastContentUpdate: string
  pdfFileName: string
  className?: HTMLProps<HTMLElement>['className']
}

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
  { ssr: false }
)

/**
 * Renders a PDF download link that generates and downloads the user's CV.
 * Uses dynamic import to load '@react-pdf/renderer' module client-side only.
 * Triggers CV generation when clicked, including latest 3 projects from useProjects hook.
 * The fileName prop controls the downloaded file name.
 *
 * @param {CVDownloadProps} props - Component props containing label and resume data
 * @param {string} props.label - Text displayed on the download button/link
 * @param {string} props.meDescriptionRaw - Raw MDX content for the description section of the CV
 * @param {string} props.lastContentUpdate - Last update timestamp shown in PDF footer
 * @param {string} props.pdfFileName - The file name for the downloaded PDF (e.g., 'johndoe-cv.pdf')
 * @param {string} [props.className] - Optional CSS class name for styling the download link
 *
 * @example
 * ```tsx
 * // Basic usage with default file naming
 * <CVDownload
 *   label='Download CV'
 *   meDescriptionRaw={meDescription}
 *   lastContentUpdate='2024-01-15'
 * />
 *
 * // Custom file name for specific download scenarios
 * <CVDownload
 *   label='Download'
 *   meDescriptionRaw={meDescription}
 *   lastContentUpdate='2024-01-15'
 *   pdfFileName='johndoe-full-cv.pdf'
 * />
 *
 * // Usage in a download section with custom styling
 * <section className="mb-8">
 *   <h3>Documents</h3>
 *   <CVDownload
 *     label='Download CV (PDF)'
 *     meDescriptionRaw={meDescription}
 *     lastContentUpdate={new Date().toISOString().split('T')[0]}
 *     pdfFileName={`${name.toLowerCase().replace(' ', '-')}-cv.pdf`}
 *     className="btn-primary"
 *   />
 * </section>
 * ```
 */
const CVDownload = ({
  label,
  meDescriptionRaw,
  lastContentUpdate,
  pdfFileName,
  className
}: CVDownloadProps) => {
  const { projects, loading } = useProjects(3)
  if (loading || !projects) return <div>Loading...</div>
  return (
    <PDFDownloadLink
      className={className}
      fileName={pdfFileName}
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
