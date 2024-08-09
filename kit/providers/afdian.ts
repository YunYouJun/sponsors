// deprecated, ok let's use afdian in sponsorkit
import 'dotenv/config'
import process from 'node:process'
import type { AfdianApiOpts } from 'afdian-api'
import Afdian from 'afdian-api'

import type { Provider, Sponsorship } from 'sponsorkit'

export const AfdianProvider: Provider = {
  name: 'afdian',

  fetchSponsors(_config) {
    const token = process.env.AFDIAN_API_TOKEN || ''
    const userId = process.env.AFDIAN_USER_ID || ''

    if (!token)
      throw new Error('Token is null')
    if (!userId)
      throw new Error('UserId is null')

    return fetchAfdianSponsors({
      token,
      userId,
    })
  },
}

/**
 * https://afdian.com/dashboard/dev
 */
export async function fetchAfdianSponsors(options: AfdianApiOpts): Promise<Sponsorship[]> {
  const afdian = new Afdian(options)

  async function getSponsors() {
    const { data } = await afdian.querySponsor(1)
    return data.list
  }

  // check ping
  const res = await afdian.ping()
  if (res.ec !== 200)
    throw new Error('Can not connect afdian!')

  const sponsors = await getSponsors()
  return sponsors.map((sponsor) => {
    const sponsorShip: Sponsorship = {
      sponsor: {
        type: 'User',
        login: sponsor.user.user_id,
        name: sponsor.user.name,
        avatarUrl: sponsor.user.avatar,
        linkUrl: `https://afdian.com/u/${sponsor.user.user_id}`,
      },
      // CNY
      monthlyDollars: Number.parseFloat(sponsor.all_sum_amount) / 6,
      privacyLevel: 'PUBLIC',
      tierName: '爱发电',
      createdAt: new Date(sponsor.first_pay_time * 1000).toISOString(),
      isOneTime: Boolean(sponsor.current_plan.name),
    }
    return sponsorShip
  })
}
