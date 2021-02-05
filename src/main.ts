import { createApp } from "vue";
import App from "./App.vue";

import router, {setupRouter} from "./router";
import  {setupStore} from "./store";



const app = createApp(App)
// 挂载vuex状态管理
setupStore(app)
// 挂载路由
setupRouter(app)

// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'))

