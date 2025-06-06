"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Code, Palette, Camera, Music, Gamepad2, Users, ChefHat, Dumbbell, Plane, Shirt } from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/refined-theme-registry"

interface AmazingLoadingScreenProps {
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

export default function AmazingLoadingScreen({ theme, config }: AmazingLoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")
  const Icon = themeIcons[config.theme.name as keyof typeof themeIcons] || Code

  const loadingSteps = [
    "Initializing...",
    "Loading assets...",
    "Preparing experience...",
    "Almost ready...",
    "Welcome!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15 + 5
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length)
        setLoadingText(loadingSteps[Math.min(stepIndex, loadingSteps.length - 1)])
        return Math.min(newProgress, 100)
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center ${theme.background} overflow-hidden`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Waves */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${50 + i * 10}% ${50 + i * 5}%, ${theme.primaryColor}${Math.floor(20 - i * 3).toString(16)} 0%, transparent 50%)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        >
          {i % 3 === 0 ? (
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})` }}
            />
          ) : i % 3 === 1 ? (
            <div
              className="w-4 h-4 rotate-45"
              style={{ background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})` }}
            />
          ) : (
            <div
              className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent"
              style={{ borderBottomColor: theme.primaryColor }}
            />
          )}
        </motion.div>
      ))}

      <div className="text-center relative z-10">
        {/* Main Loading Animation */}
        <motion.div className="relative w-40 h-40 mx-auto mb-8">
          {/* Outer Rotating Rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute inset-${i * 4} rounded-full border-4 border-transparent`}
              style={{
                borderTopColor: i % 2 === 0 ? theme.primaryColor : theme.secondaryColor,
                borderRightColor: i % 2 === 0 ? theme.secondaryColor : theme.primaryColor,
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{
                duration: 3 - i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}

          {/* Pulsing Center */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center rounded-full"
            style={{
              background: `radial-gradient(circle, ${theme.primaryColor}20, ${theme.secondaryColor}20, transparent)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Icon className={`w-16 h-16 ${theme.text}`} />
            </motion.div>
          </motion.div>

          {/* Orbiting Dots */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                left: "50%",
                top: "50%",
                transformOrigin: "0 0",
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "linear",
              }}
              initial={{
                x: 60 * Math.cos((i * Math.PI * 2) / 8),
                y: 60 * Math.sin((i * Math.PI * 2) / 8),
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text with Typewriter Effect */}
        <motion.div className="mb-8">
          <motion.h2
            className={`text-4xl font-bold mb-4 ${theme.gradient}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              textShadow: theme.glowColor,
            }}
          >
            <motion.span
              animate={{
                textShadow: [theme.glowColor, `0 0 30px ${theme.primaryColor}80`, theme.glowColor],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {config.personal.name}
            </motion.span>
          </motion.h2>

          <motion.p
            className={`text-xl ${theme.textSecondary} mb-2`}
            key={loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {loadingText}
          </motion.p>

          <motion.div
            className={`text-3xl font-bold ${theme.text}`}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {Math.floor(progress)}%
          </motion.div>
        </motion.div>

        {/* Enhanced Progress Bar */}
        <motion.div
          className="relative w-96 h-3 mx-auto rounded-full overflow-hidden"
          style={{
            background: `linear-gradient(90deg, ${theme.primaryColor}20, ${theme.secondaryColor}20)`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            style={{
              background: `linear-gradient(90deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
              width: `${progress}%`,
            }}
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

        {/* Floating Particles around progress */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: theme.primaryColor,
              left: `${45 + Math.random() * 10}%`,
              top: `${60 + Math.random() * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Corner Decorative Elements */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-20 h-20 rounded-full ${
            i === 0
              ? "top-10 left-10"
              : i === 1
                ? "top-10 right-10"
                : i === 2
                  ? "bottom-10 left-10"
                  : "bottom-10 right-10"
          }`}
          style={{
            background: `radial-gradient(circle, ${theme.primaryColor}30, transparent)`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </motion.div>
  )
}
