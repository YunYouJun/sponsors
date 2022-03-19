import path from 'path'
import type { MoneySponsor, Sponsor } from '../types/index'
import sponsors from '../site/public/manual-sponsors.json'
import { generateJSONfromYaml, generateMarkdown, generateRank } from './utils'

import { config } from './config'

try {
  let data = sponsors as any as Sponsor[]
  // filter
  data = data.filter((item) => {
    // todo: other sponsors
    if (item.method === '其他') {
      // return true;
      return false
    }
    else {
      return item.amount >= 5
    }
  })

  generateJSONfromYaml(path.resolve(config.dataFolder, 'expenses.yml'))

  // 生成排序的 JSON
  generateRank(data as MoneySponsor[])

  generateMarkdown(data as MoneySponsor[])
}
catch (e) {
  console.error(e)
}