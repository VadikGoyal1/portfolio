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

interface RefinedNavigationProps {
  config: PortfolioConfig
  theme: Theme
  currentPage: string
  setCurrentPage: (page: string) => void
  isMobile: boolean
  currentTheme: string
  setCurrentTheme: (theme: string) => void
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

export default function RefinedNavigation({
  config,
  theme,
  currentPage,
  setCurrentPage,
  isMobile,
  currentTheme,
  setCurrentTheme,
}: RefinedNavigationProps) {
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

  return (
    <>
      {/* Refined Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 backdrop-blur-xl ${theme.card} border-b ${theme.border}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with animation */}
            <motion.div
              className={`text-xl font-bold cursor-pointer ${theme.gradient}`}
              onClick={() => setCurrentPage("home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                textShadow: theme.glowColor,
              }}
            >
              <motion.span
                animate={{
                  textShadow: [theme.glowColor, `0 0 15px ${theme.primaryColor}40`, theme.glowColor],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                {config.personal.name}
              </motion.span>
            </motion.div>

            {/* Desktop Menu with enhanced animations */}
            <div className="hidden md:flex items-center space-x-1">
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
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="ghost"
                        onClick={() => setCurrentPage(item.href)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 relative ${
                          isActive
                            ? `${theme.primary.split(" ")[0]} text-white`
                            : `${theme.textSecondary} hover:bg-opacity-10`
                        }`}
                      >
                        <motion.div
                          animate={
                            isActive
                              ? {
                                  rotate: [0, 360],
                                  transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
                                }
                              : {}
                          }
                        >
                          <Icon className="w-4 h-4" />
                        </motion.div>
                        <span className="font-medium">{item.name}</span>

                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-current"
                            layoutId="activeTab"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}

                        {/* Add sparkles to active item */}
                        {isActive && (
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
                            <Sparkles className="w-3 h-3 text-white" />
                          </motion.div>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>

            {/* Theme Selector & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Theme Selector with enhanced animations */}
              <div className="relative">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowThemeSelector(!showThemeSelector)}
                    className={`flex items-center gap-2 ${theme.textSecondary} hover:bg-opacity-10 relative overflow-hidden`}
                  >
                    <motion.div animate={showThemeSelector ? { rotate: 360 } : {}} transition={{ duration: 0.5 }}>
                      <Palette className="w-4 h-4" />
                    </motion.div>
                    <span className="hidden sm:inline">{getThemeDisplayName(currentTheme)}</span>
                    <motion.div animate={{ rotate: showThemeSelector ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-3 h-3" />
                    </motion.div>

                    {/* Add shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={showThemeSelector ? { x: "100%" } : {}}
                      transition={{ duration: 0.5 }}
                    />
                  </Button>
                </motion.div>

                {/* Theme Dropdown with enhanced animations */}
                <AnimatePresence>
                  {showThemeSelector && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute right-0 top-12 ${theme.card} ${theme.border} border rounded-xl p-2 min-w-48 ${theme.shadow}`}
                    >
                      <div className="grid grid-cols-2 gap-1">
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
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-left relative overflow-hidden ${
                                isSelected
                                  ? `${theme.primary} text-white`
                                  : `${theme.textSecondary} hover:bg-opacity-10`
                              }`}
                            >
                              {/* Animated background */}
                              {(isSelected || isHovered) && (
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                  initial={{ x: "-100%" }}
                                  animate={{ x: "100%" }}
                                  transition={{
                                    duration: 0.5,
                                    repeat: isSelected ? Number.POSITIVE_INFINITY : 0,
                                    repeatDelay: 1,
                                  }}
                                />
                              )}

                              <motion.div
                                className="w-3 h-3 rounded-full relative"
                                style={{
                                  background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                                }}
                                animate={
                                  isSelected || isHovered
                                    ? {
                                        scale: [1, 1.2, 1],
                                        transition: { duration: 1, repeat: Number.POSITIVE_INFINITY },
                                      }
                                    : {}
                                }
                              />
                              <span className="text-sm font-medium relative z-10">{displayName}</span>

                              {/* Selected indicator */}
                              {isSelected && (
                                <motion.div
                                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  transition={{ type: "spring", stiffness: 500 }}
                                >
                                  <Sparkles className="w-3 h-3 text-white" />
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

              {/* Mobile Menu Button with animation */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden relative overflow-hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {/* Add shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={isOpen ? { x: "100%" } : {}}
                    transition={{ duration: 0.5 }}
                  />

                  <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`fixed top-16 left-0 right-0 z-40 md:hidden ${theme.card} border-b ${theme.border} backdrop-blur-xl`}
          >
            <div className="px-4 py-6 space-y-2">
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
                      onClick={() => {
                        setCurrentPage(item.href)
                        setIsOpen(false)
                      }}
                      className={`w-full justify-start gap-3 py-3 px-4 rounded-lg ${
                        isActive ? `${theme.primary} text-white` : `${theme.textSecondary} hover:bg-opacity-10`
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
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
