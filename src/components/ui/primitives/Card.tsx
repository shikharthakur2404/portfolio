import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'panel' | 'subtle' | 'code'
  domain?: 'cyan' | 'rose' | 'indigo' | 'emerald' | 'purple' | 'amber' | 'default'
  hoverEffect?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'panel',
  domain: _domain = 'default',
  hoverEffect = false,
  className = '',
  ...props
}) => {
  const variantStyles = {
    panel: 'bg-panel border border-line',
    subtle: 'bg-subtle border border-line',
    code: 'bg-[#141311] border border-line text-xs text-[#f3efe6]',
  }[variant]

  const hoverStyle = hoverEffect ? 'hover:border-strong' : ''

  return (
    <div className={`rounded-lg ${variantStyles} ${hoverStyle} ${className}`} {...props}>
      {children}
    </div>
  )
}
