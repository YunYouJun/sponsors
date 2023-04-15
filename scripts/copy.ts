import fs from 'node:fs'

// for platform compatible

fs.copyFileSync('public/sponsors.svg', 'packages/site/public/sponsors.svg')
