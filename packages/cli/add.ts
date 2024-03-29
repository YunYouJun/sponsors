import fs from 'node:fs'
import path from 'node:path'
import consola from 'consola'

import inquirer from 'inquirer'
import type { SponsorMethod } from '../types'
import { MoneyMethod } from '../types'
import { EnumKeys } from '../types/helper'
import sponsors from '../site/src/assets/data/manual-sponsors.json'
import { sortSponsor } from '../site/src/utils'
import { config } from './config'

const sponsorMethods: SponsorMethod[] = EnumKeys(MoneyMethod).map(
  item => MoneyMethod[item],
)
sponsorMethods.push('其他')

const sponsorsJsonFile = path.resolve(config.dataFolder, 'manual-sponsors.json')

const questions = [
  {
    type: 'input',
    name: 'name',
    message: '赞助者名称：',
  },
  {
    type: 'input',
    name: 'url',
    message: '赞助者链接：',
  },
  {
    type: 'date',
    name: 'date',
    message: '赞助日期：',
    locale: 'zh-CN',
    // format: { month: 'short' },
  },
  {
    type: 'list',
    name: 'method',
    message: '赞助方式：',
    choices: sponsorMethods,
  },
  {
    type: 'number',
    name: 'amount',
    message: '赞助金额：',
  },
  {
    type: 'string',
    name: 'memo',
    message: '备注内容：',
  },
]

export async function onAdd() {
  const answer = await inquirer.prompt(questions)
  // for debug

  consola.info(answer)

  const item = sponsors.find(sponsor => sponsor.name === answer.name)

  if (!item) {
    consola.success('The first sponsorship from this person!')

    sponsors.push({
      name: answer.name,
      url: answer.url,
      avatar: answer.avatar,
      total: answer.amount,
      children: [
        {
          date: answer.date,
          method: answer.method,
          amount: answer.amount,
          memo: answer.memo,
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
          date: answer.date,
          method: answer.method,
          amount: answer.amount,
          memo: answer.memo,
        },
      )

      item.total += answer.amount
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
