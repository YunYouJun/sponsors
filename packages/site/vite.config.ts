import path from 'node:path'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Yaml from '@rollup/plugin-yaml'

import Shiki from '@shikijs/markdown-it'
import Vue from '@vitejs/plugin-vue'
import LinkAttributes from 'markdown-it-link-attributes'

import Unocss from 'unocss/vite'

import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import generateSitemap from 'vite-ssg-sitemap'
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'unplugin-vue-markdown/vite'

import Inspect from 'vite-plugin-inspect'

import { VitePWA } from 'vite-plugin-pwa'

import SvgLoader from 'vite-svg-loader'

export const markdownWrapperClasses = 'post-card markdown-body m-auto text-left'

// https://vitejs.dev/config/

export default defineConfig(() => {
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
        dts: 'src/auto-imports.d.ts',
        dirs: [
          'src/composables',
          'src/stores',
        ],
        vueTemplate: true,
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

      // vite-plugin-vue-markdown
      // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
      Markdown({
        wrapperClasses: markdownWrapperClasses,
        headEnabled: true,
        async markdownItSetup(md) {
          // https://prismjs.com/
          md.use(LinkAttributes, {
            pattern: /^https?:\/\//,
            attrs: {
              target: '_blank',
              rel: 'noopener',
            },
          })
          md.use(await Shiki({
            defaultColor: false,
            themes: {
              light: 'vitesse-light',
              dark: 'vitesse-dark',
            },
          }))
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

      // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
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

    // https://github.com/antfu/vite-ssg
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
      onFinished() { generateSitemap() },
    },

    ssr: {
      // TODO: workaround until they support native ESM
      noExternal: ['workbox-window', /vue-i18n/],
    },
  }
})
