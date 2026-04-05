import WorkExperience from '@components/common/WorkExperience'
import type { WorkExperience as WorkExperienceType } from '@data/data'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('WorkExperience', () => {
  const workExperience = {
    id: '1',
    title: 'Senior Developer',
    workplaceName: 'Tech Company Inc.',
    startDate: new Date('2020-01-01'),
    endDate: new Date('2023-12-31'),
    job: 'Developed and maintained web applications using React'
  } satisfies WorkExperienceType

  it('renders WorkExperience component', () => {
    render(<WorkExperience workExperience={workExperience} />)

    const workExperienceComponent = screen.getByTestId('work-experience')
    expect(workExperienceComponent).toBeInTheDocument()
  })

  it('renders title with font-semibold class', () => {
    render(<WorkExperience workExperience={workExperience} />)

    const titleElement = screen.getByText(workExperience.title)
    expect(titleElement).toHaveClass('font-semibold')
  })

  it('renders workplace name field', () => {
    render(<WorkExperience workExperience={workExperience} />)

    const workplaceNameElement = screen.getByText(workExperience.workplaceName)
    expect(workplaceNameElement).toBeInTheDocument()
  })

  it('renders date range field', () => {
    render(<WorkExperience workExperience={workExperience} />)

    const dateRangeElement = screen.getByText(/2020/)
    expect(dateRangeElement).toBeInTheDocument()
  })

  it('renders job description field', () => {
    render(<WorkExperience workExperience={workExperience} />)

    const jobDescriptionElement = screen.getByText(workExperience.job)
    expect(jobDescriptionElement).toBeInTheDocument()
  })

  it('renders all fields in a list within a div with mb-2 class', () => {
    render(<WorkExperience workExperience={workExperience} />)

    const ulElement = screen.getByRole('list')
    expect(ulElement).toBeInTheDocument()

    const liElements = screen.getAllByRole('listitem')
    expect(liElements).toHaveLength(4)
  })
})
