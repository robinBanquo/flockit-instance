import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

export default boot(({ app }) => {
  function getLang () {
    if (navigator.languages !== undefined){
      return navigator.languages[0];
    }
    return navigator.language;
  }
  console.log( getLang() )
  const i18n = createI18n({
    locale: 'en-US',
    messages
  })

  // Set i18n instance on app
  app.use(i18n)
})
