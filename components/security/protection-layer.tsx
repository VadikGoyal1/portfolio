"use client"

import { useEffect } from "react"

export default function ProtectionLayer() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Disable F12, Ctrl+Shift+I, Ctrl+U, etc.
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault()
        return false
      }

      // Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault()
        return false
      }

      // Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault()
        return false
      }

      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault()
        return false
      }

      // Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault()
        return false
      }
    }

    // Disable text selection
    const handleSelectStart = (e: Event) => {
      e.preventDefault()
      return false
    }

    // Disable drag
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("selectstart", handleSelectStart)
    document.addEventListener("dragstart", handleDragStart)

    // Disable console access
    const devtools = {
      open: false,
      orientation: null,
    }

    const threshold = 160

    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold || window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true
          console.clear()
          console.log("%cAccess Denied", "color: red; font-size: 50px; font-weight: bold;")
          console.log("%cThis portfolio is protected.", "color: red; font-size: 16px;")
        }
      } else {
        devtools.open = false
      }
    }, 500)

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("selectstart", handleSelectStart)
      document.removeEventListener("dragstart", handleDragStart)
    }
  }, [])

  return null
}
