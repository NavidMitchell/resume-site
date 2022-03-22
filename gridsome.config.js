module.exports = {
  siteName: 'Navid Mitchell',
  siteDescription: 'Navid Mitchell\'s Resume',
  siteUrl: 'https://navidmitchell.com',
  plugins: [
    {
      use: 'gridsome-plugin-typescript',
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
       // id: 'UA-72659574-11'
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
  }
}