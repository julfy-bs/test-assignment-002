export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'idaproject-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        as: 'style',
        rel: 'stylesheet preload prefetch',
        href: '/fonts/fonts.css'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color: '#FF8484',
    height: '5px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'reset-css/reset.css',
    '~assets/styles/global'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      './assets/styles/variables.scss'
    ]

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets({ isServer }) {
        const targets = isServer ? { node: 'current' } : { ie: 11 }
        return [
          [require.resolve('@babel/preset-env'), { targets }]
        ]
      },
      plugins: [
        '@babel/syntax-dynamic-import',
        '@babel/transform-runtime',
        '@babel/transform-async-to-generator'
      ]
    }
  }
}
