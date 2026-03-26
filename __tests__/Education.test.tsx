import Education from '@/app/components/common/Education'
import type { Education as EducationType } from '@/data/data'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Education', () => {
  const education = {
    id: '1',
    professionalTitle: 'Bachelor of Science',
    education: 'Computer Science',
    academy: 'University of Technology',
    degree: 'Perustutkinto',
    yearOfDecree: 2020
  } satisfies EducationType

  it('renders Education component', () => {
    render(<Education education={education} />)

    const educationComponent = screen.getByText(education.professionalTitle)
    expect(educationComponent).toBeInTheDocument()
  })

  it('renders professional title with font-semibold class', () => {
    render(<Education education={education} />)

    const professionalTitle = screen.getByText(education.professionalTitle)
    expect(professionalTitle).toHaveClass('font-semibold')
  })

  it('renders education field', () => {
    render(<Education education={education} />)

    const educationField = screen.getByText(education.education)
    expect(educationField).toBeInTheDocument()
  })

  it('renders academy field', () => {
    render(<Education education={education} />)

    const academyField = screen.getByText(education.academy)
    expect(academyField).toBeInTheDocument()
  })

  it('renders degree field', () => {
    render(<Education education={education} />)

    const degreeField = screen.getByText(education.degree)
    expect(degreeField).toBeInTheDocument()
  })

  it('renders year of decree field', () => {
    render(<Education education={education} />)

    const yearOfDecree = screen.getByText(education.yearOfDecree.toString())
    expect(yearOfDecree).toBeInTheDocument()
  })

  it('renders all fields in a list within a div with mb-2 class', () => {
    render(<Education education={education} />)

    const ulElement = screen.getByRole('list')
    expect(ulElement).toBeInTheDocument()

    const liElements = screen.getAllByRole('listitem')
    expect(liElements).toHaveLength(5)
  })
})
