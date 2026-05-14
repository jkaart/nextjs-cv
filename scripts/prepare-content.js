const fs = require('node:fs')
const path = require('node:path')

const localSource = path.join(process.cwd(), '../data')
const mockSource = path.join(process.cwd(), 'mockData')

const source = fs.existsSync(localSource) ? localSource : mockSource
const destination = path.join(process.cwd(), 'src/data')

fs.rmSync(destination, { recursive: true, force: true })
fs.mkdirSync(destination, { recursive: true })
fs.cpSync(source, destination, { recursive: true })
