import React from 'react'
import { Smartphone, Terminal, Mail } from 'lucide-react'
import { useLocale } from '../../context/useLocale'

export const FytlySection: React.FC = () => {
  const { t } = useLocale()

  return (
    <section id="fytly" className="mb-28 scroll-mt-24">
      {/* Section Header Tag */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
          <Smartphone className="w-5 h-5" />
        </div>
        <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 tracking-widest uppercase">
          {t('fytly.kicker')}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            {t('fytly.title')}
          </h2>
          <p className="text-quiet max-w-3xl mt-2">
            {t('fytly.lede')}
          </p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-quiet bg-subtle px-4 py-2 border border-line self-start lg:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
          Production Architecture
        </div>
      </div>

      {/* Architectural Guardrails Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* SAGA Card */}
        <div className="p-6 rounded-2xl bg-panel border border-line hover:border-strong">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4 font-mono text-xs font-bold">
            SAGA
          </div>
          <h3 className="text-lg font-bold text-ink mb-2">Deterministic Async Pipeline</h3>
          <p className="text-sm text-quiet leading-relaxed mb-4">
            Enforced <code className="text-cyan-700 dark:text-cyan-300 font-mono text-xs">networkCall</code> abstraction, strict try/catch action pairs, and default <code className="text-cyan-700 dark:text-cyan-300 font-mono text-xs">takeLatest</code> concurrency to eliminate UI race conditions.
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">Redux-Saga</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">networkCall</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">Atomic State</span>
          </div>
        </div>

        {/* RESP Card */}
        <div className="p-6 rounded-2xl bg-panel border border-line hover:border-strong">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 font-mono text-xs font-bold">
            RESP
          </div>
          <h3 className="text-lg font-bold text-ink mb-2">Mathematical Viewport Scaling</h3>
          <p className="text-sm text-quiet leading-relaxed mb-4">
            Zero hardcoded raw numeric layout styles. Custom <code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">respWidth</code>, <code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">respHeight</code>, and <code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">respFontSize</code> mathematical engine guaranteeing identical cross-device fidelity.
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">Dynamic Scaling</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">Zero-Margin Drift</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">iOS &amp; Android</span>
          </div>
        </div>

        {/* 60FPS Card */}
        <div className="p-6 rounded-2xl bg-panel border border-line hover:border-strong">
          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 font-mono text-xs font-bold">
            60FPS
          </div>
          <h3 className="text-lg font-bold text-ink mb-2">Memory-Bounded FlatLists</h3>
          <p className="text-sm text-quiet leading-relaxed mb-4">
            Rigorous <code className="text-purple-700 dark:text-purple-300 font-mono text-xs">getItemLayout</code> offsets for zero-lag scroll measurements, granular <code className="text-purple-700 dark:text-purple-300 font-mono text-xs">React.memo</code> boundary isolation, and native image memory caching.
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">getItemLayout</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">FastImage</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">60 FPS Native</span>
          </div>
        </div>
      </div>

      {/* Asset Showcase Card */}
      <div className="p-8 rounded-2xl bg-panel border border-line flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs mb-2">
            <Terminal className="w-4 h-4" /> PRODUCT SCREENS
          </div>
          <h4 className="text-xl font-bold text-ink mb-2">
            Habits, workouts, feed, and profile
          </h4>
          <p className="text-sm text-quiet leading-relaxed">
            Selected Figma screens from the shipping build. Architecture notes stay on this page; the product lives one click deeper.
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full sm:w-auto">
          <a
            href="#/fytly"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-mono text-xs transition-colors flex items-center justify-center gap-2 border border-line"
          >
            {t('fytly.open')}
          </a>
          <a
            href="mailto:shikhar3924@gmail.com?subject=FytlY%20Walkthrough%20Request"
            className="px-5 py-2.5 rounded-xl bg-paper hover:bg-subtle text-quiet font-mono text-xs transition-colors flex items-center justify-center gap-2 border border-line"
          >
            <Mail className="w-3.5 h-3.5" /> Request Full Demo Video
          </a>
        </div>
      </div>
    </section>
  )
}
