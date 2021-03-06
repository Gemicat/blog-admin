import webpackPlugin from './plugin.config';

const config = {
  treeShaking: false,
  sass: {},
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:9000/',
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api"
      }
    }
  },
  chainWebpack: webpackPlugin
}

export default config
