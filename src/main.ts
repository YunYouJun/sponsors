import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import { ElTable, ElTableColumn } from "element-plus";
// import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
// import "element-theme-ink";

const app = createApp(App);

app.use(ElTable);
app.use(ElTableColumn);
// app.use(ElementPlus);

app.mount("#app");
