import path from 'node:path'

// import { generateAvatarByName } from '../src'
import { generateAvatars } from '../src/playwright'
import { startServer } from '../src/utils'

const distFolder = path.resolve(__dirname, '../dist')
const siteDistFolder = path.resolve(__dirname, '../../site/dist')

async function main() {
  const {
    closeServer,
  } = startServer(siteDistFolder)

  await generateAvatars({
    names: ['云游君', '好心人', '小明', '小红'],
    outDir: distFolder,
  })

  closeServer()
}

main()
