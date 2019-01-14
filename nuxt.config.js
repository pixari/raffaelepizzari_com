const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { 'http-equiv': 'cache-control', content: 'max-age=43200' },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://raffaelepizzari.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false, // Enable me when using nuxt generate
    routes: [
      '/',
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css',
    '@/assets/css/themes.light.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-i18n', { 
      detectBrowserLanguage: false,
      baseUrl: '/',
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js',
          name: 'English',
        },
        {
          code: 'de',
          iso: 'de-DE',
          file: 'de-DE.js',
          name: 'German',
        },
        {
          code: 'it',
          iso: 'it-IT',
          file: 'it-IT.js',
          name: 'Italiano',
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'en',
    // Options
    }],
    '@nuxtjs/pwa',
    ['@nuxtjs/component-cache', {
      max: 31536000,
      maxAge: 31536000
    }],
    '@nuxtjs/sitemap',

  ],
  manifest: {
    short_name: 'RPizzari',
  },
  render: {
    pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
      .filter(f => f.asType === 'script' && f.file === 'runtime.js')
      .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
