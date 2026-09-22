import {
  Smartphone,
  BookOpen,
  Mail,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Terminal,
  CheckCircle2,
  Radio,
  Download,
  Zap,
} from 'lucide-react'

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* ── Background Glow Accent ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-600/15 via-indigo-600/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[40%] -right-40 w-[600px] h-[500px] bg-gradient-to-b from-purple-600/10 to-transparent blur-[160px] rounded-full" />
      </div>

      {/* ── Navigation ── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#060913]/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-xs shadow-lg shadow-cyan-500/20">
              ST
            </div>
            <div>
              <span className="font-mono text-sm font-semibold tracking-wider text-slate-200">SHIKHAR THAKUR</span>
              <span className="hidden sm:inline-block ml-2 text-xs font-mono text-slate-500">// SYSTEMS & MOBILE</span>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-sm font-mono text-slate-400">
            <a href="#fytly" className="hover:text-cyan-400 transition-colors hidden sm:block">FytlY</a>
            <a href="#emergency-mesh" className="hover:text-rose-400 transition-colors hidden sm:block">Emergency Mesh</a>
            <a href="#research" className="hover:text-indigo-400 transition-colors hidden sm:block">Research</a>
            <a href="#glow-comments" className="hover:text-emerald-400 transition-colors hidden sm:block">Glow Comments</a>
            <a href="#particle-triad" className="hover:text-purple-400 transition-colors hidden md:block">Graphics</a>
            <div className="h-4 w-px bg-slate-800 hidden sm:block" />
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/shikharthakur2404"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-400 hover:text-white transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/shikhar2404"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-400 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-28">

        {/* ── Hero Section ── */}
        <section className="mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for Master's Thesis & Werkstudent / Software Engineer Roles (Germany)
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.08] mb-6">
            Building high-velocity <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              mobile & visual architectures.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
            Former Co-Founder @ <span className="text-slate-200 font-medium">FytlY</span> (99k LOC production React Native). M.Sc. IIS Scholar in Bavaria. Researching the cognitive boundaries of GenAI & authoring GPU compute engines.
          </p>

          {/* Metrics HUD */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mb-12">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-cyan-400">99k+</div>
              <div className="text-xs font-mono text-slate-400 mt-1">LOC React Native</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-indigo-400">€500k</div>
              <div className="text-xs font-mono text-slate-400 mt-1">Offer (Munich VC)</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-purple-400">3x</div>
              <div className="text-xs font-mono text-slate-400 mt-1">Particle Engines</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-emerald-400">C1 / B1</div>
              <div className="text-xs font-mono text-slate-400 mt-1">EN (IELTS) / DE</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#fytly"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
            >
              Inspect FytlY Architecture <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#emergency-mesh"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-rose-500/30 text-rose-300 hover:text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-rose-950/20"
            >
              <Radio className="w-4 h-4 text-rose-400" /> Emergency Mesh (Civilian P2P)
            </a>
            <a
              href="#research"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-indigo-400" /> Read AI Seminar Paper
            </a>
          </div>
        </section>

        {/* ── Section 1: FytlY Flagship Mobile Case Study ── */}
        <section id="fytly" className="mb-28 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Flagship Engineering</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                FytlY: 99k LOC Production Mobile Platform
              </h2>
              <p className="text-slate-400 max-w-2xl mt-2 text-base">
                Architected from zero to 99,000 lines of rigorous React Native code. Secured €500,000 conditional venture seed term sheet from a Munich VC firm. Built with strict defensive architectural boundaries.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-800 self-start lg:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Production Architecture
            </div>
          </div>

          {/* Architectural Guardrails Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/80 border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 font-mono text-xs">
                SAGA
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Deterministic Async Pipeline</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Enforced <code className="text-cyan-300 font-mono text-xs">networkCall</code> abstraction, strict try/catch action pairs, and default <code className="text-cyan-300 font-mono text-xs">takeLatest</code> concurrency to eliminate UI race conditions.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-800/80">Redux-Saga</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80">networkCall</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80">Atomic State</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/80 border border-slate-800/80 hover:border-indigo-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 font-mono text-xs">
                RESP
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mathematical Viewport Scaling</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Zero hardcoded raw numeric layout styles. Custom <code className="text-indigo-300 font-mono text-xs">respWidth</code>, <code className="text-indigo-300 font-mono text-xs">respHeight</code>, and <code className="text-indigo-300 font-mono text-xs">respFontSize</code> mathematical engine guaranteeing identical cross-device fidelity.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-800/80">Dynamic Scaling</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80">Zero-Margin Drift</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80">iOS & Android</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/80 border border-slate-800/80 hover:border-purple-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 font-mono text-xs">
                60FPS
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Memory-Bounded FlatLists</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Rigorous <code className="text-purple-300 font-mono text-xs">getItemLayout</code> offsets for zero-lag scroll measurements, granular <code className="text-purple-300 font-mono text-xs">React.memo</code> boundary isolation, and native image memory caching.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-800/80">getItemLayout</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80">FastImage</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80">60 FPS Native</span>
              </div>
            </div>
          </div>

          {/* Media / Screenshot Placeholder Card */}
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-2">
                <Terminal className="w-4 h-4" /> ASSET SHOWCASE REPOSITORY
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Screen Recordings & App Architecture Telemetry</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Production walkthrough videos, feature flows (workout tracking, user analytics, dynamic coach feedback), and performance benchmarks available on request.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:shikhar3924@gmail.com?subject=FytlY%20Walkthrough%20Request"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs transition-colors flex items-center gap-2 border border-slate-700"
              >
                <Mail className="w-3.5 h-3.5" /> Request Full Demo Video
              </a>
            </div>
          </div>
        </section>

        {/* ── Section 2: Emergency Mesh Nürnberg Flagship Offline Systems ── */}
        <section id="emergency-mesh" className="mb-28 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <div className="flex items-start sm:items-center gap-5">
              <img
                src="/assets/emergency-mesh/icon.png"
                alt="Emergency Mesh App Icon"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-xl shadow-rose-950/40 border border-rose-500/30 flex-shrink-0"
              />
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="p-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono text-[10px] tracking-widest uppercase">
                    P2P Mesh
                  </span>
                  <span className="font-mono text-xs text-rose-400 tracking-wider uppercase font-semibold">
                    Civilian Disaster Network
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Emergency Mesh Nürnberg
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-rose-300 bg-rose-950/60 px-4 py-2 rounded-lg border border-rose-500/30 self-start sm:self-center">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              v1.0.0 Live on Android
            </div>
          </div>

          <p className="text-slate-400 max-w-3xl text-base leading-relaxed mb-8">
            Autonomous peer-to-peer ad-hoc communication network engineered for civilian disaster coordination in Nuremberg during total infrastructure failure (power grid blackout, cellular collapse, ISP blackout). Features dual-mode UI (Bürgernetz / NINA vs. Taktisch Monospace), DTN store-and-forward routing, and end-to-end cryptography.
          </p>

          {/* Architectural Guardrails Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/80 border border-slate-800/80 hover:border-rose-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 font-mono text-xs">
                THEME
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Dual-Theme Design Engine</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Instant runtime toggle between <strong className="text-slate-200">Bürgernetz</strong> (calm German public safety design inspired by NINA Warn-App & DB Navigator with #11141a slate OLED battery optimization) and <strong className="text-slate-200">Taktisch</strong> (high-contrast OLED monospace telemetry terminal).
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-800/80">NINA Aesthetic</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80">OLED Battery Save</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80">Zero-Lag Toggle</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/80 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 font-mono text-xs">
                MESH
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Multi-Hop Store-and-Forward (DTN)</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Zero infrastructure requirement. Runs multi-hop TTL flooding with LRU duplicate suppression, epidemic Delay-Tolerant Networking (DTN) store-and-forward persistence, and 3-witness quorum attestation to eliminate panic broadcasts.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-800/80">Physical UDP Radio</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80">DTN Store-Forward</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80">Witness Quorum</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/80 border border-slate-800/80 hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 font-mono text-xs">
                CRYPTO
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zero-Knowledge Offline Cryptography</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Family check-ins are encrypted client-side using AES-256-CBC with PBKDF2 (10,000 iterations) key derivation; intermediate mesh nodes relay opaque ciphertexts. Public SOS beacons are digitally signed via HMAC-SHA256 for integrity.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-800/80">AES-256-CBC</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80">PBKDF2 Derivation</span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80">HMAC-SHA256</span>
              </div>
            </div>
          </div>

          {/* Screenshot Gallery */}
          <div className="mb-8 p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs">
                <Terminal className="w-4 h-4" /> BÜRGERNETZ UI ARCHITECTURE (CALM GERMAN CIVIC DESIGN)
              </div>
              <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">Swipe / Scroll for all 4 views →</span>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-3 snap-x rounded-xl hide-scrollbar border border-slate-800/60 p-3 bg-slate-950/60">
              <div className="snap-center flex-shrink-0 flex flex-col gap-2">
                <img src="/assets/emergency-mesh/radar.jpg" alt="Radar Live Stream & Telemetry" className="h-64 sm:h-72 w-auto object-contain rounded-lg border border-slate-800 shadow-xl" />
                <span className="text-[11px] font-mono text-slate-400 text-center">01 · Radar & Live Telemetry</span>
              </div>
              <div className="snap-center flex-shrink-0 flex flex-col gap-2">
                <img src="/assets/emergency-mesh/sos.jpg" alt="SOS Emergency Dispatch" className="h-64 sm:h-72 w-auto object-contain rounded-lg border border-slate-800 shadow-xl" />
                <span className="text-[11px] font-mono text-slate-400 text-center">02 · SOS 1-Tap Dispatch</span>
              </div>
              <div className="snap-center flex-shrink-0 flex flex-col gap-2">
                <img src="/assets/emergency-mesh/familie.jpg" alt="Familie Encrypted Check-in" className="h-64 sm:h-72 w-auto object-contain rounded-lg border border-slate-800 shadow-xl" />
                <span className="text-[11px] font-mono text-slate-400 text-center">03 · E2E Encrypted Familie</span>
              </div>
              <div className="snap-center flex-shrink-0 flex flex-col gap-2">
                <img src="/assets/emergency-mesh/orte.jpg" alt="Orte Emergency Infrastructure" className="h-64 sm:h-72 w-auto object-contain rounded-lg border border-slate-800 shadow-xl" />
                <span className="text-[11px] font-mono text-slate-400 text-center">04 · Offline Nürnberg Orte</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-bold text-sm">Standalone Release APK (v1.0.0)</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30 text-emerald-400 font-mono text-[10px]">
                  80/80 Tests Passing
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                React Native 0.77.1 · Fully Offline Sideloadable · 52 MB Signed Release Binary
              </div>
            </div>
            <div className="flex flex-wrap gap-3 w-full sm:w-auto">
              <a
                href="https://github.com/shikharthakur2404/emergency-mesh-nurnberg"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-semibold transition-all border border-slate-700 flex items-center justify-center gap-2"
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

        {/* ── Section 3: Seminar Paper & AI Research ── */}
        <section id="research" className="mb-28 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase">Academic Research</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            The Productivity Paradox of Generative AI in Software Development
          </h2>
          <p className="text-slate-400 max-w-3xl text-base mb-8">
            A comprehensive seminar investigation into why synthetic code generation velocity does not linearly translate into engineering output. Authored during Master of Science studies (Information Systems / IIS).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-indigo-400 font-mono text-xs mb-2">THESIS 01</div>
              <h3 className="text-base font-bold text-white mb-2">Complexity Displacement Thesis</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                GenAI does not eliminate software engineering friction; it displaces cognitive effort from active code synthesis to downstream architectural verification and defect triage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-indigo-400 font-mono text-xs mb-2">THESIS 02</div>
              <h3 className="text-base font-bold text-white mb-2">Cognitive Verification Tax</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Auditing probabilistically generated lines requires deeper contextual tracing than writing deterministic logic by hand, creating an invisible time penalty during extended sessions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-indigo-400 font-mono text-xs mb-2">THESIS 03</div>
              <h3 className="text-base font-bold text-white mb-2">Session Drift & Boundary Decay</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Without rigid architectural rules (e.g. Cursor Skills like <code className="text-indigo-300 font-mono text-xs">saga-logic</code>), autonomous agent sessions gradually dilute project abstractions.
              </p>
            </div>
          </div>

          {/* Paper Download & Citation HUD */}
          <div className="mt-8 p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-bold text-sm">Full Working Paper (Uncropped Preprint)</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30 text-emerald-400 font-mono text-[10px]">
                  DOI Minted
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Indexed in OpenAIRE & CERN Zenodo · DOI: <a href="https://doi.org/10.5281/zenodo.22725907" target="_blank" rel="noreferrer" className="text-indigo-300 hover:underline">10.5281/zenodo.22725907</a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 w-full sm:w-auto">
              <a
                href="https://doi.org/10.5281/zenodo.22725907"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-semibold transition-all border border-slate-700 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-3.5 h-3.5" /> View on Zenodo
              </a>
              <a
                href="/The_Productivity_Paradox_of_Generative_AI_in_Software_Development.pdf"
                download="The_Productivity_Paradox_of_Generative_AI_in_Software_Development.pdf"
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" /> Download PDF
              </a>
            </div>
          </div>
        </section>

        {/* ── Section 4: Developer Tooling & Verification Systems ── */}
        <section id="glow-comments" className="mb-28 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Zap className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">Developer Tooling & Systems</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Glow Comments ⚡
              </h2>
              <p className="text-slate-400 max-w-2xl text-base">
                Published code editor extension for VS Code, Cursor, and Antigravity IDE. Engineered to pierce "code blindness" in the vibe coding era through real-time optical telemetry, dynamic hex parsing, and luminous ambient aura backgrounds.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live on VS Marketplace & Open VSX
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                TypeScript + esbuild
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Visual Card / Interactive Preview */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="/assets/glow-comments/icon.png"
                    alt="Glow Comments Icon"
                    className="w-16 h-16 rounded-2xl shadow-xl shadow-cyan-500/10 border border-slate-800"
                  />
                  <div>
                    <div className="font-mono text-xs text-cyan-400 mb-1">OPTICAL TELEMETRY HUD // v0.1.0</div>
                    <h3 className="text-xl font-bold text-white">Luminous Visual Verification</h3>
                    <p className="text-xs text-slate-400 font-mono">Zero-Dependency Bundle · 69 KB VSIX · 10,000+ LOC Optimized</p>
                  </div>
                </div>

                {/* Simulated Editor HUD */}
                <div className="rounded-2xl bg-[#030712] border border-slate-800/80 p-5 font-mono text-xs space-y-3 mb-6 shadow-2xl">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/60 text-slate-500 text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                      <span className="ml-2 text-slate-400">verification_hud.ts</span>
                    </span>
                    <span className="text-emerald-400">LIVE RENDER</span>
                  </div>

                  <div className="p-2 rounded bg-cyan-950/30 border border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                    <span className="text-cyan-400 font-bold">// [#00F0FF]</span> Cyber Cyan: System architecture contract verified
                  </div>
                  <div className="p-2 rounded bg-rose-950/30 border border-rose-500/40 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
                    <span className="text-rose-400 font-bold">// ! [AI:AUDIT]</span> Security alert: External webhook unvalidated payload
                  </div>
                  <div className="p-2 rounded bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                    <span className="text-emerald-400 font-bold">// [#lime]</span> Matrix: Low-overhead cached TextEditorDecorationType
                  </div>
                  <div className="p-2 rounded bg-amber-950/30 border border-amber-500/40 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                    <span className="text-amber-400 font-bold">// TODO:</span> Hotfix memory leak before release deployment
                  </div>
                </div>

                <div className="space-y-2.5 text-xs font-mono text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Dynamic Arbitrary Hex Parsing: <code className="text-cyan-300">// [#FF007F]</code> or <code className="text-cyan-300"># [#00FFA3]</code></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Zero-Lag Decoration Cache: debounced AST/regex scanning without thread blocking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Cross-Editor Distribution: Visual Studio Marketplace + Open VSX Registry</span>
                  </div>
                </div>
              </div>

              {/* Install Command & Action Buttons */}
              <div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 flex items-center justify-between gap-2 mb-4">
                  <span className="text-slate-500">$</span>
                  <code className="text-cyan-300 select-all">code --install-extension shikharthakur.glow-comments</code>
                  <span className="text-[10px] text-slate-500 uppercase">CLI INSTALL</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=shikharthakur.glow-comments"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-center font-mono text-xs font-semibold text-white transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-950/50"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> VS Marketplace
                  </a>
                  <a
                    href="https://open-vsx.org/extension/shikharthakur/glow-comments"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-center font-mono text-xs font-semibold text-white transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-purple-950/50"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Open VSX
                  </a>
                  <a
                    href="https://github.com/shikharthakur2404/glow-comments"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-center font-mono text-xs text-slate-200 transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
                  >
                    <GithubIcon className="w-3.5 h-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Architecture & Cognitive Verification Tax Card */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 h-full flex flex-col justify-between">
                <div>
                  <div className="text-emerald-400 font-mono text-xs mb-2">// THE VIBE CODING RADAR</div>
                  <h3 className="text-xl font-bold text-white mb-3">Tackling the Verification Tax</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    In the era of autonomous AI generators, syntax highlighting is no longer sufficient. High-velocity generation causes "code blindness"—where silent catches, loose casts, and security leaks blend into syntax.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-xs font-bold text-rose-400 mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        AI Taint & Hazard Isolation
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Forces developer eyes directly onto unverified mutations, silent error suppressions, and critical API interfaces via custom luminous CSS-like text decorations.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-xs font-bold text-cyan-400 mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        Zero-Overhead esbuild Pipeline
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Compiles in 16ms into an isolated CJS bundle with decoupled configuration listeners, ensuring zero impact on editor frame rates.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800/80">
                  <a
                    href="https://github.com/shikharthakur2404/glow-comments/blob/main/AI_VIBE_CODING_VISION.md"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Read Architectural Vision Whitepaper <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 5: Generative Visual Computing Triad ── */}
        <section id="particle-triad" className="mb-28 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs text-purple-400 tracking-widest uppercase">Visual Computing Systems</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            The Cosmic Silhouette Triad
          </h2>
          <p className="text-slate-400 max-w-2xl text-base mb-8">
            Three distinct engineering implementations exploring the "human as energy" visual metaphor across the rendering spectrum—from lightweight 2D canvas to hardware-native Metal compute shaders.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sternstaub */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30">
                      WebGL / Three.js
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-300 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
                    </span>
                  </div>
                  <a
                    href="https://shikharthakur2404.github.io/sternstaub/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 font-mono">Sternstaub (Stardust) ✦</h3>
                <p className="text-xs text-emerald-400/90 font-mono mb-3">Multi-Cosmic 3D Observatory</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  High-performance 3D astrophysics simulator featuring numerical N-body Keplerian orbits, multi-spectral planetary rendering, dynamic volumetric black holes, and seamless macro-scale realm transitions across the cosmos.
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Three.js & Custom Shaders
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Seamless Multi-Realm Camera
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Accurate Orbital Ephemerides
                  </div>
                </div>
                
                <div className="mb-6 flex overflow-x-auto gap-3 pb-2 snap-x rounded-lg hide-scrollbar border border-slate-800/50 p-2 bg-slate-900/50">
                  <img src="/assets/sternstaub/system.png" alt="Sol System view" className="h-32 w-auto object-cover rounded shadow-lg snap-center" />
                  <img src="/assets/sternstaub/earth.png" alt="Earth terminator view" className="h-32 w-auto object-cover rounded shadow-lg snap-center" />
                  <img src="/assets/sternstaub/torus.png" alt="Olympus Stanford Torus" className="h-32 w-auto object-cover rounded shadow-lg snap-center" />
                  <img src="/assets/sternstaub/torus_silhouette.png" alt="Stanford Torus silhouette" className="h-32 w-auto object-cover rounded shadow-lg snap-center" />
                  <img src="/assets/sternstaub/mars.png" alt="Mars view" className="h-32 w-auto object-cover rounded shadow-lg snap-center" />
                  <img src="/assets/sternstaub/jupiter.png" alt="Jupiter view" className="h-32 w-auto object-cover rounded shadow-lg snap-center" />
                  <img src="/assets/sternstaub/andromeda.png" alt="Andromeda Volumetric Core" className="h-32 w-auto object-cover rounded shadow-lg snap-center" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://shikharthakur2404.github.io/sternstaub/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-center font-mono text-xs font-medium text-white transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-950/50"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Launch Live
                </a>
                <a
                  href="https://github.com/shikharthakur2404/sternstaub"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-center font-mono text-xs text-slate-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> Repo
                </a>
              </div>
            </div>

            {/* Nebelkern */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30">
                    WebGL2 + GLSL
                  </span>
                  <a
                    href="https://github.com/shikharthakur2404/nebelkern"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">nebelkern</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Cinematic particle cloud in React Three Fiber. 3D Curl Noise vector advection, procedural Gaussian exponential falloff, thresholded Bloom (0.85), chromatic aberration, and ping-pong velocity persistence trails.
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> 3D Curl Noise Advection
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Gaussian Alpha Falloff
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Velocity Persistence Trails
                  </div>
                </div>
                
                <div className="mb-6 flex flex-col gap-3 rounded-lg border border-slate-800/50 p-2 bg-slate-900/50">
                  <img src="/assets/nebelkern/hero.png" alt="Nebelkern Particle Simulation" className="w-full h-auto object-cover rounded shadow-lg" />
                  <video src="/assets/nebelkern/demo.mp4" controls muted loop playsInline className="w-full h-auto rounded shadow-lg" />
                </div>
              </div>
              <a
                href="https://github.com/shikharthakur2404/nebelkern"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-center font-mono text-xs text-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-3.5 h-3.5" /> View nebelkern Repo
              </a>
            </div>

            {/* Nebelkern-Metal */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded border border-purple-500/30">
                    Swift + Metal (MSL)
                  </span>
                  <a
                    href="https://github.com/shikharthakur2404/nebelkern-metal"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">nebelkern-metal</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Native macOS MetalKit engine. Apple Silicon Unified Memory Architecture for zero CPU-GPU copy. Unlocks Extended Dynamic Range (EDR &gt;1.0 peak luminance) on Liquid Retina XDR displays and live macOS wallpaper mode.
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Apple Silicon UMA Zero-Copy
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Liquid Retina XDR EDR HDR
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Live Wallpaper Background Layer
                  </div>
                </div>
              </div>
              <a
                href="https://github.com/shikharthakur2404/nebelkern-metal"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-center font-mono text-xs text-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-3.5 h-3.5" /> View nebelkern-metal Repo
              </a>
            </div>
          </div>
        </section>

        {/* ── Section 4: Engineering Competencies & Tooling ── */}
        <section className="mb-28">
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-6">Core Engineering Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
              <div>
                <div className="text-cyan-400 font-bold mb-3 uppercase tracking-wider">// Mobile Ecosystem</div>
                <ul className="space-y-2 text-slate-300">
                  <li>React Native (0.77+)</li>
                  <li>Offline P2P Mesh / UDP</li>
                  <li>Redux-Saga & Zustand</li>
                  <li>Native Modules & Android SDK</li>
                </ul>
              </div>
              <div>
                <div className="text-indigo-400 font-bold mb-3 uppercase tracking-wider">// Visual Computing</div>
                <ul className="space-y-2 text-slate-300">
                  <li>Metal Shading Language (MSL)</li>
                  <li>WebGL2 / Three.js / R3F</li>
                  <li>Postprocessing Pipelines</li>
                  <li>3D Vector Fields / Curl Noise</li>
                </ul>
              </div>
              <div>
                <div className="text-purple-400 font-bold mb-3 uppercase tracking-wider">// Systems & Cryptography</div>
                <ul className="space-y-2 text-slate-300">
                  <li>AES-256-CBC & HMAC-SHA256</li>
                  <li>DTN Store-and-Forward Relay</li>
                  <li>TypeScript / Swift / Python</li>
                  <li>Cursor Skills Architecture</li>
                </ul>
              </div>
              <div>
                <div className="text-emerald-400 font-bold mb-3 uppercase tracking-wider">// Education & Global</div>
                <ul className="space-y-2 text-slate-300">
                  <li>M.Sc. Information Systems (IIS)</li>
                  <li>Nuremberg / Bavaria, Germany</li>
                  <li>English C1 (IELTS Academic)</li>
                  <li>German B1</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Shikhar Thakur. Built with React & Tailwind.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/shikharthakur2404" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/shikhar2404" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:shikhar3924@gmail.com" className="hover:text-cyan-400 transition-colors">
              shikhar3924@gmail.com
            </a>
          </div>
        </footer>

      </main>
    </div>
  )
}
