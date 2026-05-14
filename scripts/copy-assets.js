const fs = require('node:fs')
const path = require('node:path')

const source = path.join(process.cwd(), 'src/data/assets')
const destination = path.join(process.cwd(), 'public/assets')

fs.rmSync(destination, { recursive: true, force: true })
fs.mkdirSync(destination, { recursive: true })
fs.cpSync(source, destination, { recursive: true })
