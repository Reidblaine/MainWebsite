'use client'

import { useEffect } from 'react'

export default function CursorTrail() {
  useEffect(() => {
    class CursorTrailClass {
      private timeouts: number[] = []
      private lastMoveTime: number = 0
      private moveThreshold: number = 5
      private lastX: number = 0
      private lastY: number = 0
      private currentIndex: number = 0
      private isHovering: boolean = false
      private currentImages: string[] = []

      // Mouse move handler bound automatically
      private handleMouseMove = (e: MouseEvent): void => {
        if (!this.isHovering) return
        const currentTime = Date.now()
        const dx = e.clientX - this.lastX
        const dy = e.clientY - this.lastY
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance > this.moveThreshold && currentTime - this.lastMoveTime > 100) {
          this.createTrailElement(e.clientX, e.clientY)
          this.lastMoveTime = currentTime
          this.lastX = e.clientX
          this.lastY = e.clientY
        }
      }

      constructor() {
        this.init()
      }

      init(): void {
        // Global mousemove for trail creation
        document.addEventListener('mousemove', this.handleMouseMove)
        // Attach hover handlers to elements with hover-trail class
        const hoverElements = document.querySelectorAll<HTMLElement>('.hover-trail')
        hoverElements.forEach((el) => {
          const dataset = el.dataset
          const imagesStr = dataset.images || ''
          const images = imagesStr.split(',').map((path) => path.trim()).filter((p) => p)
          el.addEventListener('mouseenter', () => {
            this.currentImages = images
            this.currentIndex = 0
            this.isHovering = true
          })
          el.addEventListener('mouseleave', () => {
            this.isHovering = false
            this.currentImages = []
          })
        })
      }

      createTrailElement(x: number, y: number): void {
        if (!this.isHovering || this.currentImages.length === 0) return
        const trail = document.createElement('div')
        trail.className = 'trail-image'
        const img = document.createElement('img')
        img.src = this.currentImages[this.currentIndex]
        trail.appendChild(img)
        document.body.appendChild(trail)
        trail.style.left = `${x}px`
        trail.style.top = `${y}px`
        // Force reflow by reading offsetHeight
        const _ = trail.offsetHeight
        requestAnimationFrame(() => {
          trail.style.opacity = '1'
          trail.style.transform = 'translate(-50%, -50%) scale(1)'
        })
        const timeout = window.setTimeout(() => {
          trail.style.opacity = '0'
          trail.style.transform = 'translate(-50%, -50%) scale(0.8)'
          window.setTimeout(() => trail.remove(), 500)
        }, 1000)
        this.timeouts.push(timeout)
        this.currentIndex = (this.currentIndex + 1) % this.currentImages.length
      }

      destroy(): void {
        this.timeouts.forEach((t) => clearTimeout(t))
        document.removeEventListener('mousemove', this.handleMouseMove)
      }
    }

    const instance = new CursorTrailClass()
    return () => instance.destroy()
  }, [])

  return null
} 