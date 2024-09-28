import type { MoneySponsor, Sponsor } from '../types/index'
import path from 'node:path'
import sponsors from '../site/src/assets/data/manual-sponsors.json'
import { config } from './config'

import { generateJSONfromYaml, generateMarkdown } from './utils'

try {
  let data = sponsors as any as Sponsor[]
  // filter
  data = data.filter((item) => {
    // todo: other sponsors
    if ('amount' in item)
      return item.amount >= 5

    return false
  })

  generateJSONfromYaml(path.resolve(config.dataFolder, 'expenses.yml'))

  generateMarkdown(data as MoneySponsor[])
}
catch (e) {
  console.error(e)
}
