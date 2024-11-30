import type { UserModule } from '~/types'
import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from '~pages'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
// your custom styles here
import 'star-markdown-css/src/scss/theme/yun.scss'
import './styles/css-vars.scss'
import './styles/index.scss'

import 'uno.css'

const routes = setupLayouts(generatedRoutes)
// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)
