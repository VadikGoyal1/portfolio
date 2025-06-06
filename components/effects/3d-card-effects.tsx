"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import type { Theme } from "../../themes/refined-theme-registry"

interface ThreeDCardEffectsProps {
  children: React.ReactNode
  theme: Theme
  intensity?: number
}

export default function ThreeDCardEffects({ children, theme, intensity = 1 }: ThreeDCardEffectsProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    setMousePosition({ x: mouseX, y: mouseY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  const rotateX = (mousePosition.y / 10) * intensity
  const rotateY = (-mousePosition.x / 10) * intensity
  const scale = isHovered ? 1.05 : 1

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        scale: scale,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {/* 3D Shadow Layer */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-20"
        style={{
          background: `linear-gradient(135deg, ${theme.primaryColor}40, ${theme.secondaryColor}40)`,
          transform: "translateZ(-20px)",
          filter: "blur(10px)",
        }}
        animate={{
          opacity: isHovered ? 0.4 : 0.2,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{
          duration: 0.3,
        }}
      />

      {/* Main Content Layer */}
      <motion.div
        className="relative z-10"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          boxShadow: isHovered
            ? `0 20px 40px ${theme.primaryColor}20, 0 0 20px ${theme.secondaryColor}20`
            : `0 10px 20px ${theme.primaryColor}10`,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {children}
      </motion.div>

      {/* 3D Highlight Layer */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${theme.primaryColor}10, transparent, ${theme.secondaryColor}10)`,
          transform: "translateZ(10px)",
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      />

      {/* Dynamic Light Source */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "100px",
          height: "100px",
          background: `radial-gradient(circle, ${theme.primaryColor}30, transparent)`,
          left: `${mousePosition.x + 50}%`,
          top: `${mousePosition.y + 50}%`,
          transform: "translate(-50%, -50%) translateZ(30px)",
          filter: "blur(20px)",
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0,
          scale: isHovered ? 1.5 : 0.5,
        }}
        transition={{
          duration: 0.3,
        }}
      />
    </motion.div>
  )
}
