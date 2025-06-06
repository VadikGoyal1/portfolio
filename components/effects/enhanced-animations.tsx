"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import type { Theme } from "../../themes/refined-theme-registry"

interface EnhancedAnimationsProps {
  theme: Theme
}

export default function EnhancedAnimations({ theme }: EnhancedAnimationsProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Mouse follower effect */}
      <motion.div
        className="absolute w-6 h-6 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${theme.primaryColor}40, transparent)`,
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Floating energy orbs */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`energy-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${8 + Math.random() * 16}px`,
            height: `${8 + Math.random() * 16}px`,
            background: `radial-gradient(circle, ${i % 2 === 0 ? theme.primaryColor : theme.secondaryColor}60, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 300 - 150, 0],
            y: [0, Math.random() * 300 - 150, 0],
            scale: [0.5, 1.5, 0.5],
            opacity: [0.2, 0.8, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Pulsing rings */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full border-2 opacity-20"
          style={{
            borderColor: theme.primaryColor,
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: "50%",
            top: "50%",
            marginLeft: `-${100 + i * 50}px`,
            marginTop: `-${100 + i * 50}px`,
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 1,
          }}
        />
      ))}

      {/* Shooting stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: theme.primaryColor,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 200],
            y: [0, 100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Gradient waves */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, ${theme.primaryColor}20, ${theme.secondaryColor}20, ${theme.primaryColor}20)`,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* DNA helix effect */}
      <div className="absolute left-1/4 top-0 h-full w-2">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`dna-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? theme.primaryColor : theme.secondaryColor,
              top: `${i * 5}%`,
            }}
            animate={{
              x: [0, 50, 0, -50, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
