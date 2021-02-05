import {App} from "vue";
import { createStore } from "vuex";

import modules from "./modules";

const store =createStore({
  modules: {
    modules
  }
});
export function setupStore(app: App<Element>) {
  app.use(store);
}
export default store
