import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { generateIconsByCollection } from './functions'

const usedIcons = [
  'mdi:home',
  'material-symbols:alternate-email',
  'mdi:github',
  'mdi:linkedin',
  'mdi:internet',
  'mdi:loading',
  'fa6-regular:file-pdf'
]

console.log('Generate other icons...')

const outputRootDir = path.join(process.cwd(), 'public/assets/icons/')
const unionsOutputDir = path.join(process.cwd(), 'src/lib/icons/other-icons')

const unionsOutputFile = path.join(unionsOutputDir, 'other-icon-types.ts')

mkdirSync(unionsOutputDir, {
  recursive: true
})

generateIconsByCollection(usedIcons, outputRootDir, 'other')

console.log('Generate types')

const union = usedIcons.map(name => `'${name.split(':')[1]}'`).join(' | ')

const fileContent = `
/* AUTO-GENERATED FILE — DO NOT EDIT */

export type OtherIconName = ${union}
`

writeFileSync(unionsOutputFile, fileContent)

console.log(`Generated ${usedIcons.length} other icons`)
