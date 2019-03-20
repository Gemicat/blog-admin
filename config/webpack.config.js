const config = {
  treeShaking: false,
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:9000/',
      changeOrigin: true,
      pathRewrite: { "^/api" : "/api" }
    }
  }
}

export default config