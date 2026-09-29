import React, { useState } from 'react'
import { ThemeProvider } from './context/ThemeProvider'
import { LocaleProvider } from './context/LocaleProvider'
import { useHashRoute } from './hooks/useHashRoute'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { QrModal } from './components/ui/QrModal'
import { HeroSection } from './components/sections/HeroSection'
import { FytlySection } from './components/sections/FytlySection'
import { TaskOrbitSection } from './components/sections/TaskOrbitSection'
import { EmergencyMeshSection } from './components/sections/EmergencyMeshSection'
import { ResearchSection } from './components/sections/ResearchSection'
import { GlowCommentsSection } from './components/sections/GlowCommentsSection'
import { CapabilitiesSection } from './components/sections/CapabilitiesSection'
import { FytlyPage } from './pages/FytlyPage'
import { TaskOrbitPage } from './pages/TaskOrbitPage'

const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <FytlySection />
    <TaskOrbitSection />
    <EmergencyMeshSection />
    <ResearchSection />
    <GlowCommentsSection />
    <CapabilitiesSection />
  </>
)

const Shell: React.FC = () => {
  const route = useHashRoute()
  const [isQrOpen, setIsQrOpen] = useState(false)

  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <Navbar onOpenQr={() => setIsQrOpen(true)} />
      <main className="frame relative z-10 pb-20 pt-4">
        {route === 'fytly' ? (
          <FytlyPage />
        ) : route === 'taskorbit' ? (
          <TaskOrbitPage />
        ) : (
          <HomePage />
        )}
        <Footer onOpenQr={() => setIsQrOpen(true)} />
      </main>
      <QrModal isOpen={isQrOpen} onClose={() => setIsQrOpen(false)} />
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
