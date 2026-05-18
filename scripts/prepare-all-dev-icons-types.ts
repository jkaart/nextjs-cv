import fs from 'node:fs'
import path from 'node:path'
import type { IconifyJSON } from '@iconify/react'
import iconsJSONData from '@iconify-json/devicon/icons.json'

const outputDir = path.join(process.cwd(), 'src/lib/icons/dev-icons/')
const outputFile = path.join(outputDir, 'all-dev-icon-types.ts')

const icons = iconsJSONData as IconifyJSON

const names = Object.keys(icons.icons)
const union = names.map(name => `'${name}'`).join(' | ')

const fileContent = `
/* AUTO-GENERATED FILE — DO NOT EDIT */

export type DevIconName = ${union}
`

fs.writeFileSync(outputFile, fileContent)

console.log(`Generated ${names.length} icons`)
