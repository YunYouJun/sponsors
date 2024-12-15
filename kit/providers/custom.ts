import type { RankSponsor } from 'packages/sponsors/types'

import type { Provider, Sponsorship } from 'sponsorkit'

import { defaultAvatarUrl, getQQAvatarUrl } from '@sponsors/utils'
import { generateTextAvatarUrl } from '../../packages/node-avatar/src/svg'
// import { generateAvatarByName } from '../utils'

import manualSponsors from '../../packages/site/src/assets/data/manual-sponsors.json'

export const CustomProvider: Provider = {
  name: 'custom',

  fetchSponsors(_config) {
    return fetchCustomSponsors()
  },
}

/**
 * https://sponsors.yunyoujun.cn/data/manual-sponsors.json
 * 头像解析失败时可能会导致构建失败
 */
export async function fetchCustomSponsors(): Promise<Sponsorship[]> {
  const rank: RankSponsor[] = (manualSponsors as any as RankSponsor[]).filter(sponsor => sponsor.total >= 6)

  // generate avatars
  // const {
  //   closeServer,
  // } = startServer(siteDistFolder)
  // await generateAvatars({
  //   names: manualSponsors.map(sponsor => sponsor.name),
  //   outDir: avatarDistFolder,
  // })
  // closeServer()

  if (!rank.length)
    throw new Error('Rank Error!')

  // check ping
  return rank.map((sponsor) => {
    let avatarUrl = defaultAvatarUrl

    if (sponsor.avatar) {
      avatarUrl = sponsor.avatar
    }
    else if (sponsor.qq) {
      avatarUrl = getQQAvatarUrl(sponsor.qq)
    }
    else if (sponsor.name) {
      // const avatarPath = path.resolve(avatarDistFolder, `${sponsor.name}.png`)
      // if (fs.existsSync(avatarPath)) {
      //   const avatarBase64 = fs.readFileSync(avatarPath).toString('base64')
      //   avatarUrl = `data:image/png;base64,${avatarBase64}`
      // }
      avatarUrl = generateTextAvatarUrl(sponsor.name)
    }

    // console.log('avatarUrl', avatarUrl)

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
      createdAt: '',
      isOneTime: true,
    }
    return sponsorShip
  })
}
