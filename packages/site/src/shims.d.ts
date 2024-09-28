declare interface Window {
  // extend the window
  __DEV__: boolean
  $pageData: any
}

declare module '*.vue' {
  import type { ComponentOptions } from 'vue'

  const component: ComponentOptions
  export default component
}

// with unplugin-vue-markdown, markdowns can be treat as Vue components
declare module '*.md' {
  import type { ComponentOptions } from 'vue'

  const component: ComponentOptions
  export default component
}

declare module '*.yml' {
  const data: any
  export default data
}
