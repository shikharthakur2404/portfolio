import React, { useState } from 'react'
import { HeartPulse, Gamepad2, QrCode, Layers, CheckCircle2, Sparkles } from 'lucide-react'
import { useLocale } from '../../context/useLocale'
import { asset } from '../../lib/asset'

interface HeylimeScreen {
  id: string
  label: string
  src: string
  caption: string
}

const SCREENS: HeylimeScreen[] = [
  {
    id: 'wellness',
    label: 'Wellness',
    src: asset('/assets/heylime/heylime-wellness-all.png'),
    caption: 'iOS 18.0 Simulator · Wellness Activities feed with Mindful Breathing, Desk Stretch & custom bottom tab bar',
  },
  {
    id: 'breathing',
    label: 'Breathing',
    src: asset('/assets/heylime/heylime-breathing.png'),
    caption: 'iOS 18.0 Simulator · Box Breathing Reset & Mindful Breathing quick-start filters',
  },
  {
    id: 'challenges',
    label: 'Challenges',
    src: asset('/assets/heylime/heylime-challenges.png'),
    caption: 'iOS 18.0 Simulator · Cooperative 1000 Min Meditation & Daily Hydration challenges',
  },
  {
    id: 'qr-pairing',
    label: 'QR Scanner',
    src: asset('/assets/heylime/heylime-qr-scan.png'),
    caption: 'iOS 18.0 Simulator · Live camera QR viewfinder pairing overlay with fallback PIN entry',
  },
  {
    id: 'profile',
    label: 'Team Tier',
    src: asset('/assets/heylime/heylime-profile.png'),
    caption: 'iOS 18.0 Simulator · Game Apart Sound engine toggles & Team Premium tier access',
  },
]

const TECH_TAGS = [
  'React Native',
  'Zero-Doc Brownfield Takeover',
  'Custom AV Engine & Autorotate',
  'Onboarding & Tab Bar Revamp',
  'AWS Amplify & Cognito',
  'Redux & Redux-Persist',
  'QR Code Fast-Pairing',
]

export const HeylimeSection: React.FC = () => {
  const { t } = useLocale()
  const [activeScreenIndex, setActiveScreenIndex] = useState(0)
  const currentScreen = SCREENS[activeScreenIndex]

  return (
    <section id="heylime" className="mb-28 scroll-mt-24">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-lime-50 dark:bg-lime-500/10 border border-lime-200 dark:border-lime-500/20 text-lime-600 dark:text-lime-400">
          <HeartPulse className="w-5 h-5" />
        </div>
        <span className="font-mono text-xs text-lime-600 dark:text-lime-400 tracking-widest uppercase font-semibold">
          {t('heylime.kicker')}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">{t('heylime.title')}</h2>
          <p className="text-quiet max-w-3xl mt-2 leading-relaxed">{t('heylime.lede')}</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-lime-700 dark:text-lime-300 bg-lime-50 dark:bg-lime-950/60 px-4 py-2 rounded-lg border border-lime-200 dark:border-lime-500/30 self-start lg:self-auto shrink-0">
          <span className="w-2 h-2 rounded-full bg-lime-500 dark:bg-lime-400" />
          {t('heylime.status')}
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
            <div className="mb-5 p-3 rounded-xl bg-subtle border border-line/60 flex items-center justify-between gap-3">
              <img src={asset('/assets/heylime/gameapart-logo.png')} alt="GameApart Logo" className="h-6 w-auto object-contain dark:invert" />
              <div className="flex items-center gap-1.5 font-mono text-xs text-faint">
                <span>➔</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-panel border border-line text-quiet">2021 – 2022</span>
                <span>➔</span>
              </div>
              <img src={asset('/assets/heylime/heylime-logo.png')} alt="heyLiME Logo" className="h-6 w-auto object-contain" />
            </div>

            <div className="mb-4 grid grid-cols-5 gap-1 p-1 rounded-lg bg-subtle border border-line">
              {SCREENS.map((screen, idx) => (
                <button
                  key={screen.id}
                  type="button"
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`py-1 px-1 sm:px-2 text-center font-mono text-[10px] sm:text-[11px] rounded-md transition-all cursor-pointer truncate ${
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
              <div className="p-2 rounded-lg bg-lime-50 dark:bg-lime-500/10 text-lime-600 dark:text-lime-400 border border-lime-200 dark:border-lime-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-base text-ink">Wellness Suite, Custom AV Autorotate &amp; UI Revamp</h3>
            </div>
            <p className="text-sm text-quiet leading-relaxed mb-4">
              Spearheaded the <strong className="text-ink">Heylime Wellness</strong> vertical (<code className="text-lime-700 dark:text-lime-300 font-mono text-xs">WellnessScreen</code>, <code className="text-lime-700 dark:text-lime-300 font-mono text-xs">WellnessChallenges</code>), revamped the multi-step <strong className="text-ink">Onboarding</strong> flow, and built the custom <strong className="text-ink">Bottom Tab Bar</strong> (<code className="text-lime-700 dark:text-lime-300 font-mono text-xs">TabNavigator.js</code>). Engineered a 1,418-LOC custom video player (<code className="text-lime-700 dark:text-lime-300 font-mono text-xs">MoVideoPlayer.js</code>) with hardware-locked landscape autorotation (<code className="text-lime-700 dark:text-lime-300 font-mono text-xs">react-native-orientation-locker</code>) and forked audio controller (<code className="text-lime-700 dark:text-lime-300 font-mono text-xs">vendor/react-native-simple-audio-player</code>).
            </p>
            <div className="space-y-1.5 text-xs font-mono text-quiet mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
                <span>Custom 1,418-LOC video player with 90° matrix &amp; orientation-lock fullscreen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
                <span>Full onboarding revamp, custom bottom navigation &amp; cooperative habit challenges</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">MoVideoPlayer (1.4k LOC)</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">Orientation Autorotate</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">Onboarding &amp; Tab Bar</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-panel border border-line hover:border-strong transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-lime-50 dark:bg-lime-500/10 text-lime-600 dark:text-lime-400 border border-lime-200 dark:border-lime-500/20">
                <Gamepad2 className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-base text-ink">Zero-Doc Brownfield Takeover &amp; 30+ Party Game Engine</h3>
            </div>
            <p className="text-sm text-quiet leading-relaxed mb-4">
              Inherited a sprawling multi-developer codebase across 30+ synchronized party games (<strong className="text-ink">GIFs Against Humanity</strong>, <strong className="text-ink">Lightning Trivia</strong>, <strong className="text-ink">Charty Party</strong>) with <strong className="text-ink">zero documentation or architectural handoff</strong>. Reverse-engineered the undocumented Redux state machines, room-sync sockets, and API contracts directly from raw source to ship the Heylime pivot cleanly.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">Zero-Doc Reverse Engineering</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">30+ Game Modules</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">Redux State Machine</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-panel border border-line hover:border-strong transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-lime-50 dark:bg-lime-500/10 text-lime-600 dark:text-lime-400 border border-lime-200 dark:border-lime-500/20">
                <QrCode className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-base text-ink">Cloud Auth &amp; Camera Fast-Pairing</h3>
            </div>
            <p className="text-sm text-quiet leading-relaxed mb-4">
              Secured with <strong className="text-ink">AWS Cognito</strong> identity pools and <strong className="text-ink">AWS Amplify</strong> cloud services. Eliminates pairing friction via native camera QR scanning (<code className="text-lime-700 dark:text-lime-300 font-mono text-xs">react-native-camera</code>) for instantaneous session joining alongside deep links powered by Branch.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">AWS Cognito Auth</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">QR Scanner Pairing</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">Branch Deep Links</span>
              <span className="px-2 py-0.5 rounded bg-subtle border border-line">Firebase FCM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
