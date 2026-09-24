import { Zap, CheckCircle2, ExternalLink, ChevronRight } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { useLocale } from '../../context/useLocale'
import { asset } from '../../lib/asset'

export const GlowCommentsSection: React.FC = () => {
  const { t } = useLocale()

  return (
    <section id="glow-comments" className="mb-28 scroll-mt-24">
      {/* Header Tag */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
          <Zap className="w-5 h-5" />
        </div>
        <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
          {t('glow.kicker')}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-4">
            Glow Comments
          </h2>
          <p className="text-quiet max-w-3xl">
            {t('glow.lede')}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 ">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 " />
            Live on VS Marketplace &amp; Open VSX
          </span>
          <span className="px-3 py-1 rounded-full bg-subtle border border-line text-quiet">
            TypeScript + esbuild
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Visual Card / Interactive Preview */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-panel border border-line flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={asset('/assets/glow-comments/icon.png')}
                alt="Glow Comments Icon"
                className="h-24 w-24 rounded-2xl border border-line sm:h-32 sm:w-32"
              />
              <div>
                <div className="font-mono text-xs text-cyan-600 dark:text-cyan-400 mb-1">
                  OPTICAL TELEMETRY HUD // v0.2.3
                </div>
                <h3 className="text-xl font-bold text-ink">Luminous Visual Verification</h3>
                <p className="text-xs text-faint font-mono">
                  Zero-Dependency Bundle · 73 KB VSIX · Dual-Spectrum Chroma
                </p>
              </div>
            </div>

            {/* Simulated Editor HUD */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800/80 p-5 font-mono text-xs space-y-3 mb-6 ">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/60 text-slate-500 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  <span className="ml-2 text-slate-400">verification_hud.ts</span>
                </span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 " />
                  AUDIT LENS: ON (2 FLAGGED)
                </span>
              </div>

              <div className="p-2.5 rounded bg-rose-950/40 border border-rose-500/50 text-rose-300 ">
                <span className="text-rose-400 font-bold">// ! [SECURITY]</span> Verify webhook signature before parsing payload
              </div>
              <div className="p-2.5 rounded bg-amber-950/40 border border-amber-500/50 text-amber-300 ">
                <span className="text-amber-400 font-bold">// TODO:</span> Add Redis cache fallback for session persistence
              </div>
              <div className="p-2 text-slate-500 italic border border-transparent">
                // (98% of safe boilerplate code dimmed to 22% opacity to eliminate cognitive verification tax)
              </div>
            </div>

            {/* Real Editor Screenshot Previews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="rounded-xl overflow-hidden border border-line  relative group">
                <img
                  src={asset('/assets/glow-comments/audit-lens.jpg')}
                  alt="Audit Lens HUD in action"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 border border-line/80 text-[10px] font-mono text-cyan-300">
                  Audit Lens Mode (Cmd+K Cmd+G)
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-line  relative group">
                <img
                  src={asset('/assets/glow-comments/dual-spectrum.jpg')}
                  alt="Dual-Spectrum Chroma (Dark &amp; Light Themes)"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 border border-line/80 text-[10px] font-mono text-emerald-300">
                  Dual-Spectrum (Dark vs Light)
                </div>
              </div>
            </div>

            <div className="space-y-2.5 text-xs font-mono text-quiet mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>
                  Risk-Scoped Audit Lens (<code className="text-cyan-700 dark:text-cyan-300 font-semibold">Cmd+K Cmd+G</code>): 22% opacity dimming isolating compiler diagnostics &amp; LLM blindspots
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>Dual-Spectrum Chroma Engine: Radiant neon in dark themes, deep jewel inks in light themes (WCAG AAA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>AI Agent Directives Protocol: One-click rule generation for Claude Code, Cursor, and Gemini CLI</span>
              </div>
            </div>
          </div>

          {/* Install Command & Action Buttons */}
          <div>
            <div className="p-3 rounded-xl bg-subtle border border-line font-mono text-xs text-quiet flex items-center justify-between gap-2 mb-4">
              <span className="text-faint">$</span>
              <code className="text-cyan-700 dark:text-cyan-300 select-all font-semibold">
                code --install-extension shikharthakur.glow-comments
              </code>
              <span className="text-[10px] text-faint uppercase">CLI INSTALL</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <a
                href="https://marketplace.visualstudio.com/items?itemName=shikharthakur.glow-comments"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-center font-mono text-xs font-semibold text-white transition-colors flex items-center justify-center gap-1.5 "
              >
                <ExternalLink className="w-3.5 h-3.5" /> VS Market
              </a>
              <a
                href="https://open-vsx.org/extension/shikharthakur/glow-comments"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-center font-mono text-xs font-semibold text-white transition-colors flex items-center justify-center gap-1.5 "
              >
                <ExternalLink className="w-3.5 h-3.5" /> Open VSX
              </a>
              <a
                href="https://dev.to/shikhar_thakur_rn_/the-cognitive-verification-tax-why-i-built-an-open-source-visual-hud-for-the-era-of-vibe-coding-15ck"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-center font-mono text-xs font-semibold text-white transition-colors flex items-center justify-center gap-1.5 border border-line "
              >
                <ExternalLink className="w-3.5 h-3.5" /> Dev.to Essay
              </a>
              <a
                href="https://github.com/shikharthakur2404/glow-comments"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-paper hover:bg-subtle text-center font-mono text-xs text-quiet transition-colors flex items-center justify-center gap-1.5 border border-line"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Architecture & Cognitive Verification Tax Card */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-panel border border-line h-full flex flex-col justify-between ">
            <div>
              <div className="text-emerald-600 dark:text-emerald-400 font-mono text-xs mb-2">
                // THE VIBE CODING RADAR
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">Tackling the Verification Tax</h3>
              <p className="text-sm text-quiet leading-relaxed mb-6">
                In the era of autonomous AI generators, syntax highlighting is no longer sufficient. High-velocity generation causes "code blindness"—where silent catches, loose casts, and security leaks blend into syntax.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-subtle border border-line">
                  <div className="text-xs font-bold text-rose-600 dark:text-rose-400 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 dark:bg-rose-400" />
                    AI Taint &amp; Hazard Isolation
                  </div>
                  <p className="text-xs text-quiet leading-relaxed">
                    Forces developer eyes directly onto unverified mutations, silent error suppressions, and critical API interfaces via custom luminous CSS-like text decorations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-subtle border border-line">
                  <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                    Zero-Overhead esbuild Pipeline
                  </div>
                  <p className="text-xs text-quiet leading-relaxed">
                    Compiles in 16ms into an isolated CJS bundle with decoupled configuration listeners, ensuring zero impact on editor frame rates.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <a
                href="https://dev.to/shikhar_thakur_rn_/the-cognitive-verification-tax-why-i-built-an-open-source-visual-hud-for-the-era-of-vibe-coding-15ck"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors font-semibold"
              >
                Read Dev.to Publication: The Cognitive Verification Tax <ChevronRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/shikharthakur2404/glow-comments/blob/main/AI_VIBE_CODING_VISION.md"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              >
                Whitepaper <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
