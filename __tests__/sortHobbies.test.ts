import type { Hobby } from '@types'
import { sortHobbies } from '@utils/sortHobbies'

describe('sortHobbies', () => {
  const hobbiesData = [
    'Gaming',
    'Reading',
    'Cooking',
    'Traveling',
    'Photography'
  ] satisfies Hobby[]

  const sortedHobbies = [
    'Cooking',
    'Gaming',
    'Photography',
    'Reading',
    'Traveling'
  ]

  describe('sortHobbies', () => {
    it('returns sorted array as alphabetically sorted', () => {
      const result = sortHobbies(hobbiesData)
      expect(result).toStrictEqual(sortedHobbies)
    })

    it('returns empty array if input is empty', () => {
      const result = sortHobbies([])
      expect(result).toEqual([])
    })

    it('returns single item array unchanged', () => {
      const data: Hobby[] = ['Reading']
      expect(sortHobbies(data)).toEqual(data)
    })

    it('does not mutate original array', () => {
      const copy = [...hobbiesData]
      sortHobbies(hobbiesData)
      expect(hobbiesData).toEqual(copy)
    })

    it('returns array sorted in ascending order invariant', () => {
      const result = sortHobbies(hobbiesData)

      for (let index = 1; index < result.length; index++) {
        const prev = result[index - 1]
        const curr = result[index]

        expect(prev <= curr).toBe(true)
      }
    })

    it('handles case-insensitive sorting correctly', () => {
      const data: Hobby[] = ['Zoo', 'apple', 'Banana']
      const expected = ['apple', 'Banana', 'Zoo']
      expect(sortHobbies(data)).toEqual(expected)
    })

    it('handles special characters in hobbies', () => {
      const data: Hobby[] = ['Café', 'Burger', 'Pizza']
      const expected = ['Burger', 'Café', 'Pizza']
      expect(sortHobbies(data)).toEqual(expected)
    })

    it('returns new array each time (pure function)', () => {
      const data: Hobby[] = ['Reading', 'Writing']
      const result1 = sortHobbies(data)
      const result2 = sortHobbies(data)

      expect(result1).not.toBe(result2)
      expect(result1).toEqual(['Reading', 'Writing'])
    })
  })
})
