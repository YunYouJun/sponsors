import type { MoneySponsor } from '../sponsors/types'
import path from 'node:path'

import consola from 'consola'
import fs from 'fs-extra'
import yaml from 'js-yaml'

/**
 * 从 Yaml 文件生成 json
 * @param filePath Yaml 路径
 */
export async function generateJSONfromYaml(filePath: string) {
  const filename = path.basename(filePath)
  const name = filename.slice(0, filename.lastIndexOf('.'))
  const data = yaml.load(fs.readFileSync(filePath, 'utf8'))

  const distDataDir = path.resolve('dist', 'data')
  await fs.ensureDir(distDataDir)

  const targetPath = path.resolve('dist', 'data', `${name}.json`)
  await fs.writeJson(targetPath, data)

  consola.success(`Generated ${name}.json successfully!`)
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
  consola.success(`Generate ${filename} successfully!`)
}
