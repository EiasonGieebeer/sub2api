import { defineConfig, type DefaultTheme } from 'vitepress'

const consoleUrl = 'https://sub.fastapi.cool'

const themeConfig: DefaultTheme.Config = {
  logo: '/logo.svg',
  siteTitle: 'Fast API 文档',
  nav: [
    { text: '快速开始', link: '/guide/getting-started' },
    { text: 'API 调用', link: '/guide/api' },
    { text: '客户端配置', link: '/guide/clients' },
    { text: '控制台', link: consoleUrl },
  ],
  sidebar: [
    {
      text: '开始使用',
      items: [
        { text: '文档首页', link: '/' },
        { text: '快速开始', link: '/guide/getting-started' },
        { text: 'API 调用', link: '/guide/api' },
        { text: '客户端配置', link: '/guide/clients' },
      ],
    },
    {
      text: '账户与帮助',
      items: [
        { text: '密钥与用量', link: '/guide/keys-and-usage' },
        { text: '充值、订阅与计费', link: '/guide/billing' },
        { text: '常见问题', link: '/guide/faq' },
        { text: '服务与合规', link: '/legal/' },
      ],
    },
  ],
  search: { provider: 'local' },
  outline: { level: [2, 3], label: '本页目录' },
  lastUpdated: {
    text: '最后更新',
    formatOptions: { dateStyle: 'medium', timeStyle: 'short' },
  },
  docFooter: { prev: '上一篇', next: '下一篇' },
  returnToTopLabel: '返回顶部',
  sidebarMenuLabel: '菜单',
  darkModeSwitchLabel: '主题',
  footer: {
    message: '请妥善保管 API 密钥，并遵守适用法律法规。 · <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">苏ICP备2024120285号-2</a>',
    copyright: '© 2026 Fast API',
  },
}

export default defineConfig({
  lang: 'zh-CN',
  title: 'Fast API 文档',
  description: 'Fast API（基于 Sub2API）接入与使用文档',
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  themeConfig,
})
