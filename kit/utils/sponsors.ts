import type { SponsorkitConfig, Sponsorship, SvgComposer } from 'sponsorkit'
import { defaultAvatarUrl } from '@sponsors/utils'
import { tierPresets } from 'sponsorkit'

export function encodeHtmlEntities(str: string) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

/**
 * @deprecated 不再手动维护打赏（来自二维码）列表
 *
 * generate sponsors without avatar
 * @param composer
 * @param sponsors
 * @param config
 */
export function generateTextSponsors(composer: SvgComposer, sponsors: Sponsorship[], config: SponsorkitConfig, preset: {
  nameSize: number
  boxWidth: number
  boxHeight?: number
  fontSize: string
  name: {
    classes: string
  }
} = {
  nameSize: 40,
  boxWidth: 80,
  boxHeight: 30,
  fontSize: '12',
  name: {
    classes: 'sponsor-name',
  },
}) {
  const { nameSize, boxWidth, boxHeight } = preset
  const fontSize = '12'

  const width = config.width || 700

  const perLine = Math.floor((width - (tierPresets.base.container?.sidePadding || 0) * 2) / boxWidth)

  for (let i = 0; i < Math.ceil(sponsors.length / perLine); i++) {
    const lineSponsors = sponsors.slice(i * perLine, (i + 1) * perLine)
    // 计算单行

    lineSponsors.forEach((item, i) => {
      const offsetX = (width - lineSponsors.length * boxWidth) / 2 + (boxWidth - nameSize) / 2

      const url = item.sponsor.linkUrl
      const name = item.sponsor.name
      const sliceName = name.length > 8 ? `${name.slice(0, 8)}...` : name

      const x = offsetX + boxWidth * i
      const y = composer.height

      // not use '.sponsor-link' && '.sponsor-name' to avoid adblock
      if (item.sponsor) {
        composer.addRaw(`<a xlink:href="${url}" class="${tierPresets.base.classes || ''}" target="_blank" id="${name}">
<text x="${x + nameSize / 2}" y="${y + 18}" text-anchor="middle" class="${preset.name.classes || ''}" fill="currentColor" font-size="${fontSize}">
${encodeHtmlEntities(sliceName)}</text>
</a>`)
      }
    })

    composer.addSpan(boxHeight || 30)
  }
}

/**
 * @deprecated 不在手动维护打赏（来自二维码）列表
 *
 * get sponsors by judge avatar
 * @param sponsors
 */
export function getSponsorsByAvatar(sponsors: Sponsorship[]) {
  const noAvatarSponsors = sponsors.filter(item => item.sponsor.avatarUrl === defaultAvatarUrl)
  const avatarSponsors = sponsors.filter(item => item.sponsor.avatarUrl !== defaultAvatarUrl)

  return {
    avatar: avatarSponsors,
    noAvatar: noAvatarSponsors,
  }
}
