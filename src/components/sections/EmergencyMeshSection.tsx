import React from 'react'
import { Terminal, Download } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'

export const EmergencyMeshSection: React.FC = () => {
  return (
    <section id="emergency-mesh" className="mb-28 scroll-mt-24">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
        <div className="flex items-start sm:items-center gap-5">
          <img
            src="/assets/emergency-mesh/icon.png"
            alt="Emergency Mesh App Icon"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-xl shadow-rose-950/20 border border-rose-300 dark:border-rose-500/30 flex-shrink-0"
          />
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 font-mono text-[10px] tracking-widest uppercase">
                P2P Mesh
              </span>
              <span className="font-mono text-xs text-rose-600 dark:text-rose-400 tracking-wider uppercase font-semibold">
                Civilian Disaster Network
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Emergency Mesh Nürnberg
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 px-4 py-2 rounded-lg border border-rose-200 dark:border-rose-500/30 self-start sm:self-center shadow-sm dark:shadow-none">
          <span className="w-2 h-2 rounded-full bg-rose-500 dark:bg-rose-400 animate-pulse" />
          v1.0.0 Live on Android
        </div>
      </div>

      <p className="text-slate-600 dark:text-slate-400 max-w-3xl text-base leading-relaxed mb-8">
        Autonomous peer-to-peer ad-hoc communication network engineered for civilian disaster coordination in Nuremberg during total infrastructure failure (power grid blackout, cellular collapse, ISP blackout). Features dual-mode UI (Bürgernetz / NINA vs. Taktisch Monospace), DTN store-and-forward routing, and end-to-end cryptography.
      </p>

      {/* Architectural Guardrails Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* THEME Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/80 border border-slate-200 dark:border-slate-800/80 hover:border-rose-500/40 transition-colors shadow-sm dark:shadow-none">
          <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 flex items-center justify-center text-rose-600 dark:text-rose-400 mb-4 font-mono text-xs font-bold">
            THEME
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Dual-Theme Design Engine</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Instant runtime toggle between <strong className="text-slate-800 dark:text-slate-200">Bürgernetz</strong> (calm German public safety design inspired by NINA Warn-App &amp; DB Navigator with #11141a slate OLED battery optimization) and <strong className="text-slate-800 dark:text-slate-200">Taktisch</strong> (high-contrast OLED monospace telemetry terminal).
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-600 dark:text-slate-400">
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">NINA Aesthetic</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">OLED Battery Save</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">Zero-Lag Toggle</span>
          </div>
        </div>

        {/* MESH Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/80 border border-slate-200 dark:border-slate-800/80 hover:border-amber-500/40 transition-colors shadow-sm dark:shadow-none">
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 font-mono text-xs font-bold">
            MESH
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Multi-Hop Store-and-Forward (DTN)</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Zero infrastructure requirement. Runs multi-hop TTL flooding with LRU duplicate suppression, epidemic Delay-Tolerant Networking (DTN) store-and-forward persistence, and 3-witness quorum attestation to eliminate panic broadcasts.
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-600 dark:text-slate-400">
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">Physical UDP Radio</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">DTN Store-Forward</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">Witness Quorum</span>
          </div>
        </div>

        {/* CRYPTO Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/80 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 transition-colors shadow-sm dark:shadow-none">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 font-mono text-xs font-bold">
            CRYPTO
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Zero-Knowledge Offline Cryptography</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Family check-ins are encrypted client-side using AES-256-CBC with PBKDF2 (10,000 iterations) key derivation; intermediate mesh nodes relay opaque ciphertexts. Public SOS beacons are digitally signed via HMAC-SHA256 for integrity.
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-600 dark:text-slate-400">
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">AES-256-CBC</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">PBKDF2 Derivation</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-transparent">HMAC-SHA256</span>
          </div>
        </div>
      </div>

      {/* Screenshot Gallery */}
      <div className="mb-8 p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-mono text-xs">
            <Terminal className="w-4 h-4" /> BÜRGERNETZ UI ARCHITECTURE (CALM GERMAN CIVIC DESIGN)
          </div>
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500 hidden sm:inline-block">
            Swipe / Scroll for all 4 views →
          </span>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-3 snap-x rounded-xl hide-scrollbar border border-slate-200 dark:border-slate-800/60 p-3 bg-slate-50 dark:bg-slate-950/60">
          <div className="snap-center flex-shrink-0 flex flex-col gap-2">
            <img src="/assets/emergency-mesh/radar.jpg" alt="Radar Live Stream & Telemetry" className="h-64 sm:h-72 w-auto object-contain rounded-lg border border-slate-200 dark:border-slate-800 shadow-xl" />
            <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 text-center">01 · Radar &amp; Live Telemetry</span>
          </div>
          <div className="snap-center flex-shrink-0 flex flex-col gap-2">
            <img src="/assets/emergency-mesh/sos.jpg" alt="SOS Emergency Dispatch" className="h-64 sm:h-72 w-auto object-contain rounded-lg border border-slate-200 dark:border-slate-800 shadow-xl" />
            <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 text-center">02 · SOS 1-Tap Dispatch</span>
          </div>
          <div className="snap-center flex-shrink-0 flex flex-col gap-2">
            <img src="/assets/emergency-mesh/familie.jpg" alt="Familie Encrypted Check-in" className="h-64 sm:h-72 w-auto object-contain rounded-lg border border-slate-200 dark:border-slate-800 shadow-xl" />
            <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 text-center">03 · E2E Encrypted Familie</span>
          </div>
          <div className="snap-center flex-shrink-0 flex flex-col gap-2">
            <img src="/assets/emergency-mesh/orte.jpg" alt="Orte Emergency Infrastructure" className="h-64 sm:h-72 w-auto object-contain rounded-lg border border-slate-200 dark:border-slate-800 shadow-xl" />
            <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 text-center">04 · Offline Nürnberg Orte</span>
          </div>
        </div>
      </div>

      {/* Action Row */}
      <div className="p-6 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm dark:shadow-none">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-slate-900 dark:text-white font-bold text-sm">Standalone Release APK (v1.0.0)</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-mono text-[10px]">
              80/80 Tests Passing
            </span>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400 font-mono">
            React Native 0.77.1 · Fully Offline Sideloadable · 52 MB Signed Release Binary
          </div>
        </div>
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <a
            href="https://github.com/shikharthakur2404/emergency-mesh-nurnberg"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-mono text-xs font-semibold transition-all border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2"
          >
            <GithubIcon className="w-3.5 h-3.5" /> View Mesh Repo
          </a>
          <a
            href="https://github.com/shikharthakur2404/emergency-mesh-nurnberg/releases/tag/v1.0.0"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-semibold transition-all shadow-lg shadow-rose-600/20 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" /> Download APK (v1.0.0)
          </a>
        </div>
      </div>
    </section>
  )
}
