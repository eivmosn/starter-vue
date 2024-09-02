import type { I18nOptions } from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import { useStorage } from '@vueuse/core'
import zhCN from './languages/zhCN.json'
import enUS from './languages/enUS.json'

const _languages = [
  {
    label: '简体中文',
    key: 'cn',
    value: zhCN,
  },
  {
    label: 'English',
    key: 'en',
    value: enUS,
  },
]

export const languages = _languages.map(({ label, key }) => ({ label, key }))

function createI18nMessages() {
  const messages: I18nOptions['messages'] = {}
  _languages.forEach((language) => {
    messages[language.key] = language.value
  })
  return messages
}

const locale = useStorage('locale', 'cn')
const messages = createI18nMessages()

export const i18n = createI18n({
  locale: locale.value,
  messages,
  fallbackLocale: 'cn',
})

export function toggleLanguage(lang: any) {
  i18n.global.locale = lang
  locale.value = lang
}
