const fs = require('node:fs')
const path = require('node:path')

const source = path.resolve('../data')
const target = path.resolve('./src/data')

fs.rmSync(target, { recursive: true, force: true })
fs.mkdirSync(target, { recursive: true })
fs.cpSync(source, target, { recursive: true })

const publicAssets = path.resolve('./public/assets')

fs.rmSync(publicAssets, { recursive: true, force: true })
fs.mkdirSync(publicAssets, { recursive: true })

const assetSource = path.join(source, 'assets')

if (fs.existsSync(assetSource)) {
  fs.cpSync(assetSource, publicAssets, { recursive: true })
}
