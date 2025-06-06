"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { portfolioConfig } from "../config/portfolio-config"
import { getTheme } from "../themes/enhanced-theme-registry"
import UltraEnhancedHomePage from "./sections/ultra-enhanced-home-page"
import EnhancedAboutPage from "./sections/enhanced-about-page"
import ProjectsPage from "./sections/projects-page"
import ContactPage from "./sections/contact-page"
import TimelinePage from "./sections/timeline-page"
import GalleryPage from "./sections/gallery-page"
import VideosPage from "./sections/videos-page"
import UltraEnhancedNavigation from "./navigation/ultra-enhanced-navigation"
import EnhancedLoadingScreen from "./effects/enhanced-loading-screen"
import ProtectionLayer from "./security/protection-layer"
import ThemeManager from "./theme/theme-manager"

export default function UltraEnhancedPortfolio() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [currentTheme, setCurrentTheme] = useState("neon")

  const config = portfolioConfig
  const theme = getTheme(currentTheme, config.theme.customColors)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Enhanced loading with theme-appropriate timing
    const loadingDuration = isMobile ? 2000 : 3000
    const timer = setTimeout(() => setIsLoading(false), loadingDuration)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  if (isLoading) {
    return <EnhancedLoadingScreen theme={theme} config={config} />
  }

  const renderPage = () => {
    const pageProps = { config, theme, isMobile }

    switch (currentPage) {
      case "home":
        return <UltraEnhancedHomePage {...pageProps} />
      case "about":
        return <EnhancedAboutPage {...pageProps} />
      case "projects":
        return config.features.projects ? <ProjectsPage {...pageProps} /> : null
      case "gallery":
        return config.features.gallery ? <GalleryPage {...pageProps} /> : null
      case "videos":
        return config.features.videos ? <VideosPage {...pageProps} /> : null
      case "timeline":
        return config.features.timeline ? <TimelinePage {...pageProps} /> : null
      case "contact":
        return <ContactPage {...pageProps} />
      default:
        return <UltraEnhancedHomePage {...pageProps} />
    }
  }

  return (
    <>
      <ProtectionLayer />
      <ThemeManager currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />

      <motion.div
        className={`min-h-screen ${theme.background} ${theme.text} transition-all duration-1000 overflow-x-hidden relative`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <UltraEnhancedNavigation
          config={config}
          theme={theme}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isMobile={isMobile}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + currentTheme}
            initial={{
              opacity: 0,
              y: isMobile ? 30 : 60,
              scale: 0.9,
              filter: "blur(20px)",
              rotateX: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              y: isMobile ? -30 : -60,
              scale: 0.9,
              filter: "blur(20px)",
              rotateX: 15,
            }}
            transition={{
              duration: isMobile ? 0.8 : 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
            }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>

        {/* Ultra enhanced floating theme particles */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 3 }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: `blur(${Math.random() * 3}px)`,
                boxShadow: `0 0 ${Math.random() * 20 + 10}px ${theme.primaryColor}`,
              }}
              animate={{
                y: [0, -200, 0],
                x: [0, Math.random() * 200 - 100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 10,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Ambient glow overlay */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, ${theme.primaryColor}05 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 80%, ${theme.secondaryColor}05 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 80%, ${theme.primaryColor}05 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 20%, ${theme.secondaryColor}05 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 20%, ${theme.primaryColor}05 0%, transparent 50%)`,
            ],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </>
  )
}
