import type { ReactNode } from 'react'

interface SectionProps {
  title: string
  children: ReactNode
}

const Section = ({ title, children }: SectionProps) => (
  <section data-testid='section'>
    <div className='border rounded-md p-2 mb-1'>
      <h2 className='inline-block text-2xl font-bold border-b-4 mb-2'>
        {title}
      </h2>
      {children}
    </div>
  </section>
)

export default Section
