module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hanzi-grids',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hanzi Practice Sheet Generator' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Noto+Sans|Roboto' },
      { rel: 'stylesheet', href:'//fonts.googleapis.com/earlyaccess/notosanstc.css' },

    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css:[
    '~/assets/app.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

  },
  modules:[

  ],
  plugins: [

  ],
}
