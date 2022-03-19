import { defaultAvatarUrl } from '@sponsors/utils'
import type { SponsorkitConfig, Sponsorship, SvgComposer } from 'sponsorkit'
import { presets } from 'sponsorkit'

export function encodeHtmlEntities(str: string) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

/**
 * generate sponsors without avatar
 * @param composer
 * @param sponsors
 * @param config
 */
export function generateTextSponsors(composer: SvgComposer, sponsors: Sponsorship[], config: SponsorkitConfig, preset: Partial<{
  nameSize: number
  boxWidth: number
  boxHeight: number
  fontSize: string
  name: {
    classes: string
  }
}> = {
  nameSize: 40,
  boxWidth: 80,
  boxHeight: 30,
  fontSize: '14px',
  name: {
    classes: 'sponsor-name',
  },
}) {
  const { nameSize, boxWidth, boxHeight, fontSize } = preset

  const perLine = Math.floor((config.width - (presets.base.container.sidePadding || 0) * 2) / boxWidth)

  new Array(Math.ceil(sponsors.length / perLine))
    .fill(0)
    .forEach((_, i) => {
      const lineSponsors = sponsors.slice(i * perLine, (i + 1) * perLine)
      // 计算单行

      lineSponsors.forEach((item, i) => {
        const offsetX = (config.width - lineSponsors.length * boxWidth) / 2 + (boxWidth - nameSize) / 2

        const url = item.sponsor.linkUrl
        const name = item.sponsor.name

        const x = offsetX + boxWidth * i
        const y = composer.height

        if (item.sponsor.avatarUrl === defaultAvatarUrl) {
          composer.addRaw(`<a xlink:href="${url}" class="${presets.base.classes || 'sponsor-link'}" target="_blank" id="${name}">
  <text x="${x + nameSize / 2}" y="${y + 18}" text-anchor="middle" class="${preset.name.classes || 'sponsor-name'}" fill="currentColor" font-size="${fontSize}">
  ${encodeHtmlEntities(name)}</text>
</a>`)
        }
      })

      composer.addSpan(boxHeight || 30)
    })
}

/**
 * get sponsors by judge avatar
 * @param sponsors
 * @returns
 */
export function getSponsorsByAvatar(sponsors: Sponsorship[]) {
  const noAvatarSponsors = sponsors.filter(item => item.sponsor.avatarUrl === defaultAvatarUrl)

  const avatarSponsors = sponsors.filter(item => item.sponsor.avatarUrl !== defaultAvatarUrl)

  return {
    avatar: avatarSponsors,
    noAvatar: noAvatarSponsors,
  }
}
