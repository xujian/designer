module.exports = {
  pluginOptions: {
    quasar: {
      treeShake: true
    }
  },
  devServer: {
    proxy: {
      '^/api/': {
        target: 'https://designer-server.breezemakes.com',
        changeOrigin: true,
        pathRewrite: {
          '/api/': '/'
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    }
  },
  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar[\\\/]/
  ]
}
