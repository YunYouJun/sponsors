import consola from 'consola'
import { colors } from 'consola/utils'
import fs from 'fs-extra'
import { chromium } from 'playwright-chromium'

export async function generateAvatars(options: {
  names: string[]
  outDir: string
}) {
  await fs.ensureDir(options.outDir)

  const browser = await chromium.launch()
  const page = await browser.newPage()
  const port = 3000
  const baseUrl = `http://localhost:${port}`
  /**
   * 生成文字头像
   */
  async function generateTextAvatar(name: string = '好心人') {
    await page.goto(`${baseUrl}/avatar?name=${name}`, {
      waitUntil: 'networkidle',
    })

    const buffer = await page.locator('.sponsor-text-avatar').first().screenshot()
    consola.success(`Get  ${colors.cyan(name)} avatar buffer from playwright screenshot!`)
    return buffer
  }

  for (const name of options.names) {
    const buffer = await generateTextAvatar(name)
    const avatarPngPath = `${options.outDir}/${name}.png`
    await fs.writeFile(avatarPngPath, buffer)
    consola.success(`Save ${colors.yellow(name)} avatar to ${colors.yellow(options.outDir)}.`)
  }

  await browser.close()
}
