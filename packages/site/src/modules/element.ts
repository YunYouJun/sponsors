import { ElTabs } from 'element-plus'
import type { UserModule } from '~/types'

// 按需引入 https://element-plus.org/#/zh-CN/component/quickstart#an-xu-yin-ru

// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import "element-theme-ink";

export const install: UserModule = ({ app }) => {
  const components = [ElTabs]
  components.forEach((component) => {
    app.use(component)
  })

  // app.use(ElementPlus);
}
