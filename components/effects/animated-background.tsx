"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import type { Theme } from "../../themes/refined-theme-registry"

interface AnimatedBackgroundProps {
  theme: Theme
}

export default function AnimatedBackground({ theme }: AnimatedBackgroundProps) {
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

    // Create particles
    const particleCount = window.innerWidth < 768 ? 50 : 100
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? theme.primaryColor : theme.secondaryColor,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      })
    }

    let animationId: number

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update particle
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Fade based on life
        const lifeRatio = particle.life / particle.maxLife
        const currentOpacity = particle.opacity * (1 - lifeRatio)

        // Draw particle
        ctx.save()
        ctx.globalAlpha = currentOpacity
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Reset particle if dead
        if (particle.life >= particle.maxLife) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.life = 0
          particle.vx = (Math.random() - 0.5) * 2
          particle.vy = (Math.random() - 0.5) * 2
        }

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.save()
              ctx.globalAlpha = (1 - distance / 100) * 0.2
              ctx.strokeStyle = theme.primaryColor
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
              ctx.restore()
            }
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
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />

      {/* Enhanced Gradient Overlays */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, ${theme.primaryColor}15 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${theme.secondaryColor}15 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, ${theme.primaryColor}10 0%, transparent 60%)
          `,
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(45deg, ${theme.primaryColor}05, transparent, ${theme.secondaryColor}05)`,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Floating Geometric Shapes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`bg-shape-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 60 - 30, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          {i % 4 === 0 ? (
            <div
              className="w-8 h-8 rounded-full"
              style={{ background: `linear-gradient(45deg, ${theme.primaryColor}40, ${theme.secondaryColor}40)` }}
            />
          ) : i % 4 === 1 ? (
            <div
              className="w-10 h-10 rotate-45"
              style={{ background: `linear-gradient(45deg, ${theme.primaryColor}30, ${theme.secondaryColor}30)` }}
            />
          ) : i % 4 === 2 ? (
            <div
              className="w-0 h-0 border-l-6 border-r-6 border-b-10 border-transparent"
              style={{ borderBottomColor: `${theme.primaryColor}50` }}
            />
          ) : (
            <div
              className="w-8 h-8 rounded-sm"
              style={{ background: `linear-gradient(45deg, ${theme.secondaryColor}40, ${theme.primaryColor}40)` }}
            />
          )}
        </motion.div>
      ))}
    </>
  )
}
