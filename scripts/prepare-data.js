const fs = require('fs')
const path = require('path')

const source =
  process.env.USE_LOCAL_DATA === 'true'
    ? path.join(process.cwd(), '../data')
    : path.join(process.cwd(), 'mockData')

const destination = path.join(process.cwd(), 'src/data')

console.log('Preparing data...')
console.log('Source:', source)
console.log('Destination:', destination)

fs.rmSync(destination, {
  recursive: true,
  force: true
})

fs.mkdirSync(destination, { recursive: true })
fs.cpSync(source, destination, { recursive: true })

console.log('Data prepared successfully.')
