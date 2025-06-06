"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Clock, Briefcase, Mail, ImageIcon, Sun, Moon, Video } from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/theme-registry"

interface NavigationProps {
  config: PortfolioConfig
  theme: Theme
  currentPage: string
  setCurrentPage: (page: string) => void
  isMobile: boolean
  setIsDark: (isDark: boolean) => void
  isDark: boolean
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

export default function Navigation({
  config,
  theme,
  currentPage,
  setCurrentPage,
  isMobile,
  setIsDark,
  isDark,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(config.theme.name)

  // Filter navigation items based on theme and enabled status
  const enabledNavItems = config.navigation.filter((item) => {
    if (!item.enabled) return false
    if (item.themes && !item.themes.includes(config.theme.name) && !item.themes.includes("all")) return false
    return true
  })

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${theme.card} ${theme.border} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-xl font-bold ${theme.gradient} cursor-pointer`}
              onClick={() => setCurrentPage("home")}
            >
              {config.personal.name}
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {enabledNavItems.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] || Home
                return (
                  <Button
                    key={item.href}
                    variant="ghost"
                    onClick={() => setCurrentPage(item.href)}
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      currentPage === item.href
                        ? `${theme.primary} text-white`
                        : `hover:bg-opacity-10 ${theme.animation}`
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Button>
                )
              })}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              {config.features.darkMode && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    const themes = ["developer", "editor", "designer", "photographer"]
                    const currentIndex = themes.indexOf(currentTheme)
                    const nextTheme = themes[(currentIndex + 1) % themes.length]
                    setCurrentTheme(nextTheme)
                    // You can emit an event or use a callback to update the main theme
                  }}
                  className={`${theme.animation} hidden sm:flex`}
                >
                  {currentTheme === "developer" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>
              )}

              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-16 left-0 right-0 z-40 md:hidden ${theme.card} ${theme.border} border-b`}
        >
          <div className="px-4 py-4 space-y-2">
            {enabledNavItems.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Home
              return (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => {
                    setCurrentPage(item.href)
                    setIsOpen(false)
                  }}
                  className={`w-full justify-start gap-2 ${
                    currentPage === item.href ? `${theme.primary} text-white` : ""
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Button>
              )
            })}

            {config.features.darkMode && (
              <Button
                variant="ghost"
                onClick={() => setIsDark(!isDark)}
                className="w-full justify-start gap-2 sm:hidden"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {isDark ? "Light Mode" : "Dark Mode"}
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </>
  )
}
