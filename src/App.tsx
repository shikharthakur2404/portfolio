import { ThemeProvider } from './context/ThemeProvider'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { FytlySection } from './components/sections/FytlySection'
import { EmergencyMeshSection } from './components/sections/EmergencyMeshSection'
import { ResearchSection } from './components/sections/ResearchSection'
import { CoverLetterSection } from './components/sections/CoverLetterSection'
import { GlowCommentsSection } from './components/sections/GlowCommentsSection'
import { GraphicsSection } from './components/sections/GraphicsSection'
import { CapabilitiesSection } from './components/sections/CapabilitiesSection'

const BackgroundGlow: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-500/10 dark:from-cyan-600/15 via-indigo-500/10 dark:via-indigo-600/10 to-transparent blur-[140px] rounded-full" />
    <div className="absolute top-[40%] -right-40 w-[600px] h-[500px] bg-gradient-to-b from-purple-500/10 dark:from-purple-600/10 to-transparent blur-[160px] rounded-full" />
  </div>
)

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#060913] text-slate-900 dark:text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 transition-colors duration-200">
        <BackgroundGlow />
        <Navbar />

        <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-28">
          <HeroSection />
          <FytlySection />
          <EmergencyMeshSection />
          <ResearchSection />
          <CoverLetterSection />
          <GlowCommentsSection />
          <GraphicsSection />
          <CapabilitiesSection />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  )
}
