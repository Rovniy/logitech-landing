/* eslint-disable */

export default ({ app }, inject) => {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-150594686-1', 'auto')
  window.dataLayer = window.dataLayer || []
  function gtag(){
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', 'AW-699434004')

  app.router.afterEach((to, from) => {
    ga('set', 'page', to.fullPath)
    ga('send', 'pageview')
  })

  inject('ga', ga)
}
