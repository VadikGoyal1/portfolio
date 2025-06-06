"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Play, Sparkles, Zap, Star, Heart, Rocket, Crown, Diamond, Flame } from "lucide-react"
import SocialLinks from "../common/social-links"
import UltraParticleBackground from "../effects/ultra-particle-background"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/enhanced-theme-registry"

interface UltraEnhancedHomePageProps {
  config: PortfolioConfig
  theme: Theme
  isMobile: boolean
}

export default function UltraEnhancedHomePage({ config, theme, isMobile }: UltraEnhancedHomePageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [currentIcon, setCurrentIcon] = useState(0)

  const floatingIcons = [Sparkles, Zap, Star, Heart, Rocket, Crown, Diamond, Flame]

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Icon rotation
    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % floatingIcons.length)
    }, 2000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(iconInterval)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: isMobile ? 0.15 : 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: isMobile ? 30 : 60, opacity: 0, rotateX: -90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: isMobile ? 0.8 : 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const CurrentIcon = floatingIcons[currentIcon]

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {config.features.particles && <UltraParticleBackground theme={theme} />}

      {/* Ultra Dynamic Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            `radial-gradient(circle at 20% 20%, ${theme.primaryColor}15 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 80%, ${theme.secondaryColor}15 0%, transparent 50%)`,
            `radial-gradient(circle at 20% 80%, ${theme.primaryColor}15 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 20%, ${theme.secondaryColor}15 0%, transparent 50%)`,
            `radial-gradient(circle at 20% 20%, ${theme.primaryColor}15 0%, transparent 50%)`,
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Floating geometric shapes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
            borderRadius: Math.random() > 0.5 ? "50%" : "20%",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Ultra Enhanced Profile Image */}
        <motion.div variants={itemVariants} className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 mb-8 sm:mb-12">
          {/* Multiple rotating rings */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-2 opacity-30"
              style={{
                borderColor: i % 2 === 0 ? theme.primaryColor : theme.secondaryColor,
                scale: 1 + i * 0.1,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 10 + i * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                direction: i % 2 === 0 ? "normal" : "reverse",
              }}
            />
          ))}

          {/* Main rotating gradient ring */}
          <motion.div
            className="absolute inset-0 rounded-full p-1"
            style={{
              background: `conic-gradient(from 0deg, ${theme.primaryColor}, ${theme.secondaryColor}, ${theme.primaryColor})`,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div
              className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
              style={{
                background: theme.background.includes("white") ? "white" : "black",
              }}
            >
              <Image
                src={config.personal.avatar || "/placeholder.svg"}
                alt={config.personal.name}
                width={isMobile ? 150 : 180}
                height={isMobile ? 150 : 180}
                className="rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Orbiting icons */}
          {Array.from({ length: 6 }).map((_, i) => {
            const IconComponent = floatingIcons[i % floatingIcons.length]
            return (
              <motion.div
                key={i}
                className="absolute"
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 1.3,
                  ease: "easeInOut",
                }}
                style={{
                  transformOrigin: `0 ${isMobile ? 80 : 100}px`,
                  left: "50%",
                  top: "50%",
                }}
              >
                <IconComponent
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  style={{
                    color: theme.primaryColor,
                    filter: `drop-shadow(0 0 10px ${theme.primaryColor})`,
                  }}
                />
              </motion.div>
            )
          })}

          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-50"
            animate={{
              boxShadow: [
                `0 0 20px ${theme.primaryColor}`,
                `0 0 60px ${theme.primaryColor}`,
                `0 0 20px ${theme.primaryColor}`,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Ultra Enhanced Name and Title with Glow */}
        <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            style={{
              textShadow: theme.glowColor,
              filter: "drop-shadow(0 0 20px currentColor)",
            }}
          >
            <motion.span
              className="block mb-2"
              initial={{ opacity: 0, x: -50, rotateY: -90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 1, duration: 1, type: "spring" }}
            >
              Hi, I'm
            </motion.span>
            <motion.span
              className={`block ${theme.gradient}`}
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
              style={{
                textShadow: theme.glowColor,
                filter: "drop-shadow(0 0 30px currentColor)",
              }}
            >
              {config.personal.name}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-3xl lg:text-4xl font-light opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            style={{
              textShadow: `0 0 20px ${theme.primaryColor}50`,
            }}
          >
            {config.personal.title}
          </motion.p>

          <motion.p
            className="text-base sm:text-xl opacity-70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 1 }}
          >
            {config.personal.subtitle}
          </motion.p>
        </motion.div>

        {/* Enhanced Description with Typewriter Effect */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
          <motion.p
            className="text-lg sm:text-2xl max-w-4xl mx-auto leading-relaxed opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            {config.personal.description}
          </motion.p>
        </motion.div>

        {/* Ultra Enhanced Tagline */}
        {config.personal.tagline && (
          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <motion.div
              className={`inline-block px-6 py-3 rounded-full ${theme.card} ${theme.border} border relative overflow-hidden group`}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                boxShadow: `0 0 30px ${theme.primaryColor}30`,
              }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    `linear-gradient(45deg, ${theme.primaryColor}20, transparent, ${theme.secondaryColor}20)`,
                    `linear-gradient(45deg, ${theme.secondaryColor}20, transparent, ${theme.primaryColor}20)`,
                    `linear-gradient(45deg, ${theme.primaryColor}20, transparent, ${theme.secondaryColor}20)`,
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />

              <span className="text-base sm:text-lg font-medium relative z-10">{config.personal.tagline}</span>

              {/* Floating sparkles */}
              <AnimatePresence>
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute pointer-events-none"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      x: [0, (Math.random() - 0.5) * 60],
                      y: [0, (Math.random() - 0.5) * 60],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.7,
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                  >
                    <CurrentIcon className="w-4 h-4" style={{ color: theme.primaryColor }} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}

        {/* Ultra Enhanced CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
        >
          {[
            { icon: ArrowDown, text: "View My Work", primary: true },
            { icon: Download, text: "Download Resume", primary: false },
            { icon: Play, text: "Watch Demo", primary: false },
          ].map((button, index) => (
            <motion.div
              key={button.text}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 2.5 + index * 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size={isMobile ? "default" : "lg"}
                variant={button.primary ? "default" : "outline"}
                className={`
                  px-8 py-4 text-lg font-medium rounded-2xl relative overflow-hidden group transition-all duration-500
                  ${
                    button.primary
                      ? `${theme.primary} text-white shadow-2xl`
                      : `${theme.border} ${theme.textSecondary} hover:bg-opacity-10`
                  }
                  w-full sm:w-auto
                `}
                style={{
                  boxShadow: button.primary
                    ? `0 0 40px ${theme.primaryColor}50, 0 20px 40px rgba(0,0,0,0.3)`
                    : `0 0 20px ${theme.primaryColor}20`,
                }}
              >
                {/* Ultra animated background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    background: button.primary
                      ? [
                          `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                          `linear-gradient(45deg, ${theme.secondaryColor}, ${theme.primaryColor})`,
                          `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                        ]
                      : [
                          `radial-gradient(circle at center, ${theme.primaryColor}20, transparent)`,
                          `radial-gradient(circle at center, ${theme.secondaryColor}20, transparent)`,
                          `radial-gradient(circle at center, ${theme.primaryColor}20, transparent)`,
                        ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                  }}
                />

                <motion.div
                  className="flex items-center gap-3 relative z-10"
                  animate={button.primary ? { x: [0, 5, 0] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <button.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <span>{button.text}</span>
                </motion.div>

                {/* Orbiting particles */}
                {button.primary &&
                  Array.from({ length: 4 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-white opacity-60"
                      animate={{
                        rotate: [0, 360],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.75,
                      }}
                      style={{
                        transformOrigin: "0 30px",
                        left: "50%",
                        top: "50%",
                      }}
                    />
                  ))}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div variants={itemVariants}>
          <SocialLinks config={config} theme={theme} />
        </motion.div>

        {/* Ultra Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className={`w-6 h-12 border-2 rounded-full ${theme.border} relative overflow-hidden`}
              style={{
                boxShadow: `0 0 20px ${theme.primaryColor}30`,
              }}
            >
              {/* Animated dot */}
              <motion.div
                className="w-2 h-4 rounded-full mx-auto mt-2"
                style={{ background: theme.primaryColor }}
                animate={{
                  y: [0, 16, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    `inset 0 0 10px ${theme.primaryColor}30`,
                    `inset 0 0 20px ${theme.primaryColor}60`,
                    `inset 0 0 10px ${theme.primaryColor}30`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </motion.div>

            {/* Floating text */}
            <motion.div
              className={`absolute top-16 left-1/2 transform -translate-x-1/2 text-xs ${theme.textSecondary} whitespace-nowrap`}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              Scroll to explore
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mouse follower with trail effect */}
      <motion.div
        className="fixed pointer-events-none z-20"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <motion.div
          className="w-5 h-5 rounded-full opacity-30 mix-blend-difference"
          style={{
            background: `radial-gradient(circle, ${theme.primaryColor}, transparent)`,
            filter: "blur(5px)",
          }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </motion.div>

      {/* Trail effect */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-10 w-2 h-2 rounded-full opacity-20"
          style={{
            background: theme.primaryColor,
          }}
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
          }}
          transition={{
            type: "spring",
            stiffness: 500 - i * 100,
            damping: 28 + i * 5,
          }}
        />
      ))}
    </div>
  )
}
