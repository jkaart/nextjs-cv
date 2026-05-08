export const validateUrl = (url: string): string => {
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
