import React from 'react'

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  className = '',
}) => {
  if (orientation === 'vertical') {
    return (
      <div className={`h-4 w-px bg-line ${className}`} role="separator" aria-orientation="vertical" />
    )
  }

  return <hr className={`my-8 border-0 border-t border-line ${className}`} role="separator" />
}
