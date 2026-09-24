import React from 'react'
import { ArrowLeft } from 'lucide-react'
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
        className="mb-8 inline-flex items-center gap-2 text-quiet underline decoration-line underline-offset-4 hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('fytly.page.back')}
      </a>

      <p className="mb-3 text-faint">{t('fytly.kicker')}</p>
      <h1 className="max-w-[18ch] text-[clamp(2.5rem,5vw,4.5rem)] text-ink">{t('fytly.page.title')}</h1>
      <p className="mt-5 max-w-[42rem] text-quiet">{t('fytly.page.lede')}</p>

      <p className="mt-3 text-faint">{t('fytly.page.note')}</p>

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
