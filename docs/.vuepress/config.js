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
      {
        text: 'Frontend',
        children: [
          {
            text: 'HTML',
            children: [
              '/html/snippets.md',
            ]
          },
          {
            text: 'CSS',
            children: [
              '/css/snippets.md',
            ]
          },
          {
            text: 'Images',
            children: [
              '/frontend/links.md',
              '/frontend/svg.md',
            ]
          },
          {
            text: `Framework's`,
            children: [
              '/frontend/bootstrap.md'
            ]
          }
        ],
      },
      {
        text: 'Backend',
        children: [
          '/backend/apache.md',
          '/backend/nginx.md',
          '/php/',
          '/bitrix/',
          '/laravel/',
        ]
      },
      { text: 'JavaScript', link: '/javascript/' },
      {
        text: 'PHP',
        link: '/php/',
        children: [
          {
            text: 'Анонимные функции',
            link: 'https://www.php.net/manual/ru/functions.anonymous.php'
          },
          {
            text: 'Функции для работы с массивами',
            link: 'https://www.php.net/manual/ru/ref.array.php'
          }
        ]
      },
      { text: 'Bitrix', link: '/bitrix/' },
      { text: 'Laravel', link: '/laravel/' }
    ],
  })
})
