const fs = require('node:fs')
const path = require('node:path')

const src = path.join(process.cwd(), 'src/data/assets')
const dest = path.join(process.cwd(), 'public/assets')

fs.rmSync(dest, { recursive: true, force: true })
fs.mkdirSync(dest, { recursive: true })
fs.cpSync(src, dest, { recursive: true })
