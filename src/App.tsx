import {
  Smartphone,
  BookOpen,
  Mail,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Terminal,
  CheckCircle2
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
            <a href="#research" className="hover:text-cyan-400 transition-colors hidden sm:block">Research</a>
            <a href="#particle-triad" className="hover:text-cyan-400 transition-colors hidden md:block">Graphics</a>
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
              <div className="text-xs font-mono text-slate-400 mt-1">Offer (YSR Munich)</div>
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
                Architected from zero to 99,000 lines of rigorous React Native code. Secured €500,000 conditional venture offer from YSR Capital (Munich). Built with strict defensive architectural boundaries.
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
                href="mailto:shikharthakur2404@gmail.com?subject=FytlY%20Walkthrough%20Request"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs transition-colors flex items-center gap-2 border border-slate-700"
              >
                <Mail className="w-3.5 h-3.5" /> Request Full Demo Video
              </a>
            </div>
          </div>
        </section>

        {/* ── Section 2: Seminar Paper & AI Research ── */}
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
              <div className="text-white font-bold text-sm">Full Working Paper (Uncropped Preprint)</div>
              <div className="text-xs text-slate-400 font-mono mt-1">Includes 99k LOC FytlY case telemetry, commit distributions & Appendices A–D</div>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <a
                href="/The_Productivity_Paradox_of_Generative_AI_in_Software_Development.pdf"
                download="The_Productivity_Paradox_of_Generative_AI_in_Software_Development.pdf"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" /> Download PDF (871 KB)
              </a>
            </div>
          </div>
        </section>

        {/* ── Section 3: Generative Visual Computing Triad ── */}
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
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30">
                    Canvas 2D API
                  </span>
                  <a
                    href="https://github.com/shikharthakur2404/sternstaub"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">sternstaub</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Zero external 3D dependencies. High-performance browser rendering of 1,800 particles with additive blending (<code className="text-emerald-300 font-mono text-xs">lighter</code>) and parametric silhouette distribution at 60 FPS.
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Pure HTML5 Canvas 2D
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Additive Optical Glow
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> JSON Preset Engine
                  </div>
                </div>
              </div>
              <a
                href="https://github.com/shikharthakur2404/sternstaub"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-center font-mono text-xs text-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-3.5 h-3.5" /> View sternstaub Repo
              </a>
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
                  <li>React Native (0.7x+)</li>
                  <li>Redux-Saga / Concurrency</li>
                  <li>Native Modules & Bridges</li>
                  <li>Fastlane & CI/CD Deployment</li>
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
                <div className="text-purple-400 font-bold mb-3 uppercase tracking-wider">// Systems & Tooling</div>
                <ul className="space-y-2 text-slate-300">
                  <li>TypeScript / Swift / Python</li>
                  <li>Apple Silicon UMA & EDR</li>
                  <li>Ruff / Poetry / ESLint / Oxlint</li>
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
            <a href="mailto:shikharthakur2404@gmail.com" className="hover:text-cyan-400 transition-colors">
              shikharthakur2404@gmail.com
            </a>
          </div>
        </footer>

      </main>
    </div>
  )
}
