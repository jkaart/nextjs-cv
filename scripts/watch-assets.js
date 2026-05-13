const chokidar = require('chokidar')
const { execSync } = require('child_process')

const src =
  process.env.USE_LOCAL_DATA === 'true'
    ? '../data/assets/**/*'
    : 'mockData/assets/**/*'

console.log('Watching:', src)

chokidar.watch(src).on('all', () => {
  execSync('node scripts/copy-assets.js', {
    stdio: 'inherit',
    env: process.env
  })
})
