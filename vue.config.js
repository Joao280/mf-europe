const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  filenameHashing: false,
  transpileDependencies: true,
  
  chainWebpack: config => {
    config.devServer
      .clear()
      .headers({
        "Access-Control-Allow-Origin": "*",
      })
      .set("allowedHosts", "all");
      
  },

  configureWebpack: config => {
    config.output.libraryTarget = 'system';
  }
})
