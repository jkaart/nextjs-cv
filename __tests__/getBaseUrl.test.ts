import { getBaseUrl } from '@utils/getBaseUrl'

describe('getBaseUrl', () => {
  const originalEnv = { ...process.env }

  describe('with valid NEXT_PUBLIC_BASE_URL', () => {
    beforeEach(() => {
      process.env.NEXT_PUBLIC_BASE_URL = 'https://example.com'
    })

    afterEach(() => {
      delete process.env.NEXT_PUBLIC_BASE_URL
    })

    it('should return the base URL when env variable is set', () => {
      expect(getBaseUrl()).toBe('https://example.com')
    })

    describe('URL normalization', () => {
      it('should remove trailing slashes from URLs with single slash', () => {
        process.env.NEXT_PUBLIC_BASE_URL = 'https://example.com/'

        expect(getBaseUrl()).toBe('https://example.com')
      })

      it('should remove multiple trailing slashes', () => {
        process.env.NEXT_PUBLIC_BASE_URL = 'https://example.com///'
        expect(getBaseUrl()).toBe('https://example.com')
      })

      it('should handle URLs with path and trailing slash', () => {
        process.env.NEXT_PUBLIC_BASE_URL = 'https://example.com/base/'
        expect(getBaseUrl()).toBe('https://example.com/base')
      })

      it('should preserve the protocol (http vs https)', () => {
        process.env.NEXT_PUBLIC_BASE_URL = 'http://localhost:3000'
        expect(getBaseUrl()).toBe('http://localhost:3000')
      })

      it('should handle localhost URLs', () => {
        process.env.NEXT_PUBLIC_BASE_URL = 'http://localhost:8080/'
        expect(getBaseUrl()).toBe('http://localhost:8080')
      })

      it('should handle subdomains', () => {
        process.env.NEXT_PUBLIC_BASE_URL = 'https://www.example.com/'
        expect(getBaseUrl()).toBe('https://www.example.com')
      })
    })
  })

  describe('without NEXT_PUBLIC_BASE_URL', () => {
    beforeEach(() => {
      delete process.env.NEXT_PUBLIC_BASE_URL
    })

    it('should throw an error when env variable is not set', () => {
      expect(() => getBaseUrl()).toThrow(
        'NEXT_PUBLIC_BASE_URL missing from env'
      )
    })

    it('should throw an error with descriptive message', () => {
      expect(() => getBaseUrl()).toThrow(/NEXT_PUBLIC_BASE_URL missing/)
    })

    describe('in development mode', () => {
      beforeEach(() => {
        Object.assign(process.env, { NODE_ENV: 'development' })
      })

      afterEach(() => {
        Object.assign(process.env, originalEnv)
      })

      it('should return localhost URL when env variable is not set', () => {
        expect(getBaseUrl()).toBe('http://localhost:3000')
      })

      it('should use default development URL even with empty env variable', () => {
        process.env.NEXT_PUBLIC_BASE_URL = ''
        expect(getBaseUrl()).toBe('http://localhost:3000')
      })

      it('should use default development URL even with whitespace env variable', () => {
        process.env.NEXT_PUBLIC_BASE_URL = '   '
        expect(getBaseUrl()).toBe('http://localhost:3000')
      })
    })
  })

  describe('edge cases', () => {
    beforeEach(() => {
      delete process.env.NEXT_PUBLIC_BASE_URL
      Object.assign(process.env, { NODE_ENV: 'production' })
    })

    afterEach(() => {
      Object.assign(process.env, originalEnv)
    })

    it('should throw error for empty string env variable', () => {
      process.env.NEXT_PUBLIC_BASE_URL = ''
      expect(() => getBaseUrl()).toThrow(
        'NEXT_PUBLIC_BASE_URL missing from env'
      )
    })

    it('should throw error for whitespace-only env variable', () => {
      process.env.NEXT_PUBLIC_BASE_URL = '   '
      expect(() => getBaseUrl()).toThrow(
        'NEXT_PUBLIC_BASE_URL missing from env'
      )
    })
  })
})
