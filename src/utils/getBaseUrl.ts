export const getBaseUrl = (): string => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim()
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_BASE_URL missing from env')
  }
  return baseUrl.replace(/\/+$/, '')
}
