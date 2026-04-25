import '@testing-library/jest-dom'
import Educations from '@components/Educations'
import { render, screen } from '@testing-library/react'
import type { Education as EducationType } from '@types'

describe('Educations', () => {
  const educations = [
    {
      id: '1',
      professionalTitle: 'Bachelor of Science',
      education: 'Computer Science',
      academy: 'University of Technology',
      degree: 'Perustutkinto',
      yearOfDecree: 2020
    },
    {
      id: '2',
      professionalTitle: 'Master of Science',
      education: 'Computer Science',
      academy: 'University of Applied Sciences',
      degree: 'Ammattitutkinto',
      yearOfDecree: 2015
    }
  ] satisfies EducationType[]

  it('renders Educations', () => {
    render(<Educations educations={educations} />)
    const educationComponent = screen.getByText(educations[0].professionalTitle)
    expect(educationComponent).toBeInTheDocument()
  })

  it('renders ShowMore button', () => {
    render(<Educations educations={educations} />)
    const button = screen.getByRole('button', { name: /näytä lisää/i })
    expect(button).toBeInTheDocument()
  })
})
