import { createContext } from 'react'
import type { Locale, MessageKey } from '../i18n/messages'

export interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: MessageKey) => string
}

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined)
