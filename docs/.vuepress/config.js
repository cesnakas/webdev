import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig ({
  // base: '/webdev/',
  lang: 'ru',
  title: 'WebDev',
  description: 'Web Development',

  theme: defaultTheme({
    logo: '/images/hero.png',
    repo: 'https://github.com/cesnakas',
    docsDir: 'docs',
    editLink: false,
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
        ]
      },
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'PHP', link: '/php/' },
      { text: 'Laravel', link: '/laravel/' }
    ],
  })
})
