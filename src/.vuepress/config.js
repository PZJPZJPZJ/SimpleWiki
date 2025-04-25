import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { catalogPlugin } from '@vuepress/plugin-catalog'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Simple Wiki',
  description: 'Tech Made Simple',
  base: '/SimpleWiki/',
  dest: 'docs/',
  head: [
    ['script', { src: '/SimpleWiki/clarity.js' }]
  ],
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
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
