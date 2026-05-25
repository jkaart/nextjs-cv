export const getBaseUrl = (): string => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim()
  if (!baseUrl) {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:3000'
    }
    throw new Error('NEXT_PUBLIC_BASE_URL missing from env')
  }
  return baseUrl.replace(/\/+$/, '')
}
