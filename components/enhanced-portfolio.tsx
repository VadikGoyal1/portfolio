"use client"

import { useState, useEffect, useRef } from "react"
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
import SmartNavigation from "./navigation/smart-navigation"
import AnimatedBackground from "./effects/animated-background"
import Footer from "./layout/footer"
import ProtectionLayer from "./security/protection-layer"
import ThemeManager from "./theme/theme-manager"
import ThreeDElements from "./effects/3d-elements"
import ChillParadiseLoader from "./effects/chill-paradise-loader"

export default function EnhancedPortfolio() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [currentTheme, setCurrentTheme] = useState("neon")
  const [scrollPositions, setScrollPositions] = useState<Record<string, number>>({})
  const mainRef = useRef<HTMLDivElement>(null)

  const config = portfolioConfig
  const theme = getTheme(currentTheme, config.theme.customColors)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Fake loading timer - configurable duration
    const loadingDuration = config.features.loadingScreen ? config.loader?.duration || 4000 : 0
    const timer = setTimeout(() => setIsLoading(false), loadingDuration)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", checkMobile)
    }
  }, [config.features.loadingScreen, config.loader?.duration])

  // Save scroll position when leaving a page
  useEffect(() => {
    const saveScrollPosition = () => {
      setScrollPositions((prev) => ({
        ...prev,
        [currentPage]: window.scrollY,
      }))
    }

    return () => saveScrollPosition()
  }, [currentPage])

  // Restore scroll position when returning to a page
  useEffect(() => {
    if (!isLoading && scrollPositions[currentPage] !== undefined) {
      setTimeout(() => {
        window.scrollTo({
          top: scrollPositions[currentPage],
          behavior: "smooth",
        })
      }, 100)
    }
  }, [currentPage, isLoading, scrollPositions])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handlePageChange = (page: string) => {
    // Save current scroll position
    setScrollPositions((prev) => ({
      ...prev,
      [currentPage]: window.scrollY,
    }))

    setCurrentPage(page)

    // If it's a new page visit, scroll to top
    scrollToTop()
  }

  // Show loading screen if enabled and still loading
  if (isLoading && config.features.loadingScreen) {
    return <ChillParadiseLoader theme={theme} config={config} />
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

  const pageTransitionVariants = {
    initial: {
      opacity: 0,
      y: isMobile ? 50 : 100,
      scale: 0.8,
      filter: "blur(20px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      y: isMobile ? -50 : -100,
      scale: 0.8,
      filter: "blur(20px)",
    },
  }

  return (
    <>
      <ProtectionLayer />
      <ThemeManager currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />

      <motion.div
        ref={mainRef}
        className={`min-h-screen ${theme.background} ${theme.text} transition-all duration-700`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Background */}
        <AnimatedBackground theme={theme} />

        {/* 3D Elements */}
        <ThreeDElements theme={theme} />

        {/* Enhanced Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Moving Gradient Waves */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 20% 80%, ${theme.primaryColor}15 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${theme.secondaryColor}15 0%, transparent 50%), radial-gradient(circle at 40% 40%, ${theme.primaryColor}10 0%, transparent 60%)`,
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Floating Orbs */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full blur-xl"
              style={{
                width: `${60 + Math.random() * 40}px`,
                height: `${60 + Math.random() * 40}px`,
                background: `radial-gradient(circle, ${i % 2 === 0 ? theme.primaryColor : theme.secondaryColor}20, transparent)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <SmartNavigation
          config={config}
          theme={theme}
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
          isMobile={isMobile}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          scrollToTop={scrollToTop}
        />

        {/* Page Content with Enhanced Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + currentTheme}
            variants={pageTransitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: isMobile ? 0.4 : 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative z-10"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <Footer theme={theme} />

        {/* Enhanced Page Transition Overlay */}
        <AnimatePresence>
          <motion.div
            key={`overlay-${currentPage}`}
            className="fixed inset-0 pointer-events-none z-50"
            style={{
              background: `radial-gradient(circle at center, ${theme.primaryColor}30 0%, transparent 70%)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0.4, scale: 1.5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </motion.div>
    </>
  )
}
