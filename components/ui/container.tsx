import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeMap = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-7xl',
  xl: 'max-w-7xl'
}

export function Container({ children, size = 'lg', className = '' }: ContainerProps) {
  return (
    <div className={`${sizeMap[size]} mx-auto ${className}`}>
      {children}
    </div>
  )
}
