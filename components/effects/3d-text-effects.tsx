"use client"

import type React from "react"

import { motion } from "framer-motion"
import type { Theme } from "../../themes/refined-theme-registry"

interface ThreeDTextEffectsProps {
  children: React.ReactNode
  theme: Theme
  depth?: number
  glowIntensity?: number
}

export default function ThreeDTextEffects({ children, theme, depth = 5, glowIntensity = 1 }: ThreeDTextEffectsProps) {
  return (
    <div className="relative inline-block" style={{ perspective: "1000px" }}>
      {/* Multiple depth layers for 3D effect */}
      {[...Array(depth)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            transform: `translateZ(-${i * 2}px)`,
            opacity: 0.8 - i * 0.1,
            color: i === 0 ? "inherit" : theme.primaryColor,
            textShadow: i === 0 ? "none" : `0 0 ${i * 2}px ${theme.primaryColor}`,
            zIndex: depth - i,
          }}
          animate={{
            textShadow: [
              `0 0 ${i * 2}px ${theme.primaryColor}`,
              `0 0 ${i * 4}px ${theme.primaryColor}`,
              `0 0 ${i * 2}px ${theme.primaryColor}`,
            ],
          }}
          transition={{
            duration: 2 + i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      ))}

      {/* Main text layer */}
      <motion.div
        className="relative z-10"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          textShadow: [
            `0 0 ${10 * glowIntensity}px ${theme.primaryColor}60`,
            `0 0 ${20 * glowIntensity}px ${theme.primaryColor}80`,
            `0 0 ${10 * glowIntensity}px ${theme.primaryColor}60`,
          ],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>

      {/* Reflection layer */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          transform: "rotateX(180deg) translateY(100%) scaleY(-1)",
          background: `linear-gradient(to bottom, transparent 0%, ${theme.primaryColor}20 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          zIndex: -1,
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
