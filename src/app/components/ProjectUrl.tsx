'use client'

interface ProjectUrlProps {
  href: string
  title: string
}

/**
 * Renders a clickable button that opens an external URL in a new tab.
 * Prevents default link behavior and stops event propagation to parent components.
 * Uses blue hover effect for visual feedback when user hovers over the button.
 *
 * @param props - Component props containing URL and display title
 * @param props.href - The URL address to open in a new browser tab/window
 * @param props.title - The text label displayed on the button
 *
 * @example
 * ```tsx
 * <ProjectUrl href='https://github.com/example/repo' title='GitHub Repository' />
 * <ProjectUrl href='https://example.com/docs' title='Documentation' />
 * ```
 */
const ProjectUrl = ({ href, title }: ProjectUrlProps) => (
  <button
    className='hover:text-blue-600 hover:cursor-pointer text-left'
    onClick={event => {
      event.preventDefault()
      event.stopPropagation()
      window.open(href, '_blank')
    }}
    rel='canonical'
    type='button'
  >
    {title}
  </button>
)

export default ProjectUrl
