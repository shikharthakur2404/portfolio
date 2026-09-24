import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'rose' | 'indigo' | 'emerald'
  size?: 'sm' | 'md' | 'lg'
  asLink?: boolean
  href?: string
  target?: string
  rel?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 text-base transition-opacity cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-50 disabled:pointer-events-none'

  const sizeStyles = {
    sm: 'px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'px-5 py-2.5',
  }[size]

  const variantStyles = {
    primary: 'bg-ink text-paper hover:opacity-90',
    secondary: 'bg-subtle text-ink border border-line hover:opacity-90',
    outline: 'bg-transparent text-ink border border-line hover:bg-subtle',
    ghost: 'bg-transparent text-quiet hover:text-ink',
    rose: 'bg-ink text-paper hover:opacity-90',
    indigo: 'bg-ink text-paper hover:opacity-90',
    emerald: 'bg-ink text-paper hover:opacity-90',
  }[variant]

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`

  if (asLink && href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </a>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}
