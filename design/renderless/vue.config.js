const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // eslint 끄기

  publicPath: process.env.NODE_ENV === 'production' ? '/vue-advanced/design/renderless/dist' : '/',
});
