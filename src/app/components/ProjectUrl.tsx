'use client'

interface ProjectUrlProps {
  href: string
  title: string
}

const ProjectUrl = ({ href, title }: ProjectUrlProps) => (
  <button
    className='hover:text-blue-600 hover:cursor-pointer'
    onClick={event => {
      event.preventDefault()
      event.stopPropagation()
      window.open(href, '_blank')
    }}
    type='button'
  >
    {title}
  </button>
)

export default ProjectUrl
