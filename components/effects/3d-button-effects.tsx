"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import type { Theme } from "../../themes/refined-theme-registry"

interface ThreeDButtonEffectsProps {
  children: React.ReactNode
  theme: Theme
  variant?: "primary" | "secondary" | "outline"
}

export default function ThreeDButtonEffects({ children, theme, variant = "primary" }: ThreeDButtonEffectsProps) {
  const [isPressed, setIsPressed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
          shadow: `0 8px 16px ${theme.primaryColor}30`,
          hoverShadow: `0 12px 24px ${theme.primaryColor}50`,
          pressedShadow: `0 4px 8px ${theme.primaryColor}40`,
        }
      case "secondary":
        return {
          background: `linear-gradient(135deg, ${theme.secondaryColor}, ${theme.primaryColor})`,
          shadow: `0 8px 16px ${theme.secondaryColor}30`,
          hoverShadow: `0 12px 24px ${theme.secondaryColor}50`,
          pressedShadow: `0 4px 8px ${theme.secondaryColor}40`,
        }
      case "outline":
        return {
          background: "transparent",
          shadow: `0 8px 16px ${theme.primaryColor}20`,
          hoverShadow: `0 12px 24px ${theme.primaryColor}30`,
          pressedShadow: `0 4px 8px ${theme.primaryColor}25`,
        }
      default:
        return {
          background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
          shadow: `0 8px 16px ${theme.primaryColor}30`,
          hoverShadow: `0 12px 24px ${theme.primaryColor}50`,
          pressedShadow: `0 4px 8px ${theme.primaryColor}40`,
        }
    }
  }

  const styles = getVariantStyles()

  return (
    <motion.div
      className="relative inline-block"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* 3D Base Layer */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: styles.background,
          transform: "translateZ(-8px)",
          opacity: 0.6,
        }}
        animate={{
          boxShadow: isPressed ? styles.pressedShadow : isHovered ? styles.hoverShadow : styles.shadow,
          transform: isPressed ? "translateZ(-4px)" : "translateZ(-8px)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      />

      {/* 3D Middle Layer */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `linear-gradient(135deg, ${theme.primaryColor}80, ${theme.secondaryColor}80)`,
          transform: "translateZ(-4px)",
          opacity: 0.8,
        }}
        animate={{
          transform: isPressed ? "translateZ(-2px)" : "translateZ(-4px)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      />

      {/* Main Button Layer */}
      <motion.div
        className="relative z-10"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          transform: isPressed ? "translateZ(-2px)" : "translateZ(0px)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      >
        {children}
      </motion.div>

      {/* 3D Highlight Layer */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${theme.primaryColor}20, transparent, ${theme.secondaryColor}20)`,
          transform: "translateZ(4px)",
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0,
          transform: isPressed ? "translateZ(2px)" : "translateZ(4px)",
        }}
        transition={{
          duration: 0.2,
        }}
      />

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${theme.primaryColor}40, transparent)`,
          transform: "translateZ(8px)",
          filter: "blur(8px)",
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{
          duration: 0.3,
        }}
      />
    </motion.div>
  )
}
