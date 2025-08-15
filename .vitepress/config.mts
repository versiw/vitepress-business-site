import { defineConfig } from 'vitepress'
import viteConfig from './vite.config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'XXX文化传媒有限公司',
  description: 'vitepress-business-site desc',
  lang: 'zh-CN',
  srcDir: 'src',
  metaChunk: true,
  vite: viteConfig,
  themeConfig: {
    outline: {
      level: 'deep',
      label: '目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最近一次更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    darkModeSwitchLabel: '切换主题',
    lightModeSwitchTitle: '切换至明亮模式',
    darkModeSwitchTitle: '切换至深色模式',
    sidebarMenuLabel: '导航',
    returnToTopLabel: '回到顶部',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '合作案例', link: '/markdown-examples' },
      { text: '关于我们', link: '/test' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ]

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
