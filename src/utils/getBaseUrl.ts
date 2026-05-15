export const getBaseUrl = (): string => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  if (!baseUrl) {
    throw new Error('baseUrl missing from env')
  }
  return baseUrl
}
