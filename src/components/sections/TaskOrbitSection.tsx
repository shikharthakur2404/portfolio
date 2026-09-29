import React from 'react'
import { Bot, Activity, GitPullRequest, ArrowRight, ExternalLink } from 'lucide-react'
import { useLocale } from '../../context/useLocale'
import { Button } from '../ui/primitives/Button'
import { asset } from '../../lib/asset'

export const TaskOrbitSection: React.FC = () => {
  const { t } = useLocale()

  return (
    <section id="taskorbit" className="mb-28 scroll-mt-24">
      {/* Section Header Tag */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-panel border border-line text-ink">
          <Bot className="w-5 h-5" />
        </div>
        <span className="font-mono text-xs text-quiet tracking-widest uppercase">
          {t('taskorbit.kicker')}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
            {t('taskorbit.title')}
          </h2>
          <p className="text-quiet max-w-3xl mt-2">
            {t('taskorbit.lede')}
          </p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-quiet bg-subtle px-4 py-2 border border-line self-start lg:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          {t('taskorbit.badge')}
        </div>
      </div>

      {/* Architectural Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Voice Card */}
        <div className="p-6 rounded-2xl bg-panel border border-line hover:border-strong transition-colors">
          <div className="w-10 h-10 rounded-xl bg-subtle border border-line flex items-center justify-center text-ink mb-4 font-mono text-xs font-bold">
            VOX
          </div>
          <h3 className="text-lg font-bold text-ink mb-2">{t('taskorbit.card.voice.title')}</h3>
          <p className="text-sm text-quiet leading-relaxed mb-4">
            {t('taskorbit.card.voice.desc')}
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">LiveKit</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">WebRTC Audio</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">FastAPI</span>
          </div>
        </div>

        {/* Telemetry Card */}
        <div className="p-6 rounded-2xl bg-panel border border-line hover:border-strong transition-colors">
          <div className="w-10 h-10 rounded-xl bg-subtle border border-line flex items-center justify-center text-ink mb-4 font-mono text-xs font-bold">
            <Activity className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-ink mb-2">{t('taskorbit.card.telemetry.title')}</h3>
          <p className="text-sm text-quiet leading-relaxed mb-4">
            {t('taskorbit.card.telemetry.desc')}
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">Grafana</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">Prometheus</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">Loki Logs</span>
          </div>
        </div>

        {/* Scrum Card */}
        <div className="p-6 rounded-2xl bg-panel border border-line hover:border-strong transition-colors">
          <div className="w-10 h-10 rounded-xl bg-subtle border border-line flex items-center justify-center text-ink mb-4 font-mono text-xs font-bold">
            <GitPullRequest className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-ink mb-2">{t('taskorbit.card.scrum.title')}</h3>
          <p className="text-sm text-quiet leading-relaxed mb-4">
            {t('taskorbit.card.scrum.desc')}
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-quiet">
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">645 Commits</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">SBOM Audit</span>
            <span className="px-2 py-0.5 rounded bg-subtle border border-line">FAU AMOS</span>
          </div>
        </div>
      </div>

      {/* Dual Preview Showcase Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-panel border border-line">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-quiet mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-600" />
              VOICE AGENT &amp; PIPELINE OBSERVABILITY
            </div>
            <h4 className="text-2xl font-bold text-ink mb-3 font-serif">
              Conversational Voice Frontend &amp; Live Telemetry
            </h4>
            <p className="text-sm text-quiet leading-relaxed mb-6">
              Production voice runtime paired with real-time Grafana metric streams. Live audio pipelines require sub-second end-to-end feedback loops — from speech recognition to LLM inference and synthetic voice playback.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asLink href="#/taskorbit" variant="primary" size="md">
                <span>{t('taskorbit.open')}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <a
                href="https://github.com/amosproj/amos2026ss04-taskorbit-conversational-agent"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-subtle hover:bg-hover text-ink font-mono text-xs transition-colors flex items-center gap-2 border border-line"
              >
                <span>{t('taskorbit.repo')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <figure className="overflow-hidden rounded-xl border border-line bg-paper">
              <img
                src={asset('/assets/taskorbit/taskorbit_voice_runtime.png')}
                alt="TaskOrbit Voice Agent Runtime Interface"
                className="w-full h-44 object-cover object-top hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <figcaption className="p-2 text-[11px] font-mono text-faint truncate bg-subtle/50">
                Voice Agent Runtime
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl border border-line bg-paper">
              <img
                src={asset('/assets/taskorbit/taskorbit_grafana_telemetry.png')}
                alt="TaskOrbit Live Grafana Telemetry Dashboard"
                className="w-full h-44 object-cover object-top hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <figcaption className="p-2 text-[11px] font-mono text-faint truncate bg-subtle/50">
                Grafana Latency Telemetry
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
