import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

import inquirer from 'inquirer'
import type { SponsorMethod } from '../types'
import { MoneyMethod } from '../types'
import { EnumKeys } from '../types/helper'
import { config } from './config'

const sponsorMethods: SponsorMethod[] = EnumKeys(MoneyMethod).map(
  item => MoneyMethod[item],
)
sponsorMethods.push('其他')

const dataFile = path.resolve(config.dataFolder, 'sponsors.yml')
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
    type: 'datetime',
    name: 'date',
    message: '赞助日期：',
    format: ['yyyy', '-', 'mm', '-', 'dd'],
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
  const answers = await inquirer.prompt(questions)
  const item = yaml.dump([answers])
  // for debug
  // eslint-disable-next-line no-console
  console.log(item)
  fs.appendFileSync(dataFile, item)
}
