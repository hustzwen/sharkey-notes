const navConfig = require('./config/navConfig');
const pluginConfig = require('./config/pluginConfig');
const trans = require('transliteration');

module.exports = {
  title: '技术文档',
  description: '内容理解团队知识库',
  port: 8765,
  plugins: pluginConfig,
  markdown: {
    slugify: trans.slugify
  },
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'shortcut icon', href: '//ci.xiaohongshu.com/1f0d2ec9-2982-4ee4-bd18-64f140fee15f' }],
    ['link', { rel: 'apple-touch-icon', href: '//ci.xiaohongshu.com/953e8240-67d1-4d6d-94f3-fa699ad27b9a' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    nav: navConfig,
    smoothScroll: true,
    lastUpdated: '上次更新'
  }
};