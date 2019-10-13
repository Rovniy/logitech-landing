const { resolve } = require('path')

module.exports = {
  mode: 'spa',
  head: {
    title: 'Logitech G432 Gaming Headsets',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'About Logitech'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'images/favicon.ico'
      }
    ]
  },
  loading: { color: '#fff' },
  css: [
    { src: resolve(__dirname, 'assets/styles/common.sass'), lang: 'sass' }
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname)
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    sass: [
      './assets/styles/variables.sass'
    ]
  },
  build: {
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
