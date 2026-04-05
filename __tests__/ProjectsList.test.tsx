import ProjectsList from '@components/ProjectsList'
import type { ProjectMetadata } from '@utils/projects'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('ProjectsList', () => {
  const mockProjects = [
    {
      slug: 'project-1',
      title: 'Project One',
      summary: 'A brief description of project one.',
      technologies: ['React', 'TypeScript'],
      startDate: '2023-01-01',
      endDate: '2023-12-31'
    },
    {
      slug: 'project-2',
      title: 'Project Two',
      summary: 'A brief description of project two.',
      technologies: ['Vue', 'JavaScript'],
      startDate: '2024-01-01',
      endDate: 'current'
    }
  ] satisfies Required<ProjectMetadata[]>

  it('renders ProjectsList component', () => {
    render(<ProjectsList projects={mockProjects} />)

    const linkElements = screen.getAllByRole('link') as HTMLElement[]
    expect(linkElements).toHaveLength(mockProjects.length)
  })

  it('renders correct number of ProjectListItem components', () => {
    render(<ProjectsList projects={mockProjects} />)

    const projectItems = screen.getAllByRole('link') as HTMLElement[]
    expect(projectItems).toHaveLength(mockProjects.length)
  })

  it('renders all project titles', () => {
    render(<ProjectsList projects={mockProjects} />)

    mockProjects.forEach(project => {
      const titleElement = screen.getByText(project.title)
      expect(titleElement).toBeInTheDocument()
    })
  })

  it('renders all project summaries', () => {
    render(<ProjectsList projects={mockProjects} />)

    mockProjects.forEach(project => {
      const summaryElement = screen.getByText(project.summary) as HTMLElement
      expect(summaryElement).toBeInTheDocument()
    })
  })

  it('renders technologies for each project', () => {
    render(<ProjectsList projects={mockProjects} />)

    const techElements = screen.getAllByRole('heading') as HTMLElement[]
    expect(techElements).toHaveLength(mockProjects.length)
  })

  it('renders date ranges for projects', () => {
    render(<ProjectsList projects={mockProjects} />)

    const dateElement1 = screen.getByText(/2023/) as HTMLElement
    expect(dateElement1).toBeInTheDocument()
  })

  it('handles empty projects array gracefully', () => {
    const { container } = render(<ProjectsList projects={[]} />)

    expect(container).toBeInTheDocument()
  })
})
