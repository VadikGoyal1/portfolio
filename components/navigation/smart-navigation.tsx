"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  Home,
  User,
  Clock,
  Briefcase,
  Mail,
  ImageIcon,
  Video,
  Palette,
  ChevronDown,
  Sparkles,
} from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/refined-theme-registry"
import { getAllThemes, getThemeDisplayName } from "../../themes/refined-theme-registry"

interface SmartNavigationProps {
  config: PortfolioConfig
  theme: Theme
  currentPage: string
  setCurrentPage: (page: string) => void
  isMobile: boolean
  currentTheme: string
  setCurrentTheme: (theme: string) => void
  scrollToTop: () => void
}

const iconMap = {
  home: Home,
  user: User,
  clock: Clock,
  briefcase: Briefcase,
  mail: Mail,
  image: ImageIcon,
  video: Video,
}

export default function SmartNavigation({
  config,
  theme,
  currentPage,
  setCurrentPage,
  isMobile,
  currentTheme,
  setCurrentTheme,
  scrollToTop,
}: SmartNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showThemeSelector, setShowThemeSelector] = useState(false)
  const [hoveredTheme, setHoveredTheme] = useState<string | null>(null)
  const availableThemes = getAllThemes()

  // Filter navigation items
  const enabledNavItems = config.navigation.filter((item) => {
    if (!item.enabled) return false
    if (item.themes && !item.themes.includes(config.theme.name) && !item.themes.includes("all")) return false
    return true
  })

  const handleThemeChange = (newTheme: string) => {
    setCurrentTheme(newTheme)
    setShowThemeSelector(false)
  }

  const handlePageChange = (page: string) => {
    setCurrentPage(page)
    scrollToTop()
    setIsOpen(false)
  }

  return (
    <>
      {/* FIXED Navigation - Always visible at top */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/90 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <motion.div
              className="text-lg sm:text-xl font-bold cursor-pointer text-white relative"
              onClick={() => handlePageChange("home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
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

              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {enabledNavItems.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] || Home
                const isActive = currentPage === item.href

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { type: "spring", stiffness: 400, damping: 10 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handlePageChange(item.href)}
                        className={`flex items-center gap-1.5 lg:gap-2 px-2 lg:px-4 py-1.5 lg:py-2 rounded-lg transition-all duration-300 relative overflow-hidden border text-xs lg:text-sm ${
                          isActive
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/25"
                            : "text-gray-300 hover:text-white hover:bg-gray-800/50 border-gray-600/50 hover:border-gray-500"
                        }`}
                      >
                        {/* Animated background for active */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                          />
                        )}

                        <motion.div
                          animate={
                            isActive
                              ? {
                                  scale: [1, 1.1, 1],
                                  transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                                }
                              : {}
                          }
                        >
                          <Icon className="w-3 h-3 lg:w-4 lg:h-4" />
                        </motion.div>
                        <span className="font-medium relative z-10 hidden lg:inline">{item.name}</span>

                        {isActive && (
                          <>
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                              layoutId="activeTab"
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                            <motion.div
                              className="absolute -right-1 -top-1"
                              animate={{
                                scale: [0.8, 1.2, 0.8],
                                opacity: [0.5, 1, 0.5],
                                rotate: [0, 180],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            >
                              <Sparkles className="w-2 h-2 lg:w-3 lg:h-3 text-white" />
                            </motion.div>
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>

            {/* Theme Selector & Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Selector */}
              <div className="relative">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowThemeSelector(!showThemeSelector)}
                    className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white hover:bg-gray-800/50 border border-gray-600/50 hover:border-gray-500 px-2 sm:px-3 py-1.5 text-xs sm:text-sm"
                  >
                    <motion.div animate={showThemeSelector ? { rotate: 360 } : {}} transition={{ duration: 0.5 }}>
                      <Palette className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.div>
                    <span className="hidden sm:inline">{getThemeDisplayName(currentTheme)}</span>
                    <motion.div animate={{ rotate: showThemeSelector ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-2 h-2 sm:w-3 sm:h-3" />
                    </motion.div>
                  </Button>
                </motion.div>

                {/* Theme Dropdown */}
                <AnimatePresence>
                  {showThemeSelector && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-12 bg-black/90 backdrop-blur-xl border border-gray-700/50 rounded-xl p-2 min-w-40 sm:min-w-48 shadow-xl"
                    >
                      <div className="space-y-1">
                        {availableThemes.map((themeName, index) => {
                          const isSelected = currentTheme === themeName
                          const displayName = getThemeDisplayName(themeName)
                          const isHovered = hoveredTheme === themeName

                          return (
                            <motion.button
                              key={themeName}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onClick={() => handleThemeChange(themeName)}
                              onMouseEnter={() => setHoveredTheme(themeName)}
                              onMouseLeave={() => setHoveredTheme(null)}
                              className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-200 text-left relative overflow-hidden text-xs sm:text-sm ${
                                isSelected
                                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                                  : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                              }`}
                            >
                              <motion.div
                                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                                animate={
                                  isSelected || isHovered
                                    ? {
                                        scale: [1, 1.2, 1],
                                        transition: { duration: 1, repeat: Number.POSITIVE_INFINITY },
                                      }
                                    : {}
                                }
                              />
                              <span className="font-medium flex-1">{displayName}</span>
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  transition={{ type: "spring", stiffness: 500 }}
                                >
                                  <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                                </motion.div>
                              )}
                            </motion.button>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800/50 border border-gray-600/50 hover:border-gray-500 p-2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                    {isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-14 sm:top-16 left-0 right-0 z-40 md:hidden bg-black/95 backdrop-blur-xl border-b border-gray-700/50"
          >
            <div className="px-4 py-4 sm:py-6 space-y-2 sm:space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {enabledNavItems.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] || Home
                const isActive = currentPage === item.href

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => handlePageChange(item.href)}
                      className={`w-full justify-start gap-3 py-3 sm:py-4 px-4 rounded-lg text-left transition-all duration-300 text-sm sm:text-base ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-gray-800/50 border border-gray-600/50 hover:border-gray-500"
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-medium">{item.name}</span>
                      {isActive && (
                        <motion.div
                          className="ml-auto"
                          animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </motion.div>
                      )}
                    </Button>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
