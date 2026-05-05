'use client'
import { ReactNode } from 'react'
import { useReveal } from './useReveal'

type RevealProps = { children: ReactNode; stagger?: boolean; className?: string }

export function Reveal({ children, stagger = false, className = '' }: RevealProps) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`${stagger ? 'reveal-stagger' : 'reveal'} ${className}`.trim()}>
      {children}
    </div>
  )
}
