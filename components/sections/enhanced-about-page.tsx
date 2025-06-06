"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Video,
  Zap,
  Palette,
  Image,
  Music,
  Scissors,
  Box,
  CuboidIcon as Cube,
  Code,
  Smartphone,
  Camera,
  Users,
  Award,
  Calendar,
  Briefcase,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
} from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/theme-registry"

interface EnhancedAboutPageProps {
  config: PortfolioConfig
  theme: Theme
  isMobile: boolean
}

export default function EnhancedAboutPage({ config, theme, isMobile }: EnhancedAboutPageProps) {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string | null>(null)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  // Safe access with defaults
  const aboutData = config?.about || {}
  const featuresData = config?.features || {}
  const stats = aboutData.stats || []
  const skills = aboutData.skills || []
  const services = aboutData.services || []

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: isMobile ? 15 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.5 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const skillIconMap = {
    video: Video,
    zap: Zap,
    palette: Palette,
    image: Image,
    music: Music,
    scissors: Scissors,
    box: Box,
    cube: Cube,
    code: Code,
    smartphone: Smartphone,
    camera: Camera,
  }

  const statIconMap = {
    briefcase: Briefcase,
    calendar: Calendar,
    users: Users,
    award: Award,
    video: Video,
    star: Star,
    "trending-up": TrendingUp,
    target: Target,
  }

  const getStatColor = (color: string) => {
    const colors = {
      red: "from-red-500 to-red-600",
      orange: "from-orange-500 to-orange-600",
      yellow: "from-yellow-500 to-yellow-600",
      green: "from-green-500 to-green-600",
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      pink: "from-pink-500 to-pink-600",
      teal: "from-teal-500 to-teal-600",
    }
    return colors[color as keyof typeof colors] || "from-blue-500 to-blue-600"
  }

  // Group skills by category safely
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>,
  )

  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className={`w-20 h-20 rounded-full ${theme.accent} flex items-center justify-center ${theme.shadow}`}>
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${theme.gradient}`}>About Me</h1>
          <motion.p
            className={`text-xl sm:text-2xl ${theme.textSecondary} max-w-4xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Discover my journey, skills, and passion for creating exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Enhanced Description with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card className={`${theme.card} ${theme.shadow} overflow-hidden relative`}>
            <motion.div
              className="absolute inset-0 opacity-5"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                backgroundImage: `linear-gradient(45deg, ${theme.primaryColor}22 25%, transparent 25%), linear-gradient(-45deg, ${theme.primaryColor}22 25%, transparent 25%)`,
                backgroundSize: "60px 60px",
              }}
            />
            <CardContent className="p-8 sm:p-12 relative z-10">
              <motion.p
                className={`text-lg sm:text-xl leading-relaxed ${theme.text} mb-6`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {aboutData.description || "Passionate about creating amazing digital experiences."}
              </motion.p>
              {aboutData.longDescription && (
                <motion.p
                  className={`text-base sm:text-lg leading-relaxed ${theme.textSecondary}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {aboutData.longDescription}
                </motion.p>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Stats with Hover Effects */}
        {stats.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => {
              const StatIcon = statIconMap[stat.icon as keyof typeof statIconMap] || Briefcase
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredStat(index)}
                  onHoverEnd={() => setHoveredStat(null)}
                >
                  <Card
                    className={`${theme.card} ${theme.animation} h-full relative overflow-hidden cursor-pointer group`}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10"
                      animate={
                        hoveredStat === index
                          ? {
                              background: [
                                `radial-gradient(circle at 0% 0%, ${theme.primaryColor} 0%, transparent 50%)`,
                                `radial-gradient(circle at 100% 100%, ${theme.primaryColor} 0%, transparent 50%)`,
                                `radial-gradient(circle at 0% 0%, ${theme.primaryColor} 0%, transparent 50%)`,
                              ],
                            }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <CardContent className="p-6 sm:p-8 flex flex-col items-center justify-center text-center h-full relative z-10">
                      <motion.div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${getStatColor(stat.color)} flex items-center justify-center mb-4 ${theme.shadow}`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <StatIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </motion.div>
                      <motion.div
                        className={`text-3xl sm:text-4xl font-bold mb-2 ${theme.gradient}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                      >
                        {stat.value}
                      </motion.div>
                      <motion.div
                        className={`text-sm sm:text-base ${theme.textSecondary} font-medium`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.7 }}
                      >
                        {stat.label}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {/* Revolutionary Skills Section */}
        {featuresData.skills && skills.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mb-16">
            <motion.h2
              className={`text-3xl sm:text-4xl font-bold mb-12 ${theme.gradient} text-center`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              My Expertise
            </motion.h2>

            {/* Skill Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeSkillCategory === null
                    ? `${theme.primary} text-white`
                    : `${theme.card} ${theme.textSecondary} hover:scale-105`
                }`}
                onClick={() => setActiveSkillCategory(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All Skills
              </motion.button>
              {Object.keys(skillsByCategory).map((category) => (
                <motion.button
                  key={category}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeSkillCategory === category
                      ? `${theme.primary} text-white`
                      : `${theme.card} ${theme.textSecondary} hover:scale-105`
                  }`}
                  onClick={() => setActiveSkillCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills
                .filter((skill) => !activeSkillCategory || skill.category === activeSkillCategory)
                .map((skill, index) => {
                  const SkillIcon = skillIconMap[skill.icon as keyof typeof skillIconMap] || Code
                  return (
                    <motion.div
                      key={skill.name}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                    >
                      <Card className={`${theme.card} ${theme.animation} h-full group relative overflow-hidden`}>
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-20"
                          style={{
                            background: `linear-gradient(135deg, ${skill.color || theme.primaryColor}22, transparent)`,
                          }}
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />
                        <CardContent className="p-6 flex flex-col items-center text-center h-full relative z-10">
                          <motion.div
                            className="w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                            style={{
                              background: `linear-gradient(135deg, ${skill.color || theme.primaryColor}, ${skill.color || theme.secondaryColor})`,
                            }}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          >
                            <SkillIcon className="w-8 h-8 text-white" />
                          </motion.div>

                          <h3 className={`font-bold mb-2 text-sm sm:text-base ${theme.text} text-center leading-tight`}>
                            {skill.name}
                          </h3>

                          <div className={`text-xs ${theme.textSecondary} mb-3`}>{skill.category}</div>

                          {/* Circular Progress */}
                          <div className="relative w-16 h-16 mb-2">
                            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                              <circle
                                cx="18"
                                cy="18"
                                r="16"
                                fill="transparent"
                                stroke="currentColor"
                                strokeWidth="2"
                                className={theme.textSecondary}
                                opacity="0.2"
                              />
                              <motion.circle
                                cx="18"
                                cy="18"
                                r="16"
                                fill="transparent"
                                stroke={skill.color || theme.primaryColor}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeDasharray={`${skill.level} ${100 - skill.level}`}
                                initial={{ strokeDasharray: "0 100" }}
                                animate={{ strokeDasharray: `${skill.level} ${100 - skill.level}` }}
                                transition={{ duration: 1.5, delay: index * 0.1 }}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <motion.span
                                className={`text-sm font-bold ${theme.text}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                              >
                                {skill.level}%
                              </motion.span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
            </div>
          </motion.div>
        )}

        {/* Enhanced Services Section */}
        {featuresData.services && services.length > 0 && (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-16">
            <motion.h2
              className={`text-3xl sm:text-4xl font-bold mb-12 ${theme.gradient} text-center`}
              variants={itemVariants}
            >
              Services I Offer
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const ServiceIcon = skillIconMap[service.icon as keyof typeof skillIconMap] || Code
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card
                      className={`${theme.card} ${theme.animation} h-full group relative overflow-hidden`}
                      whileHover={{ y: -10 }}
                    >
                      <motion.div
                        className="absolute top-0 left-0 w-full h-1"
                        style={{ background: `linear-gradient(90deg, ${theme.primaryColor}, ${theme.secondaryColor})` }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: index * 0.2 }}
                      />
                      <CardContent className="p-8">
                        <motion.div
                          className={`w-16 h-16 rounded-full ${theme.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${theme.shadow}`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          <ServiceIcon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className={`text-xl font-bold mb-3 ${theme.text}`}>{service.title}</h3>
                        <p className={`${theme.textSecondary} mb-6`}>{service.description}</p>

                        {service.features && service.features.length > 0 && (
                          <ul className={`text-sm ${theme.textSecondary} mb-6 space-y-2`}>
                            {service.features.map((feature, featureIndex) => (
                              <motion.li
                                key={featureIndex}
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                              >
                                <motion.div
                                  className={`w-2 h-2 rounded-full ${theme.accent} mr-3 flex-shrink-0`}
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{
                                    delay: featureIndex * 0.2,
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                  }}
                                />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        )}

                        <motion.div
                          className={`text-xl font-bold ${theme.gradient}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                        >
                          {service.price}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
