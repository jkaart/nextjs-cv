import { readFileSync } from 'node:fs'
import path from 'node:path'

export const meDescriptionRaw = readFileSync(
  path.join(process.cwd(), 'src/data/mdx/me/description.mdx'),
  'utf-8'
)
