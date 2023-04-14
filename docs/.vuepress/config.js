import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig ({
  base: process.env.NODE_ENV === 'production' ? '/webdev/' : '/',
  lang: 'ru',
  title: 'WebDev',
  description: 'Web Development',

  theme: defaultTheme({
    logo: '/images/hero.png',
    repo: 'https://github.com/cesnakas',
    docsDir: 'docs',
    editLink: false,
    contributors: false,
    lastUpdated: false,

    navbar: [
      { text: 'Gulp', link: '/gulp/' },
      { text: 'Vue', link: '/vue/' },
      { text: 'Bitrix', link: '/bitrix/' },
      { text: 'Laravel', link: '/laravel/' },
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'PHP', link: '/php/', },
      {
        text: 'Tools',
        children: [
          '/backend/apache.md',
          '/backend/nginx.md',
          '/html/',
          '/css/',
          '/frontend/svg.md',
          '/frontend/animation.md',
          '/frontend/bootstrap.md',
        ],
      }
    ],
  })
})
