import {Module} from 'vuex'
const state = {
  // 顶栏菜单
  header: [],
  // 侧栏菜单
  aside: [],
};
type StateType = typeof state
const menus: Module<StateType, any> = {
  mutations: {

  },
  actions: {

  }
};


export default menus
