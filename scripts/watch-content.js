const chokidar = require('chokidar')
const { execSync } = require('node:child_process')

const src = '../data'
console.log('Watching content data folder: ', src)

let timeout = null

const sync = () => {
  clearTimeout(timeout)

  timeout = setTimeout(() => {
    try {
      execSync('node scripts/sync-content.js', {
        stdio: 'inherit'
      })
    } catch (error) {
      console.error(error)
    }
  }, 100)
}

chokidar
  .watch(src, {
    ignoreInitial: true
  })
  .on('all', sync)
