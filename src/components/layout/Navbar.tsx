import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/useTheme'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'

export const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#060913]/80 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Monogram */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-xs text-white shadow-lg shadow-cyan-500/20">
            ST
          </div>
          <div>
            <span className="font-mono text-sm font-semibold tracking-wider text-slate-800 dark:text-slate-200">
              SHIKHAR THAKUR
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-mono text-slate-500">
              // SYSTEMS & MOBILE
            </span>
          </div>
        </div>

        {/* Navigation & Controls */}
        <nav className="flex items-center gap-5 sm:gap-6 text-sm font-mono text-slate-600 dark:text-slate-400">
          <a href="#fytly" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hidden sm:block">
            FytlY
          </a>
          <a href="#emergency-mesh" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors hidden sm:block">
            Emergency Mesh
          </a>
          <a href="#research" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hidden sm:block">
            Research
          </a>
          <a href="#cover-letter-printer" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors hidden sm:block">
            Pipeline
          </a>
          <a href="#glow-comments" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors hidden sm:block">
            Glow Comments
          </a>
          <a href="#particle-triad" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors hidden md:block">
            Graphics
          </a>

          <div className="h-4 w-px bg-slate-300 dark:bg-slate-800 hidden sm:block" />

          {/* Theme Mode Toggle */}
          <button
            onClick={toggleTheme}
            type="button"
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300/80 dark:border-slate-700 transition-all cursor-pointer flex items-center justify-center"
            title={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
            aria-label="Toggle display theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/shikharthakur2404"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/shikhar2404"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
