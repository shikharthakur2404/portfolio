import React, { useState } from 'react'
import { Workflow, CheckCircle2, FileText, ExternalLink, ShieldCheck, Printer, CloudUpload, Cpu } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { asset } from '../../lib/asset'

export const CoverLetterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'form'>('pipeline')

  return (
    <section id="cover-letter-printer" className="mb-28 scroll-mt-24">
      {/* Header Tag */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-600 dark:text-amber-400">
          <Workflow className="w-5 h-5" />
        </div>
        <span className="font-mono text-xs text-amber-600 dark:text-amber-400 tracking-widest uppercase">
          Agentic Automation &amp; Document Synthesis
        </span>
      </div>

      {/* Title & Status Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-4">
            Cover Letter Printer 9000
          </h2>
          <p className="text-quiet max-w-2xl text-base">
            An end-to-end, zero-hallucination agentic pipeline engineered with <strong className="text-ink">n8n</strong>, <strong className="text-ink">JavaScript</strong>, and the <strong className="text-ink">Google Gemini 3.6 Flash API</strong>. Ingests raw Job Description dumps, extracts 15+ structured metadata keys, programmatically bridges verified engineering credentials, and outputs DIN 5008 print-ready vector PDFs via headless browser execution.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 ">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 " />
            10/10 Nodes Passing
          </span>
          <span className="px-3 py-1 rounded-full bg-subtle border border-line text-quiet">
            n8n + Gemini Flash
          </span>
          <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-300">
            DIN 5008 Standard
          </span>
        </div>
      </div>

      {/* Main Grid: Visual Pipeline HUD & Theoretical Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
        {/* Left Column: Visual Showcase & Image Switcher */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-panel border border-line flex flex-col justify-between">
          <div>
            {/* View Switcher Tabs */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-line">
              <div className="flex items-center gap-2 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('pipeline')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'pipeline'
                      ? 'bg-amber-500 text-slate-950 font-bold  shadow-amber-500/20'
                      : 'bg-subtle text-quiet hover:text-ink'
                  }`}
                >
                  <Workflow className="w-3.5 h-3.5" />
                  Execution Pipeline DAG
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('form')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'form'
                      ? 'bg-amber-500 text-slate-950 font-bold  shadow-amber-500/20'
                      : 'bg-subtle text-quiet hover:text-ink'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  Form Trigger UI
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Deterministic Zero-Hallucination</span>
              </div>
            </div>

            {/* Display Area */}
            {activeTab === 'pipeline' ? (
              <div>
                <div className="rounded-2xl overflow-hidden border border-line bg-subtle p-2 sm:p-3 mb-4 ">
                  <img
                    src={asset('/assets/cover-letter-printer/pipeline-execution.png')}
                    alt="n8n Execution Pipeline DAG with all verified green passing checkmarks"
                    className="w-full h-auto rounded-xl object-contain"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs text-faint">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Live Trace: Form Trigger → Context Inject → Gemini Extract → Arsenal Bridge → Gemini Bullets → HTML Assembly → Headless PDF → Cloud Sync</span>
                  </div>
                  <span className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">
                    10 Stages Verified
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <div className="rounded-2xl overflow-hidden border border-line bg-subtle p-3 sm:p-4 mb-4  flex justify-center">
                  <img
                    src={asset('/assets/cover-letter-printer/form_trigger.png')}
                    alt="Webhook Form Trigger interface accepting unstructured Job Descriptions"
                    className="max-h-[640px] w-auto rounded-xl object-contain"
                  />
                </div>
                <div className="flex items-center justify-between font-mono text-xs text-faint">
                  <span>Webhook Form Trigger (Unstructured JD Dump + Language Parameter)</span>
                  <span className="text-[11px] text-cyan-600 dark:text-cyan-400 font-semibold">German B1 / English C1</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Repo Vector */}
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-quiet">
              <Cpu className="w-4 h-4 text-amber-500" />
              <span>Orchestrated locally via n8n daemon + LangChain Gemini nodes</span>
            </div>
            <a
              href="https://github.com/shikharthakur2404/cover-letter-printer-9000"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-mono text-xs font-semibold transition-all border border-line flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View cover-letter-printer-9000</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Right Column: Theoretical Architecture & Theses Alignment */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Card 1: Constrained-Generation Architecture */}
          <div className="p-6 rounded-3xl bg-panel border border-line">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                Constrained Generation
              </span>
            </div>
            <h3 className="text-base font-bold text-ink mb-2">
              Eliminating the Verification Tax
            </h3>
            <p className="text-xs text-quiet leading-relaxed mb-4">
              Direct implementation of my academic findings in the <em className="text-quiet">Productivity Paradox</em> paper. Instead of allowing probabilistic LLMs to invent claims, the system constrains Gemini to a hardcoded <strong className="text-quiet">Candidate Arsenal JSON</strong> containing strictly verified project telemetry (e.g. FytlY 99k LOC, Innow8, TaskOrbit).
            </p>
            <div className="p-3 rounded-xl bg-subtle border border-line font-mono text-[11px] text-quiet space-y-1">
              <div className="text-emerald-600 dark:text-emerald-400 font-semibold">// Zero-Hallucination Invariant:</div>
              <div>• Extracted Tech: Match against verified skill matrix</div>
              <div>• Proof Points: Injected from verified history</div>
              <div>• Grounding: Zero generative exaggeration</div>
            </div>
          </div>

          {/* Card 2: Headless Print & DIN 5008 */}
          <div className="p-6 rounded-3xl bg-panel border border-line">
            <div className="flex items-center gap-2 mb-3">
              <Printer className="w-4 h-4 text-cyan-500" />
              <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                DIN 5008 &amp; Headless Edge
              </span>
            </div>
            <h3 className="text-base font-bold text-ink mb-2">
              Pixel-Perfect Vector Output
            </h3>
            <p className="text-xs text-quiet leading-relaxed mb-3">
              Executes <code className="text-cyan-600 dark:text-cyan-400 font-mono text-[11px]">child_process.execSync</code> to invoke Microsoft Edge in <code className="text-cyan-600 dark:text-cyan-400 font-mono text-[11px]">--headless=new</code> mode, stripping default browser headers and footers to render German DIN 5008 standard vector PDFs.
            </p>
            <div className="flex items-center gap-2 font-mono text-[11px] text-faint">
              <CloudUpload className="w-3.5 h-3.5 text-amber-500" />
              <span>Hierarchical Folder Auto-Archival + Cloud Backup</span>
            </div>
          </div>
        </div>
      </div>

      {/* 8-Stage Pipeline Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-panel border border-line">
          <div className="font-mono text-xs text-amber-600 dark:text-amber-400 mb-1">01 // INGESTION</div>
          <h4 className="text-sm font-bold text-ink mb-1">Webhook Form Trigger</h4>
          <p className="text-xs text-quiet leading-relaxed">
            Accepts raw text dumps directly from job listings and sets target output language (DE B1 / EN C1).
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-panel border border-line">
          <div className="font-mono text-xs text-amber-600 dark:text-amber-400 mb-1">02 // EXTRACTION</div>
          <h4 className="text-sm font-bold text-ink mb-1">Gemini Schema Parser</h4>
          <p className="text-xs text-quiet leading-relaxed">
            Gemini 3.6 Flash normalizes messy job dumps into 15+ strict JSON attributes (Role, Tech Stack, Domain).
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-panel border border-line">
          <div className="font-mono text-xs text-amber-600 dark:text-amber-400 mb-1">03 // SYNTHESIS</div>
          <h4 className="text-sm font-bold text-ink mb-1">Arsenal Bridge Logic</h4>
          <p className="text-xs text-quiet leading-relaxed">
            JavaScript evaluates candidate capabilities and prompts Gemini to compose 3 mathematically grounded bullet points.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-panel border border-line">
          <div className="font-mono text-xs text-amber-600 dark:text-amber-400 mb-1">04 // PRODUCTION</div>
          <h4 className="text-sm font-bold text-ink mb-1">Headless PDF &amp; Sync</h4>
          <p className="text-xs text-quiet leading-relaxed">
            Headless browser renders DIN 5008 HTML into vector PDF, archiving locally and synchronizing to Google Drive.
          </p>
        </div>
      </div>
    </section>
  )
}
