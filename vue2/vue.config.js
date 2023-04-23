/*
 * @Description: vue 配置
 * @Date: 2023-04-19 16:10:00
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-19 17:31:18
 * @FilePath: \vue2\vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: "./",
  devServer: {
    port: 8090, // 端口号，如果端口号被占用，会自动加1
    host: '0.0.0.0',// 主机名， 127.0.0.1，  真机 0.0.0.0
    https: false, //协议
    open: false, //启动服务时自动打开浏览器访问
    // 反向代理配置
    // proxy: {
    //   "/api": {
    //     target: "http://10.66.201.122:8099", // 本地
    //     ws: false,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": "/",
    //     },
    //   },
    // },
  },
})
