import type { MoneySponsor, Sponsor } from '../sponsors/types/index'
import path from 'node:path'
import fs from 'fs-extra'
import sponsors from '../site/src/assets/data/manual-sponsors.json'

import { config } from './config'
import { generateJSONfromYaml, generateMarkdown } from './utils'

async function main() {
  try {
    let data = sponsors as any as Sponsor[]
    // filter
    data = data.filter((item) => {
      // todo: other sponsors
      if ('amount' in item)
        return item.amount >= 5

      return false
    })

    await generateJSONfromYaml(path.resolve(config.siteDataFolder, 'expenses.yml'))
    generateMarkdown(data as MoneySponsor[])

    // copy data/expenses.json to site/public
    await fs.copy(config.distDataFolder, config.sitePublicDataFolder)
    // copy data.json
    await fs.copy(config.siteDataFolder, config.sitePublicDataFolder)
  }
  catch (e) {
    console.error(e)
  }
}

main()
