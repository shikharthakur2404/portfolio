import React from 'react'
import { ChevronRight, Radio, BookOpen } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="mb-28">
      {/* Availability Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 font-mono text-xs mb-8 transition-colors">
        <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
        Available for Master's Thesis &amp; Werkstudent / Software Engineer Roles (Germany)
      </div>

      {/* Main Hero Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white max-w-4xl leading-[1.08] mb-6 transition-colors">
        Building high-velocity <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400">
          mobile &amp; visual architectures.
        </span>
      </h1>

      <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10 transition-colors">
        Former Co-Founder @ <span className="text-slate-900 dark:text-slate-200 font-medium">FytlY</span> (99k LOC production React Native). M.Sc. IIS Scholar in Bavaria. Researching the cognitive boundaries of GenAI &amp; authoring GPU compute engines.
      </p>

      {/* Metrics HUD */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mb-12">
        <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors">
          <div className="font-mono text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-cyan-400">99k+</div>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">LOC React Native</div>
        </div>
        <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors">
          <div className="font-mono text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">€500k</div>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">Offer (Munich VC)</div>
        </div>
        <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors">
          <div className="font-mono text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">3x</div>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">Particle Engines</div>
        </div>
        <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors">
          <div className="font-mono text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">C1 / B1</div>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">EN (IELTS) / DE</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <a
          href="#fytly"
          className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-600/20 dark:shadow-cyan-500/20 flex items-center gap-2"
        >
          Inspect FytlY Architecture <ChevronRight className="w-4 h-4" />
        </a>
        <a
          href="#emergency-mesh"
          className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-rose-50 dark:hover:bg-slate-800 border border-rose-200 dark:border-rose-500/30 text-rose-600 dark:text-rose-300 hover:text-rose-700 dark:hover:text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-sm dark:shadow-lg dark:shadow-rose-950/20"
        >
          <Radio className="w-4 h-4 text-rose-500 dark:text-rose-400" /> Emergency Mesh (Civilian P2P)
        </a>
        <a
          href="#research"
          className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm dark:shadow-none"
        >
          <BookOpen className="w-4 h-4 text-indigo-500 dark:text-indigo-400" /> Read AI Seminar Paper
        </a>
      </div>
    </section>
  )
}
