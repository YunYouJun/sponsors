import fs from 'fs'
import { basename } from 'path'
import yaml from 'js-yaml'

import { Logger } from '@yunyoujun/logger'

import type { MoneySponsor } from '../types'
const logger = new Logger()

/**
 * 从 Yaml 文件生成 json
 * @param path Yaml 路径
 */
export function generateJSONfromYaml(path: string) {
  const filename = basename(path)
  const name = filename.slice(0, filename.lastIndexOf('.'))
  const data = yaml.load(fs.readFileSync(path, 'utf8'))
  try {
    fs.mkdirSync('./dist/')
  }
  catch ({ code }) {
    if (code !== 'EEXIST')
      return
  }
  fs.writeFileSync(`./dist/${name}.json`, JSON.stringify(data))
  logger.success(`Generated ${name}.json successfully!`)
  return data
}

/**
 * 生成 markdown
 * @param {*} data
 */
export function generateMarkdown(data: MoneySponsor[]) {
  // generate sponsors list
  let sponsors_md = `---
title: 赞助者名单
---

## Sponsors (${data.length})

|老板|方式|金额|日期|备注|
|---|---|---|---|---|
`

  for (let i = 0; i < data.length; i++) {
    const sponsor = data[i]
    const boss = sponsor.url
      ? `[${sponsor.name}](${sponsor.url})`
      : `${sponsor.name || '好心人'}`

    const amount
      = sponsor.amount >= 50
        ? `**${sponsor.amount.toFixed(2)}**`
        : `${sponsor.amount.toFixed(2)}`

    const sponsor_md = `|${boss}|${
      sponsor.method
    }|${amount}|${(new Date(sponsor.date)).toLocaleDateString('zh-CN')}|${
      sponsor.memo || '冰阔落'
    }|\n`
    sponsors_md += sponsor_md
  }

  const filename = 'list.md'
  fs.writeFileSync(`./dist/${filename}`, sponsors_md)
  logger.success(`Generate ${filename} successfully!`)
}
