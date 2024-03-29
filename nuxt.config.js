
export default {
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://raffaelepizzari.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: [
      '/',
    ]
  },
  loading: { color: '#fff' },
 css: [
    '@/assets/css/main.css',
    '@/assets/css/themes.light.css',
    '@/assets/css/googlefonts.css',
  ],
  plugins: [
  ],
  buildModules: [
  ],
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
    }],
    '@nuxtjs/font-awesome',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-13290317-2'
    }],
    ['@nuxtjs/component-cache', {
      max: 31536000,
      maxAge: 31536000
    }],
    '@nuxtjs/pwa',
  ],
  manifest: {
    short_name: 'RPizzari',
  },
  workbox: {
    runtimeCaching: [{
      urlPattern: 'https://fonts.googleapis.com/.*',
      handler: 'cacheFirst',
      method: 'GET',
      cacheableResponse: {statuses: [0, 200]}
    }],
    globPatterns: ['**/*.{js,css}', '**/img/*'],
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}
