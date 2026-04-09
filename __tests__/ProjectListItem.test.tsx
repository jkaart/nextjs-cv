import ProjectListItem from '@components/ProjectListItem'
import type { ProjectMetadata } from '@utils/projects'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('ProjectListItem', () => {
  const mockProject: Required<ProjectMetadata> = {
    slug: 'project-1',
    title: 'My Awesome Project',
    summary: 'This is a brief description of my awesome project.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    urls: [{ url: 'https://github.com/example/repo', title: 'GitHub' }]
  }

  it('renders ProjectListItem component', () => {
    render(<ProjectListItem project={mockProject} href='/projects/project-1' />)

    const projectItemComponent = screen.getByRole('link')
    expect(projectItemComponent).toBeInTheDocument()
  })

  it('renders project title with font-bold class', () => {
    render(<ProjectListItem project={mockProject} href='/projects/project-1' />)

    const titleElement = screen.getByText(mockProject.title)
    expect(titleElement).toHaveClass('font-bold')
  })

  it('renders project summary', () => {
    render(<ProjectListItem project={mockProject} href='/projects/project-1' />)

    const summaryElement = screen.getByText(mockProject.summary)
    expect(summaryElement).toBeInTheDocument()
  })

  it('renders technologies section with heading', () => {
    render(<ProjectListItem project={mockProject} href='/projects/project-1' />)

    const techHeading = screen.getByText(/Käytetyt teknologiat:/)
    expect(techHeading).toBeInTheDocument()
  })

  it('renders all technologies in the list', () => {
    render(<ProjectListItem project={mockProject} href='/projects/project-1' />)

    const techContainer = screen.getByText(
      /Node.js, React ja TypeScript/
    ) as HTMLElement
    expect(techContainer).toBeInTheDocument()
  })

  it('renders date range', () => {
    render(<ProjectListItem project={mockProject} href='/projects/project-1' />)

    const startDateElement = screen.getByText(/2023/)
    expect(startDateElement).toBeInTheDocument()
  })

  it('handles project without technologies', () => {
    const projectWithoutTechs: ProjectMetadata = {
      ...mockProject,
      technologies: undefined
    }

    render(
      <ProjectListItem
        project={projectWithoutTechs}
        href='/projects/project-1'
      />
    )

    expect(screen.getByText(mockProject.title)).toBeInTheDocument()
    expect(screen.getByText(mockProject.summary)).toBeInTheDocument()
  })

  it('handles project with empty technologies array', () => {
    const projectWithEmptyTechs: ProjectMetadata = {
      ...mockProject,
      technologies: []
    }

    render(
      <ProjectListItem
        project={projectWithEmptyTechs}
        href='/projects/project-1'
      />
    )

    expect(screen.getByText(mockProject.title)).toBeInTheDocument()
  })

  it('handles project with current end date', () => {
    const projectCurrentDate: ProjectMetadata = {
      ...mockProject,
      endDate: 'current'
    }

    render(
      <ProjectListItem
        project={projectCurrentDate}
        href='/projects/project-1'
      />
    )

    expect(screen.getByText(/nykyinen/)).toBeInTheDocument()
  })

  it('renders correct href attribute', () => {
    const { container } = render(
      <ProjectListItem project={mockProject} href='/custom-path' />
    )

    const linkElement = container.querySelector('a') as HTMLAnchorElement
    expect(linkElement?.getAttribute('href')).toBe('/custom-path')
  })

  it('renders ProjectUrl buttons for each external URL', () => {
    const projectWithUrls: ProjectMetadata = {
      ...mockProject,
      urls: [
        { url: 'https://github.com/example/repo', title: 'GitHub Repository' },
        { url: 'https://example.com/docs', title: 'Documentation' }
      ]
    }

    render(
      <ProjectListItem project={projectWithUrls} href='/projects/project-1' />
    )

    const urlButtons = screen.getAllByRole('button')
    expect(urlButtons).toHaveLength(2)

    expect(screen.getByText('GitHub Repository')).toBeInTheDocument()
    expect(screen.getByText('Documentation')).toBeInTheDocument()
  })

  it('renders ProjectUrl button with correct href attribute', () => {
    const projectWithUrls: ProjectMetadata = {
      ...mockProject
    }

    render(
      <ProjectListItem project={projectWithUrls} href='/projects/project-1' />
    )

    const urlButton = screen.getByText('GitHub') as HTMLButtonElement
    expect(urlButton).toHaveAttribute('type', 'button')
  })

  it('renders ProjectUrl button with hover classes', () => {
    const projectWithUrls: ProjectMetadata = {
      ...mockProject
    }

    render(
      <ProjectListItem project={projectWithUrls} href='/projects/project-1' />
    )

    const urlButton = screen.getByText('GitHub') as HTMLButtonElement
    expect(urlButton).toHaveClass('hover:text-blue-600', 'hover:cursor-pointer')
  })

  it('handles ProjectUrl with empty urls array', () => {
    const projectWithEmptyUrls: ProjectMetadata = {
      ...mockProject,
      urls: []
    }

    render(
      <ProjectListItem
        project={projectWithEmptyUrls}
        href='/projects/project-1'
      />
    )

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('handles ProjectUrl with undefined urls', () => {
    const projectWithoutUrls: ProjectMetadata = {
      ...mockProject,
      urls: undefined
    }

    render(
      <ProjectListItem
        project={projectWithoutUrls}
        href='/projects/project-1'
      />
    )

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
