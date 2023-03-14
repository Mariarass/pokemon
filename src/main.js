import { createApp } from 'vue'
import App from './app/App.vue'
import store from "@/store";
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';
import router from "@/router/router";

const app = createApp(App);

app.use(store).use(router).use(Antd).mount('#app')
