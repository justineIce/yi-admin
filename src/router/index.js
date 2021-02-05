import { createRouter, createWebHistory } from "vue-router";
// 路由数据
import routes from './routes';
import { createRouterGuards } from "@/router/guards";
const router = createRouter({
  history: createWebHistory(),
  routes: routes
});
export function setupRouter(app) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}
export default router;
//# sourceMappingURL=index.js.map