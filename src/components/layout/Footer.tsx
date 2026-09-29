import React from 'react'
import { QrCode } from 'lucide-react'
import { useLocale } from '../../context/useLocale'
import { asset } from '../../lib/asset'

export interface FooterProps {
  onOpenQr?: () => void
}

export const Footer: React.FC<FooterProps> = ({ onOpenQr }) => {
  const { t } = useLocale()

  return (
    <footer className="flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-sm text-faint sm:flex-row sm:items-center">
      <div>© {new Date().getFullYear()} Shikhar Thakur</div>
      <div className="flex flex-wrap items-center gap-6">
        {onOpenQr && (
          <button
            type="button"
            onClick={onOpenQr}
            className="cursor-pointer text-quiet hover:text-ink flex items-center gap-1.5 transition-colors"
          >
            <QrCode className="h-3.5 w-3.5" />
            <span>{t('qr.footer')}</span>
          </button>
        )}
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
