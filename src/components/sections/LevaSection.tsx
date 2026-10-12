import React, { useState } from 'react'
import { Baby, LineChart, ShieldCheck, Calendar, Layers, CheckCircle2 } from 'lucide-react'
import { useLocale } from '../../context/useLocale'
import { asset } from '../../lib/asset'

interface LevaScreen {
  id: string
  label: string
  src: string
  caption: string
}

const SCREENS: LevaScreen[] = [
  {
    id: 'growth-curve',
    label: 'Growth Curve',
    src: asset('/assets/leva/leva-growth-curve.png'),
    caption: 'iOS Simulator · Multi-point spline Baby trajectory plotted against WHO/CDC 5th & 95th percentile bounds',
  },
  {
    id: 'growth-linear',
    label: 'Growth Trend',
    src: asset('/assets/leva/leva-growth-linear.png'),
    caption: 'iOS Simulator · Infant Weight trajectory crossing 95th & 5th percentile thresholds across 1mo–3mo',
  },
  {
    id: 'growth-baseline',
    label: 'Percentiles',
    src: asset('/assets/leva/leva-growth-chart.png'),
    caption: 'iOS Simulator · Reference 5th & 95th percentile curves across Weight, Height & Head Size tabs',
  },
  {
    id: 'dynamic-link',
    label: 'Share & Link',
    src: asset('/assets/leva/leva-dynamic-link.png'),
    caption: 'iOS Simulator · Enhanced Share button triggering dynamic short-link generation (levaapp.page.link) with OpenGraph thumbnail preview',
  },
  {
    id: 'consultants',
    label: 'Consultants',
    src: asset('/assets/leva/leva-consultants.png'),
    caption: 'iOS Simulator · Consultant directory driving in-app Calendly WebView scheduling with prefilled user state & custom tab bar',
  },
  {
    id: 'mother-info',
    label: 'Mother Info',
    src: asset('/assets/leva/leva-mother-info.png'),
    caption: 'iOS Simulator · Maternal onboarding flow with motherhood status & imperial biometric validation',
  },
  {
    id: 'dob-calendar',
    label: 'DOB Calendar',
    src: asset('/assets/leva/leva-dob-calendar.png'),
    caption: 'iOS Simulator · Custom timezone-aware CalenderModal with dynamic date marking & month-year picker',
  },
]

const TECH_TAGS = [
  'React Native 0.68',
  'Patched Gifted Charts',
  'Calendly WebView Bridge',
  'NPM Crypto Encryption',
  'Firebase Dynamic Links',
  'Moment-Timezone',
  'Track Player (Audio)',
]

export const LevaSection: React.FC = () => {
  const { t } = useLocale()
  const [activeScreenIndex, setActiveScreenIndex] = useState(0)
  const currentScreen = SCREENS[activeScreenIndex]

  return (
    <section id="leva" className="mb-28 scroll-mt-24">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
          <Baby className="w-5 h-5" />
        </div>
        <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 tracking-widest uppercase font-semibold">
          {t('leva.kicker')}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">{t('leva.title')}</h2>
          <p className="text-quiet max-w-3xl mt-2 leading-relaxed">{t('leva.lede')}</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-4 py-2 rounded-lg border border-indigo-200 dark:border-indigo-500/30 self-start lg:self-auto shrink-0">
          <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
          {t('leva.status')}
        </div>
      </div>

      <div className="mb-8 rounded-xl border border-line bg-subtle/50 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="font-mono text-xs uppercase tracking-wider text-faint flex items-center gap-2 shrink-0">
            <Layers className="w-3.5 h-3.5 text-ink" />
            <span>Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2 font-mono text-xs text-quiet">
            {TECH_TAGS.map(tag => (
              <span key={tag} className="px-2.5 py-1 rounded-md bg-panel border border-line text-ink">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full p-4 sm:p-6 rounded-2xl bg-panel border border-line shadow-sm">
            <div className="mb-4 p-3 rounded-xl bg-subtle border border-line/60 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <img src={asset('/assets/leva/leva-icon.png')} alt="Leva App Icon" className="h-7 w-7 rounded-lg object-contain" />
                <img src={asset('/assets/leva/leva-logo.png')} alt="Leva Wordmark" className="h-5 w-auto object-contain dark:brightness-125" />
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-panel border border-line text-quiet">App Store · 2022 – 2023</span>
            </div>

            <div className="mb-4 flex flex-wrap gap-1 p-1 rounded-lg bg-subtle border border-line">
              {SCREENS.map((screen, idx) => (
                <button
                  key={screen.id}
                  type="button"
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`flex-1 min-w-[74px] py-1 px-1.5 text-center font-mono text-[10px] rounded-md transition-all cursor-pointer truncate ${
                    idx === activeScreenIndex
                      ? 'bg-panel text-ink shadow-xs border border-line font-medium'
                      : 'text-quiet hover:text-ink'
                  }`}
                >
                  {screen.label}
                </button>
              ))}
            </div>

            <figure className="flex flex-col items-center">
              <img
                key={currentScreen.id}
                src={currentScreen.src}
                alt={currentScreen.caption}
                className="w-full max-w-[280px] sm:max-w-[320px] rounded-2xl border border-line object-contain shadow-lg"
              />
              <figcaption className="mt-3 text-center font-mono text-[11px] text-faint">{currentScreen.caption}</figcaption>
            </figure>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-panel border border-line hover:border-strong transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                <LineChart className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-base text-ink">Date-Looped Growth Curves &amp; Patched Chart Engine</h3>
            </div>
            <p className="text-sm text-quiet leading-relaxed mb-4">
              Engineered the infant <strong className="text-ink">Growth Chart</strong> (<code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">TotalGrowthScreen.js</code>) and daily/weekly feeding histograms (<strong className="text-ink">Nursing</strong>, <strong className="text-ink">Pumping</strong>, <strong className="text-ink">Bottles</strong>, <strong className="text-ink">Diapers</strong>). Built date-deduplication and sorting loops (<code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">uniqueArrayDate</code>) alongside triple-series percentile curves (<strong className="text-ink">5th, 95th &amp; Baby</strong>) over patched <code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">react-native-gifted-charts</code> internals.
            </p>
            <div className="space-y-1.5 text-xs font-mono text-quiet mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Patched LineChart &amp; BarChart TypeScript source for custom Y-axis units (lbs / in)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Date-bucket aggregation loops with Day / Week toggles &amp; stacked bar overlays</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">5th / 95th Percentile Curves</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">Patched GiftedCharts</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">uniqueArrayDate Loops</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-panel border border-line hover:border-strong transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-base text-ink">Enhanced Share Sheet, Deep-Linking &amp; NPM Crypto</h3>
            </div>
            <p className="text-sm text-quiet leading-relaxed mb-4">
              Engineered the enhanced <strong className="text-ink">Share button pipeline</strong> (<code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">onShare</code> &amp; <code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">generateLink</code> in <code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">ArticlesDetailesScreen.js</code>) that dynamically mints <code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">levaapp.page.link</code> short URLs with sanitized OpenGraph thumbnails and opens native <code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">react-native-share</code> previews, alongside cold/warm deferred routing and NPM-based <strong className="text-ink">payload encryption and decryption</strong>.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">Enhanced Share.open Sheet</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">Firebase Dynamic Links</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">NPM Crypto Encryption</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-panel border border-line hover:border-strong transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                <Calendar className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-base text-ink">Consultant Video Booking (In-App WebView Bridge) &amp; Zero-Doc Takeover</h3>
            </div>
            <p className="text-sm text-quiet leading-relaxed mb-4">
              Navigated an <strong className="text-ink">undocumented codebase and backend API</strong> to propose and ship the <strong className="text-ink">Find Your Consultant</strong> booking flow (<code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">YourConsultantScreen.js</code> &amp; <code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">BookConsultantScreen.js</code>): injected a brand-themed <strong className="text-ink">Calendly inline widget inside a custom HTML WebView</strong> pre-filled with the mother&apos;s stored profile (<code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">name</code>, <code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">email</code>) and synced via <code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">onMessage</code> alongside timezone-aware onboarding (<code className="text-indigo-700 dark:text-indigo-300 font-mono text-xs">CalenderModal.js</code>).
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">Calendly WebView Bridge</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">Zero-Doc API Mapping</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">Timezone CalendarModal</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">Mother Onboarding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
