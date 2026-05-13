// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/seo'],
  extends: ['docus'],
  app: {
    baseURL: '/',
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
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'diff', 'json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml', 'python'],
        },
      },
    },
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
