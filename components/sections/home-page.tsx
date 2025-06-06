"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Play, Sparkles } from "lucide-react"
import SocialLinks from "../common/social-links"
import ParticleBackground from "../effects/particle-background"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/theme-registry"

interface HomePageProps {
  config: PortfolioConfig
  theme: Theme
  isMobile: boolean
}

export default function HomePage({ config, theme, isMobile }: HomePageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: isMobile ? 0.1 : 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: isMobile ? 15 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.4 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {config.features.particles && <ParticleBackground theme={theme} />}

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 mb-6 sm:mb-8">
          <motion.div
            className={`absolute inset-0 rounded-full ${theme.accent}`}
            animate={{ rotate: 360 }}
            transition={{
              duration: isMobile ? 15 : 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <div
            className={`absolute inset-2 rounded-full ${
              theme.background.includes("white") ? "bg-white" : "bg-black"
            } flex items-center justify-center overflow-hidden`}
          >
            <Image
              src={config.personal.avatar || "/placeholder.svg"}
              alt={config.personal.name}
              width={isMobile ? 120 : 140}
              height={isMobile ? 120 : 140}
              className="rounded-full object-cover"
            />
          </div>

          {/* Floating sparkles */}
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <Sparkles className={`w-6 h-6 ${theme.gradient.includes("text-transparent") ? "text-yellow-400" : ""}`} />
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <motion.span
              className="block mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Hi, I'm
            </motion.span>
            <motion.span
              className={`block ${theme.gradient}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            >
              {config.personal.name}
            </motion.span>
          </h1>
          <motion.p
            className="text-lg sm:text-2xl lg:text-3xl font-light opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {config.personal.title}
          </motion.p>
          <motion.p
            className="text-sm sm:text-lg opacity-70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {config.personal.subtitle}
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 opacity-80"
        >
          {config.personal.description}
        </motion.p>

        {/* Tagline */}
        {config.personal.tagline && (
          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <div className={`inline-block px-4 py-2 rounded-full ${theme.card} ${theme.border} border`}>
              <span className="text-sm sm:text-base font-medium">{config.personal.tagline}</span>
            </div>
          </motion.div>
        )}

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
        >
          <Button
            size={isMobile ? "default" : "lg"}
            className={`${theme.primary} text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg ${theme.animation} w-full sm:w-auto`}
          >
            View My Work
            <ArrowDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <Button
            size={isMobile ? "default" : "lg"}
            variant="outline"
            className={`${theme.border} px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg ${theme.animation} w-full sm:w-auto`}
          >
            <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            Download Resume
          </Button>
          <Button
            size={isMobile ? "default" : "lg"}
            variant="outline"
            className={`${theme.border} px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg ${theme.animation} w-full sm:w-auto`}
          >
            <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <SocialLinks config={config} theme={theme} />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: isMobile ? 1.5 : 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className={`w-5 h-8 sm:w-6 sm:h-10 border-2 rounded-full ${theme.border}`}>
            <motion.div
              className={`w-1 h-2 sm:h-3 rounded-full mx-auto mt-1 sm:mt-2 ${
                theme.text.includes("white") ? "bg-white" : "bg-black"
              }`}
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: isMobile ? 1.5 : 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
