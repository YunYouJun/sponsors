import path from 'path'
import type { MoneySponsor, Sponsor } from '../types/index'
import sponsors from '../site/src/assets/data/manual-sponsors.json'
import { generateJSONfromYaml, generateMarkdown } from './utils'

import { config } from './config'

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
