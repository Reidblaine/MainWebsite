'use client'

import { useEffect, useRef, HTMLAttributes } from 'react'
import anime from '@/lib/anime'

interface AnimatedTextProps extends HTMLAttributes<HTMLDivElement> {
  text: string
  className?: string
  delay?: number
  duration?: number
}

export default function AnimatedText({ 
  text, 
  className = '',
  delay = 500,
  duration = 1500,
  ...props
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Split text into individual spans
    const container = containerRef.current
    container.innerHTML = text.split('').map(char => {
      return char === ' ' 
        ? '<span class="whitespace">&nbsp;</span>' 
        : `<span class="char">${char}</span>`
    }).join('')

    // Animate each character
    anime({
      targets: container.querySelectorAll('.char'),
      opacity: [0, 1],
      translateY: [20, 0],
      translateX: [0, 0],
      scale: [0.8, 1],
      delay: anime.stagger(30, { start: delay }),
      duration: duration,
      easing: 'easeOutExpo',
    })
  }, [text, delay, duration])

  return (
    <div 
      ref={containerRef} 
      className={`inline-block ${className}`}
      aria-label={text}
      {...props}
    ></div>
  )
} 