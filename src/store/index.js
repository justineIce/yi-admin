import { createStore } from "vuex";
import modules from "./modules";
const store = createStore({
  modules: {
    modules
  }
});
export function setupStore(app) {
  app.use(store);
}
export default store;
//# sourceMappingURL=index.js.map