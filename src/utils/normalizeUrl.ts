/**
 * Normalizes a URL by ensuring it has an appropriate protocol prefix.
 * Adds 'mailto:' to email addresses and 'https://' to other URLs without protocols.
 * Returns the original URL if it already has a valid protocol.
 *
 * @param url - The URL string to normalize (can be a raw URL, email, or domain)
 * @returns Normalized URL with appropriate protocol prefix added if needed
 */
export const normalizeUrl = (url: string): string => {
  if (url === '') return ''
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('mailto:')
  ) {
    return url
  }
  if (url.includes('@')) {
    return `mailto:${url}`
  }
  return `https://${url}`
}
