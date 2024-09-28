import type { BadgePreset } from 'sponsorkit'

import path from 'node:path'
import { defaultInlineCSS, defineConfig, tierPresets } from 'sponsorkit'
// migrate to use afdian in sponsorkit
// import { AfdianProvider } from './providers/afdian'
import { defaultAvatarUrl } from '@sponsors/utils'
import { CustomProvider } from './providers/custom'
import { generateTextSponsors, getSponsorsByAvatar } from './utils'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
}

export default defineConfig({
  github: {
    login: 'YunYouJun',
    type: 'user',
  },
  // read afdian from env
  afdian: {
    userId: '283c46c274ff11ea932d52540025c377',
    includePurchases: true,
    purchaseEffectivity: 180,
  },

  formats: ['svg', 'png'],

  svgInlineCSS: `${defaultInlineCSS}
  .silver-sponsors{font-size: 16px;}
  `,

  outputDir: path.resolve(__dirname, '../public'),

  providers: [
    'github',
    'afdian',
    // AfdianProvider,
    CustomProvider,
  ],

  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: past,
    },
    {
      title: 'Backers',
      preset: tierPresets.small,
      // to replace the entire tier rendering
      compose: (composer, sponsors, config) => {
        composer.addSpan(20)
        composer.addTitle('Backers').addSpan(5)

        const noAvatarSponsors = sponsors.filter(item => item.sponsor.avatarUrl === defaultAvatarUrl)
        const avatarSponsors = sponsors.filter(item => item.sponsor.avatarUrl !== defaultAvatarUrl)
        composer.addSponsorGrid(avatarSponsors, tierPresets.medium)

        generateTextSponsors(composer, noAvatarSponsors, config)

        composer.addSpan(10)
      },
    },
    {
      title: 'Sponsors',
      monthlyDollars: 3,
      preset: tierPresets.medium,
      compose(composer, sponsors, config) {
        composer.addTitle(this.title || 'Sponsors').addSpan(5)

        const typeSponsors = getSponsorsByAvatar(sponsors)

        composer.addSponsorGrid(typeSponsors.avatar, tierPresets.medium)
        generateTextSponsors(composer, typeSponsors.noAvatar, config)

        composer.addSpan(20)
      },
      // to insert custom elements after the tier block
      // composeAfter: (composer, tierSponsors, config) => {
      //   composer.addSpan(10)
      // },
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 10,
      preset: tierPresets.large,
      compose(composer, sponsors, config) {
        composer.addTitle(this.title || 'Silver Sponsors').addSpan(5)

        const typeSponsors = getSponsorsByAvatar(sponsors)

        composer.addSponsorGrid(typeSponsors.avatar, tierPresets.large)
        generateTextSponsors(composer, typeSponsors.noAvatar, config, {
          nameSize: 60,
          boxWidth: 100,
          fontSize: '16px',
          name: {
            classes: 'silver-sponsors',
          },
        })

        composer.addSpan(30)
      },
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 50,
      preset: tierPresets.xl,
    },
  ],

  renders: [
    {
      name: 'sponsors',
      width: 800,
    },
    {
      name: 'sponsors.wide',
      width: 1800,
    },
    {
      name: 'sponsors.part1',
      width: 800,
      filter: sponsor => sponsor.monthlyDollars >= 9.9,
    },
    {
      name: 'sponsors.part2',
      width: 800,
      filter: sponsor => sponsor.monthlyDollars < 9.9 && sponsor.monthlyDollars >= 0,
    },
    {
      name: 'sponsors.past',
      width: 800,
      filter: sponsor => sponsor.monthlyDollars < 0,
    },
    {
      name: 'sponsors.circles',
      width: 1000,
      includePastSponsors: true,
      renderer: 'circles',
      circles: {
        radiusPast: 3,
      },
    },
  ],

  sponsorsAutoMerge: true,
})
