import React from 'react'
import { ArrowLeft, ExternalLink, Bot, Mic, ShieldAlert, Activity, Users } from 'lucide-react'
import { useLocale } from '../context/useLocale'
import { asset } from '../lib/asset'

interface GalleryItem {
  src: string
  alt: string
  label: string
  description: string
}

export const TaskOrbitPage: React.FC = () => {
  const { t } = useLocale()

  const runtimeScreens: GalleryItem[] = [
    {
      src: asset('/assets/taskorbit/taskorbit_voice_runtime.png'),
      alt: 'TaskOrbit Voice Agent Frontend Runtime Interface',
      label: 'Voice Agent Runtime UI',
      description: 'Low-latency conversational agent interface with speech-to-speech feedback, LiveKit audio stream synchronization, and dynamic prompt orchestration.',
    },
    {
      src: asset('/assets/taskorbit/taskorbit_workflow_engine.png'),
      alt: 'TaskOrbit Conditional Workflow Engine',
      label: 'Conditional Workflow Engine',
      description: 'Visual DAG orchestration engine routing customer inquiries through conditional branch logic, dynamic function calling, and escalation triggers.',
    },
  ]

  const guardrailScreens: GalleryItem[] = [
    {
      src: asset('/assets/taskorbit/taskorbit_agent_config.png'),
      alt: 'TaskOrbit Agent Personality and System Prompt Configuration',
      label: 'Agent Personality & Prompt Studio',
      description: 'Granular system prompt configuration, persona tone tuning, model parameter controls (temperature, top_p), and role definitions.',
    },
    {
      src: asset('/assets/taskorbit/taskorbit_persona_guardrails.png'),
      alt: 'TaskOrbit Behavioral Boundary Controls & Safety Rules',
      label: 'Behavioral Boundary Controls',
      description: 'Strict policy enforcement guardrails blocking sensitive disclosures, unverified claims, and off-topic hallucination drifts.',
    },
    {
      src: asset('/assets/taskorbit/taskorbit_advanced_settings.png'),
      alt: 'TaskOrbit VAD and Memory Buffer Threshold Settings',
      label: 'VAD & Audio Buffer Controls',
      description: 'Fine-tuned Voice Activity Detection (VAD) thresholds, silence cutoffs, and sliding-window conversational memory buffers.',
    },
  ]

  const telemetryScreens: GalleryItem[] = [
    {
      src: asset('/assets/taskorbit/taskorbit_grafana_telemetry.png'),
      alt: 'TaskOrbit Live Latency Telemetry & Pipeline Metrics in Grafana',
      label: 'Grafana Latency Telemetry',
      description: 'End-to-end pipeline latency metrics tracing audio ingress, VAD triggers, speech-to-text conversion, LLM TTFT, and audio playback turnaround.',
    },
    {
      src: asset('/assets/taskorbit/taskorbit_benchmark_dashboard.png'),
      alt: 'TaskOrbit Offline Pipeline Benchmarking Panel',
      label: 'Evaluation & Benchmarking Suite',
      description: 'Automated test harness evaluating intent resolution accuracy, response coherency scores, and regression test suites across releases.',
    },
    {
      src: asset('/assets/taskorbit/taskorbit_oss_models_metrics.png'),
      alt: 'TaskOrbit Ollama Open-Source Runtime Performance Metrics',
      label: 'Local OSS Model Metrics',
      description: 'Hardware throughput telemetry benchmarking local Ollama open-source models versus cloud API endpoints under sustained load.',
    },
  ]

  const scrumScreens: GalleryItem[] = [
    {
      src: asset('/assets/taskorbit/taskorbit_team_meeting.png'),
      alt: 'AMOS Engineering Squad Weekly Scrum Sync',
      label: '12-Person Engineering Squad',
      description: 'Weekly Scrum ceremonies, Miro backlog grooming, sprint reviews, and architectural alignment across 12 international software engineers.',
    },
    {
      src: asset('/assets/taskorbit/taskorbit_demo_day_presentation.png'),
      alt: 'FAU AMOS Demo Day Live Showcase',
      label: 'FAU AMOS Demo Day Presentation',
      description: 'Live delivery and technical demonstration of TaskOrbit to academic supervisors, industry reviewers, and peer engineering squads at FAU.',
    },
    {
      src: asset('/assets/taskorbit/taskorbit_demo_slide.png'),
      alt: 'TaskOrbit System Architecture Slide Isolate',
      label: 'Architecture & System Blueprint',
      description: 'Technical presentation isolate highlighting the microservice boundaries, WebRTC live audio pipelines, and deployment topology.',
    },
  ]

  return (
    <article className="pb-16 pt-6">
      {/* Back button */}
      <a
        href="#top"
        className="mb-8 inline-flex items-center gap-2 text-quiet underline decoration-line underline-offset-4 hover:text-ink font-mono text-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('taskorbit.page.back')}
      </a>

      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-panel border border-line text-ink">
          <Bot className="w-5 h-5" />
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-faint">
          {t('taskorbit.page.kicker')}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
        <div>
          <h1 className="max-w-[20ch] text-[clamp(2.5rem,5vw,4.5rem)] text-ink font-serif font-bold leading-tight">
            {t('taskorbit.page.title')}
          </h1>
          <p className="mt-4 max-w-[44rem] text-quiet text-base sm:text-lg leading-relaxed">
            {t('taskorbit.page.lede')}
          </p>
        </div>

        <a
          href="https://github.com/amosproj/amos2026ss04-taskorbit-conversational-agent"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-4 py-2.5 font-mono text-xs text-ink hover:bg-hover transition-colors shrink-0"
        >
          <span>{t('taskorbit.repo')}</span>
          <ExternalLink className="h-3.5 w-3.5 text-quiet" />
        </a>
      </div>

      <p className="border-l-2 border-line pl-4 text-xs sm:text-sm text-faint max-w-3xl mb-10">
        {t('taskorbit.page.note')}
      </p>

      {/* Engineering Telemetry Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 border-y border-line py-6 mb-16">
        <div>
          <dt className="font-mono text-xs text-faint">{t('taskorbit.page.stat.team.label')}</dt>
          <dd className="font-serif text-2xl font-bold text-ink mt-1">{t('taskorbit.page.stat.team')}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-faint">{t('taskorbit.page.stat.commits.label')}</dt>
          <dd className="font-serif text-2xl font-bold text-ink mt-1">{t('taskorbit.page.stat.commits')}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-faint">{t('taskorbit.page.stat.loc.label')}</dt>
          <dd className="font-serif text-2xl font-bold text-ink mt-1">{t('taskorbit.page.stat.loc')}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-faint">{t('taskorbit.page.stat.stack.label')}</dt>
          <dd className="font-serif text-2xl font-bold text-ink mt-1">{t('taskorbit.page.stat.stack')}</dd>
        </div>
      </div>

      {/* Section 1: Voice Runtime & Workflows */}
      <section className="mb-20">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-quiet">
          <Mic className="w-4 h-4 text-ink" /> PILLAR 01
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-2">
          {t('taskorbit.pillar1.title')}
        </h2>
        <p className="text-sm sm:text-base text-quiet max-w-3xl mb-8">
          {t('taskorbit.pillar1.body')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {runtimeScreens.map(item => (
            <figure key={item.src} className="rounded-2xl border border-line bg-panel p-4 flex flex-col justify-between">
              <div className="overflow-hidden rounded-xl border border-line bg-paper mb-4">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-72 sm:h-80 object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-sans font-bold text-base text-ink mb-1">{item.label}</h3>
                <p className="text-xs sm:text-sm text-quiet leading-relaxed">{item.description}</p>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Section 2: Agent Persona & Guardrails */}
      <section className="mb-20">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-quiet">
          <ShieldAlert className="w-4 h-4 text-ink" /> PILLAR 02
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-2">
          {t('taskorbit.pillar2.title')}
        </h2>
        <p className="text-sm sm:text-base text-quiet max-w-3xl mb-8">
          {t('taskorbit.pillar2.body')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guardrailScreens.map(item => (
            <figure key={item.src} className="rounded-2xl border border-line bg-panel p-4 flex flex-col justify-between">
              <div className="overflow-hidden rounded-xl border border-line bg-paper mb-4">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-sans font-bold text-base text-ink mb-1">{item.label}</h3>
                <p className="text-xs sm:text-sm text-quiet leading-relaxed">{item.description}</p>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Section 3: Observability & Benchmarks */}
      <section className="mb-20">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-quiet">
          <Activity className="w-4 h-4 text-ink" /> PILLAR 03
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-2">
          {t('taskorbit.pillar3.title')}
        </h2>
        <p className="text-sm sm:text-base text-quiet max-w-3xl mb-8">
          {t('taskorbit.pillar3.body')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {telemetryScreens.map(item => (
            <figure key={item.src} className="rounded-2xl border border-line bg-panel p-4 flex flex-col justify-between">
              <div className="overflow-hidden rounded-xl border border-line bg-paper mb-4">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-sans font-bold text-base text-ink mb-1">{item.label}</h3>
                <p className="text-xs sm:text-sm text-quiet leading-relaxed">{item.description}</p>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Section 4: Engineering Squad & FAU Demo Day */}
      <section className="mb-20">
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-quiet">
          <Users className="w-4 h-4 text-ink" /> PILLAR 04
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-2">
          {t('taskorbit.pillar4.title')}
        </h2>
        <p className="text-sm sm:text-base text-quiet max-w-3xl mb-8">
          {t('taskorbit.pillar4.body')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scrumScreens.map(item => (
            <figure key={item.src} className="rounded-2xl border border-line bg-panel p-4 flex flex-col justify-between">
              <div className="overflow-hidden rounded-xl border border-line bg-paper mb-4">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-sans font-bold text-base text-ink mb-1">{item.label}</h3>
                <p className="text-xs sm:text-sm text-quiet leading-relaxed">{item.description}</p>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Retrospective Architecture Pillars */}
      <div className="mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
        <div>
          <h3 className="mb-2 font-sans text-base font-bold text-ink">Sub-Second Audio Pipeline</h3>
          <p className="text-sm text-quiet leading-relaxed">
            Integrating LiveKit WebRTC audio directly with low-latency FastAPI endpoints enabled real-time conversational streaming, eliminating round-trip HTTP request bottlenecks.
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-sans text-base font-bold text-ink">Strict Boundary Guardrails</h3>
          <p className="text-sm text-quiet leading-relaxed">
            Rather than relying solely on raw system prompts, our guardrails layer intercepts output tokens to prevent unintended actions, personal data exposure, and prompt injections.
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-sans text-base font-bold text-ink">Agile Open-Source Rigor</h3>
          <p className="text-sm text-quiet leading-relaxed">
            Operated under Prof. Riehle&apos;s AMOS standards — enforcing automated SBOM vulnerability scans, multi-stage CI/CD pipelines, and weekly sprint reviews across 12 engineers.
          </p>
        </div>
      </div>
    </article>
  )
}
