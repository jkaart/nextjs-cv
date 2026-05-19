import { mkdirSync, writeFileSync } from 'node:fs'

import path from 'node:path'

import { data } from '@data/data'
import { generateIconsFiles } from './functions'

console.log('Generate selected dev icons...')

const outputRootDir = path.join(process.cwd(), 'public/assets/icons')

const unionsOutputDir = path.join(process.cwd(), 'src/lib/icons/dev-icons')

const unionsOutputFile = path.join(
  unionsOutputDir,
  'selected-dev-icon-types.ts'
)

const selectedIcons = data.skill.map(skill => skill.iconName)

const union = selectedIcons.map(name => `'${name}'`).join(' | ')

mkdirSync(outputRootDir, {
  recursive: true
})

mkdirSync(unionsOutputDir, {
  recursive: true
})

generateIconsFiles({
  collectionName: 'devicon',
  outputRootDir,
  selectedIcons,
  type: 'dev-icons'
})

console.log('Generate types')

const unionsFileContent = `
/* AUTO-GENERATED FILE — DO NOT EDIT */

export type SelectedDevIconName =
  ${union}
`

writeFileSync(unionsOutputFile, unionsFileContent)

console.log(`Generated ${selectedIcons.length} dev icons`)
