import Link from 'next/link'

interface ProjectListItemProps {
  title: string
  summary: string
  href: string
}

const ProjectListItem = ({ title, summary, href }: ProjectListItemProps) => (
  <Link className="border p-2" href={href}>
    <h3 className="text-l font-bold">{title}</h3>
    <p>{summary}</p>
  </Link>
)

export default ProjectListItem
