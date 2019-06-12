/*
 * @Author: Chara
 * @LastEditors: Chara
 * @Description: config
 * @Date: 2019-02-15 22:32:00
 * @LastEditTime: 2019-06-12
 */
module.exports = {
  title: 'Xuan Yue Team',
  description: '内部攻略集合处',
  base: '/XuanYueTeam/',
  head:[
    ['link',{ rel: 'icon', href: 'https://blog-chara-img.oss-cn-shanghai.aliyuncs.com/blog-img/20181014154421.ico'}]
  ],
  themeConfig: {
    lastUpdated: '上次更新于',
    nav: [
      { 
        text: '萌新入坑',
        link: '/guide/'
      },{
        text: '攻略集合',
        items: [
          { text: '钓鱼', link: '/fishing/' },
          { text: '龙', link: '/dargon/'},
          { text: '材料', link: '/material/'}
        ]
      },
      { text: 'GitHub', link: 'https://github.com/KongValley/XuanYueTeam' },
    ],
    sidebar: {
      // '/booknote/': [
      //   {
      //     title: '目录',
      //     collapsable: true,
      //     children: [
      //       ''
      //     ]
      //   },
      //   {
      //     title: '你不知道的JavaScript',
      //     collapsable: true,
      //     children: [
      //       '你不知道的JavaScript/上卷笔记',
      //       '你不知道的JavaScript/中卷笔记',
      //       '你不知道的JavaScript/下卷笔记'
      //     ]
      //   },
      //   {
      //     title: 'JavaScript核心技术开发解密',
      //     collapsable: true,
      //     children: [
      //       'JavaScript核心技术开发解密/第一章'
      //     ]
      //   }
      // ],
      // '/blog-build/': [
      //   {
      //     title: 'Hexo',
      //     collapsable: true,
      //     children: [
      //       '',
      //       'hexo配置-1',
      //       'hexo配置-2'
      //     ]
      //   },{
      //     title: 'Vuepress',
      //     collapsable: true,
      //     children: [
            
      //     ]
      //   }
      // ]
    }
  },
  markdown: {
    toc: { includeLevel: [1, 2, 3] }
  },
  plugins: ['@vuepress/back-to-top'] 
}