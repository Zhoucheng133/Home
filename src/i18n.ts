import { ref, watch } from 'vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en'
import zhCN from './locales/zh-CN'

export type LocalePreference = 'auto' | 'en' | 'zh-CN'
type DisplayLocale = 'en' | 'zh-CN'

const STORAGE_KEY = 'home-locale'

function getSystemLocale(): DisplayLocale {
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh-CN' : 'en'
}

function loadPreference(): LocalePreference {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved === 'auto' || saved === 'en' || saved === 'zh-CN' ? saved : 'auto'
}

function resolveLocale(preference: LocalePreference): DisplayLocale {
  return preference === 'auto' ? getSystemLocale() : preference
}

export const localePreference = ref<LocalePreference>(loadPreference())

export const i18n = createI18n({
  legacy: false,
  locale: resolveLocale(localePreference.value),
  fallbackLocale: 'en',
  messages: { en, 'zh-CN': zhCN }
})

watch(
  i18n.global.locale,
  (locale) => {
    document.documentElement.lang = locale
  },
  { immediate: true }
)

export function setLocalePreference(preference: LocalePreference): void {
  localePreference.value = preference
  localStorage.setItem(STORAGE_KEY, preference)
  i18n.global.locale.value = resolveLocale(preference)
}
