import type { RankSponsor } from 'packages/sponsors/types'
import type { Sponsorship } from 'sponsorkit'
import { getQQAvatarUrl } from '@sponsors/utils'
// import { generateAvatarByName } from '../utils'

import manualSponsors from '../../packages/site/src/assets/data/manual-sponsors.json'
import { encodeHtmlEntities } from '../utils'

/**
 * old manual sponsors
 */
export const CustomProvider = {
  name: 'custom',

  fetchSponsors() {
    return fetchCustomSponsors()
  },
}

/**
 * https://sponsors.yunyoujun.cn/data/manual-sponsors.json
 * 头像解析失败时可能会导致构建失败
 */
export async function fetchCustomSponsors(): Promise<Sponsorship[]> {
  const rank: RankSponsor[] = (manualSponsors as any as RankSponsor[]).filter(sponsor => sponsor.total >= 6)

  if (!rank.length)
    throw new Error('Rank Error!')

  // check ping
  const sponsors = rank.map((sponsor) => {
    let avatarUrl = ''

    if (sponsor.avatar) {
      avatarUrl = sponsor.avatar
    }
    else if (sponsor.qq) {
      avatarUrl = encodeHtmlEntities(getQQAvatarUrl(sponsor.qq))
    }
    else if (sponsor.name) {
      // const avatarPath = path.resolve(avatarDistFolder, `${sponsor.name}.png`)
      // if (fs.existsSync(avatarPath)) {
      //   const avatarBase64 = fs.readFileSync(avatarPath).toString('base64')
      //   avatarUrl = `data:image/png;base64,${avatarBase64}`
      // }
      // avatarUrl = generateTextAvatarUrl(sponsor.name)
    }

    const sponsorShip: Sponsorship = {
      sponsor: {
        type: 'User',
        login: sponsor.id || sponsor.name,
        name: sponsor.name,
        avatarUrl,
        linkUrl: sponsor.url || avatarUrl || 'https://www.yunyoujun.cn/sponsors/',
      },
      // CNY one time
      monthlyDollars: sponsor.total / 6 / 12,
      privacyLevel: 'PUBLIC',
      tierName: '扫码赞助',
      createdAt: '2024-01-01',
      expireAt: '2024-12-14',
      isOneTime: true,
    }
    return sponsorShip
  })
  return sponsors
}
