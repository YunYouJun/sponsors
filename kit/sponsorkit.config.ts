import path from 'path'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig, presets } from 'sponsorkit'
import { AfdianProvider } from './providers/afdian'
import { CustomProvider } from './providers/custom'
// import { AfdianProvider } from './providers/afdian'

export default defineConfig({
  // github: {
  //   login: 'YunYouJun',
  // },

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
      // compose: (composer, tierSponsors, config) => {
      //   composer.addRaw(
      //     '<-- custom svg -->',
      //   )
      // },
    },
    {
      title: 'Sponsors',
      monthlyDollars: 3,
      preset: presets.medium,
      // to insert custom elements after the tier block
      composeAfter: (composer, tierSponsors, config) => {
        composer.addSpan(10)
      },
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 10,
      preset: presets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 50,
      preset: presets.xl,
    },
  ],
})
