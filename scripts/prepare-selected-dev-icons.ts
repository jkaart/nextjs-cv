import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

import path from 'node:path'

import { data } from '@data/data'
import { locate } from '@iconify/json'
import sharp from 'sharp'

const svgOutputDir = path.join(
  process.cwd(),
  'public/assets/icons/svg/dev-icons'
)

const pngOutputDir = path.join(
  process.cwd(),
  'public/assets/icons/png/dev-icons'
)

const unionsOutputDir = path.join(process.cwd(), 'src/lib/icons/dev-icons')

const unionsOutputFile = path.join(
  unionsOutputDir,
  'selected-dev-icon-types.ts'
)

const selectedIcons = data.skill.map(skill => skill.iconName)

const union = selectedIcons.map(name => `'${name}'`).join(' | ')

mkdirSync(svgOutputDir, {
  recursive: true
})

mkdirSync(pngOutputDir, {
  recursive: true
})

mkdirSync(unionsOutputDir, {
  recursive: true
})

// Locate icon set JSON
const filename = locate('devicon')

// Load JSON
const iconData = JSON.parse(readFileSync(filename, 'utf8'))

// Export selected icons
for (const name of selectedIcons) {
  const icon = iconData.icons[name]

  if (!icon) {
    console.warn(`Missing icon: ${name}`)
    continue
  }

  const width = icon.width ?? iconData.width ?? 24

  const height =
    icon.height ?? iconData.height ?? icon.width ?? iconData.width ?? 24

  const svg = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 ${width} ${height}"
  >
  ${icon.body}
  </svg>
  `

  writeFileSync(path.join(svgOutputDir, `${name}.svg`), svg, 'utf8')

  sharp(Buffer.from(svg))
    .resize(128, 128)
    .png()
    .toFile(path.join(pngOutputDir, `${name}.png`))
}

const unionsFileContent = `
/* AUTO-GENERATED FILE — DO NOT EDIT */

export type SelectedDevIconName =
  ${union}
`

writeFileSync(unionsOutputFile, unionsFileContent)
