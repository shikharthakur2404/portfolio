import React, { useState, useEffect, useRef } from 'react'
import { X, Copy, Check, Download, QrCode as QrIcon } from 'lucide-react'
import { generateQrSvg, getQrMatrix } from '../../lib/qrcode'
import { useLocale } from '../../context/useLocale'

export interface QrModalProps {
  isOpen: boolean
  onClose: () => void
  url?: string
}

export const PORTFOLIO_URL = 'https://portfolio-shikharthakur2404.vercel.app'

export const QrModal: React.FC<QrModalProps> = ({
  isOpen,
  onClose,
  url = PORTFOLIO_URL,
}) => {
  const { t } = useLocale()
  const [copied, setCopied] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback if clipboard API is blocked
      const input = document.createElement('input')
      input.value = url
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownloadPng = () => {
    const { size, modules } = getQrMatrix(url)
    const border = 4
    const totalModules = size + border * 2
    const canvas = document.createElement('canvas')
    const scale = 32 // High resolution (e.g. ~1300x1300px for print quality)
    canvas.width = totalModules * scale
    canvas.height = totalModules * scale
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Dark modules
    ctx.fillStyle = '#0f172a'
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (modules[y][x]) {
          ctx.fillRect((x + border) * scale, (y + border) * scale, scale, scale)
        }
      }
    }

    // Optional center badge
    const badgeSize = Math.floor(totalModules * scale * 0.2)
    const badgeX = (canvas.width - badgeSize) / 2
    const badgeY = (canvas.height - badgeSize) / 2

    // Badge background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(badgeX - 8, badgeY - 8, badgeSize + 16, badgeSize + 16)
    ctx.fillStyle = '#0891b2'
    ctx.fillRect(badgeX, badgeY, badgeSize, badgeSize)

    // Badge text ST
    ctx.fillStyle = '#ffffff'
    ctx.font = `bold ${Math.floor(badgeSize * 0.5)}px monospace`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('ST', canvas.width / 2, canvas.height / 2)

    // Trigger download
    const link = document.createElement('a')
    link.download = 'Shikhar_Thakur_Portfolio_QR.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  const handleDownloadSvg = () => {
    const svgString = generateQrSvg(url, { border: 4, darkColor: '#0f172a', lightColor: '#ffffff' })
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    const blobUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = 'Shikhar_Thakur_Portfolio_QR.svg'
    link.href = blobUrl
    link.click()
    URL.revokeObjectURL(blobUrl)
  }

  const svgContent = generateQrSvg(url, { border: 3, darkColor: '#0f172a', lightColor: '#ffffff' })

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="qr-modal-title"
      onClick={e => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-sm rounded-2xl border border-line bg-paper p-6 shadow-2xl text-ink transition-all animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute right-4 top-4 p-1.5 text-faint hover:text-ink cursor-pointer rounded-lg hover:bg-hover transition-colors"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <QrIcon className="h-4 w-4" />
          </div>
          <div>
            <h3 id="qr-modal-title" className="font-serif text-lg font-bold leading-tight">
              {t('qr.title')}
            </h3>
            <p className="text-xs text-faint">{t('qr.subtitle')}</p>
          </div>
        </div>

        {/* Scannable QR Code Canvas / Display */}
        <div className="my-5 flex flex-col items-center justify-center">
          <div className="relative rounded-2xl bg-white p-4 shadow-md ring-1 ring-slate-200">
            <div
              className="h-56 w-56 [&>svg]:h-full [&>svg]:w-full"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
            {/* Center Monogram Emblem */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-600 to-indigo-600 text-xs font-mono font-bold text-white shadow-md ring-2 ring-white">
                ST
              </div>
            </div>
          </div>

          {/* URL Pill */}
          <div className="mt-3.5 flex items-center gap-2 rounded-lg border border-line bg-subtle px-3 py-1.5 font-mono text-xs text-quiet max-w-full overflow-hidden">
            <span className="truncate">{url.replace('https://', '')}</span>
            <button
              onClick={handleCopy}
              type="button"
              className="shrink-0 p-1 text-quiet hover:text-ink cursor-pointer transition-colors"
              title={copied ? t('qr.copied') : t('qr.copy')}
              aria-label={t('qr.copy')}
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-line text-xs font-mono">
          <button
            onClick={handleDownloadPng}
            type="button"
            className="flex items-center justify-center gap-1.5 rounded-xl border border-line bg-panel hover:bg-hover py-2.5 px-3 text-ink cursor-pointer transition-colors shadow-sm"
          >
            <Download className="h-3.5 w-3.5" />
            <span>{t('qr.download.png')}</span>
          </button>
          <button
            onClick={handleDownloadSvg}
            type="button"
            className="flex items-center justify-center gap-1.5 rounded-xl border border-line bg-panel hover:bg-hover py-2.5 px-3 text-ink cursor-pointer transition-colors shadow-sm"
          >
            <Download className="h-3.5 w-3.5" />
            <span>{t('qr.download.svg')}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
