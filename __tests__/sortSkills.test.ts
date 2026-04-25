import type { Skill } from '@types'
import { compareSkills, sortSkills } from '@utils/sortSkills'

describe('sortSkills', () => {
  const skillsData = [
    {
      id: '1',
      language: 'HTML',
      level: 'excellent',
      type: 'frontend',
      iconName: 'SiHtml5'
    },
    {
      id: '2',
      language: 'CSS',
      level: 'good',
      type: 'frontend',
      iconName: 'SiCss'
    },
    {
      id: '3',
      language: 'React',
      level: 'excellent',
      type: 'frontend',
      iconName: 'SiReact'
    },
    {
      id: '4',
      language: 'JavaScript',
      level: 'excellent',
      type: 'frontend',
      iconName: 'SiJavascript'
    }
  ] satisfies Skill[]

  const rightSortedSkills = [
    {
      id: '2',
      language: 'CSS',
      level: 'good',
      type: 'frontend',
      iconName: 'SiCss'
    },
    {
      id: '1',
      language: 'HTML',
      level: 'excellent',
      type: 'frontend',
      iconName: 'SiHtml5'
    },
    {
      id: '4',
      language: 'JavaScript',
      level: 'excellent',
      type: 'frontend',
      iconName: 'SiJavascript'
    },
    {
      id: '3',
      language: 'React',
      level: 'excellent',
      type: 'frontend',
      iconName: 'SiReact'
    }
  ] satisfies Skill[]

  describe('compareSkills', () => {
    it('returns -1 when a < b', () => {
      expect(
        compareSkills(
          {
            id: '2',
            language: 'a',
            level: 'good',
            type: 'frontend',
            iconName: 'SiCss'
          },
          {
            id: '1',
            language: 'b',
            level: 'excellent',
            type: 'frontend',
            iconName: 'SiHtml5'
          }
        )
      ).toBe(-1)
    })

    it('returns 1 when a > b', () => {
      expect(
        compareSkills(
          {
            id: '1',
            language: 'b',
            level: 'excellent',
            type: 'frontend',
            iconName: 'SiHtml5'
          },
          {
            id: '2',
            language: 'a',
            level: 'good',
            type: 'frontend',
            iconName: 'SiCss'
          }
        )
      ).toBe(1)
    })

    it('returns 0 when equal', () => {
      expect(
        compareSkills(
          {
            id: '2',
            language: 'a',
            level: 'good',
            type: 'frontend',
            iconName: 'SiCss'
          },
          {
            id: '2',
            language: 'a',
            level: 'good',
            type: 'frontend',
            iconName: 'SiCss'
          }
        )
      ).toBe(0)
    })
  })

  describe('sortSkills', () => {
    it('returns sorted array as alphabetically sorted', () => {
      const result = sortSkills(skillsData)
      expect(result).toStrictEqual(rightSortedSkills)
    })

    it('returns empty array if input is empty', () => {
      const result = sortSkills([])
      expect(result).toEqual([])
    })

    it('returns single item array unchanged', () => {
      const data = [
        {
          id: '1',
          language: 'React',
          level: 'excellent',
          type: 'frontend',
          iconName: 'SiReact'
        }
      ] satisfies Skill[]

      expect(sortSkills(data)).toEqual(data)
    })

    it('keeps order of equal elements (stable sort)', () => {
      const results = sortSkills(skillsData)
      expect(results.map(result => result.language)).toEqual([
        'CSS',
        'HTML',
        'JavaScript',
        'React'
      ])
    })

    it('does not mutate original array', () => {
      const copy = [...skillsData]
      sortSkills(skillsData)

      expect(skillsData).toEqual(copy)
    })

    it('returns array sorted in ascending order invariant', () => {
      const result = sortSkills(skillsData)

      for (let index = 1; index < result.length; index++) {
        const prev = result[index - 1].language.toLowerCase()
        const curr = result[index].language.toLowerCase()

        expect(prev <= curr).toBe(true)
      }
    })

    it('correctly orders when first item should come after second', () => {
      const result = sortSkills(skillsData)

      expect(result.map(s => s.language)).toEqual([
        'CSS',
        'HTML',
        'JavaScript',
        'React'
      ])
    })
  })
})
