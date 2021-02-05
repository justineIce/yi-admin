import { Router} from 'vue-router'
export  function createRouterGuards(router: Router) {
  /**
     * 路由拦截
     * 权限验证
     */
  router.beforeEach( (to, from, next) => {
    next();
  });
  router.afterEach(to => {
    console.log(to)
    // 进度条
    // NProgress.done()
    // 多页控制 打开新的页面
    // store.dispatch('d2admin/page/open', to)
    // 更改标题
    // util.title(to.meta.title)
  });
}
