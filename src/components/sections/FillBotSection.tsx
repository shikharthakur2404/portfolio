import React from 'react'
import { Bot, CheckCircle2, Zap, Shield, Sparkles } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { asset } from '../../lib/asset'

export const FillBotSection: React.FC = () => {
  return (
    <section id="fillbot" className="mb-28 scroll-mt-24">
      {/* Header Tag */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-600 dark:text-sky-400">
          <Bot className="w-5 h-5" />
        </div>
        <span className="font-mono text-xs text-sky-600 dark:text-sky-400 tracking-widest uppercase">
          AI Systems &amp; Browser Automation
        </span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-4 flex items-center gap-3">
            FillBot
          </h2>
          <p className="text-quiet max-w-2xl text-base">
            Autonomous AI job application copilot built as a modern Manifest V3 browser extension. Heuristically parses dynamic job portals (Workday, Greenhouse, Lever, Personio), synthesizes tailored responses with Gemini 2.5 Flash, and hydrates complex SPA form state with zero telemetry leaks.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-500/30 text-sky-700 dark:text-sky-300 flex items-center gap-1.5 ">
            <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 " />
            Chrome &amp; Brave &amp; Edge (MV3)
          </span>
          <span className="px-3 py-1 rounded-full bg-subtle border border-line text-quiet">
            Gemini 2.5 Flash Cascade
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
            100% Local-First
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Visual Card / Interactive Preview */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-panel border border-line flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={asset('/assets/fillbot/icon.png')}
                alt="FillBot Icon"
                className="h-24 w-24 rounded-2xl border border-line sm:h-28 sm:w-28"
              />
              <div>
                <div className="font-mono text-xs text-sky-600 dark:text-sky-400 mb-1">
                  AUTONOMOUS FORM HUD // v1.0.0
                </div>
                <h3 className="text-xl font-bold text-ink">Smart In-Browser Copilot</h3>
                <p className="text-xs text-faint font-mono">
                  DOM Parser · Event Dispatcher · Side Panel Review · Zero Backend
                </p>
              </div>
            </div>

            {/* Real Screenshot Preview */}
            <div className="rounded-2xl overflow-hidden border border-line  mb-6 relative group bg-slate-950">
              <img
                src={asset('/assets/fillbot/fillbot-preview.png')}
                alt="FillBot in action auto-filling job application"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-line/80 text-[11px] font-mono text-sky-300 flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-sky-400 " />
                Live In-Flight Autofill &amp; Popup Telemetry
              </div>
            </div>

            <div className="space-y-2.5 text-xs font-mono text-quiet mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
                <span>
                  Semantic DOM Parser: Resolves explicit labels, <code className="text-sky-700 dark:text-sky-300 font-semibold">aria-labelledby</code>, and placeholders into structured schema payloads.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
                <span>
                  Reactive SPA State Hydration: Dispatches native property setters and bubbling synthetic input events to prevent React/Vue state drops.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
                <span>
                  Human-in-the-Loop Side Panel: Side-by-side review drawer with live character limit meters (<code className="text-sky-700 dark:text-sky-300 font-semibold">maxlength</code> constraint verification).
                </span>
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/shikharthakur2404/fillbot"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-center font-mono text-xs font-semibold text-white transition-colors flex items-center justify-center gap-2 border border-line "
              >
                <GithubIcon className="w-4 h-4" /> View GitHub Repo
              </a>
              <span className="text-xs font-mono text-slate-500">
                Manifest V3 Source Available
              </span>
            </div>
          </div>
        </div>

        {/* Architecture & Engineering Pillars Card */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-panel border border-line h-full flex flex-col justify-between ">
            <div>
              <div className="text-sky-600 dark:text-sky-400 font-mono text-xs mb-2">
                // ARCHITECTURAL DESIGN DECISIONS
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">Defeating ATS Fatigue</h3>
              <p className="text-sm text-quiet leading-relaxed mb-6">
                Job portals like Workday and Greenhouse impose severe repetitive cognitive verification on applicants. Generic password-manager autofills paste raw text without semantic awareness or character limit enforcement.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-subtle border border-line">
                  <div className="text-xs font-bold text-sky-600 dark:text-sky-400 mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    Cascade LLM Synthesis
                  </div>
                  <p className="text-xs text-quiet leading-relaxed">
                    Zero-dependency direct REST integration targeting Gemini 2.5 Flash with fallback cascades, generating tailored bullet points and answers strictly mapped to field character limits.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-subtle border border-line">
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    Zero-Server Privacy Sandbox
                  </div>
                  <p className="text-xs text-quiet leading-relaxed">
                    Zero telemetry leaks. Applicant CV context and API keys persist strictly in isolated browser storage (<code className="text-slate-400">chrome.storage.local</code>). Payload never transits any intermediate server.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-subtle border border-line">
                  <div className="text-xs font-bold text-purple-600 dark:text-purple-400 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Optical Mutation Telemetry
                  </div>
                  <p className="text-xs text-quiet leading-relaxed">
                    Injected DOM highlight overlays clearly signal modified fields to the user, pairing immediate visual reassurance with transient HUD toast alerts.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Target: Web Store &amp; Edge Add-ons</span>
                <span className="text-sky-600 dark:text-sky-400 font-semibold">Zero-Dependency Bundle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
