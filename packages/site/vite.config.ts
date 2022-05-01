import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Markdown from 'vite-plugin-md'
import Inspect from 'vite-plugin-inspect'
import Prism from 'markdown-it-prism'
import { VitePWA } from 'vite-plugin-pwa'

import Yaml from '@rollup/plugin-yaml'

import LinkAttributes from 'markdown-it-link-attributes'

import SvgLoader from 'vite-svg-loader'

export const markdownWrapperClasses = 'post-card markdown-body m-auto text-left'

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },

    plugins: [
      Vue({
        include: [/\.vue$/, /\.md$/],
      }),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        extensions: ['vue', 'md'],
      }),

      // https://github.com/jpkleemans/vite-svg-loader
      SvgLoader(),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts(),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'vue-i18n',
          '@vueuse/head',
          '@vueuse/core',
        ],
        dts: true,
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
      // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: 'src/components.d.ts',
      }),

      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      Unocss(),

      // https://github.com/antfu/vite-plugin-md
      // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
      Markdown({
        wrapperClasses: markdownWrapperClasses,
        headEnabled: true,
        markdownItSetup(md) {
          // https://prismjs.com/
          md.use(Prism)
          md.use(LinkAttributes, {
            pattern: /^https?:\/\//,
            attrs: {
              target: '_blank',
              rel: 'noopener',
            },
          })
        },
      }),

      // https://github.com/antfu/vite-plugin-pwa
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
        manifest: {
          name: 'YunYouJun\'s Sponsors',
          short_name: 'Sponsors',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/logo.png',
              sizes: '240x240',
              type: 'image/png',
            },
          ],
        },
      }),

      // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [path.resolve(__dirname, 'locales/**')],
      }),

      // https://github.com/antfu/vite-plugin-inspect
      Inspect({
        // change this to enable inspect for debugging
        enabled: false,
      }),

      Yaml({
        // avoid conflict with i18n yml
        exclude: 'locales/*.yml',
      }),
    ],

    server: {
      fs: {
        strict: true,
      },
    },

    // https://github.com/antfu/vite-ssg
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
    },

    optimizeDeps: {
      include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head', '@ctrl/tinycolor', 'dayjs', 'vue-about-me'],
      exclude: ['vue-demi'],
    },
  }
})
