"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import type { Theme } from "../../themes/enhanced-theme-registry"

interface UltraParticleBackgroundProps {
  theme: Theme
}

export default function UltraParticleBackground({ theme }: UltraParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      life: number
      maxLife: number
    }> = []

    // Create more particles for desktop, fewer for mobile
    const particleCount = window.innerWidth < 768 ? 50 : 100

    // Create particles with different colors
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? theme.primaryColor : theme.secondaryColor,
        life: Math.random() * 100,
        maxLife: Math.random() * 100 + 100,
      })
    }

    let animationId: number
    let time = 0

    function animate() {
      if (!ctx || !canvas) return

      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update position with wave motion
        particle.x += particle.vx + Math.sin(time + index) * 0.1
        particle.y += particle.vy + Math.cos(time + index) * 0.1
        particle.life += 1

        // Reset particle if it goes out of bounds or dies
        if (
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height ||
          particle.life > particle.maxLife
        ) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.life = 0
          particle.color = Math.random() > 0.5 ? theme.primaryColor : theme.secondaryColor
        }

        // Pulsing opacity
        const pulseOpacity = particle.opacity * (0.5 + 0.5 * Math.sin(time * 2 + index))

        // Draw particle with glow effect
        ctx.save()
        ctx.globalAlpha = pulseOpacity

        // Outer glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = particle.color + "20"
        ctx.fill()

        // Inner glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = particle.color + "40"
        ctx.fill()

        // Core particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        ctx.restore()

        // Draw connections with enhanced effects
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const connectionOpacity = (1 - distance / 120) * 0.3

            ctx.save()
            ctx.globalAlpha = connectionOpacity

            // Create gradient line
            const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)
            gradient.addColorStop(0, particle.color)
            gradient.addColorStop(1, otherParticle.color)

            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 2
            ctx.stroke()

            ctx.restore()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [theme])

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />

      {/* Additional floating elements */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: Math.random() > 0.5 ? theme.primaryColor : theme.secondaryColor,
            borderRadius: "50%",
            filter: `blur(${Math.random() * 2}px)`,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 10,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}
