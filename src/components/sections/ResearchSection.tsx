import React from 'react'
import { BookOpen, ExternalLink } from 'lucide-react'
import { useLocale } from '../../context/useLocale'
import { asset } from '../../lib/asset'

export const ResearchSection: React.FC = () => {
  const { t } = useLocale()

  return (
    <section id="research" className="mb-28 scroll-mt-24">
      {/* Header Tag */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
          <BookOpen className="w-5 h-5" />
        </div>
        <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 tracking-widest uppercase">
          {t('research.kicker')}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-4">
        {t('research.title')}
      </h2>
      <p className="text-quiet mb-8 max-w-4xl">
        {t('research.lede')}
      </p>

      {/* Theses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-panel border border-line">
          <div className="text-indigo-600 dark:text-indigo-400 font-mono text-xs mb-2">THESIS 01</div>
          <h3 className="text-base font-bold text-ink mb-2">Complexity Displacement Thesis</h3>
          <p className="text-sm text-quiet leading-relaxed">
            GenAI does not eliminate software engineering friction; it displaces cognitive effort from active code synthesis to downstream architectural verification and defect triage.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-panel border border-line flex flex-col justify-between">
          <div>
            <div className="text-indigo-600 dark:text-indigo-400 font-mono text-xs mb-2">THESIS 02</div>
            <h3 className="text-base font-bold text-ink mb-2">Cognitive Verification Tax</h3>
            <p className="text-sm text-quiet leading-relaxed mb-3">
              Auditing probabilistically generated lines requires deeper contextual tracing than writing deterministic logic by hand, creating an invisible time penalty during extended sessions.
            </p>
          </div>
          <a
            href="https://dev.to/shikhar_thakur_rn_/the-cognitive-verification-tax-why-i-built-an-open-source-visual-hud-for-the-era-of-vibe-coding-15ck"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
          >
            Read Applied Dev.to Essay <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="p-6 rounded-2xl bg-panel border border-line">
          <div className="text-indigo-600 dark:text-indigo-400 font-mono text-xs mb-2">THESIS 03</div>
          <h3 className="text-base font-bold text-ink mb-2">Session Drift &amp; Boundary Decay</h3>
          <p className="text-sm text-quiet leading-relaxed">
            Without rigid architectural rules (e.g. Cursor Skills like <code className="text-indigo-600 dark:text-indigo-300 font-mono text-xs">saga-logic</code>), autonomous agent sessions gradually dilute project abstractions.
          </p>
        </div>
      </div>

      {/* Paper Download & Citation HUD */}
      <div className="mt-8 p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 ">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-ink font-bold text-sm">Full Working Paper (Uncropped Preprint)</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-mono text-[10px]">
              DOI Minted
            </span>
          </div>
          <div className="text-xs text-quiet font-mono">
            Indexed in OpenAIRE &amp; CERN Zenodo · DOI:{' '}
            <a
              href="https://doi.org/10.5281/zenodo.22725907"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 dark:text-indigo-300 hover:underline"
            >
              10.5281/zenodo.22725907
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <a
            href="https://doi.org/10.5281/zenodo.22725907"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl bg-paper hover:bg-subtle text-quiet font-mono text-xs font-semibold transition-all border border-line flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-3.5 h-3.5" /> View on Zenodo
          </a>
          <a
            href={asset('/The_Productivity_Paradox_of_Generative_AI_in_Software_Development.pdf')}
            download="The_Productivity_Paradox_of_Generative_AI_in_Software_Development.pdf"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold transition-all  flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" /> Download PDF
          </a>
        </div>
      </div>
    </section>
  )
}
