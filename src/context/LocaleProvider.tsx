import React, { useEffect, useState } from 'react'
import { messages, type Locale, type MessageKey } from '../i18n/messages'
import { LocaleContext } from './LocaleContext'

const LOCALE_STORAGE_KEY = 'portfolio-locale'

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'en'

  const saved = localStorage.getItem(LOCALE_STORAGE_KEY)
  if (saved === 'en' || saved === 'de') return saved

  if (navigator.language.toLowerCase().startsWith('de')) return 'de'
  return 'en'
}

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  }, [locale])

  const t = (key: MessageKey) => messages[locale][key]

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}
