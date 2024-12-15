import type { BadgePreset } from 'sponsorkit'

import path from 'node:path'
// migrate to use afdian in sponsorkit
// import { AfdianProvider } from './providers/afdian'
import { defineConfig, tierPresets } from 'sponsorkit'
import { CustomProvider } from './providers/custom'
import { generateTextSponsors } from './utils'

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

  svgInlineCSS: `
  text {
    font-weight: 300;
    fill: #777777;
    /* font-size: 14px; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .sponsorkit-link {
    cursor: pointer;
  }
  .sponsorkit-tier-title {
    font-weight: 500;
    font-size: 20px;
  }

  .silver-sponsors{font-size: 16px;}
  `,

  outputDir: path.resolve(__dirname, '../public'),

  providers: [
    'github',
    'afdian',
    // CustomProvider,
  ],

  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: past,
      // @TODO revert
      // to replace the entire tier rendering
      composeAfter: async (composer, sponsors, config) => {
        // composer.addSpan(20)
        const manualSponsors = await CustomProvider.fetchSponsors()
        generateTextSponsors(composer, manualSponsors, config)
      },
    },
    {
      title: 'Backers',
      preset: tierPresets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 3,
      preset: tierPresets.medium,
      // compose(composer, sponsors, config) {
      //   composer.addTitle(this.title || 'Sponsors').addSpan(5)

      //   const typeSponsors = getSponsorsByAvatar(sponsors)

      //   composer.addSponsorGrid(typeSponsors.avatar, tierPresets.medium)
      //   generateTextSponsors(composer, typeSponsors.noAvatar, config)

      //   composer.addSpan(20)
      // },
      // to insert custom elements after the tier block
      // composeAfter: (composer, tierSponsors, config) => {
      //   composer.addSpan(10)
      // },
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 10,
      preset: tierPresets.large,
      // compose(composer, sponsors, config) {
      //   composer.addTitle(this.title || 'Silver Sponsors').addSpan(5)

      //   const typeSponsors = getSponsorsByAvatar(sponsors)

      //   composer.addSponsorGrid(typeSponsors.avatar, tierPresets.large)
      //   generateTextSponsors(composer, typeSponsors.noAvatar, config, {
      //     nameSize: 60,
      //     boxWidth: 100,
      //     fontSize: '16px',
      //     name: {
      //       classes: 'silver-sponsors',
      //     },
      //   })

      //   composer.addSpan(30)
      // },
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 50,
      preset: tierPresets.xl,
    },
  ],

  // Automatically Merge sponsors from different platforms
  sponsorsAutoMerge: true,

  // Manually merge sponsors from different platforms
  // mergeSponsors: [
  //   [
  //     { login: 'YunYouJun', provider: 'github' },
  //     { login: 'yunyoujun', provider: 'afdian' },
  //   ],
  // ],

  renders: [
    {
      name: 'sponsors',
      width: 800,
    },
    {
      name: 'sponsors.wide',
      width: 1800,
    },
    // {
    //   name: 'sponsors.part1',
    //   width: 800,
    //   filter: sponsor => sponsor.monthlyDollars >= 9.9,
    // },
    // {
    //   name: 'sponsors.part2',
    //   width: 800,
    //   filter: sponsor => sponsor.monthlyDollars < 9.9 && sponsor.monthlyDollars >= 0,
    // },
    {
      name: 'sponsors.past',
      width: 800,
      filter: sponsor => sponsor.monthlyDollars < 0,
    },
    {
      name: 'sponsors.circles',
      renderer: 'circles',
      width: 1000,
      includePastSponsors: true,
      circles: {
        radiusPast: 3,
      },
    },
  ],
})
