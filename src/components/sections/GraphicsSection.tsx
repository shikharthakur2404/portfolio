import React from 'react'
import { Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { useLocale } from '../../context/useLocale'
import { asset } from '../../lib/asset'

export const GraphicsSection: React.FC = () => {
  const { t } = useLocale()

  return (
    <section id="particle-triad" className="mb-28 scroll-mt-24">
      {/* Header Tag */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400">
          <Sparkles className="w-5 h-5" />
        </div>
        <span className="font-mono text-xs text-purple-600 dark:text-purple-400 tracking-widest uppercase">
          {t('graphics.kicker')}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-4">
        {t('graphics.title')}
      </h2>
      <p className="text-quiet mb-8 max-w-3xl">
        {t('graphics.lede')}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sternstaub */}
        <div className="p-6 rounded-2xl bg-panel border border-line flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-200 dark:border-emerald-500/30">
                  WebGL / Three.js
                </span>
                <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 " /> LIVE
                </span>
              </div>
              <a
                href="https://shikharthakur2404.github.io/sternstaub/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-ink transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <h3 className="text-xl font-bold text-ink mb-1 font-mono">Sternstaub (Stardust) ✦</h3>
            <p className="text-xs text-emerald-600 dark:text-emerald-400/90 font-mono mb-3">Multi-Cosmic 3D Observatory</p>
            <p className="text-sm text-quiet leading-relaxed mb-6">
              High-performance 3D astrophysics simulator featuring numerical N-body Keplerian orbits, multi-spectral planetary rendering, dynamic volumetric black holes, and seamless macro-scale realm transitions across the cosmos.
            </p>
            <div className="space-y-2 text-xs font-mono text-quiet mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Three.js &amp; Custom Shaders
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Seamless Multi-Realm Camera
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Accurate Orbital Ephemerides
              </div>
            </div>

            <div className="mb-6 flex overflow-x-auto gap-3 pb-2 snap-x rounded-lg hide-scrollbar border border-line/50 p-2 bg-subtle">
              <img src={asset('/assets/sternstaub/silhouette.png')} alt="Particle silhouette of a standing figure" className="h-72 w-auto snap-center rounded object-cover sm:h-96 lg:h-[28rem]" />
              <img src={asset('/assets/sternstaub/particle-field.png')} alt="Particle ring from Sternstaub" className="h-72 w-auto snap-center rounded object-cover sm:h-96 lg:h-[28rem]" />
              <img src={asset('/assets/sternstaub/system.png')} alt="Sol System view" className="h-72 w-auto snap-center rounded object-cover sm:h-96 lg:h-[28rem]" />
              <img src={asset('/assets/sternstaub/earth.png')} alt="Earth terminator view" className="h-72 w-auto snap-center rounded object-cover sm:h-96 lg:h-[28rem]" />
              <img src={asset('/assets/sternstaub/torus.png')} alt="Olympus Stanford Torus" className="h-72 w-auto snap-center rounded object-cover sm:h-96 lg:h-[28rem]" />
              <img src={asset('/assets/sternstaub/torus_silhouette.png')} alt="Stanford Torus silhouette" className="h-72 w-auto snap-center rounded object-cover sm:h-96 lg:h-[28rem]" />
              <img src={asset('/assets/sternstaub/mars.png')} alt="Mars view" className="h-72 w-auto snap-center rounded object-cover sm:h-96 lg:h-[28rem]" />
              <img src={asset('/assets/sternstaub/jupiter.png')} alt="Jupiter view" className="h-72 w-auto snap-center rounded object-cover sm:h-96 lg:h-[28rem]" />
              <img src={asset('/assets/sternstaub/andromeda.png')} alt="Andromeda Volumetric Core" className="h-72 w-auto snap-center rounded object-cover sm:h-96 lg:h-[28rem]" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://shikharthakur2404.github.io/sternstaub/"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-center font-mono text-xs font-medium text-white transition-colors flex items-center justify-center gap-1.5 "
            >
              <ExternalLink className="w-3.5 h-3.5" /> Launch Live
            </a>
            <a
              href="https://github.com/shikharthakur2404/sternstaub"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-lg bg-paper hover:bg-subtle text-center font-mono text-xs text-quiet transition-colors flex items-center justify-center gap-1.5 border border-line"
            >
              <GithubIcon className="w-3.5 h-3.5" /> Repo
            </a>
          </div>
        </div>

        {/* Nebelkern */}
        <div className="p-6 rounded-2xl bg-panel border border-line flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-200 dark:border-cyan-500/30">
                WebGL2 + GLSL
              </span>
              <a
                href="https://github.com/shikharthakur2404/nebelkern"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-ink transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <h3 className="text-xl font-bold text-ink mb-2 font-mono">nebelkern</h3>
            <p className="text-sm text-quiet leading-relaxed mb-6">
              Cinematic particle cloud in React Three Fiber. 3D Curl Noise vector advection, procedural Gaussian exponential falloff, thresholded Bloom (0.85), chromatic aberration, and ping-pong velocity persistence trails.
            </p>
            <div className="space-y-2 text-xs font-mono text-quiet mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> 3D Curl Noise Advection
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Gaussian Alpha Falloff
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Velocity Persistence Trails
              </div>
            </div>

            <div className="mb-6 flex flex-col gap-3 rounded-lg border border-line/50 p-2 bg-subtle">
              <img src={asset('/assets/nebelkern/hero.png')} alt="Nebelkern Particle Simulation" className="w-full h-auto object-cover rounded " />
              <video src={asset('/assets/nebelkern/demo.mp4')} controls muted loop playsInline className="w-full h-auto rounded " />
            </div>
          </div>
          <a
            href="https://github.com/shikharthakur2404/nebelkern"
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 rounded-lg bg-paper hover:bg-subtle text-center font-mono text-xs text-quiet transition-colors flex items-center justify-center gap-2 border border-line"
          >
            <GithubIcon className="w-3.5 h-3.5" /> View nebelkern Repo
          </a>
        </div>

        {/* Nebelkern-Metal */}
        <div className="p-6 rounded-2xl bg-panel border border-line flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-1 rounded border border-purple-200 dark:border-purple-500/30">
                Swift + Metal (MSL)
              </span>
              <a
                href="https://github.com/shikharthakur2404/nebelkern-metal"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-ink transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <h3 className="text-xl font-bold text-ink mb-2 font-mono">nebelkern-metal</h3>
            <p className="text-sm text-quiet leading-relaxed mb-6">
              Native macOS MetalKit engine. Apple Silicon Unified Memory Architecture for zero CPU-GPU copy. Unlocks Extended Dynamic Range (EDR &gt;1.0 peak luminance) on Liquid Retina XDR displays and live macOS wallpaper mode.
            </p>
            <div className="space-y-2 text-xs font-mono text-quiet mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> Apple Silicon UMA Zero-Copy
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> Liquid Retina XDR EDR HDR
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> Live Wallpaper Background Layer
              </div>
            </div>
          </div>
          <a
            href="https://github.com/shikharthakur2404/nebelkern-metal"
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 rounded-lg bg-paper hover:bg-subtle text-center font-mono text-xs text-quiet transition-colors flex items-center justify-center gap-2 border border-line"
          >
            <GithubIcon className="w-3.5 h-3.5" /> View nebelkern-metal Repo
          </a>
        </div>
      </div>
    </section>
  )
}
