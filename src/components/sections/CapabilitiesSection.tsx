import React from 'react'
import { useLocale } from '../../context/useLocale'
import type { MessageKey } from '../../i18n/messages'
import { asset } from '../../lib/asset'

const IELTS_HREF = asset('/Shikhar_Thakur_IELTS.pdf')

const groups: { title: MessageKey; items: MessageKey[] }[] = [
  {
    title: 'cap.mobile',
    items: ['cap.mobile.1', 'cap.mobile.2', 'cap.mobile.3', 'cap.mobile.4'],
  },
  {
    title: 'cap.visual',
    items: ['cap.visual.1', 'cap.visual.2', 'cap.visual.3', 'cap.visual.4'],
  },
  {
    title: 'cap.systems',
    items: ['cap.systems.1', 'cap.systems.2', 'cap.systems.3', 'cap.systems.4'],
  },
  {
    title: 'cap.background',
    items: ['cap.background.1', 'cap.background.2', 'cap.background.3', 'cap.background.4'],
  },
]

export const CapabilitiesSection: React.FC = () => {
  const { t } = useLocale()

  return (
    <section className="mb-28 border-t border-line pt-12">
      <h2 className="mb-10 text-ink">{t('cap.title')}</h2>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map(group => (
          <div key={group.title}>
            <h3 className="mb-3 font-sans text-base font-medium text-faint">{t(group.title)}</h3>
            <ul className="space-y-2 text-quiet">
              {group.items.map(item => (
                <li key={item}>
                  {item === 'cap.background.3' ? (
                    <a
                      href={IELTS_HREF}
                      download="Shikhar_Thakur_IELTS.pdf"
                      title={t('cap.ielts.download')}
                      className="underline decoration-transparent underline-offset-4 transition-colors hover:text-ink hover:decoration-line"
                    >
                      {t(item)}
                    </a>
                  ) : (
                    t(item)
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
