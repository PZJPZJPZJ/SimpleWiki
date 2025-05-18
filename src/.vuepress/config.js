import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { catalogPlugin } from '@vuepress/plugin-catalog'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'SimpleWiki',
  description: 'Tech Made Simple',
  base: '/SimpleWiki/',
  dest: 'docs/',
  head: [
    ['script', {src: '/SimpleWiki/js/clarityRec.js', type: 'text/javascript' }],
    ['link', { rel: 'icon', href: '/SimpleWiki/img/hero.png' }]
  ],
  theme: defaultTheme({
    logo: '/img/hero.png',
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
  bundler: viteBundler(),
  plugins: [
    catalogPlugin({
      level: 3,
    }),
  ],
})