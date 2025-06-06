"use client"

import { useState, useEffect } from "react"
import { portfolioConfig } from "../config/portfolio-config"
import { getTheme } from "../themes/theme-registry"
import HomePage from "./sections/home-page"
import AboutPage from "./sections/about-page"
import ProjectsPage from "./sections/projects-page"
import ContactPage from "./sections/contact-page"
import TimelinePage from "./sections/timeline-page"
import GalleryPage from "./sections/gallery-page"
import VideosPage from "./sections/videos-page"
import Navigation from "./navigation/navigation"
import LoadingScreen from "./effects/loading-screen"
import ProtectionLayer from "./security/protection-layer"
import { AnimatePresence, motion } from "framer-motion"

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const config = portfolioConfig
  const theme = getTheme(config.theme.name)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Loading timer
    const timer = setTimeout(() => setIsLoading(false), 2000)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen theme={theme} config={config} />
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage config={config} theme={theme} isMobile={isMobile} />
      case "about":
        return <AboutPage config={config} theme={theme} isMobile={isMobile} />
      case "projects":
        return config.features.projects ? <ProjectsPage config={config} theme={theme} isMobile={isMobile} /> : null
      case "gallery":
        return config.features.gallery ? <GalleryPage config={config} theme={theme} isMobile={isMobile} /> : null
      case "videos":
        return config.features.videos ? <VideosPage config={config} theme={theme} isMobile={isMobile} /> : null
      case "contact":
        return <ContactPage config={config} theme={theme} isMobile={isMobile} />
      case "timeline":
        return config.features.timeline ? <TimelinePage config={config} theme={theme} isMobile={isMobile} /> : null
      default:
        return <HomePage config={config} theme={theme} isMobile={isMobile} />
    }
  }

  return (
    <>
      <ProtectionLayer />
      <div className={`min-h-screen ${theme.background} ${theme.text} transition-all duration-700 overflow-x-hidden`}>
        <Navigation
          config={config}
          theme={theme}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isMobile={isMobile}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: isMobile ? 10 : 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isMobile ? -10 : -20, scale: 0.98 }}
            transition={{
              duration: isMobile ? 0.4 : 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}
