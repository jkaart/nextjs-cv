import Skill from '@/app/components/Skill'
import type { Skill as SkillType } from '@/data/data'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

describe('Skill', () => {
  const skill = {
    id: '1',
    language: 'React',
    level: 'excellent',
    type: 'frontend',
    iconClass: 'devicon-react-original-wordmark'
  } satisfies SkillType

  it('renders Skill', () => {
    render(<Skill skill={skill} />)

    const skillComponent = screen.getByTestId('skill')
    expect(skillComponent).toBeInTheDocument()
  })

  it('renders Skill Tooltip children container', () => {
    render(<Skill skill={skill} />)

    const children = screen.getByTestId('tooltip-children-container')
    expect(children).toBeInTheDocument()
  })

  it('not renders Skill Tooltip content container by default', () => {
    render(<Skill skill={skill} />)

    const content = screen.queryByTestId('tooltip-content-container')
    expect(content).not.toBeInTheDocument()
  })

  it('renders Skill Tooltip content container when hovered', async () => {
    render(<Skill skill={skill} />)

    const skillComponent = screen.queryByTestId('skill')
    if (skillComponent) {
      fireEvent.mouseEnter(skillComponent)
      await waitFor(() => screen.getByTestId('tooltip-content-container'))
      const container = screen.getByTestId('tooltip-content-container')
      expect(container).toBeInTheDocument()
    }
  })

  it('not render Skill Tooltip content container when hovered away', async () => {
    render(<Skill skill={skill} />)

    const skillComponent = screen.queryByTestId('skill')
    if (skillComponent) {
      fireEvent.mouseEnter(skillComponent)
      await waitFor(() => screen.getByTestId('tooltip-content-container'))
      const container = screen.getByTestId('tooltip-content-container')
      fireEvent.mouseLeave(skillComponent)
      expect(container).not.toBeInTheDocument()
    }
  })

  it('renders Skill Tooltip content container have skill language', async () => {
    render(<Skill skill={skill} />)

    const skillComponent = screen.queryByTestId('skill')

    if (skillComponent) {
      fireEvent.mouseEnter(skillComponent)
      await waitFor(() => screen.getByTestId('tooltip-content-container'))
      const container = screen.getByTestId('tooltip-content-container')
      expect(container).toBeInTheDocument()
      expect(container).toHaveTextContent(skill.language)
    }
  })
})
