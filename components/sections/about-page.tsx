"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Briefcase,
  Calendar,
  Users,
  Award,
  Video,
  Zap,
  Palette,
  Code,
  Smartphone,
  UserCheck,
  Camera,
  Music,
  Stethoscope,
  Scale,
  Building,
  Dumbbell,
  Plane,
  Shirt,
} from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/theme-registry"

interface AboutPageProps {
  config: PortfolioConfig
  theme: Theme
  isMobile: boolean
}

export default function AboutPage({ config, theme, isMobile }: AboutPageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: isMobile ? 10 : 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.4 : 0.6,
      },
    },
  }

  const iconMap = {
    briefcase: <Briefcase className="w-6 h-6" />,
    calendar: <Calendar className="w-6 h-6" />,
    users: <Users className="w-6 h-6" />,
    award: <Award className="w-6 h-6" />,
    video: <Video className="w-6 h-6" />,
    zap: <Zap className="w-6 h-6" />,
    palette: <Palette className="w-6 h-6" />,
    code: <Code className="w-6 h-6" />,
    smartphone: <Smartphone className="w-6 h-6" />,
    "user-check": <UserCheck className="w-6 h-6" />,
    camera: <Camera className="w-6 h-6" />,
    music: <Music className="w-6 h-6" />,
    stethoscope: <Stethoscope className="w-6 h-6" />,
    scale: <Scale className="w-6 h-6" />,
    building: <Building className="w-6 h-6" />,
    dumbbell: <Dumbbell className="w-6 h-6" />,
    plane: <Plane className="w-6 h-6" />,
    shirt: <Shirt className="w-6 h-6" />,
  }

  const getStatColor = (color: string) => {
    const colors = {
      red: "from-red-500 to-red-600",
      orange: "from-orange-500 to-orange-600",
      yellow: "from-yellow-500 to-yellow-600",
      green: "from-green-500 to-green-600",
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
    }
    return colors[color as keyof typeof colors] || "from-blue-500 to-blue-600"
  }

  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${theme.gradient}`}>About Me</h1>
          <p className={`text-lg sm:text-xl ${theme.textSecondary} max-w-3xl mx-auto`}>
            Get to know more about my skills, experience, and passion
          </p>
        </motion.div>

        {/* Description */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 sm:mb-16">
          <Card className={`${theme.card} ${theme.shadow}`}>
            <CardContent className="p-6 sm:p-8">
              <p className={`text-base sm:text-lg leading-relaxed ${theme.text} mb-4`}>{config.about.description}</p>
              {config.about.longDescription && (
                <p className={`text-sm sm:text-base leading-relaxed ${theme.textSecondary}`}>
                  {config.about.longDescription}
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats */}
        {config.about.stats && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            {config.about.stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className={`${theme.card} ${theme.animation} h-full group`}>
                  <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center text-center h-full">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${getStatColor(stat.color)} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">
                        {iconMap[stat.icon as keyof typeof iconMap] || <Briefcase className="w-6 h-6" />}
                      </div>
                    </div>
                    <div className={`text-2xl sm:text-3xl font-bold mb-1 ${theme.gradient}`}>{stat.value}</div>
                    <div className={`text-xs sm:text-sm ${theme.textSecondary}`}>{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Skills */}
        {config.features.skills && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${theme.gradient} text-center`}>My Skills</h2>
            <div className="grid md:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6">
              {config.about.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span className={`font-medium text-sm sm:text-base ${theme.text}`}>{skill.name}</span>
                    <span className={`${theme.gradient} text-sm sm:text-base font-semibold`}>{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <div className={`w-full h-2 sm:h-3 rounded-full ${theme.card}`}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background:
                            skill.color || `linear-gradient(to right, ${theme.primaryColor}, ${theme.secondaryColor})`,
                          width: `${skill.level}%`,
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                  <div className={`text-xs ${theme.textSecondary}`}>{skill.category}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Services */}
        {config.features.services && (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-12 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${theme.gradient} text-center`}>
              Services I Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {config.about.services.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className={`${theme.card} ${theme.animation} h-full group`}>
                    <CardContent className="p-4 sm:p-6">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${theme.accent} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white">
                          {iconMap[service.icon as keyof typeof iconMap] || <Code className="w-6 h-6" />}
                        </div>
                      </div>
                      <h3 className={`text-lg sm:text-xl font-bold mb-2 ${theme.text}`}>{service.title}</h3>
                      <p className={`${theme.textSecondary} mb-4 text-sm sm:text-base`}>{service.description}</p>

                      {service.features && (
                        <ul className={`text-xs sm:text-sm ${theme.textSecondary} mb-4 space-y-1`}>
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <div className={`w-1.5 h-1.5 rounded-full ${theme.accent} mr-2`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className={`text-sm sm:text-base font-medium ${theme.gradient}`}>{service.price}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
