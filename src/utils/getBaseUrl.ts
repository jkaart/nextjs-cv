const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : 'http://localhost:3000'

export const getBaseUrl = (): string => {
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_BASE_URL missing from env')
  }
  return baseUrl
}
