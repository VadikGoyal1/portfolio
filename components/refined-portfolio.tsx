"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { portfolioConfig } from "../config/portfolio-config"
import { getTheme } from "../themes/refined-theme-registry"
import RefinedHomePage from "./sections/refined-home-page"
import EnhancedAboutPage from "./sections/enhanced-about-page"
import ProjectsPage from "./sections/projects-page"
import ContactPage from "./sections/contact-page"
import TimelinePage from "./sections/timeline-page"
import GalleryPage from "./sections/gallery-page"
import VideosPage from "./sections/videos-page"
import RefinedNavigation from "./navigation/refined-navigation"
import EnhancedLoadingScreen from "./effects/enhanced-loading-screen"
import ProtectionLayer from "./security/protection-layer"
import ThemeManager from "./theme/theme-manager"

export default function RefinedPortfolio() {
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

    // Loading timer
    const loadingDuration = isMobile ? 1500 : 2000
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
        return <RefinedHomePage {...pageProps} />
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
        return <RefinedHomePage {...pageProps} />
    }
  }

  return (
    <>
      <ProtectionLayer />
      <ThemeManager currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />

      <motion.div
        className={`min-h-screen ${theme.background} ${theme.text} transition-all duration-700 overflow-x-hidden`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <RefinedNavigation
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
              y: isMobile ? 20 : 30,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: isMobile ? -20 : -30,
              scale: 0.98,
            }}
            transition={{
              duration: isMobile ? 0.5 : 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  )
}
