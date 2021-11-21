declare interface Window {
  // extend the window
}

declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const component: ComponentOptions;
  export default component;
}

// with vite-plugin-md, markdowns can be treat as Vue components
declare module "*.md" {
  import { ComponentOptions } from "vue";
  const component: ComponentOptions;
  export default component;
}

declare module '*.yml' {
  const data: any
  export default data
}