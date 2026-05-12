import { normalizeUrl } from '@utils/normalizeUrl'

describe('normalizeUrl', () => {
  describe('URLs with http:// protocol', () => {
    it('should return URL unchanged when it starts with http://', () => {
      expect(normalizeUrl('http://example.com')).toBe('http://example.com')
    })

    it('should handle URLs with ports', () => {
      expect(normalizeUrl('http://localhost:3000/path')).toBe(
        'http://localhost:3000/path'
      )
    })

    it('should handle URLs with query parameters', () => {
      expect(normalizeUrl('http://example.com?foo=bar&baz=qux')).toBe(
        'http://example.com?foo=bar&baz=qux'
      )
    })
  })

  describe('URLs with https:// protocol', () => {
    it('should return URL unchanged when it starts with https://', () => {
      expect(normalizeUrl('https://example.com')).toBe('https://example.com')
    })

    it('should handle HTTPS URLs with paths', () => {
      expect(normalizeUrl('https://example.com/path/to/resource')).toBe(
        'https://example.com/path/to/resource'
      )
    })
  })

  describe('URLs with mailto: protocol', () => {
    it('should return URL unchanged when it starts with mailto:', () => {
      expect(normalizeUrl('mailto:test@example.com')).toBe(
        'mailto:test@example.com'
      )
    })

    it('should handle mailto URLs with subject', () => {
      expect(normalizeUrl('mailto:test@example.com?subject=Hello')).toBe(
        'mailto:test@example.com?subject=Hello'
      )
    })
  })

  describe('Email addresses', () => {
    it('should add mailto: prefix to email addresses', () => {
      expect(normalizeUrl('test@example.com')).toBe('mailto:test@example.com')
    })

    it('should handle emails with subdomains', () => {
      expect(normalizeUrl('user@mail.example.com')).toBe(
        'mailto:user@mail.example.com'
      )
    })

    it('should handle emails without @ symbol are treated as URLs', () => {
      expect(normalizeUrl('not-an-email')).toBe('https://not-an-email')
    })
  })

  describe('Domains and URLs without protocol', () => {
    it('should add https: prefix to domains', () => {
      expect(normalizeUrl('example.com')).toBe('https://example.com')
    })

    it('should handle subdomains', () => {
      expect(normalizeUrl('www.example.com')).toBe('https://www.example.com')
    })

    it('should handle domains with paths', () => {
      expect(normalizeUrl('example.com/path')).toBe('https://example.com/path')
    })

    it('should handle localhost', () => {
      expect(normalizeUrl('localhost:3000')).toBe('https://localhost:3000')
    })

    it('should handle IP addresses', () => {
      expect(normalizeUrl('192.168.1.1')).toBe('https://192.168.1.1')
    })
  })

  describe('Edge cases', () => {
    it('should return empty string unchanged', () => {
      expect(normalizeUrl('')).toBe('')
    })

    it('should handle URLs with trailing slashes', () => {
      expect(normalizeUrl('https://example.com/')).toBe('https://example.com/')
    })

    it('should handle URLs with fragments', () => {
      expect(normalizeUrl('http://example.com#section')).toBe(
        'http://example.com#section'
      )
    })

    it('should prioritize mailto detection over https prefix addition for emails', () => {
      // Email addresses should be detected before being treated as domains
      expect(normalizeUrl('user@example.com')).toBe('mailto:user@example.com')
    })
  })
})
