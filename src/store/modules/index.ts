// declare module 'vue/types/vue' {
//     interface Vue {
//         [key: string]: any,
//     }
// }
interface Modules {
    [key: string]: object;
}

// const path = require('path');
const files = require.context('./', true, /\.ts/);
const modules: Modules = {};

files.keys().forEach((key) => {
  const name = key.replace(/(\.\/|\.ts)/g, '')
  console.log(name)
  modules[name] = files(key).default || files(key);
});
export default {
  namespaced: true,
  modules
}
