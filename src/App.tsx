import React, { Suspense } from 'react'
import { ThemeProvider } from './context/ThemeProvider'
import { LocaleProvider } from './context/LocaleProvider'
import { useLocale } from './context/useLocale'
import { useHashRoute } from './hooks/useHashRoute'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { FytlySection } from './components/sections/FytlySection'
import { EmergencyMeshSection } from './components/sections/EmergencyMeshSection'
import { ResearchSection } from './components/sections/ResearchSection'
import { GlowCommentsSection } from './components/sections/GlowCommentsSection'
import { CapabilitiesSection } from './components/sections/CapabilitiesSection'
import { FytlyPage } from './pages/FytlyPage'

const GraphicsSection = React.lazy(() =>
  import('./components/sections/GraphicsSection').then(m => ({ default: m.GraphicsSection }))
)

const GraphicsFallback: React.FC = () => {
  const { t } = useLocale()
  return <div className="mb-28 border border-line p-8 text-center text-faint">{t('loading.graphics')}</div>
}

const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <FytlySection />
    <EmergencyMeshSection />
    <ResearchSection />
    <GlowCommentsSection />
    <Suspense fallback={<GraphicsFallback />}>
      <GraphicsSection />
    </Suspense>
    <CapabilitiesSection />
  </>
)

const Shell: React.FC = () => {
  const route = useHashRoute()

  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main className="frame relative z-10 pb-20 pt-4">
        {route === 'fytly' ? <FytlyPage /> : <HomePage />}
        <Footer />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <Shell />
      </LocaleProvider>
    </ThemeProvider>
  )
}
