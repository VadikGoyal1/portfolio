export interface Theme {
  name: string
  displayName: string
  background: string
  text: string
  textSecondary: string
  primary: string
  secondary: string
  accent: string
  card: string
  cardHover: string
  border: string
  gradient: string
  shadow: string
  animation: string
  perspective: string
  primaryColor: string
  secondaryColor: string
  overlay: string
  glowColor: string
  particleColor: string
}

const themes: Record<string, Theme> = {
  neon: {
    name: "neon",
    displayName: "Neon",
    background: "bg-gradient-to-br from-black via-purple-950 to-black",
    text: "text-cyan-100",
    textSecondary: "text-cyan-300",
    primary: "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black border-0",
    secondary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white",
    accent: "bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500",
    card: "bg-black/40 backdrop-blur-xl border-cyan-500/30",
    cardHover: "hover:bg-black/60 hover:border-cyan-400/50",
    border: "border-cyan-500/30",
    gradient: "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-cyan-500/50",
    animation: "hover:scale-105 hover:shadow-cyan-500/70 transition-all duration-500",
    perspective: "futuristic",
    primaryColor: "#06B6D4",
    secondaryColor: "#A855F7",
    overlay: "bg-black/80",
    glowColor: "0 0 30px #06B6D4, 0 0 60px #06B6D4, 0 0 90px #06B6D4",
    particleColor: "#06B6D4",
  },

  dark: {
    name: "dark",
    displayName: "Dark",
    background: "bg-gradient-to-br from-gray-900 via-black to-gray-900",
    text: "text-white",
    textSecondary: "text-gray-300",
    primary: "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white border-0",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-700 text-white",
    accent: "bg-gradient-to-r from-gray-600 to-gray-800",
    card: "bg-gray-900/60 backdrop-blur-xl border-gray-700/50",
    cardHover: "hover:bg-gray-800/60 hover:border-gray-600/50",
    border: "border-gray-700/50",
    gradient: "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-black/50",
    animation: "hover:scale-105 hover:shadow-white/20 transition-all duration-500",
    perspective: "minimal",
    primaryColor: "#374151",
    secondaryColor: "#4B5563",
    overlay: "bg-black/80",
    glowColor: "0 0 30px #FFFFFF, 0 0 60px #FFFFFF, 0 0 90px #FFFFFF",
    particleColor: "#FFFFFF",
  },

  white: {
    name: "white",
    displayName: "White",
    background: "bg-gradient-to-br from-white via-gray-50 to-white",
    text: "text-gray-900",
    textSecondary: "text-gray-600",
    primary: "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border-0",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-700 text-white",
    accent: "bg-gradient-to-r from-gray-700 to-gray-900",
    card: "bg-white/80 backdrop-blur-xl border-gray-200/50",
    cardHover: "hover:bg-gray-50/80 hover:border-gray-300/50",
    border: "border-gray-200/50",
    gradient: "bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-gray-300/50",
    animation: "hover:scale-105 hover:shadow-gray-400/30 transition-all duration-500",
    perspective: "clean",
    primaryColor: "#1F2937",
    secondaryColor: "#374151",
    overlay: "bg-white/80",
    glowColor: "0 0 30px #1F2937, 0 0 60px #1F2937, 0 0 90px #1F2937",
    particleColor: "#1F2937",
  },

  red: {
    name: "red",
    displayName: "Red",
    background: "bg-gradient-to-br from-red-950 via-black to-red-950",
    text: "text-red-100",
    textSecondary: "text-red-300",
    primary: "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white border-0",
    secondary: "bg-gradient-to-r from-red-700 to-red-600 text-white",
    accent: "bg-gradient-to-r from-red-500 to-red-700",
    card: "bg-red-950/40 backdrop-blur-xl border-red-500/30",
    cardHover: "hover:bg-red-900/60 hover:border-red-400/50",
    border: "border-red-500/30",
    gradient: "bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-red-500/50",
    animation: "hover:scale-105 hover:shadow-red-500/70 transition-all duration-500",
    perspective: "intense",
    primaryColor: "#DC2626",
    secondaryColor: "#EF4444",
    overlay: "bg-red-950/80",
    glowColor: "0 0 30px #DC2626, 0 0 60px #DC2626, 0 0 90px #DC2626",
    particleColor: "#DC2626",
  },

  blue: {
    name: "blue",
    displayName: "Blue",
    background: "bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-950",
    text: "text-blue-100",
    textSecondary: "text-blue-300",
    primary: "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white border-0",
    secondary: "bg-gradient-to-r from-blue-700 to-blue-600 text-white",
    accent: "bg-gradient-to-r from-blue-500 to-indigo-600",
    card: "bg-blue-950/40 backdrop-blur-xl border-blue-500/30",
    cardHover: "hover:bg-blue-900/60 hover:border-blue-400/50",
    border: "border-blue-500/30",
    gradient: "bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-blue-500/50",
    animation: "hover:scale-105 hover:shadow-blue-500/70 transition-all duration-500",
    perspective: "professional",
    primaryColor: "#2563EB",
    secondaryColor: "#3B82F6",
    overlay: "bg-blue-950/80",
    glowColor: "0 0 30px #2563EB, 0 0 60px #2563EB, 0 0 90px #2563EB",
    particleColor: "#2563EB",
  },

  green: {
    name: "green",
    displayName: "Green",
    background: "bg-gradient-to-br from-green-950 via-emerald-950 to-green-950",
    text: "text-green-100",
    textSecondary: "text-green-300",
    primary: "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white border-0",
    secondary: "bg-gradient-to-r from-green-700 to-green-600 text-white",
    accent: "bg-gradient-to-r from-green-500 to-emerald-600",
    card: "bg-green-950/40 backdrop-blur-xl border-green-500/30",
    cardHover: "hover:bg-green-900/60 hover:border-green-400/50",
    border: "border-green-500/30",
    gradient: "bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-green-500/50",
    animation: "hover:scale-105 hover:shadow-green-500/70 transition-all duration-500",
    perspective: "nature",
    primaryColor: "#059669",
    secondaryColor: "#10B981",
    overlay: "bg-green-950/80",
    glowColor: "0 0 30px #059669, 0 0 60px #059669, 0 0 90px #059669",
    particleColor: "#059669",
  },

  purple: {
    name: "purple",
    displayName: "Purple",
    background: "bg-gradient-to-br from-purple-950 via-violet-950 to-purple-950",
    text: "text-purple-100",
    textSecondary: "text-purple-300",
    primary:
      "bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white border-0",
    secondary: "bg-gradient-to-r from-purple-700 to-purple-600 text-white",
    accent: "bg-gradient-to-r from-purple-500 to-violet-600",
    card: "bg-purple-950/40 backdrop-blur-xl border-purple-500/30",
    cardHover: "hover:bg-purple-900/60 hover:border-purple-400/50",
    border: "border-purple-500/30",
    gradient: "bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-purple-500/50",
    animation: "hover:scale-105 hover:shadow-purple-500/70 transition-all duration-500",
    perspective: "mystical",
    primaryColor: "#7C3AED",
    secondaryColor: "#8B5CF6",
    overlay: "bg-purple-950/80",
    glowColor: "0 0 30px #7C3AED, 0 0 60px #7C3AED, 0 0 90px #7C3AED",
    particleColor: "#7C3AED",
  },

  gold: {
    name: "gold",
    displayName: "Gold",
    background: "bg-gradient-to-br from-yellow-950 via-amber-950 to-yellow-950",
    text: "text-yellow-100",
    textSecondary: "text-yellow-300",
    primary:
      "bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black border-0",
    secondary: "bg-gradient-to-r from-yellow-700 to-yellow-600 text-black",
    accent: "bg-gradient-to-r from-yellow-500 to-amber-600",
    card: "bg-yellow-950/40 backdrop-blur-xl border-yellow-500/30",
    cardHover: "hover:bg-yellow-900/60 hover:border-yellow-400/50",
    border: "border-yellow-500/30",
    gradient: "bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-yellow-500/50",
    animation: "hover:scale-105 hover:shadow-yellow-500/70 transition-all duration-500",
    perspective: "luxury",
    primaryColor: "#D97706",
    secondaryColor: "#F59E0B",
    overlay: "bg-yellow-950/80",
    glowColor: "0 0 30px #D97706, 0 0 60px #D97706, 0 0 90px #D97706",
    particleColor: "#D97706",
  },
}

export const getTheme = (themeName: string, customColors?: { primary?: string; secondary?: string }): Theme => {
  const baseTheme = themes[themeName] || themes.neon

  if (customColors) {
    return {
      ...baseTheme,
      primaryColor: customColors.primary || baseTheme.primaryColor,
      secondaryColor: customColors.secondary || baseTheme.secondaryColor,
      primary: customColors.primary
        ? `bg-[${customColors.primary}] hover:bg-[${customColors.primary}]/90 text-white border-0`
        : baseTheme.primary,
      accent:
        customColors.primary && customColors.secondary
          ? `bg-gradient-to-r from-[${customColors.primary}] to-[${customColors.secondary}]`
          : baseTheme.accent,
    }
  }

  return baseTheme
}

export const getAllThemes = (): string[] => {
  return Object.keys(themes)
}

export const getThemeDisplayName = (themeName: string): string => {
  return themes[themeName]?.displayName || themeName
}
