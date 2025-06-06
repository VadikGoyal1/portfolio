"use client"

import { useEffect } from "react"

interface ThemeManagerProps {
  currentTheme: string
  setCurrentTheme: (theme: string) => void
}

export default function ThemeManager({ currentTheme, setCurrentTheme }: ThemeManagerProps) {
  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem("portfolio-theme", currentTheme)

    // Apply theme to document
    document.documentElement.setAttribute("data-theme", currentTheme)

    // Update meta theme color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    const themes: Record<string, string> = {
      developer: "#3B82F6",
      editor: "#DC2626",
      designer: "#9333EA",
      photographer: "#F59E0B",
    }

    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", themes[currentTheme] || themes.developer)
    }
  }, [currentTheme])

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("portfolio-theme")
    if (savedTheme && savedTheme !== currentTheme) {
      setCurrentTheme(savedTheme)
    }
  }, [currentTheme, setCurrentTheme])

  return null
}
