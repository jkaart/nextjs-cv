import Skill from '@/app/components/Skill'
import type { Skill as SkillType } from '@/data/data'
import '@testing-library/jest-dom'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

describe('Skill', () => {
  const skill = {
    id: '1',
    language: 'React',
    level: 'excellent',
    type: 'frontend',
    iconName: 'SiReact'
  } satisfies SkillType

  beforeEach(async () => {
    await act(async () => render(<Skill skill={skill} />))
  })

  it('renders Skill', () => {
    const skillComponent = screen.getByTestId('skill')
    expect(skillComponent).toBeInTheDocument()
  })

  it('renders Skill Tooltip children container', () => {
    const children = screen.getByTestId('tooltip-children-container')
    expect(children).toBeInTheDocument()
  })

  it('not renders Skill Tooltip content container by default', () => {
    const content = screen.queryByTestId('tooltip-content-container')
    expect(content).not.toBeInTheDocument()
  })

  it('renders Skill Tooltip content container when hovered', async () => {
    const skillComponent = screen.queryByTestId('skill')
    if (skillComponent) {
      await act(async () => {
        fireEvent.mouseEnter(skillComponent)
      })

      await waitFor(() => screen.getByTestId('tooltip-content-container'))
      const container = screen.getByTestId('tooltip-content-container')
      expect(container).toBeInTheDocument()
    }
  })

  it('not render Skill Tooltip content container when hovered away', async () => {
    const skillComponent = screen.queryByTestId('skill')
    if (skillComponent) {
      await act(async () => {
        fireEvent.mouseEnter(skillComponent)
      })

      await waitFor(() => screen.getByTestId('tooltip-content-container'))
      const container = screen.getByTestId('tooltip-content-container')
      await act(async () => {
        fireEvent.mouseLeave(skillComponent)
      })

      expect(container).not.toBeInTheDocument()
    }
  })

  it('renders Skill Tooltip content container have skill language', async () => {
    const skillComponent = screen.queryByTestId('skill')

    if (skillComponent) {
      await act(async () => {
        fireEvent.mouseEnter(skillComponent)
      })

      await waitFor(() => screen.getByTestId('tooltip-content-container'))
      const container = screen.getByTestId('tooltip-content-container')
      expect(container).toBeInTheDocument()
      expect(container).toHaveTextContent(skill.language)
    }
  })
})
