module.exports = {
  head: {
    title: 'Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Test' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: [
     { src: './index.css' }
  ],
  router: {
    linkActiveClass: 'selected'
  }
}
