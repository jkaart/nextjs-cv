import { convertToString } from '@utils/convertToString'

describe('convertToString', () => {
  describe('basic functionality', () => {
    it('should join multiple technologies with comma and space', () => {
      const technologies = ['React', 'Type Script', 'Node.js']
      expect(convertToString(technologies)).toBe(
        'React, Type Script ja Node.js'
      )
    })

    it('should handle single technology correctly', () => {
      const technologies = ['React']
      expect(convertToString(technologies)).toBe('React')
    })

    it('should handle empty array and return empty string', () => {
      const technologies: string[] = []
      expect(convertToString(technologies)).toBe('')
    })

    it('should handle two technologies with " ja " separator', () => {
      const technologies = ['React', 'TypeScript']
      expect(convertToString(technologies)).toBe('React ja TypeScript')
    })
  })

  describe('special characters in technology names', () => {
    it('should handle technology names with dots', () => {
      const technologies = ['Node.js', 'Express.js']
      expect(convertToString(technologies)).toBe('Node.js ja Express.js')
    })

    it('should handle technology names with hyphens', () => {
      const technologies = ['React-DOM', 'Vue-Router']
      expect(convertToString(technologies)).toBe('React-DOM ja Vue-Router')
    })

    it('should handle technology names with spaces', () => {
      const technologies = ['Java Script', 'Type Script']
      expect(convertToString(technologies)).toBe('Java Script ja Type Script')
    })

    it('should handle mixed special characters', () => {
      const technologies = ['Node.js', 'React-DOM', 'Vue.js']
      expect(convertToString(technologies)).toBe('Node.js, React-DOM ja Vue.js')
    })
  })

  describe('edge cases', () => {
    it('should handle array with one element correctly', () => {
      const technologies = ['Angular']
      expect(convertToString(technologies)).toBe('Angular')
    })

    it('should handle array with many elements', () => {
      const technologies = ['React', 'Vue', 'Angular', 'Svelte', 'JQuery']
      expect(convertToString(technologies)).toBe(
        'React, Vue, Angular, Svelte ja JQuery'
      )
    })

    it('should preserve original casing of technology names', () => {
      const technologies = ['react', 'TYPESCRIPT', 'NodeJS']
      expect(convertToString(technologies)).toBe('react, TYPESCRIPT ja NodeJS')
    })

    it('should handle array with duplicate entries', () => {
      const technologies = ['React', 'React', 'TypeScript']
      expect(convertToString(technologies)).toBe('React, React ja TypeScript')
    })

    it('should work with arrays passed in different orders', () => {
      const technologies1 = ['A', 'B', 'C']
      const technologies2 = ['C', 'B', 'A']
      expect(convertToString(technologies1)).toBe('A, B ja C')
      expect(convertToString(technologies2)).toBe('C, B ja A')
    })
  })

  describe('separator logic', () => {
    it('should use comma for all but last two items', () => {
      const technologies = ['A', 'B', 'C', 'D']
      expect(convertToString(technologies)).not.toBe('A, B, C, D')
    })

    it('should use " ja " only for the last two items when there are exactly 2', () => {
      const technologies = ['A', 'B']
      expect(convertToString(technologies)).toBe('A ja B')
    })

    it('should use " ja " for the last pair in longer arrays', () => {
      const technologies = ['A', 'B', 'C', 'D', 'E']
      expect(convertToString(technologies)).toBe('A, B, C, D ja E')
    })

    it('should use " ja " for the last pair in arrays with exactly 3 items', () => {
      const technologies = ['A', 'B', 'C']
      expect(convertToString(technologies)).toBe('A, B ja C')
    })
  })
})
