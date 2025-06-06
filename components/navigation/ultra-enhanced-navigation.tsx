"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Clock, Briefcase, Mail, ImageIcon, Video, Palette, Sparkles, Star } from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/enhanced-theme-registry"
import { getAllThemes, getThemeDisplayName } from "../../themes/enhanced-theme-registry"

interface UltraEnhancedNavigationProps {
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

export default function UltraEnhancedNavigation({
  config,
  theme,
  currentPage,
  setCurrentPage,
  isMobile,
  currentTheme,
  setCurrentTheme,
}: UltraEnhancedNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showThemeSelector, setShowThemeSelector] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const availableThemes = getAllThemes()

  // Filter navigation items
  const enabledNavItems = config.navigation.filter((item) => {
    if (!item.enabled) return false
    if (item.themes && !item.themes.includes(config.theme.name) && !item.themes.includes("all")) return false
    return true
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleThemeChange = (newTheme: string) => {
    setCurrentTheme(newTheme)
    setShowThemeSelector(false)
  }

  return (
    <>
      {/* Ultra Enhanced Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 backdrop-blur-2xl ${theme.card} border-b ${theme.border} transition-all duration-700`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
        }}
        style={{
          boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)`,
        }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              `linear-gradient(45deg, ${theme.primaryColor}22, transparent, ${theme.secondaryColor}22)`,
              `linear-gradient(45deg, ${theme.secondaryColor}22, transparent, ${theme.primaryColor}22)`,
              `linear-gradient(45deg, ${theme.primaryColor}22, transparent, ${theme.secondaryColor}22)`,
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16">
            {/* Ultra Enhanced Logo */}
            <motion.div
              className={`text-xl font-bold cursor-pointer relative group`}
              onClick={() => setCurrentPage("home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className={theme.gradient}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{
                  textShadow: theme.glowColor,
                  filter: "drop-shadow(0 0 10px currentColor)",
                }}
              >
                {config.personal.name}
              </motion.span>

              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              />

              {/* Floating particles around logo */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full opacity-60"
                  style={{ background: theme.primaryColor }}
                  animate={{
                    x: [0, Math.random() * 40 - 20],
                    y: [0, Math.random() * 40 - 20],
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.8,
                  }}
                />
              ))}
            </motion.div>

            {/* Desktop Menu with Insane Animations */}
            <div className="hidden md:flex items-center space-x-1">
              {enabledNavItems.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] || Home
                const isActive = currentPage === item.href

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -30, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.5,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <motion.div className="relative group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="ghost"
                        onClick={() => setCurrentPage(item.href)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-500 relative overflow-hidden ${
                          isActive
                            ? `${theme.primary.split(" ")[0]} text-white shadow-2xl`
                            : `${theme.textSecondary} hover:bg-opacity-10`
                        }`}
                        style={{
                          boxShadow: isActive ? `0 0 20px ${theme.primaryColor}40` : undefined,
                        }}
                      >
                        {/* Animated background for active item */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatDelay: 1,
                            }}
                          />
                        )}

                        {/* Icon with rotation animation */}
                        <motion.div
                          animate={isActive ? { rotate: [0, 360] } : {}}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <Icon className="w-4 h-4" />
                        </motion.div>

                        <span className="relative z-10 font-medium">{item.name}</span>

                        {/* Hover glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle at center, ${theme.primaryColor}20, transparent)`,
                            filter: `blur(8px)`,
                          }}
                        />
                      </Button>

                      {/* Floating sparkles on hover */}
                      <AnimatePresence>
                        {isActive && (
                          <>
                            {Array.from({ length: 5 }).map((_, i) => (
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
                                  delay: i * 0.3,
                                }}
                                style={{
                                  left: "50%",
                                  top: "50%",
                                }}
                              >
                                <Sparkles className="w-3 h-3" style={{ color: theme.primaryColor }} />
                              </motion.div>
                            ))}
                          </>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>

            {/* Theme Selector & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Ultra Enhanced Theme Selector */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowThemeSelector(!showThemeSelector)}
                    className={`${theme.animation} relative overflow-hidden group rounded-xl`}
                    style={{
                      boxShadow: `0 0 20px ${theme.primaryColor}30`,
                    }}
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      animate={{
                        background: [
                          `conic-gradient(from 0deg, ${theme.primaryColor}, ${theme.secondaryColor}, ${theme.primaryColor})`,
                          `conic-gradient(from 360deg, ${theme.primaryColor}, ${theme.secondaryColor}, ${theme.primaryColor})`,
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />

                    <motion.div
                      className="relative z-10"
                      animate={{ rotate: showThemeSelector ? 180 : 0 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      <Palette className="w-5 h-5" />
                    </motion.div>

                    {/* Orbiting elements */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{ background: theme.primaryColor }}
                        animate={{
                          rotate: [0, 360],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 1,
                        }}
                        style={{
                          transformOrigin: "0 25px",
                          left: "50%",
                          top: "50%",
                        }}
                      />
                    ))}
                  </Button>
                </motion.div>

                {/* Ultra Enhanced Theme Dropdown */}
                <AnimatePresence>
                  {showThemeSelector && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -20, rotateX: -90 }}
                      animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20, rotateX: -90 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`absolute right-0 top-14 ${theme.card} ${theme.border} border rounded-2xl ${theme.shadow} p-3 min-w-56 backdrop-blur-2xl`}
                      style={{
                        boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px ${theme.primaryColor}20`,
                      }}
                    >
                      <motion.div
                        className="text-xs font-semibold mb-3 opacity-60 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 0.2 }}
                      >
                        Choose Your Vibe
                      </motion.div>

                      <div className="grid grid-cols-2 gap-2">
                        {availableThemes.map((themeName, index) => {
                          const isSelected = currentTheme === themeName
                          const displayName = getThemeDisplayName(themeName)

                          return (
                            <motion.button
                              key={themeName}
                              initial={{ opacity: 0, x: 30, rotateY: -90 }}
                              animate={{ opacity: 1, x: 0, rotateY: 0 }}
                              transition={{
                                delay: index * 0.05,
                                type: "spring",
                                stiffness: 200,
                              }}
                              onClick={() => handleThemeChange(themeName)}
                              className={`relative flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 group overflow-hidden ${
                                isSelected
                                  ? `${theme.primary} text-white shadow-lg`
                                  : `${theme.textSecondary} hover:bg-opacity-10`
                              }`}
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              style={{
                                boxShadow: isSelected ? `0 0 20px ${theme.primaryColor}40` : undefined,
                              }}
                            >
                              {/* Animated background */}
                              <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                animate={{
                                  background: [
                                    `linear-gradient(45deg, transparent, ${theme.primaryColor}20, transparent)`,
                                    `linear-gradient(45deg, transparent, ${theme.secondaryColor}20, transparent)`,
                                    `linear-gradient(45deg, transparent, ${theme.primaryColor}20, transparent)`,
                                  ],
                                }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              />

                              {/* Theme color indicator */}
                              <motion.div
                                className="w-3 h-3 rounded-full relative overflow-hidden"
                                style={{
                                  background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                                }}
                                animate={isSelected ? { rotate: [0, 360] } : {}}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              >
                                {/* Shimmer effect */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                  animate={{ x: ["-100%", "100%"] }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatDelay: 2,
                                  }}
                                />
                              </motion.div>

                              <span className="text-sm font-medium relative z-10">{displayName}</span>

                              {/* Selection indicator */}
                              {isSelected && (
                                <motion.div
                                  className="ml-auto"
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  transition={{ type: "spring", stiffness: 500 }}
                                >
                                  <Star className="w-3 h-3 fill-current" />
                                </motion.div>
                              )}

                              {/* Floating particles on hover */}
                              <AnimatePresence>
                                {isSelected && (
                                  <>
                                    {Array.from({ length: 3 }).map((_, i) => (
                                      <motion.div
                                        key={i}
                                        className="absolute pointer-events-none"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{
                                          scale: [0, 1, 0],
                                          opacity: [0, 0.8, 0],
                                          x: [0, (Math.random() - 0.5) * 40],
                                          y: [0, (Math.random() - 0.5) * 40],
                                        }}
                                        transition={{
                                          duration: 2,
                                          repeat: Number.POSITIVE_INFINITY,
                                          delay: i * 0.5,
                                        }}
                                        style={{
                                          left: "50%",
                                          top: "50%",
                                        }}
                                      >
                                        <div
                                          className="w-1 h-1 rounded-full"
                                          style={{ background: theme.primaryColor }}
                                        />
                                      </motion.div>
                                    ))}
                                  </>
                                )}
                              </AnimatePresence>
                            </motion.button>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Ultra Enhanced Mobile Menu Button */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative overflow-hidden group rounded-xl"
                  style={{
                    boxShadow: `0 0 20px ${theme.primaryColor}30`,
                  }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    animate={{
                      background: [
                        `radial-gradient(circle at center, ${theme.primaryColor}20, transparent)`,
                        `radial-gradient(circle at center, ${theme.secondaryColor}20, transparent)`,
                        `radial-gradient(circle at center, ${theme.primaryColor}20, transparent)`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="relative z-10"
                  >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Ultra Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -50 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -50 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`fixed top-16 left-0 right-0 z-40 md:hidden ${theme.card} border-b ${theme.border} backdrop-blur-2xl overflow-hidden`}
            style={{
              boxShadow: `0 20px 40px rgba(0,0,0,0.3)`,
            }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 opacity-5"
              animate={{
                background: [
                  `linear-gradient(45deg, ${theme.primaryColor}, transparent, ${theme.secondaryColor})`,
                  `linear-gradient(45deg, ${theme.secondaryColor}, transparent, ${theme.primaryColor})`,
                  `linear-gradient(45deg, ${theme.primaryColor}, transparent, ${theme.secondaryColor})`,
                ],
              }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            />

            <motion.div
              className="px-4 py-6 space-y-3 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {enabledNavItems.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] || Home
                const isActive = currentPage === item.href

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -50, rotateY: -90 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setCurrentPage(item.href)
                        setIsOpen(false)
                      }}
                      className={`w-full justify-start gap-3 py-4 px-4 rounded-xl transition-all duration-500 relative overflow-hidden group ${
                        isActive
                          ? `${theme.primary} text-white shadow-lg`
                          : `${theme.textSecondary} hover:bg-opacity-10`
                      }`}
                      style={{
                        boxShadow: isActive ? `0 0 20px ${theme.primaryColor}40` : undefined,
                      }}
                    >
                      {/* Animated background */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 1,
                          }}
                        />
                      )}

                      <motion.div
                        animate={isActive ? { rotate: [0, 360] } : {}}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>

                      <span className="font-medium relative z-10">{item.name}</span>

                      {/* Hover glow */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at center, ${theme.primaryColor}15, transparent)`,
                        }}
                      />
                    </Button>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cursor follower effect */}
      <motion.div
        className="fixed pointer-events-none z-30 w-6 h-6 rounded-full opacity-20 mix-blend-difference"
        style={{
          background: `radial-gradient(circle, ${theme.primaryColor}, transparent)`,
          filter: "blur(10px)",
        }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  )
}
