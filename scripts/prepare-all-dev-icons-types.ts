import fs, { mkdirSync } from 'node:fs'
import path from 'node:path'
import type { IconifyJSON } from '@iconify/react'
import iconsJSONData from '@iconify-json/devicon/icons.json'

console.log('Generate all dev icons types')

const outputDir = path.join(process.cwd(), 'src/lib/icons/dev-icons/')
const outputFile = path.join(outputDir, 'all-dev-icon-types.ts')

mkdirSync(outputDir, {
  recursive: true
})

const icons = iconsJSONData as IconifyJSON

const names = Object.keys(icons.icons)
const union = names.map(name => `'${name}'`).join(' | ')

const namesAsString = names.map(name => `'${name}'`)

const fileContent = `
/* AUTO-GENERATED FILE — DO NOT EDIT */

export type DevIconName = ${union}

export const allDevIcons = [${namesAsString}]

`

fs.writeFileSync(outputFile, fileContent)

console.log(`Generated ${names.length} icons`)
