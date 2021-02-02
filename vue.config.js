// 增加环境变量
process.env.VUE_APP_VERSION = require("./package.json").version;

// 基础路径 注意发布之前要先修改这里
const publicPath = "/";
module.exports = {
  // outputDir: "dist", // 打包的目录
  publicPath, // 根据你的实际情况更改这里
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, //生产环境是否生成 SourceMap
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    overlay: {
      // 错误信息展示到页面
      warnings: true,
      errors: true
    },
    publicPath, // 和 publicPath 保持一致
    port: 8066, // 服务端口
    disableHostCheck: true,
    proxy: {
      "/files": {
        target: "http://127.0.0.1:9013/",
        changeOrigin: true,
        ws: false
      }
    }
  }
};
