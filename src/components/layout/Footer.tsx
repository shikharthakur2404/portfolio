import React from 'react'
import { useLocale } from '../../context/useLocale'
import { asset } from '../../lib/asset'

export const Footer: React.FC = () => {
  const { t } = useLocale()

  return (
    <footer className="flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-sm text-faint sm:flex-row sm:items-center">
      <div>© {new Date().getFullYear()} Shikhar Thakur</div>
      <div className="flex flex-wrap items-center gap-6">
        <a
          href={asset('/Shikhar_Thakur_CV.pdf')}
          download="Shikhar_Thakur_CV.pdf"
          className="hover:text-ink"
        >
          {t('footer.cv')}
        </a>
        <a href="https://github.com/shikharthakur2404" target="_blank" rel="noreferrer" className="hover:text-ink">
          GitHub
        </a>
        <a href="https://linkedin.com/in/shikhar2404" target="_blank" rel="noreferrer" className="hover:text-ink">
          LinkedIn
        </a>
        <a href="mailto:shikhar3924@gmail.com" className="hover:text-ink">
          shikhar3924@gmail.com
        </a>
      </div>
    </footer>
  )
}
