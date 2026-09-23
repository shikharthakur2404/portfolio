import React from 'react'

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="mb-28">
      <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Core Engineering Capabilities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          <div>
            <div className="text-cyan-600 dark:text-cyan-400 font-bold mb-3 uppercase tracking-wider">
              // Mobile Ecosystem
            </div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>React Native (0.77+)</li>
              <li>Offline P2P Mesh / UDP</li>
              <li>Redux-Saga &amp; Zustand</li>
              <li>Native Modules &amp; Android SDK</li>
            </ul>
          </div>
          <div>
            <div className="text-indigo-600 dark:text-indigo-400 font-bold mb-3 uppercase tracking-wider">
              // Visual Computing
            </div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>Metal Shading Language (MSL)</li>
              <li>WebGL2 / Three.js / R3F</li>
              <li>Postprocessing Pipelines</li>
              <li>3D Vector Fields / Curl Noise</li>
            </ul>
          </div>
          <div>
            <div className="text-purple-600 dark:text-purple-400 font-bold mb-3 uppercase tracking-wider">
              // Systems &amp; Cryptography
            </div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>AES-256-CBC &amp; HMAC-SHA256</li>
              <li>DTN Store-and-Forward Relay</li>
              <li>TypeScript / Swift / Python</li>
              <li>Cursor Skills Architecture</li>
            </ul>
          </div>
          <div>
            <div className="text-emerald-600 dark:text-emerald-400 font-bold mb-3 uppercase tracking-wider">
              // Education &amp; Global
            </div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li>M.Sc. Information Systems (IIS)</li>
              <li>Nuremberg / Bavaria, Germany</li>
              <li>English C1 (IELTS Academic)</li>
              <li>German B1</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
