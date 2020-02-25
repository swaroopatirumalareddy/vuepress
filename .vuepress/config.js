module.exports = {
    title: 'Coursetro training',
    description: 'just playing sround' ,
  themeConfig: {
      nav: [ 
          {text: 'Guide',link:'/Guide/'},
          {text: 'vuepress',link:'https://vuepress.vuejs.org/'},
         
      ],
      sidebar: {
          '/guide/':[
              '',
              'frontend',
              'backend'
          ]
      }
  }
}
  