'use client'

import { ReactNode, useRef, useState } from 'react'
import anime from '@/lib/anime'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
}

export default function AnimatedCard({ children, className = '' }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (!cardRef.current) return

    anime({
      targets: cardRef.current,
      scale: 1.03,
      translateY: -5,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      duration: 400,
      easing: 'easeOutQuad'
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (!cardRef.current) return

    anime({
      targets: cardRef.current,
      scale: 1,
      translateY: 0,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      duration: 400,
      easing: 'easeOutQuad'
    })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isHovered) return
    
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    const MAX_ROTATION = 3 // max rotation in degrees
    const rotateX = -y * MAX_ROTATION / (rect.height / 2)
    const rotateY = x * MAX_ROTATION / (rect.width / 2)
    
    anime({
      targets: card,
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 100,
      easing: 'linear'
    })
  }

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-300 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ 
        transform: 'translate(0, 0) scale(1)',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  )
} 