import React from 'react'

export type DomainColor = 'cyan' | 'rose' | 'indigo' | 'emerald' | 'purple' | 'amber' | 'slate'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  domain?: DomainColor
  pulse?: boolean
  size?: 'sm' | 'md'
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  domain: _domain = 'slate',
  pulse = false,
  size = 'sm',
  className = '',
  ...props
}) => {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'

  return (
    <span
      className={`inline-flex items-center gap-1.5 border border-line bg-subtle text-quiet ${sizeClasses} ${className}`}
      {...props}
    >
      {pulse && <span className="h-1.5 w-1.5 rounded-full bg-faint" aria-hidden="true" />}
      {children}
    </span>
  )
}
