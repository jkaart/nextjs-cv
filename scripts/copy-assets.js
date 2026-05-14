const fs = require('node:fs')
const path = require('node:path')

const source = path.join(process.cwd(), 'src/data/assets')
const destination = path.join(process.cwd(), 'public/assets')

console.log('Preparing content...')
console.log('Source:', source)
console.log('Destination:', destination)

fs.rmSync(destination, { recursive: true, force: true })
fs.mkdirSync(destination, { recursive: true })
fs.cpSync(source, destination, { recursive: true })

console.log('source content:')
console.log(fs.readdirSync(source))

console.log('Files copied:')
console.log(fs.readdirSync(destination))
