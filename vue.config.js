const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  // devServer: {
  //   proxy: {
  //   '/api': {
  //   target: 'http://121.4.138.96:3000',
  //   changeOrigin: true, // 解决跨域
  //   pathRewrite: {
  //   '^/api': '', 
  //   }
  //   },
  //   },
  // },
})
