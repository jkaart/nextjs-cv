const fs = require('node:fs')
const path = require('node:path')

const src =
  process.env.USE_LOCAL_DATA === 'true'
    ? path.join(process.cwd(), '../data/assets')
    : path.join(process.cwd(), 'src/data/assets')

const dest = path.join(process.cwd(), 'public/assets')

fs.rmSync(dest, { recursive: true, force: true })
fs.mkdirSync(dest, { recursive: true })
fs.cpSync(src, dest, { recursive: true })
