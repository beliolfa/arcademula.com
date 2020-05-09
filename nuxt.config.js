
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Arcade Mula',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@arcademula' },
      { name: 'twitter:title', content: 'Asociación Arcade Mula. Preservación del Arcade de los 80 y 90' },
      { name: 'twitter:description', content: 'Queremos que los niños de hoy, que no han conocido el Arcade, puedan descubrir cómo y con qué nos divertíamos los hoy mayores, y los que hoy somos mayores podamos volver a pasarlo como niños.' },
      { name: 'twitter:image', content: 'https://pbs.twimg.com/profile_banners/1117078712799965185/1579629725/1500x500' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://user-images.githubusercontent.com/12644599/81475748-54e96200-920e-11ea-9b7a-3685d122de6a.png' },
      { rel: 'stylesheet', href: 'https://unpkg.com/nes.css@2.3.0/css/nes.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap' }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/modal.client'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  purgeCSS: {
    whitelistPatterns: [/v--modal/],
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
