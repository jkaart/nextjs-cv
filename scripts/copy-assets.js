const { execSync } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')

const source = path.join(process.cwd(), '../data/assets')
const destination = path.join(process.cwd(), 'public/assets')

fs.rmSync(destination, { recursive: true, force: true })
fs.mkdirSync(destination, { recursive: true })
fs.cpSync(source, destination, { recursive: true })

if (fs.existsSync(path.join(source, '../.git'))) {
  console.log('Restoring git timestamps for assets...')

  const files = execSync('git ls-files', {
    cwd: source,
    encoding: 'utf8'
  })
    .split('\n')
    .filter(Boolean)

  for (const file of files) {
    const timestamp = execSync(`git log -1 --format="%ct" -- "${file}"`, {
      cwd: source,
      encoding: 'utf8'
    }).trim()

    if (!timestamp) continue

    const destFile = path.join(destination, file)

    if (!fs.existsSync(destFile)) continue

    const date = new Date(Number(timestamp) * 1000)

    fs.utimesSync(destFile, date, date)
  }
}
