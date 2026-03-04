import type { ReactNode } from "react"

interface SectionProps {
  title: string
  children: ReactNode
}

const Section = ({ title, children }: SectionProps) => (
  <div className="border rounded-md p-2 mb-1">
    <h2 className="text-center text-3xl font-bold">{title}</h2>
    {children}
  </div>
)

export default Section
