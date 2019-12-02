module.exports = {
  title: 'Coder-Monkey',
  description: '~从前端到全栈开发~和码路工人一起学~',
  themeConfig: {
    nav: require('./nav'),
    sidebar: require('./sidebar')
  },
  head: [
    ['link', {rel: 'icon', href: '/img/logo.png'}],
    ['link', {rel: 'stylesheet', href: '/css/style.css'}],
    //['meta', {name: 'referrer', content: 'no-referrer'}],   // to-fix-img
  ],
  base: '/v-blog/',
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return (new Date(timestamp).toLocaleString())
        }
      }
    ],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine',
        options: {
          el: '#vcomments',
          appId: 'MWFjOj2N1NfPTkzljwjL1XRa-gzGzoHsz',
          appKey: 'KEHmUPGGqftbbiwXQCWJIXIL',
          notify:false,
          verify:false,
          avatar:'mm',
          placeholder: '总想对你表白...\r\n让我想想怎么喷...',
          visitor: true,
        }
      }
    ]
  ],
  lastUpdated: 'Last Updated: ',
}