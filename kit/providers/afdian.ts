import 'dotenv/config'
import type { AfdianApiOpts } from 'afdian-api'
import Afdian from 'afdian-api'

import type { Provider, Sponsorship } from 'sponsorkit'

export const AfdianProvider: Provider = {
  name: 'afdian',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetchSponsors(config) {
    const token = process.env.AFDIAN_API_TOKEN || ''
    const userId = process.env.AFDIAN_USER_ID || ''

    if (token && userId) {
      return fetchAfdianSponsors({
        token,
        userId,
      })
    }

    if (!token)
      console.error('Token is null')
    if (!userId)
      console.error('UserId is null')
  },
}

/**
 * https://afdian.net/dashboard/dev
 * @param config
 */
export async function fetchAfdianSponsors(options: AfdianApiOpts): Promise<Sponsorship[]> {
  const afdian = new Afdian(options)

  async function getSponsors() {
    const { data } = await afdian.querySponsor(1)
    return data.list
  }

  // check ping
  const res = await afdian.ping()
  if (res.ec !== 200) {
    console.error('Can not connect afdian!')
    return
  }

  const sponsors = await getSponsors()
  return sponsors.map((sponsor) => {
    const sponsorShip: Sponsorship = {
      sponsor: {
        type: 'User',
        login: sponsor.user.user_id,
        name: sponsor.user.name,
        avatarUrl: sponsor.user.avatar,
        linkUrl: `https://afdian.net/u/${sponsor.user.user_id}`,
      },
      // CNY
      monthlyDollars: parseFloat(sponsor.all_sum_amount) / 6,
      privacyLevel: 'PUBLIC',
      tierName: '爱发电',
      createdAt: new Date(sponsor.first_pay_time * 1000).toISOString(),
      isOneTime: Boolean(sponsor.current_plan.name),
    }
    return sponsorShip
  })
}
