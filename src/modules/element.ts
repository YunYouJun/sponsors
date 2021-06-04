import { UserModule } from "~/types";

// 按需引入 https://element-plus.org/#/zh-CN/component/quickstart#an-xu-yin-ru
// import { ElTable, ElTableColumn, ElTag, ElTabs, ElTabPane } from "element-plus";

import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
// import "element-theme-ink";

// 如果要使用.scss样式文件，则需要引入base.scss文件
import "element-plus/packages/theme-chalk/src/base.scss";

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = ({ app }) => {
  // app.use(ElTable);
  // app.use(ElTableColumn);
  // app.use(ElTag);
  // app.use(ElTabs);
  // app.use(ElTabPane);
  app.use(ElementPlus);
};
