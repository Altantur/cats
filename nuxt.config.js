export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cat Wikipedia',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@altantur' },
      { name: 'twitter:creator', content: '@altantur' },
      { name: 'twitter:title', content: 'Know your cat.' },
      { name: 'twitter:description', content: 'Dev Challenge Cat Wiki.' },
      { name: 'twitter:image', content: 'https://cats.altantur.me/demo.gif' },
      { hid: 'description', name: 'description', content: 'I am Altantur, here to help you.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
