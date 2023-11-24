import { I18n } from 'i18n-js'
import { enUS } from './locales/en/index'

const locales = {
  enUS,
}

const initLocaleLoaded = 'enUS'

export const i18n = new I18n(locales, {
  defaultLocale: initLocaleLoaded,
  locale: initLocaleLoaded,
})
