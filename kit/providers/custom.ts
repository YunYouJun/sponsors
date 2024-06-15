import type { RankSponsor } from '@sponsors/types'

import type { Provider, Sponsorship } from 'sponsorkit'
import { defaultAvatarUrl, getQQAvatarUrl } from '@sponsors/utils'

import manualSponsors from '../../packages/site/src/assets/data/manual-sponsors.json'

export const CustomProvider: Provider = {
  name: 'custom',

  fetchSponsors(_config) {
    return fetchCustomSponsors()
  },
}

/**
 * https://sponsors.yunyoujun.cn/manual-sponsors.json
 * 头像解析失败时可能会导致构建失败
 */
export async function fetchCustomSponsors(): Promise<Sponsorship[]> {
  const rank: RankSponsor[] = (manualSponsors as any as RankSponsor[]).filter(sponsor => sponsor.total >= 6)

  if (!rank.length)
    throw new Error('Rank Error!')

  // check ping
  return rank.map((sponsor) => {
    let avatarUrl = defaultAvatarUrl
    if (sponsor.qq)
      avatarUrl = getQQAvatarUrl(sponsor.qq)
    if (sponsor.avatar)
      avatarUrl = sponsor.avatar

    const sponsorShip: Sponsorship = {
      sponsor: {
        type: 'User',
        login: sponsor.id || sponsor.name,
        name: sponsor.name,
        avatarUrl,
        linkUrl: sponsor.url || 'https://sponsors.yunyoujun.cn',
      },
      // CNY one time
      monthlyDollars: sponsor.total / 6 / 12,
      privacyLevel: 'PUBLIC',
      tierName: '扫码赞助',
      createdAt: '',
      isOneTime: true,
    }
    return sponsorShip
  })
}
