import React from 'react'

export type MeshScreen = 'radar' | 'sos' | 'familie' | 'orte'

const Block: React.FC<{ kicker: string; body: string; meta?: string }> = ({ kicker, body, meta }) => (
  <div className="border-t border-[#3d4a32] py-3">
    <div className="text-[11px] tracking-[0.16em] text-[#9bbf7a]">{kicker}</div>
    <p className="mt-1 whitespace-pre-line text-[#e7f6d4]">{body}</p>
    {meta && <div className="mt-1 text-[#9bbf7a]">{meta}</div>}
  </div>
)

export const TacticalScreen: React.FC<{ screen: MeshScreen }> = ({ screen }) => {
  return (
    <div className="terminal flex h-full w-full flex-col bg-[#070807] p-5 text-[#e7f6d4]">
      {screen === 'radar' && (
        <>
          <div className="mb-4 text-xs tracking-[0.18em] text-[#9bbf7a]">NOTFUNK NÜRNBERG · 3 NACHBARN</div>
          <Block kicker="FAMILIE" body={'Alle sicher am Hauptmarkt.\nTrinkwasser geholt.'} meta="vor 8 min · OK" />
          <Block
            kicker="SCHÖNER BRUNNEN"
            body="Handpumpe fördert sauberes Trinkwasser."
            meta="vor 14 min · 300m · BESTÄTIGEN"
          />
        </>
      )}
      {screen === 'sos' && (
        <>
          <div className="mb-4 text-xs tracking-[0.18em] text-[#9bbf7a]">NOTRUF SENDEN</div>
          <p className="mb-4 text-[#cfe8b8]">Wenn Mobilfunk da ist: zuerst 112. Dieses Netz ist Ausfallschutz.</p>
          <Block kicker="MEDIZINISCH" body="Schwere Verletzung, Bewusstlosigkeit." meta="AUSLÖSEN" />
          <Block kicker="FEUER" body="Feuer & Rauch" />
          <Block kicker="VERSCHÜTTET" body="Verschüttet & Eingeklemmt" />
          <Block kicker="VERSORGUNG" body="Trinkwasser & Nahrung" />
        </>
      )}
      {screen === 'familie' && (
        <>
          <div className="mb-4 text-xs tracking-[0.18em] text-[#9bbf7a]">FAMILIEN-STATUS · E2E</div>
          <Block kicker="CODEWORT" body="Familie-Nbg-2026" meta="AKTIV VERBUNDEN" />
          <Block kicker="NAME" body="Papa" />
          <Block kicker="STATUS" body={'Bin sicher am Hauptmarkt.\nTrinkwasser geholt.'} meta="GESCHÜTZT SENDEN" />
        </>
      )}
      {screen === 'orte' && (
        <>
          <div className="mb-4 text-xs tracking-[0.18em] text-[#9bbf7a]">NOTFALL-ORTE · OFFLINE</div>
          <p className="mb-2 text-[#9bbf7a]">ALLE 38 · WASSER 18 · KLINIK 6 · STROM 4</p>
          <Block kicker="BRUNNEN-NR. 14 · 450m" body="Schöner Brunnen / Hauptmarkt" meta="EINSATZBEREIT · ABKOCHEN" />
          <Block kicker="KLINIKUM NORD · 1.8km" body="Notstrom aktiv. Notaufnahme geöffnet." />
          <Block kicker="LORENZKIRCHE · 800m" body="Notstrom-Ladepunkt" meta="AKTIV 08:00–18:00" />
        </>
      )}
    </div>
  )
}
