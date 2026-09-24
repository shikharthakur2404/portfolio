import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/useTheme'
import { useLocale } from '../../context/useLocale'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import type { MessageKey } from '../../i18n/messages'

const links: [string, MessageKey | null, string][] = [
  ['#/fytly', null, 'FytlY'],
  ['#emergency-mesh', 'nav.mesh', ''],
  ['#research', 'nav.research', ''],
  ['#glow-comments', null, 'Glow Comments'],
  ['#particle-triad', 'nav.graphics', ''],
]

export const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()
  const { locale, setLocale, t } = useLocale()

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="frame flex h-14 items-center justify-between gap-4 sm:h-16">
        <a href="#top" className="shrink-0 font-serif text-2xl text-ink">
          Shikhar Thakur
        </a>

        <nav className="flex items-center gap-5 text-base text-quiet">
          {links.map(([href, key, fallback]) => (
            <a key={href} href={href} className="hidden hover:text-ink lg:block">
              {key ? t(key) : fallback}
            </a>
          ))}

          <div className="flex items-center gap-2 text-sm" role="group" aria-label={t('lang.label')}>
            {(['en', 'de'] as const).map(code => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                aria-pressed={locale === code}
                className={`cursor-pointer uppercase ${locale === code ? 'text-ink' : 'text-faint hover:text-ink'}`}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            type="button"
            className="cursor-pointer p-2 text-quiet hover:text-ink"
            title={isDark ? 'Switch to light' : 'Switch to dark'}
            aria-label="Toggle display theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="https://github.com/shikharthakur2404"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-quiet hover:text-ink"
            title="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/shikhar2404"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-quiet hover:text-ink"
            title="LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  )
}
