import consola from 'consola'
import { generateTextAvatarUrl } from '../src/svg'
// import { generateAvatarByName } from '../src'

async function main() {
  const dataUrl = generateTextAvatarUrl('云游君')
  consola.info(dataUrl)
}

main()
