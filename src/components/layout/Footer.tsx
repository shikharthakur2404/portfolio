import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500 dark:text-slate-400 transition-colors">
      <div>
        © {new Date().getFullYear()} Shikhar Thakur. Built with React 19 & Tailwind.
      </div>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/shikharthakur2404"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/shikhar2404"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:shikhar3924@gmail.com"
          className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          shikhar3924@gmail.com
        </a>
      </div>
    </footer>
  )
}
