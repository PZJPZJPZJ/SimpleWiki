import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { catalogPlugin } from '@vuepress/plugin-catalog'
import { baiduAnalyticsPlugin } from '@vuepress/plugin-baidu-analytics'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Simple Wiki',
  description: 'Tech Made Simple',
  base: '/SimpleWiki/',
  dest: 'docs/',
  head: [
    ['script', {}, `<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "r50baewab4");
</script>`]
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
    baiduAnalyticsPlugin({
      id: '5c290beb6394b23c840caaa8c38d8a60',
    }),
    catalogPlugin({
      level: 3,
    }),
  ],
})
