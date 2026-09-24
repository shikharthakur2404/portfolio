import React from 'react'
import { Button } from '../ui/primitives/Button'
import { useLocale } from '../../context/useLocale'
import type { MessageKey } from '../../i18n/messages'
import { asset } from '../../lib/asset'

const facts: [string, MessageKey][] = [
  ['99k+', 'hero.fact.lines'],
  ['iOS', 'hero.fact.sheet'],
  ['3', 'hero.fact.engines'],
  ['C1 / B1', 'hero.fact.lang'],
]

export const HeroSection: React.FC = () => {
  const { locale, t } = useLocale()

  return (
    <section className="mb-16 pt-6 sm:mb-20 sm:pt-8">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_auto] lg:gap-16 xl:gap-24">
        <div className="order-2 lg:order-1">
          <p className="mb-5 text-faint">{t('hero.kicker')}</p>

          <h1 className={`text-[clamp(3rem,6.4vw,7rem)] text-ink ${locale === 'de' ? 'max-w-[16ch]' : 'max-w-[14ch]'}`}>
            {t('hero.title')}
          </h1>

          <p className="mt-6 max-w-[46rem] text-quiet">{t('hero.lede')}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button asLink href="#/fytly" variant="primary" size="lg">
              FytlY
            </Button>
            <a href="#emergency-mesh" className="text-ink underline decoration-line underline-offset-4">
              {t('hero.link.mesh')}
            </a>
            <a href="#research" className="text-ink underline decoration-line underline-offset-4">
              {t('hero.link.paper')}
            </a>
          </div>
        </div>

        <img
          src={asset('/assets/portrait.png')}
          alt="Shikhar Thakur"
          width={567}
          height={567}
          className="order-1 h-52 w-52 justify-self-start rounded-full object-cover sm:h-72 sm:w-72 lg:order-2 lg:h-[22rem] lg:w-[22rem] lg:justify-self-end xl:h-[26rem] xl:w-[26rem]"
        />
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4 sm:gap-x-10">
        {facts.map(([value, key]) => (
          <div key={key}>
            <dt className="mb-1 text-faint">{t(key)}</dt>
            <dd className="font-serif text-[clamp(1.75rem,2.4vw,2.75rem)] text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
