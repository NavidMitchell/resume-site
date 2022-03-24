module.exports = {
  siteName: 'Navid Mitchell',
  siteDescription: 'Navid Mitchell\'s Resume',
  siteUrl: 'https://navidmitchell.com',
  plugins: [
    {
      use: 'gridsome-plugin-typescript',
    },
    {
      use: 'gridsome-plugin-gtag',
      options: {
        config: {
          id: 'G-6PLKP413XS',
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
        .use('vue-svg-loader')
        .loader('vue-svg-loader')
  }
}