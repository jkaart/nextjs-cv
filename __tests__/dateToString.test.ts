import { dateToString } from "@/utils/dateToString"

describe('dateToString', () => {
  describe('with month format (default)', () => {
    it('should return "MM\\YYYY" for a given date', () => {
      const date = new Date(2024, 5, 15) // June 15, 2024
      expect(dateToString(date)).toBe('6\\2024')
    })

    it('should return "MM\\YYYY" when outputFormat is explicitly set to month', () => {
      const date = new Date(2023, 11, 1) // December 1, 2023
      expect(dateToString(date, 'month')).toBe('12\\2023')
    })

    it('should handle January correctly', () => {
      const date = new Date(2024, 0, 15) // January 15, 2024
      expect(dateToString(date)).toBe('1\\2024')
    })

    it('should handle December correctly', () => {
      const date = new Date(2024, 11, 31) // December 31, 2024
      expect(dateToString(date)).toBe('12\\2024')
    })

    it('should use correct month for different years', () => {
      const date = new Date(2025, 9, 1) // October 1, 2025
      expect(dateToString(date)).toBe('10\\2025')
    })
  })

  describe('with date format', () => {
    it('should return "DD.MM.YYYY" for a given date', () => {
      const date = new Date(2024, 5, 15) // June 15, 2024
      expect(dateToString(date, 'date')).toBe('15.6.2024')
    })

    it('should return "DD.MM.YYYY" when outputFormat is explicitly set to date', () => {
      const date = new Date(2023, 11, 25) // December 25, 2023
      expect(dateToString(date, 'date')).toBe('25.12.2023')
    })

    it('should handle January correctly', () => {
      const date = new Date(2024, 0, 5) // January 5, 2024
      expect(dateToString(date, 'date')).toBe('5.1.2024')
    })

    it('should handle December correctly', () => {
      const date = new Date(2024, 11, 31) // December 31, 2024
      expect(dateToString(date, 'date')).toBe('31.12.2024')
    })

    it('should use correct day and month for different dates', () => {
      const date = new Date(2025, 9, 1) // October 1, 2025
      expect(dateToString(date, 'date')).toBe('1.10.2025')
    })

    it('should handle single digit days correctly', () => {
      const date = new Date(2024, 3, 7) // April 7, 2024
      expect(dateToString(date, 'date')).toBe('7.4.2024')
    })

    it('should handle single digit months correctly', () => {
      const date = new Date(2024, 3, 15) // April 15, 2024
      expect(dateToString(date, 'date')).toBe('15.4.2024')
    })

    it('should handle both single digit day and month correctly', () => {
      const date = new Date(2024, 3, 7) // April 7, 2024
      expect(dateToString(date, 'date')).toBe('7.4.2024')
    })
  })

  describe('edge cases', () => {
    it('should use default month format when no outputFormat is provided', () => {
      const date = new Date(2024, 5, 15)
      expect(dateToString(date)).toBe('6\\2024')
    })

    it('should handle dates with different hours/minutes/seconds correctly (only date matters)', () => {
      const date = new Date(2024, 5, 15, 14, 30, 45) // June 15, 2024 at 14:30:45
      expect(dateToString(date)).toBe('6\\2024')
      expect(dateToString(date, 'date')).toBe('15.6.2024')
    })

    it('should handle dates with timezone correctly', () => {
      const date = new Date(2024, 5, 15, 0, 0, 0) // Midnight June 15, 2024
      expect(dateToString(date)).toBe('6\\2024')
    })

    it('should handle dates with invalid day correctly (Date normalizes to valid date)', () => {
      const date = new Date(2024, 1, 31) // February 31 doesn't exist, JS normalizes to March 1
      expect(dateToString(date)).toBe('3\\2024')
    })

    it('should handle dates from different years correctly', () => {
      const date = new Date(2000, 6, 15) // July 15, 2000
      expect(dateToString(date)).toBe('7\\2000')
      expect(dateToString(date, 'date')).toBe('15.7.2000')
    })

    it('should handle future dates correctly', () => {
      const date = new Date(2030, 11, 25) // December 25, 2030
      expect(dateToString(date)).toBe('12\\2030')
      expect(dateToString(date, 'date')).toBe('25.12.2030')
    })
  })

  describe('invalid outputFormat', () => {
    it('should use default month format when empty string is provided', () => {
      const date = new Date(2024, 5, 15)
      // @ts-expect-error - testing runtime behavior with invalid input
      expect(dateToString(date, '')).toBe('6\\2024')
    })

    it('should use default month format when null is provided', () => {
      const date = new Date(2024, 5, 15)
      // @ts-expect-error - testing runtime behavior with invalid input
      expect(dateToString(date, null)).toBe('6\\2024')
    })

    it('should use default month format when undefined is provided', () => {
      const date = new Date(2024, 5, 15)
      expect(dateToString(date, undefined)).toBe('6\\2024')
    })
  })
})
