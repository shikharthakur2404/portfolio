import React from 'react'

export interface StatTileProps {
  value: string
  label: string
  domain?: 'cyan' | 'indigo' | 'purple' | 'emerald' | 'rose'
  className?: string
}

export const StatTile: React.FC<StatTileProps> = ({
  value,
  label,
  domain: _domain = 'cyan',
  className = '',
}) => {
  return (
    <div className={className}>
      <div className="font-serif text-3xl text-ink">{value}</div>
      <div className="mt-1 text-sm text-faint">{label}</div>
    </div>
  )
}
