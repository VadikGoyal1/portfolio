"use client"

import { motion } from "framer-motion"
import { Code, Palette, Camera, Music, Gamepad2, Users, ChefHat, Dumbbell, Plane, Shirt } from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/theme-registry"

interface LoadingScreenProps {
  theme: Theme
  config: PortfolioConfig
}

const themeIcons = {
  developer: Code,
  designer: Palette,
  photographer: Camera,
  musician: Music,
  gamedev: Gamepad2,
  editor: Camera,
  artist: Palette,
  consultant: Users,
  teacher: Users,
  chef: ChefHat,
  fitness: Dumbbell,
  travel: Plane,
  fashion: Shirt,
}

export default function LoadingScreen({ theme, config }: LoadingScreenProps) {
  const Icon = themeIcons[config.theme.name as keyof typeof themeIcons] || Code

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center ${theme.background}`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Animated Icon */}
        <motion.div
          className={`w-20 h-20 mx-auto mb-8 rounded-full ${theme.accent} flex items-center justify-center`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-10 h-10 text-white" />
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className={`text-2xl font-bold mb-4 ${theme.gradient}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {config.personal.name}
        </motion.h2>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full ${theme.text.includes("white") ? "bg-white" : "bg-gray-900"}`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          className={`w-64 h-1 mx-auto mt-8 rounded-full ${theme.card}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className={`h-full rounded-full ${theme.accent}`}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
