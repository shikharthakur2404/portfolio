import React from 'react'
import { ArrowLeft, Layers, Smartphone, Cpu, ShieldCheck, Cloud } from 'lucide-react'
import { useLocale } from '../context/useLocale'
import { asset } from '../lib/asset'

const shots: { src: string; alt: string; label: string }[] = [
  { src: asset('/assets/fytly/splash.png'), alt: 'FytlY splash screen', label: 'Splash' },
  { src: asset('/assets/fytly/habits.png'), alt: 'Daily habits with Fyty mascot', label: 'Habits' },
  { src: asset('/assets/fytly/add-habit.png'), alt: 'Add a new habit with suggestions', label: 'Add habit' },
  { src: asset('/assets/fytly/journey.png'), alt: 'Journey path with workouts and treasure reward', label: 'Journey' },
  { src: asset('/assets/fytly/workout.png'), alt: 'Active workout logging', label: 'Workout' },
  { src: asset('/assets/fytly/upper-session.png'), alt: 'Upper body session with sets and rest timers', label: 'Upper session' },
  { src: asset('/assets/fytly/upper-main.png'), alt: 'Upper Main workout logging prototype', label: 'Upper Main' },
  { src: asset('/assets/fytly/stretching.png'), alt: 'Stretching block on an upper-lower rest day', label: 'Stretching' },
  { src: asset('/assets/fytly/feed.png'), alt: 'Community workout feed', label: 'Feed' },
  { src: asset('/assets/fytly/profile.png'), alt: 'Profile and posts grid', label: 'Profile' },
  { src: asset('/assets/fytly/create-post.png'), alt: 'Create a new post', label: 'Compose' },
]

export const FytlyPage: React.FC = () => {
  const { t } = useLocale()

  return (
    <article className="pb-16 pt-6">
      <a
        href="#top"
        className="mb-8 inline-flex items-center gap-2 text-quiet underline decoration-line underline-offset-4 hover:text-ink font-mono text-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('fytly.page.back')}
      </a>

      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-panel border border-line text-ink">
          <Smartphone className="w-5 h-5" />
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-faint">{t('fytly.kicker')}</p>
      </div>

      <h1 className="max-w-[18ch] text-[clamp(2.5rem,5vw,4.5rem)] text-ink font-serif font-bold leading-tight">
        {t('fytly.page.title')}
      </h1>
      <p className="mt-5 max-w-[42rem] text-quiet text-base sm:text-lg leading-relaxed">{t('fytly.page.lede')}</p>

      <p className="mt-3 border-l-2 border-line pl-4 text-xs sm:text-sm text-faint max-w-3xl mb-10">
        {t('fytly.page.note')}
      </p>

      {/* Engineering Telemetry Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 border-y border-line py-6 mb-16">
        <div>
          <dt className="font-mono text-xs text-faint">Codebase Scale</dt>
          <dd className="font-serif text-2xl font-bold text-ink mt-1">~99k LOC</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-faint">Release Channel</dt>
          <dd className="font-serif text-2xl font-bold text-ink mt-1">App Store</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-faint">Core Runtime</dt>
          <dd className="font-serif text-2xl font-bold text-ink mt-1">React Native</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-faint">Async Engine</dt>
          <dd className="font-serif text-2xl font-bold text-ink mt-1">Redux-Saga</dd>
        </div>
      </div>

      {/* Production Tech Stack Matrix */}
      <section className="mb-20">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-quiet">
          <Layers className="w-4 h-4 text-ink" /> ARCHITECTURE CONTRACTS
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-2">Production Tech Stack</h2>
        <p className="text-sm sm:text-base text-quiet max-w-3xl mb-8">
          Strict architectural boundaries enforced across 99,000 lines of mobile code to eliminate regression drift, layout distortion, and race conditions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mobile Core & Runtime */}
          <div className="p-6 rounded-2xl bg-panel border border-line">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-subtle text-ink border border-line">
                <Smartphone className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-base text-ink">Mobile Core &amp; Runtime</h3>
            </div>
            <p className="text-sm text-quiet leading-relaxed mb-4">
              Cross-platform architecture leveraging modern React Native core with TypeScript strict mode and native bridge modules for iOS and Android parity.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">React Native 0.77+</span>
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">TypeScript (Strict)</span>
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">Metro Bundler</span>
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">Native Bridge Modules</span>
            </div>
          </div>

          {/* Async State & Concurrency */}
          <div className="p-6 rounded-2xl bg-panel border border-line">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-subtle text-ink border border-line">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-base text-ink">Async State &amp; Concurrency</h3>
            </div>
            <p className="text-sm text-quiet leading-relaxed mb-4">
              Deterministic generator pipelines routing all side-effects through isolated wrappers with atomic success/failure actions and race-free concurrency.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">Redux-Saga</span>
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">networkCall Pattern</span>
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">takeLatest Concurrency</span>
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">Zustand (View State)</span>
            </div>
          </div>

          {/* Viewport Mathematics & Performance */}
          <div className="p-6 rounded-2xl bg-panel border border-line">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-subtle text-ink border border-line">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-base text-ink">Viewport Math &amp; Performance</h3>
            </div>
            <p className="text-sm text-quiet leading-relaxed mb-4">
              Mathematical layout scaling engine eliminating raw numeric dimensions, paired with bounded FlatList memory measurements for 60fps scrolling.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">respWidth / respHeight</span>
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">respFontSize</span>
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">getItemLayout Offsets</span>
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">react-native-fast-image</span>
            </div>
          </div>

          {/* Cloud, Persistence & Release */}
          <div className="p-6 rounded-2xl bg-panel border border-line">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-subtle text-ink border border-line">
                <Cloud className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-base text-ink">Cloud, Persistence &amp; Release</h3>
            </div>
            <p className="text-sm text-quiet leading-relaxed mb-4">
              Serverless cloud infrastructure handling user authentication, social workout feeds, and automated CI/CD builds for App Store deployment.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">Firebase Auth</span>
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">Cloud Firestore</span>
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">App Store Connect</span>
              <span className="px-2.5 py-1 rounded-md bg-subtle border border-line text-ink">TestFlight &amp; Fastlane</span>
            </div>
          </div>
        </div>
      </section>

      <figure className="mt-12 border border-line bg-subtle p-3 sm:p-5">
        <img
          src={asset('/assets/fytly/all-screens.jpg')}
          alt="Five FytlY phone screens in one frame"
          className="w-full object-contain"
        />
        <figcaption className="mt-3 text-center text-faint">{t('fytly.page.composite')}</figcaption>
      </figure>

      <h2 className="mt-16 mb-6 text-ink">{t('fytly.page.gallery')}</h2>
      <div className="flex gap-4 overflow-x-auto pb-3 snap-x">
        {shots.map(shot => (
          <figure key={shot.src} className="shrink-0 snap-center">
            <img
              src={shot.src}
              alt={shot.alt}
              className="h-[28rem] w-auto rounded-2xl border border-line object-cover sm:h-[34rem]"
            />
            <figcaption className="mt-2 text-center text-faint">{shot.label}</figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
        {(
          [
            ['fytly.page.pillar1.title', 'fytly.page.pillar1.body'],
            ['fytly.page.pillar2.title', 'fytly.page.pillar2.body'],
            ['fytly.page.pillar3.title', 'fytly.page.pillar3.body'],
          ] as const
        ).map(([title, body]) => (
          <div key={title}>
            <h3 className="mb-2 font-sans text-base font-medium text-ink">{t(title)}</h3>
            <p className="text-quiet">{t(body)}</p>
          </div>
        ))}
      </div>
    </article>
  )
}
