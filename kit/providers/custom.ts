import consola from 'consola'
import type { RankSponsor } from '@sponsors/types'

import type { Provider, Sponsorship } from 'sponsorkit'
import { defaultAvatarUrl } from '@sponsors/utils'

import manualSponsors from '../../packages/site/src/assets/data/manual-sponsors.json'

export const CustomProvider: Provider = {
  name: 'custom',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetchSponsors(config) {
    return fetchCustomSponsors()
  },
}

/**
 * https://sponsors.yunyoujun.cn/manual-sponsors.json
 */
export async function fetchCustomSponsors(): Promise<Sponsorship[]> {
  const rank: RankSponsor[] = (manualSponsors as any as RankSponsor[]).filter(sponsor => sponsor.total >= 6)

  if (!rank.length) {
    consola.error('Rank Error!')
    return
  }

  // check ping
  return rank.map((sponsor) => {
    const sponsorShip: Sponsorship = {
      sponsor: {
        type: 'User',
        login: sponsor.name,
        name: sponsor.name,
        avatarUrl: sponsor.avatar || defaultAvatarUrl,
        linkUrl: sponsor.url || 'https://sponsors.yunyoujun.cn',
      },
      // CNY
      monthlyDollars: sponsor.total / 6,
      privacyLevel: 'PUBLIC',
      tierName: '扫码赞助',
      createdAt: '',
      isOneTime: true,
    }
    return sponsorShip
  })
}
