"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Clock, Briefcase, Mail, ImageIcon, Video, Palette, Monitor } from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/theme-registry"
import { AnimatePresence } from "framer-motion"

interface EnhancedNavigationProps {
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

const availableThemes = [
  { name: "developer", icon: Monitor, label: "Developer" },
  { name: "editor", icon: Video, label: "Editor" },
  { name: "designer", icon: Palette, label: "Designer" },
  { name: "photographer", icon: ImageIcon, label: "Photographer" },
]

export default function EnhancedNavigation({
  config,
  theme,
  currentPage,
  setCurrentPage,
  isMobile,
  currentTheme,
  setCurrentTheme,
}: EnhancedNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showThemeSelector, setShowThemeSelector] = useState(false)

  // Filter navigation items based on theme and enabled status
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
      {/* Enhanced Desktop/Mobile Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 backdrop-blur-xl ${theme.card} border-b ${theme.border} transition-all duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Enhanced Logo */}
            <motion.div
              className={`text-xl font-bold ${theme.gradient} cursor-pointer relative`}
              onClick={() => setCurrentPage("home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                {config.personal.name}
              </motion.span>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {enabledNavItems.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] || Home
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => setCurrentPage(item.href)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                        currentPage === item.href
                          ? `${theme.primary.split(" ")[0]} text-white shadow-lg`
                          : `hover:bg-opacity-10 ${theme.animation} ${theme.textSecondary}`
                      }`}
                    >
                      {currentPage === item.href && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                        />
                      )}
                      <Icon className="w-4 h-4" />
                      <span className="relative z-10">{item.name}</span>
                    </Button>
                  </motion.div>
                )
              })}
            </div>

            {/* Theme Selector & Mobile Menu */}
            <div className="flex items-center gap-2">
              {/* Theme Selector */}
              <div className="relative">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowThemeSelector(!showThemeSelector)}
                    className={`${theme.animation} relative overflow-hidden group`}
                  >
                    <motion.div animate={{ rotate: showThemeSelector ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <Palette className="w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>

                {/* Theme Dropdown */}
                <AnimatePresence>
                  {showThemeSelector && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -10 }}
                      className={`absolute right-0 top-12 ${theme.card} ${theme.border} border rounded-lg ${theme.shadow} p-2 min-w-48`}
                    >
                      {availableThemes.map((themeOption, index) => {
                        const ThemeIcon = themeOption.icon
                        return (
                          <motion.button
                            key={themeOption.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleThemeChange(themeOption.name)}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
                              currentTheme === themeOption.name
                                ? `${theme.primary} text-white`
                                : `${theme.textSecondary} hover:bg-opacity-10 hover:${theme.primary.split(" ")[0]}`
                            }`}
                          >
                            <ThemeIcon className="w-4 h-4" />
                            <span>{themeOption.label}</span>
                            {currentTheme === themeOption.name && (
                              <motion.div
                                className="ml-auto w-2 h-2 rounded-full bg-white"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500 }}
                              />
                            )}
                          </motion.button>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`fixed top-16 left-0 right-0 z-40 md:hidden ${theme.card} border-b ${theme.border} backdrop-blur-xl`}
          >
            <motion.div
              className="px-4 py-6 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {enabledNavItems.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] || Home
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
                      className={`w-full justify-start gap-3 py-3 px-4 rounded-lg transition-all duration-300 ${
                        currentPage === item.href
                          ? `${theme.primary} text-white`
                          : `${theme.textSecondary} hover:bg-opacity-10`
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Button>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
