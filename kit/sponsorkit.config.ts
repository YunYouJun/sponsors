import path from 'path'
import { defaultAvatarUrl } from '@sponsors/utils'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { defaultInlineCSS, defineConfig, presets } from 'sponsorkit'
import { AfdianProvider } from './providers/afdian'
import { CustomProvider } from './providers/custom'
import { generateTextSponsors, getSponsorsByAvatar } from './utils'
// import { AfdianProvider } from './providers/afdian'

// import { defaultAvatarUrl } from '@sponsors/utils'

export default defineConfig({
  // github: {
  //   login: 'YunYouJun',
  // },

  formats: ['svg'],

  svgInlineCSS: `${defaultInlineCSS}
  .silver-sponsors{font-size: 16px;}
  `,

  outputDir: path.resolve(__dirname, '../public'),

  providers: [
    'github',
    // @ts-expect-error provider
    AfdianProvider,
    // @ts-expect-error provider
    CustomProvider,
  ],

  tiers: [
    {
      title: 'Backers',
      // to replace the entire tier rendering
      compose: (composer, sponsors, config) => {
        composer.addSpan(20)
        composer.addTitle('Backers').addSpan(5)

        const noAvatarSponsors = sponsors.filter(item => item.sponsor.avatarUrl === defaultAvatarUrl)

        const avatarSponsors = sponsors.filter(item => item.sponsor.avatarUrl !== defaultAvatarUrl)

        composer.addSponsorGrid(avatarSponsors, presets.medium)

        generateTextSponsors(composer, noAvatarSponsors, config)

        composer.addSpan(10)
      },
    },
    {
      title: 'Sponsors',
      monthlyDollars: 3,
      preset: presets.medium,
      compose(composer, sponsors, config) {
        composer.addTitle(this.title).addSpan(5)

        const typeSponsors = getSponsorsByAvatar(sponsors)

        composer.addSponsorGrid(typeSponsors.avatar, presets.medium)
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
      preset: presets.large,
      compose(composer, sponsors, config) {
        composer.addTitle(this.title).addSpan(5)

        const typeSponsors = getSponsorsByAvatar(sponsors)

        composer.addSponsorGrid(typeSponsors.avatar, presets.large)
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
      preset: presets.xl,
    },
  ],
})
