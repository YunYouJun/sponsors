import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { markdownWrapperClasses } from './vite.config'

const safelist = markdownWrapperClasses.split(' ').concat([
  'i-ri-qq-line',
  'i-ri-wechat-pay-line',
  'i-ri-alipay-line',
])

const colors = ['purple', 'green', 'dark']
colors.forEach((c) => {
  safelist.push(...[
    `text-${c}-600`,
    `hover:bg-${c}-600`,
    `dark:text-${c}-300`,
    `focus:ring-${c}-300`,
  ])
})

export default defineConfig({
  shortcuts: [
    ['tag', 'inline-flex justify-center items-center shadow rounded m-1 px-2 py-1 lt-sm:(flex-col items-start m-2)'],
    ['btn', 'px-4 py-1 rounded inline-block bg-blue-600 text-white cursor-pointer hover:bg-blue-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-flex justify-center items-center cursor-pointer select-none opacity-90 transition duration-200 ease-in-out hover:opacity-100 hover:text-blue-600 hover:bg-white rounded-full p-2'],
    ['post-card', 'block p-4 bg-white dark:bg-dark-700 max-w-800px m-auto shadow rounded transition hover:shadow-lg'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'inline-flex',
        // ...
      },
      // warn: true,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist,
  theme: {
    animation: {
      keyframes: {
        bounce: '{0%, 100% {transform:translateY(-11%);animation-timing-function:cubic-bezier(0.8,0,1,1)} 50% {transform:translateY(0);animation-timing-function:cubic-bezier(0,0,0.2,1)}}',
      },
    },
  },
})
