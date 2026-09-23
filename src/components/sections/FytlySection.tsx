import React from 'react'
import { Smartphone, Terminal, Mail } from 'lucide-react'

export const FytlySection: React.FC = () => {
  return (
    <section id="fytly" className="mb-28 scroll-mt-24">
      {/* Section Header Tag */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
          <Smartphone className="w-5 h-5" />
        </div>
        <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 tracking-widest uppercase">
          Flagship Engineering
        </span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            FytlY: 99k LOC Production Mobile Platform
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-2 text-base">
            Architected from zero to 99,000 lines of rigorous React Native code. Secured €500,000 conditional venture seed term sheet from a Munich VC firm. Built with strict defensive architectural boundaries.
          </p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 self-start lg:self-auto shadow-sm dark:shadow-none">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
          Production Architecture
        </div>
      </div>

      {/* Architectural Guardrails Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* SAGA Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/80 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 transition-colors shadow-sm dark:shadow-none">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4 font-mono text-xs font-bold">
            SAGA
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Deterministic Async Pipeline</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Enforced <code className="text-cyan-700 dark:text-cyan-300 font-mono text-xs">networkCall</code> abstraction, strict try/catch action pairs, and default <code className="text-cyan-700 dark:text-cyan-300 font-mono text-xs">takeLatest</code> concurrency to eliminate UI race conditions.
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-600 dark:text-slate-400">
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">Redux-Saga</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">networkCall</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">Atomic State</span>
          </div>
        </div>

        {/* RESP Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/80 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/40 transition-colors shadow-sm dark:shadow-none">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 font-mono text-xs font-bold">
            RESP
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Mathematical Viewport Scaling</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Zero hardcoded raw numeric layout styles. Custom <code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">respWidth</code>, <code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">respHeight</code>, and <code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">respFontSize</code> mathematical engine guaranteeing identical cross-device fidelity.
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-600 dark:text-slate-400">
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">Dynamic Scaling</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">Zero-Margin Drift</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">iOS &amp; Android</span>
          </div>
        </div>

        {/* 60FPS Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/80 border border-slate-200 dark:border-slate-800/80 hover:border-purple-500/40 transition-colors shadow-sm dark:shadow-none">
          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 font-mono text-xs font-bold">
            60FPS
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Memory-Bounded FlatLists</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Rigorous <code className="text-purple-700 dark:text-purple-300 font-mono text-xs">getItemLayout</code> offsets for zero-lag scroll measurements, granular <code className="text-purple-700 dark:text-purple-300 font-mono text-xs">React.memo</code> boundary isolation, and native image memory caching.
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-600 dark:text-slate-400">
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">getItemLayout</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">FastImage</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">60 FPS Native</span>
          </div>
        </div>
      </div>

      {/* Asset Showcase Card */}
      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm dark:shadow-none">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs mb-2">
            <Terminal className="w-4 h-4" /> ASSET SHOWCASE REPOSITORY
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Screen Recordings &amp; App Architecture Telemetry
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Production walkthrough videos, feature flows (workout tracking, user analytics, dynamic coach feedback), and performance benchmarks available on request.
          </p>
        </div>
        <div>
          <a
            href="mailto:shikhar3924@gmail.com?subject=FytlY%20Walkthrough%20Request"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-mono text-xs transition-colors flex items-center gap-2 border border-slate-700 shadow-md"
          >
            <Mail className="w-3.5 h-3.5" /> Request Full Demo Video
          </a>
        </div>
      </div>
    </section>
  )
}
