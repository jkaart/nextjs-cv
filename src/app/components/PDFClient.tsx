'use client'

import PDFResume from '@components/PDFResume'
import useProjects from '@hooks/useProjects'
import dynamic from 'next/dynamic'

interface PDFClientProps {
  meDescriptionRaw: string
  lastContentUpdate: string
}

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFViewer),
  { ssr: false }
)

/**
 * Client-side component that renders the CV as a downloadable PDF using react-pdf.
 * Dynamically imports the PDFViewer to avoid SSR issues and fetches project data
 * from 3 latest project via useProjects hook before rendering the PDFResume document.
 * Uses Tailwind CSS for full viewport styling (w-full h-svh).
 *
 * @interface PDFClientProps - Props interface for PDFClient component
 * @param {string} props.meDescriptionRaw - Raw MDX content for the description section of the CV
 * @param {string} props.lastContentUpdate - Timestamp of last content update shown in PDF footer
 *
 * @example
 * ```tsx
 * // Basic usage with static props
 * <PDFClient
 *   meDescriptionRaw={meDescription}
 *   lastContentUpdate='2024-01-15'
 * />
 *
 * // Usage within a route handler or dynamic segment
 * export default function CVPage({ params }) {
 *   const meDescription = useMDXComponents(params.slug).content
 *   return <PDFClient meDescriptionRaw={meDescription} lastContentUpdate='2024-01-15' />
 * }
 * ```
 */
const PDFClient = ({ meDescriptionRaw, lastContentUpdate }: PDFClientProps) => {
  const { projects, loading } = useProjects(3)

  if (loading || !projects) return <div>Loading...</div>
  return (
    <PDFViewer className='w-full h-svh'>
      <PDFResume
        lastContentUpdate={lastContentUpdate}
        meDescriptionRaw={meDescriptionRaw}
        projects={projects}
      />
    </PDFViewer>
  )
}

export default PDFClient
