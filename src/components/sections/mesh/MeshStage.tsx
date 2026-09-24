import React, { useState } from 'react'
import { useLocale } from '../../../context/useLocale'
import { TacticalScreen, type MeshScreen } from './TacticalScreen'
import { asset } from '../../../lib/asset'

const shots: { id: MeshScreen; src: string; alt: string }[] = [
  { id: 'radar', src: asset('/assets/emergency-mesh/radar.jpg'), alt: 'Notfunk Nürnberg, Radar' },
  { id: 'sos', src: asset('/assets/emergency-mesh/sos.jpg'), alt: 'Notruf senden' },
  { id: 'familie', src: asset('/assets/emergency-mesh/familie.jpg'), alt: 'Familien-Status' },
  { id: 'orte', src: asset('/assets/emergency-mesh/orte.jpg'), alt: 'Notfall-Orte' },
]

export const MeshStage: React.FC = () => {
  const { t } = useLocale()
  const [mode, setMode] = useState<'civic' | 'tactical'>('civic')
  const [screen, setScreen] = useState<MeshScreen>('sos')
  const current = shots.find(shot => shot.id === screen) ?? shots[1]

  const labels: Record<MeshScreen, string> = {
    radar: t('mesh.radar'),
    sos: t('mesh.sos'),
    familie: t('mesh.family'),
    orte: t('mesh.places'),
  }

  return (
    <div className="mb-8 border border-line bg-panel p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex gap-6" role="tablist" aria-label="Interface">
          {(['civic', 'tactical'] as const).map(item => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={mode === item}
              onClick={() => setMode(item)}
              className={`cursor-pointer border-b pb-1 text-base ${
                mode === item ? 'border-ink text-ink' : 'border-transparent text-faint hover:text-ink'
              }`}
            >
              {item === 'civic' ? t('mesh.civic') : t('mesh.tactical')}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-4" role="tablist" aria-label="Screen">
          {shots.map(shot => (
            <button
              key={shot.id}
              type="button"
              role="tab"
              aria-selected={screen === shot.id}
              onClick={() => setScreen(shot.id)}
              className={`cursor-pointer text-base ${screen === shot.id ? 'text-ink' : 'text-faint hover:text-ink'}`}
            >
              {labels[shot.id]}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="h-[34rem] w-[20rem] overflow-hidden border border-line bg-[#070807] sm:h-[38rem] sm:w-[22rem]">
          {mode === 'civic' ? (
            <img src={current.src} alt={current.alt} className="h-full w-full object-contain" />
          ) : (
            <TacticalScreen screen={screen} />
          )}
        </div>
        <p className="text-center text-quiet">{mode === 'civic' ? t('mesh.note.civic') : t('mesh.note.tactical')}</p>
      </div>
    </div>
  )
}
