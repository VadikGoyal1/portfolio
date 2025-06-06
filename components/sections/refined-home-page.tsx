"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Play, MapPin, Calendar, Coffee, Sparkles } from "lucide-react"
import SocialLinks from "../common/social-links"
import RefinedParticleBackground from "../effects/refined-particle-background"
import ThreeDElements from "../effects/3d-elements"
import ThreeDCardEffects from "../effects/3d-card-effects"
import ThreeDTextEffects from "../effects/3d-text-effects"
import ThreeDButtonEffects from "../effects/3d-button-effects"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/refined-theme-registry"

interface RefinedHomePageProps {
  config: PortfolioConfig
  theme: Theme
  isMobile: boolean
}

export default function RefinedHomePage({ config, theme, isMobile }: RefinedHomePageProps) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [hoverButton, setHoverButton] = useState<string | null>(null)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: isMobile ? 0.1 : 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: isMobile ? 20 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv-alex-johnson.pdf"
    link.download = "Alex-Johnson-CV.pdf"
    link.click()
  }

  const handleWatchDemo = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 px-4 sm:px-6 lg:px-8">
      {/* 3D Background Elements */}
      <ThreeDElements theme={theme} />

      {config.features.particles && <RefinedParticleBackground theme={theme} />}

      {/* Animated Background Gradients */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${theme.primaryColor}, transparent)` }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${theme.secondaryColor}, transparent)` }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting with time */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-gray-600/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm text-gray-300">
                  Available for work • {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>
            </motion.div>

            {/* Main heading with 3D text effects */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4">
                <span className="block mb-1 sm:mb-2 text-white">Hi, I'm</span>
                <ThreeDTextEffects theme={theme} depth={8} glowIntensity={1.5}>
                  <motion.span
                    className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                    animate={{
                      textShadow: ["0 0 10px #06b6d4", "0 0 20px #06b6d4", "0 0 10px #06b6d4"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    {config.personal.name}
                  </motion.span>
                </ThreeDTextEffects>
              </h1>
              <ThreeDTextEffects theme={theme} depth={3} glowIntensity={0.8}>
                <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 mb-3 sm:mb-4">
                  {config.personal.title}
                </p>
              </ThreeDTextEffects>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
                {config.personal.description}
              </p>
            </motion.div>

            {/* Location and info */}
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{config.personal.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Coffee className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Coffee enthusiast</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>5+ years experience</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons with FIXED styling */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
            >
              {/* View My Work Button */}
              <ThreeDButtonEffects theme={theme} variant="primary">
                <Button
                  size={isMobile ? "default" : "lg"}
                  onClick={handleViewWork}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-6 sm:px-8 py-2 sm:py-3 relative overflow-hidden group shadow-lg shadow-cyan-500/25 w-full sm:w-auto"
                >
                  <div className="flex items-center gap-2 relative z-10 justify-center">
                    <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">View My Work</span>
                  </div>
                </Button>
              </ThreeDButtonEffects>

              {/* Download CV Button */}
              <ThreeDButtonEffects theme={theme} variant="outline">
                <Button
                  size={isMobile ? "default" : "lg"}
                  variant="outline"
                  onClick={handleDownloadCV}
                  className="bg-transparent hover:bg-gray-800/50 text-gray-300 hover:text-white border-2 border-gray-600 hover:border-gray-400 px-6 sm:px-8 py-2 sm:py-3 relative overflow-hidden group transition-all duration-300 w-full sm:w-auto"
                >
                  <div className="flex items-center gap-2 relative z-10 justify-center">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">Download CV</span>
                  </div>
                </Button>
              </ThreeDButtonEffects>

              {/* Watch Demo Button */}
              <ThreeDButtonEffects theme={theme} variant="secondary">
                <Button
                  size={isMobile ? "default" : "lg"}
                  variant="outline"
                  onClick={handleWatchDemo}
                  className="bg-transparent hover:bg-gray-800/50 text-gray-300 hover:text-white border-2 border-gray-600 hover:border-gray-400 px-6 sm:px-8 py-2 sm:py-3 relative overflow-hidden group transition-all duration-300 w-full sm:w-auto"
                >
                  <div className="flex items-center gap-2 relative z-10 justify-center">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">Watch Demo</span>
                  </div>
                </Button>
              </ThreeDButtonEffects>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <SocialLinks config={config} theme={theme} />
            </motion.div>
          </div>

          {/* Right Column - Profile Image with 3D effects */}
          <motion.div variants={itemVariants} className="relative order-1 lg:order-2">
            <ThreeDCardEffects theme={theme}>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                {/* Multiple rotating rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border-2"
                    style={{
                      borderColor: i % 2 === 0 ? theme.primaryColor : theme.secondaryColor,
                      inset: `${i * 8}px`,
                      opacity: 0.3 - i * 0.05,
                    }}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{
                      duration: 20 + i * 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                ))}

                {/* Main image container */}
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
                  style={{
                    background: `linear-gradient(45deg, ${theme.primaryColor}20, ${theme.secondaryColor}20)`,
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 20px ${theme.primaryColor}30`,
                      `0 0 40px ${theme.primaryColor}50`,
                      `0 0 20px ${theme.primaryColor}30`,
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={config.personal.avatar || "/placeholder.svg"}
                    alt={config.personal.name}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                {/* Enhanced floating elements */}
                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/50 backdrop-blur-xl border border-gray-600/50 flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 15, 0, -15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    times: [0, 0.5, 1, 0.75, 1],
                  }}
                >
                  <span className="text-xl sm:text-2xl">👋</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-black/50 backdrop-blur-xl border border-gray-600/50 flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -15, 0, 15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                    times: [0, 0.5, 1, 0.75, 1],
                  }}
                >
                  <span className="text-xl sm:text-2xl">💻</span>
                </motion.div>

                {/* Enhanced sparkles around the image */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      color: i % 2 === 0 ? theme.primaryColor : theme.secondaryColor,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.div>
                ))}
              </div>
            </ThreeDCardEffects>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
