import type { SponsorMethod } from '../sponsors/types'
import fs from 'node:fs'
import path from 'node:path'

import { consola } from 'consola'
import sponsors from '../site/src/assets/data/manual-sponsors.json'
import { sortSponsor } from '../site/src/utils'
import { MoneyMethod } from '../sponsors/types'
import { EnumKeys } from '../sponsors/types/helper'
import { config } from './config'

const sponsorMethods: SponsorMethod[] = EnumKeys(MoneyMethod).map(
  item => MoneyMethod[item],
)
sponsorMethods.push('其他')

const sponsorsJsonFile = path.resolve(config.siteDataFolder, 'manual-sponsors.json')

export async function onAdd() {
  const sponsorName = await consola.prompt('赞助者名称', {
    type: 'text',
  })
  const sponsorUrl = await consola.prompt('赞助者链接', {
    type: 'text',
  })
  const sponsorAvatar = await consola.prompt('赞助者头像', {
    type: 'text',
  })
  const sponsorDate = await consola.prompt('赞助日期', {
    type: 'text',
    locale: 'zh-CN',
    hint: '2021-02-11T18:42:18.869Z',
  })
  const sponsorMethod = await consola.prompt('赞助方式', {
    type: 'select',
    options: sponsorMethods,
  })
  const sponsorAmount = await consola.prompt('赞助金额', {
    type: 'text',
  })
  const sponsorMemo = await consola.prompt('备注内容', {
    type: 'text',
  })
  // for debug

  const item = sponsors.find(sponsor => sponsor.name === sponsorName)

  const sponsorAmountNumber = Number(sponsorAmount)

  if (!item) {
    consola.success('The first sponsorship from this person!')

    sponsors.push({
      name: sponsorName,
      url: sponsorUrl,
      avatar: sponsorAvatar,
      total: sponsorAmount,
      children: [
        {
          date: sponsorDate,
          method: sponsorMethod,
          amount: sponsorAmountNumber,
          memo: sponsorMemo,
        },
      ],
    } as any)
  }
  else {
    consola.info('I find you!')
    consola.info(item)

    if (Array.isArray(item.children)) {
      item.children.push(
        {
          date: sponsorDate,
          method: sponsorMethod,
          amount: sponsorAmountNumber,
          memo: sponsorMemo,
        },
      )

      item.total += sponsorAmountNumber
    }
  }

  const sortSponsorsData = sortSponsor(sponsors as any)

  try {
    fs.writeFileSync(sponsorsJsonFile, `${JSON.stringify(sortSponsorsData, null, 2)}\n`)
  }
  catch {
    consola.error(`Write ${sponsorsJsonFile} failed!`)
  }
}
