// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/seo'],
  extends: ['docus'],
  app: {
    baseURL: '/doc/',
    head: {
      templateParams: {
        site: {
          name: 'Doc Nuxt',
          url: 'https://Li-0221.github.io/doc/',
        },
        separator: '|',
      },
    },
  },
  site: {
    url: 'https://Li-0221.github.io',
    name: 'Doc Nuxt',
  },
  robots: {
    robotsTxt: false,
  },
  nitro: {
    preset: 'github-pages',
  },
  experimental: {
    payloadExtraction: false
  }
})