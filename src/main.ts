import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import {
  ElCollapse,
  ElCollapseItem,
  ElTable,
  ElTableColumn,
  ElTag,
} from "element-plus";
// import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
// import "element-theme-ink";

const app = createApp(App);

app.use(ElCollapse);
app.use(ElCollapseItem);
app.use(ElTable);
app.use(ElTableColumn);
app.use(ElTag);
// app.use(ElementPlus);

app.mount("#app");
