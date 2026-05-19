import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { locate } from '@iconify/json'
import sharp from 'sharp'

type IconType = 'dev-icons' | 'other'

interface ParseIconsParams {
  collectionName: string
  outputRootDir: string
  selectedIcons: string[]
  type: IconType
}

export const generateIconsFiles = (parseIconsParams: ParseIconsParams) => {
  const { collectionName, outputRootDir, selectedIcons, type } =
    parseIconsParams

  const jsonFilePath = locate(collectionName)

  const svgOutputDir = `${outputRootDir}/svg/${type}`
  const pngOutputDir = `${outputRootDir}/png/${type}`

  console.log('Icon type: ', type)
  console.log('Collection name: ', collectionName)
  console.log('JSON path: ', jsonFilePath)
  console.log('SVG output dir: ', svgOutputDir)
  console.log('PNG output dir: ', pngOutputDir)

  mkdirSync(svgOutputDir, {
    recursive: true
  })

  mkdirSync(pngOutputDir, {
    recursive: true
  })

  // Load JSON
  const iconData = JSON.parse(readFileSync(jsonFilePath, 'utf8'))

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
}

export const generateIconsByCollection = (
  selectedIcons: string[],
  outputRootDir: string,
  type: IconType
) => {
  const parsedNames = {} as Record<string, string[]>
  selectedIcons.forEach(iconString => {
    const icon = iconString.split(':')

    if (parsedNames[icon[0]]) {
      parsedNames[icon[0]].push(icon[1])
    } else {
      parsedNames[icon[0]] = [icon[1]]
    }
  })

  for (const [key, value] of Object.entries(parsedNames)) {
    generateIconsFiles({
      collectionName: key,
      outputRootDir,
      selectedIcons: value,
      type
    })
  }
}
