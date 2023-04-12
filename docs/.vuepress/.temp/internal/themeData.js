export const themeData = JSON.parse("{\"logo\":\"/images/hero.png\",\"repo\":\"https://github.com/cesnakas\",\"docsDir\":\"docs\",\"editLink\":false,\"navbar\":[{\"text\":\"Frontend\",\"children\":[{\"text\":\"HTML\",\"children\":[\"/html/snippets.md\"]},{\"text\":\"CSS\",\"children\":[\"/css/snippets.md\"]},{\"text\":\"Images\",\"children\":[\"/frontend/links.md\",\"/frontend/svg.md\"]},{\"text\":\"Framework's\",\"children\":[\"/frontend/bootstrap.md\"]}]},{\"text\":\"Backend\",\"children\":[\"/backend/apache.md\",\"/backend/nginx.md\"]},{\"text\":\"JavaScript\",\"link\":\"/javascript/\"},{\"text\":\"PHP\",\"link\":\"/php/\"},{\"text\":\"Laravel\",\"link\":\"/laravel/\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
