const { defineConfig } = require('@vue/cli-service')
module.exports
  = defineConfig({
    transpileDependencies: true,
    publicPath: '/',
    outputDir: 'dist',
    // 最终打包路径 
    assetsDir: 'static',
    // 静态资源路径
    devServer: {
      // 开发环境配置
      port: 9000,
      // 端口号
      open: true,
      // 编译完成后，自动打开浏览器
    },
  })