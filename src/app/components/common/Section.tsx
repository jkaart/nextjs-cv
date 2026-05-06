import HeadingH2 from '@components/common/HeadingH2'
import type { ReactNode } from 'react'

interface SectionProps {
  title: string
  children: ReactNode
}

const Section = ({ title, children }: SectionProps) => (
  <section data-testid='section'>
    <div className='border rounded-md p-2 mb-3 bg-gray-100 dark:bg-gray-800'>
      <HeadingH2 text={title} />
      {children}
    </div>
  </section>
)

export default Section
