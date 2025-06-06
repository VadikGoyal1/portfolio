"use client"

import { motion } from "framer-motion"
import {
  Code,
  Palette,
  Camera,
  Music,
  Gamepad2,
  Users,
  ChefHat,
  Dumbbell,
  Plane,
  Shirt,
  Video,
  Stethoscope,
  Scale,
  Building,
  Sparkles,
} from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/refined-theme-registry"

interface EnhancedLoadingScreenProps {
  theme: Theme
  config: PortfolioConfig
}

const themeIcons = {
  developer: Code,
  designer: Palette,
  photographer: Camera,
  musician: Music,
  gamedev: Gamepad2,
  editor: Video,
  artist: Palette,
  consultant: Users,
  teacher: Users,
  chef: ChefHat,
  fitness: Dumbbell,
  travel: Plane,
  fashion: Shirt,
  architect: Building,
  lawyer: Scale,
  doctor: Stethoscope,
}

export default function EnhancedLoadingScreen({ theme, config }: EnhancedLoadingScreenProps) {
  const Icon = themeIcons[config.theme.name as keyof typeof themeIcons] || Code

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center ${theme.background} overflow-hidden`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: theme.primaryColor,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="text-center relative z-10">
        {/* Enhanced Icon Animation */}
        <motion.div
          className={`w-24 h-24 mx-auto mb-8 rounded-full ${theme.accent} flex items-center justify-center relative overflow-hidden`}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
            boxShadow: [
              `0 0 20px ${theme.primaryColor}40`,
              `0 0 30px ${theme.primaryColor}60`,
              `0 0 20px ${theme.primaryColor}40`,
            ],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {/* Orbiting particles */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              animate={{
                rotate: [0, 360],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.7,
              }}
              style={{
                transformOrigin: "0 40px",
                left: "50%",
                top: "50%",
              }}
            />
          ))}

          <motion.div
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Icon className="w-12 h-12 text-white" />
          </motion.div>
        </motion.div>

        {/* Enhanced Loading Text */}
        <motion.h2
          className={`text-3xl font-bold mb-6 ${theme.gradient}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            textShadow: theme.glowColor,
          }}
        >
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {config.personal.name}
          </motion.span>
        </motion.h2>

        {/* Loading Subtitle */}
        <motion.p
          className={`text-lg ${theme.textSecondary} mb-8`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {config.personal.title}
        </motion.p>

        {/* Enhanced Loading Dots */}
        <div className="flex justify-center space-x-3 mb-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full`}
              style={{ background: theme.primaryColor }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Enhanced Progress Bar */}
        <motion.div
          className={`w-80 h-2 mx-auto rounded-full ${theme.card} overflow-hidden`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className={`h-full rounded-full ${theme.accent} relative overflow-hidden`}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* Loading percentage */}
        <motion.div
          className={`mt-4 text-sm ${theme.textSecondary}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            Loading experience...
          </motion.span>
        </motion.div>

        {/* Add sparkles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              color: theme.primaryColor,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
