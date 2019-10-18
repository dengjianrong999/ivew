// const  Version = new Date().getTime();
module.exports = {
  // publicPath: "./",
  // // 设为false打包时不生成.map文件
  // productionSourceMap: false,
  // filenameHashing: true, //生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "assets",
  indexPath: "index.html",
  filenameHashing: true,
  pages: undefined,
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false,
  crossorigin: undefined,
  integrity: false,
  css: {
    modules: false, // 启用 CSS modules
    extract: false, // 是否使用css分离插件
    sourceMap: false // 开启 CSS source maps 一般不建议开启
  },

  devServer: {
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },
    open: true, // 启动服务后是否打开浏览器
    host: "0.0.0.0",
    port: 8080, // 服务端口
    proxy: {
      "/api": {
        // target: "http://120.77.200.83",
        target: "https://easy-mock.com/mock/5c416d4e0bb19c6a02e017b0/example",
        // target:"https://api.douban.com/v2/movie",  //测试跨域
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
