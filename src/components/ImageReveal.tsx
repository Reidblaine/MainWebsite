'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import anime from '@/lib/anime'

interface ImageRevealProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  revealDirection?: 'left' | 'right' | 'top' | 'bottom'
  delay?: number
  duration?: number
}

export default function ImageReveal({
  src,
  alt,
  width = 400,
  height = 300,
  className = '',
  revealDirection = 'left',
  delay = 300,
  duration = 1200
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current) return

    // Set initial state for the overlay
    const overlay = overlayRef.current
    
    // Define animation properties based on direction
    let translateFrom = {}
    
    switch (revealDirection) {
      case 'left':
        translateFrom = { translateX: '-100%' }
        break
      case 'right':
        translateFrom = { translateX: '100%' }
        break
      case 'top':
        translateFrom = { translateY: '-100%' }
        break
      case 'bottom':
        translateFrom = { translateY: '100%' }
        break
    }
    
    // Setup the container animation
    anime({
      targets: containerRef.current,
      opacity: [0, 1],
      scale: [0.9, 1],
      delay: delay,
      duration: duration / 2,
      easing: 'easeOutSine'
    })
    
    // Setup the reveal animation
    anime({
      targets: overlay,
      ...translateFrom,
      translateX: '100%',
      translateY: '0%',
      easing: 'easeInOutQuart',
      delay: delay + 100,
      duration: duration
    })
  }, [revealDirection, delay, duration])

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height, opacity: 0 }}
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={`(max-width: 768px) 100vw, ${width}px`}
        />
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-blue-500 z-10"
          style={{ 
            transform: revealDirection === 'left' || revealDirection === 'right' 
              ? 'translateX(0%)' 
              : 'translateY(0%)'
          }}
        ></div>
      </div>
    </div>
  )
} 