import layoutHeaderAside from '@/layout/index';
/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path:'/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        component:()=> require('@/pages/index/index')
      },
    ]
  }
];

/**
 * 在主框架之外显示
//  */
// const frameOut = [];
//
// /**
//  * 错误页面
//  */
// const errorPage = [];

// 重新组织后导出
export default [
  ...frameIn,
  // ...frameOut,
  // ...errorPage,
]
