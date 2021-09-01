import { UserModule } from "~/types";

// 按需引入 https://element-plus.org/#/zh-CN/component/quickstart#an-xu-yin-ru
import { ElTable, ElTag, ElTabs } from "element-plus";

// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import "element-theme-ink";

export const install: UserModule = ({ app }) => {
  app.use(ElTable);
  app.use(ElTag);
  app.use(ElTabs);

  // app.use(ElementPlus);
};
