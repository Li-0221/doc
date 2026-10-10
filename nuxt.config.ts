// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/seo'],
  extends: ['docus'],
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/doc/' : '/',
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
  image: {
    provider: 'none',
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
  linkChecker: {
    // The prerender server cannot resolve static files through the GitHub Pages base path.
    excludeLinks: ['/doc/li-li-resume-v4.pdf'],
  },
  nitro: {
    preset: 'github-pages',
  },
  experimental: {
    payloadExtraction: false
  }
})
