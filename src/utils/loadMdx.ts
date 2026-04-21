'use server'

import { readFileSync } from 'node:fs'
import path from 'node:path'

export const loadMdx = async (filePath: string, fileName: string) => {
  const joinedFilePath = path.join(/*turbopackIgnore: true*/process.cwd(), filePath, fileName)

  return readFileSync(joinedFilePath, 'utf-8')
}
