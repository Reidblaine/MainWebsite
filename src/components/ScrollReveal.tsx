'use client'

import { ReactNode, useEffect, useRef } from 'react'
import anime from '@/lib/anime'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  revealFrom?: 'left' | 'right' | 'bottom' | 'top'
  delay?: number
  duration?: number
  threshold?: number
}

export default function ScrollReveal({
  children,
  className = '',
  revealFrom = 'bottom',
  delay = 0,
  duration = 800,
  threshold = 0.1
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    
    // Initial state is invisible
    element.style.opacity = '0'
    
    // Define transform based on reveal direction
    let initialTransform = ''
    switch (revealFrom) {
      case 'left':
        initialTransform = 'translateX(-50px)'
        break
      case 'right':
        initialTransform = 'translateX(50px)'
        break
      case 'top':
        initialTransform = 'translateY(-50px)'
        break
      case 'bottom':
        initialTransform = 'translateY(50px)'
        break
    }
    element.style.transform = initialTransform

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            
            anime({
              targets: element,
              opacity: 1,
              translateX: revealFrom === 'left' ? 0 : revealFrom === 'right' ? 0 : undefined,
              translateY: revealFrom === 'top' ? 0 : revealFrom === 'bottom' ? 0 : undefined,
              delay: delay,
              duration: duration,
              easing: 'easeOutQuad'
            })
            
            // Unobserve after animation
            observer.unobserve(element)
          }
        })
      },
      { threshold }
    )

    observer.observe(element)

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect()
    }
  }, [revealFrom, delay, duration, threshold])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
} 