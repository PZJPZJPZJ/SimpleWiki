import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { catalogPlugin } from '@vuepress/plugin-catalog'
import { baiduAnalyticsPlugin } from '@vuepress/plugin-baidu-analytics'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'PZJ',
  description: 'A Simple Wiki Site',
  base: '/SimpleWiki/',
  dest: 'docs/',
  theme: defaultTheme({
    logo: 'https://avatars.githubusercontent.com/u/68857304',
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
    baiduAnalyticsPlugin({
      id: '5c290beb6394b23c840caaa8c38d8a60',
    }),
    catalogPlugin({
      level: 3,
    }),
  ],
})
