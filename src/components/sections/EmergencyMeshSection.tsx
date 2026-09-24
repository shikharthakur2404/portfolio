import React from 'react'
import { Download } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { useLocale } from '../../context/useLocale'
import { MeshStage } from './mesh/MeshStage'
import { asset } from '../../lib/asset'

export const EmergencyMeshSection: React.FC = () => {
  const { t } = useLocale()

  return (
    <section id="emergency-mesh" className="mb-28 scroll-mt-24">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
        <div className="flex items-start sm:items-center gap-5">
          <img
            src={asset('/assets/emergency-mesh/icon.png')}
            alt="Emergency Mesh App Icon"
            className="h-24 w-24 shrink-0 rounded-2xl border border-rose-300 sm:h-32 sm:w-32 dark:border-rose-500/30"
          />
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 font-mono text-[10px] tracking-widest uppercase">
                P2P Mesh
              </span>
              <span className="font-mono text-xs text-rose-600 dark:text-rose-400 tracking-wider uppercase font-semibold">
                {t('mesh.kicker')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              Emergency Mesh Nürnberg
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 px-4 py-2 rounded-lg border border-rose-200 dark:border-rose-500/30 self-start sm:self-center ">
          <span className="w-2 h-2 rounded-full bg-rose-500 dark:bg-rose-400 " />
          {t('mesh.live')}
        </div>
      </div>

      <p className="text-quiet mb-3 max-w-4xl">
        {t('mesh.lede')}
      </p>
      <p className="text-quiet mb-8 max-w-4xl">
        {t('mesh.status')}
      </p>

      {/* Architectural Guardrails Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* THEME Card */}
        <div className="p-6 rounded-2xl bg-panel border border-line hover:border-strong">
          <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 flex items-center justify-center text-rose-600 dark:text-rose-400 mb-4 font-mono text-xs font-bold">
            THEME
          </div>
          <h3 className="text-lg font-bold text-ink mb-2">Dual-Theme Design Engine</h3>
          <p className="text-sm text-quiet leading-relaxed mb-4">
            Instant runtime toggle between <strong className="text-ink">Bürgernetz</strong> (calm German public safety design inspired by NINA Warn-App &amp; DB Navigator with #11141a slate OLED battery optimization) and <strong className="text-ink">Taktisch</strong> (high-contrast OLED monospace telemetry terminal).
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">NINA Aesthetic</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">OLED Battery Save</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">Zero-Lag Toggle</span>
          </div>
        </div>

        {/* MESH Card */}
        <div className="p-6 rounded-2xl bg-panel border border-line hover:border-strong">
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 font-mono text-xs font-bold">
            MESH
          </div>
          <h3 className="text-lg font-bold text-ink mb-2">Multi-hop relay offline</h3>
          <p className="text-sm text-quiet leading-relaxed mb-4">
            No tower or internet required. Phones keep a message and pass it to the next peer they meet. Hop limits and duplicate checks stop the same alert from flooding forever; multiple witnesses help filter panic spam.
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">Peer relay</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">Store then forward</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">Witness check</span>
          </div>
        </div>

        {/* CRYPTO Card */}
        <div className="p-6 rounded-2xl bg-panel border border-line hover:border-strong">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 font-mono text-xs font-bold">
            CRYPTO
          </div>
          <h3 className="text-lg font-bold text-ink mb-2">On-device privacy</h3>
          <p className="text-sm text-quiet leading-relaxed mb-4">
            Family check-ins are encrypted on the phone before they hop — other phones only relay locked data. Public SOS stays readable so neighbors can help, but includes a tamper check so forged panic spam is harder to push through.
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">Encrypt on device</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">Opaque relay</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">Tamper check</span>
          </div>
        </div>
      </div>

      <MeshStage />

      {/* Action Row */}
      <div className="p-6 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 ">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-ink font-bold text-sm">Standalone Release APK (v1.0.0)</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-mono text-[10px]">
              80/80 Tests Passing
            </span>
          </div>
          <div className="text-xs text-quiet font-mono">
            React Native 0.77.1 · Fully Offline Sideloadable · 52 MB Signed Release Binary
          </div>
        </div>
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <a
            href="https://github.com/shikharthakur2404/emergency-mesh-nurnberg"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl bg-paper hover:bg-subtle text-quiet font-mono text-xs font-semibold transition-all border border-line flex items-center justify-center gap-2"
          >
            <GithubIcon className="w-3.5 h-3.5" /> View Mesh Repo
          </a>
          <a
            href="https://github.com/shikharthakur2404/emergency-mesh-nurnberg/releases/tag/v1.0.0"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-semibold transition-all  flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" /> Download APK (v1.0.0)
          </a>
        </div>
      </div>
    </section>
  )
}
