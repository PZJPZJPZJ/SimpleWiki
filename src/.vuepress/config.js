import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { catalogPlugin } from '@vuepress/plugin-catalog'
import path from 'path'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'SimpleWiki',
  description: 'Tech Made Simple',
  base: '/SimpleWiki/',
  dest: 'docs/',
  head: [
    ['script', {src: '/SimpleWiki/js/clarityRec.js', type: 'text/javascript' }],
    ['link', { rel: 'icon', href: '/SimpleWiki/favicon.ico' }]
  ],
  theme: defaultTheme({
    logo: '/favicon.ico',
    navbar: [
      {
        text: 'Wiki',
        link: '/wiki/',
      },
      {
        text: 'Github',
        link: 'https://github.com/pzjpzjpzj',
      },
    ],
    sidebarDepth: 5,
  }),
  alias: {
    '@theme/VPNavbar.vue': path.resolve(__dirname,'./components/VPNavbar.vue'),
  },
  bundler: viteBundler(),
  plugins: [
    catalogPlugin({
      level: 3,
    }),
  ],
})