const fs = require('fs')
const path = require('path')

const src =
  process.env.USE_LOCAL_DATA === 'true'
    ? path.join(process.cwd(), '../data/assets')
    : path.join(process.cwd(), 'src/data/assets')

const dest = path.join(process.cwd(), 'public/assets')

fs.rmSync(dest, { recursive: true, force: true })
fs.mkdirSync(dest, { recursive: true })
fs.cpSync(src, dest, { recursive: true })
