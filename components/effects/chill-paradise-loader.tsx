"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Camera, Code, Palette, Music, Gamepad2, Users, ChefHat, Dumbbell, Plane, Shirt } from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/refined-theme-registry"

interface ChillParadiseLoaderProps {
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

export default function ChillParadiseLoader({ theme, config }: ChillParadiseLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(15)
  const [loadingText, setLoadingText] = useState("")

  const Icon = themeIcons[config.theme.name as keyof typeof themeIcons] || Camera
  const loaderConfig = config.loader || {}
  const duration = loaderConfig.duration || 15000

  // Get loading text from config or use default
  const getLoadingText = () => {
    if (loaderConfig.customText) {
      return loaderConfig.customText.replace("{name}", config.personal.name)
    }
    return `Initializing ${config.personal.name}...`
  }

  useEffect(() => {
    setLoadingText(getLoadingText())

    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (duration / 100)
        const newProgress = Math.min(prev + increment + Math.random() * 1, 100)

        // Calculate time remaining
        const remaining = Math.max(Math.floor((100 - newProgress) * (duration / 100 / 1000)), 0)
        setTimeRemaining(remaining)

        return newProgress
      })
    }, 100)

    return () => clearInterval(interval)
  }, [duration, config.personal.name, loaderConfig.customText])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10 max-w-md mx-auto px-6">
        {/* Icon with special plane animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, x: -200 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {config.theme.name === "travel" ? (
            // Special plane animation - flying left to right
            <motion.div
              className="w-16 h-16 mx-auto text-cyan-400 relative"
              animate={{
                x: [-50, 50, -50],
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                x: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
                y: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              <Icon className="w-full h-full" />

              {/* Plane trail effect */}
              <motion.div
                className="absolute top-1/2 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"
                animate={{
                  opacity: [0, 1, 0],
                  scaleX: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ) : (
            // Regular icon animation for other themes
            <motion.div
              className="w-16 h-16 mx-auto text-cyan-400"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              <Icon className="w-full h-full" />
            </motion.div>
          )}
        </motion.div>

        {/* Title - Only show user's name */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {config.personal.name}
        </motion.h1>

        {/* Progress Bar */}
        <motion.div
          className="relative w-full h-2 bg-gray-700 rounded-full mb-6 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full relative"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-gray-300 text-lg mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {loadingText}
        </motion.p>

        {/* Progress Info */}
        <motion.div
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {Math.floor(progress)}% • {timeRemaining}s remaining
        </motion.div>

        {/* Website URL - Only show if enabled and exists */}
        {loaderConfig.showWebsiteUrl && config.personal.website && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <p className="text-gray-500 text-sm">{config.personal.website}</p>
          </motion.div>
        )}
      </div>

      {/* Corner decorations */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 ${
            i === 0
              ? "top-10 left-10"
              : i === 1
                ? "top-10 right-10"
                : i === 2
                  ? "bottom-10 left-10"
                  : "bottom-10 right-10"
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </motion.div>
  )
}
