declare interface Window {
  // extend the window
}

declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}

// with vite-plugin-vue-markdown, markdowns can be treat as Vue components
declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}

declare module '*.yml' {
  const data: any
  export default data
}
