import { formatTechnologiesString } from '@/utils/formatTechnologiesString'

describe('formatTechnologiesString', () => {
  describe('basic functionality', () => {
    it('should join multiple technologies with comma and space', () => {
      const technologies = ['React', 'Type Script', 'Node.js']
      expect(formatTechnologiesString(technologies)).toBe(
        'React, Type Script ja Node.js'
      )
    })

    it('should handle single technology correctly', () => {
      const technologies = ['React']
      expect(formatTechnologiesString(technologies)).toBe('React')
    })

    it('should handle empty array and return empty string', () => {
      const technologies: string[] = []
      expect(formatTechnologiesString(technologies)).toBe('')
    })

    it('should handle two technologies with " ja " separator', () => {
      const technologies = ['React', 'TypeScript']
      expect(formatTechnologiesString(technologies)).toBe('React ja TypeScript')
    })
  })

  describe('special characters in technology names', () => {
    it('should handle technology names with dots', () => {
      const technologies = ['Node.js', 'Express.js']
      expect(formatTechnologiesString(technologies)).toBe('Node.js ja Express.js')
    })

    it('should handle technology names with hyphens', () => {
      const technologies = ['React-DOM', 'Vue-Router']
      expect(formatTechnologiesString(technologies)).toBe(
        'React-DOM ja Vue-Router'
      )
    })

    it('should handle technology names with spaces', () => {
      const technologies = ['Java Script', 'Type Script']
      expect(formatTechnologiesString(technologies)).toBe(
        'Java Script ja Type Script'
      )
    })

    it('should handle mixed special characters', () => {
      const technologies = ['Node.js', 'React-DOM', 'Vue.js']
      expect(formatTechnologiesString(technologies)).toBe(
        'Node.js, React-DOM ja Vue.js'
      )
    })
  })

  describe('edge cases', () => {
    it('should handle array with one element correctly', () => {
      const technologies = ['Angular']
      expect(formatTechnologiesString(technologies)).toBe('Angular')
    })

    it('should handle array with many elements', () => {
      const technologies = ['React', 'Vue', 'Angular', 'Svelte', 'JQuery']
      expect(formatTechnologiesString(technologies)).toBe(
        'React, Vue, Angular, Svelte ja JQuery'
      )
    })

    it('should preserve original casing of technology names', () => {
      const technologies = ['react', 'TYPESCRIPT', 'NodeJS']
      expect(formatTechnologiesString(technologies)).toBe(
        'react, TYPESCRIPT ja NodeJS'
      )
    })

    it('should handle array with duplicate entries', () => {
      const technologies = ['React', 'React', 'TypeScript']
      expect(formatTechnologiesString(technologies)).toBe(
        'React, React ja TypeScript'
      )
    })

    it('should work with arrays passed in different orders', () => {
      const technologies1 = ['A', 'B', 'C']
      const technologies2 = ['C', 'B', 'A']
      expect(formatTechnologiesString(technologies1)).toBe('A, B ja C')
      expect(formatTechnologiesString(technologies2)).toBe('C, B ja A')
    })
  })

  describe('separator logic', () => {
    it('should use comma for all but last two items', () => {
      const technologies = ['A', 'B', 'C', 'D']
      expect(formatTechnologiesString(technologies)).not.toBe('A, B, C, D')
    })

    it('should use " ja " only for the last two items when there are exactly 2', () => {
      const technologies = ['A', 'B']
      expect(formatTechnologiesString(technologies)).toBe('A ja B')
    })

    it('should use " ja " for the last pair in longer arrays', () => {
      const technologies = ['A', 'B', 'C', 'D', 'E']
      expect(formatTechnologiesString(technologies)).toBe('A, B, C, D ja E')
    })

    it('should use " ja " for the last pair in arrays with exactly 3 items', () => {
      const technologies = ['A', 'B', 'C']
      expect(formatTechnologiesString(technologies)).toBe('A, B ja C')
    })
  })
})
