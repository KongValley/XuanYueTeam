/*
 * @Author: Chara
 * @LastEditors: Chara
 * @Description: config
 * @Date: 2019-02-15 22:32:00
 * @LastEditTime: 2019-07-06 13:05:17
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
    repo: 'KongValley/XuanYueTeam',
    docsRepo: 'KongValley/XuanYueTeam',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '在Github上编辑此页',
    nav: [
      { 
        text: '萌新入坑',
        link: '/guide/'
      },
      {
        text: '攻略集合',
        items: [
          { text: '钓鱼', link: '/fish/' },
          { text: '龙', link: '/dargon/'},
          { text: '材料', link: '/material/'}
        ]
      },
      {
        text: '官方Wiki', link: 'https://trove.fandom.com/wiki/Trove_Wiki'
      },
    ],
    sidebar: {
      '/fish/': [
        {
          title: '钓鱼指南',
          collapsable: true,
          children: [
            'water',
            'chocolate',
            'lava',
            'plasma'
          ]
        },
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
      ]
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.set({ toc: { includeLevel: [1, 2, 3] } })
      md.use(require('markdown-it-footnote'))
    }
    
  },
  plugins: ['@vuepress/back-to-top'] 
}