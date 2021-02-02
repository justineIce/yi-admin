import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: []
});
/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach(async (to, from, next) => {
    next();
})
router.afterEach(to => {
    // 进度条
    // NProgress.done()
    // 多页控制 打开新的页面
    // store.dispatch('d2admin/page/open', to)
    // 更改标题
    // util.title(to.meta.title)
});
export default router;
