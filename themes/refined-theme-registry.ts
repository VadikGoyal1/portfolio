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
  buttonText: string
  buttonTextHover: string
  timelineText: string
}

const themes: Record<string, Theme> = {
  neon: {
    name: "neon",
    displayName: "Neon",
    background: "bg-gradient-to-br from-gray-900 via-slate-900 to-black",
    text: "text-slate-100",
    textSecondary: "text-slate-200",
    primary: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0",
    secondary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white",
    accent: "bg-gradient-to-r from-cyan-400 to-blue-500",
    card: "bg-slate-800/50 backdrop-blur-xl border-slate-700/50",
    cardHover: "hover:bg-slate-700/50 hover:border-cyan-500/30",
    border: "border-slate-700/50",
    gradient: "bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent",
    shadow: "shadow-xl shadow-cyan-500/10",
    animation: "hover:scale-105 transition-all duration-300",
    perspective: "futuristic",
    primaryColor: "#06B6D4",
    secondaryColor: "#3B82F6",
    overlay: "bg-black/80",
    glowColor: "0 0 20px rgba(6, 182, 212, 0.3)",
    particleColor: "#06B6D4",
    buttonText: "text-white",
    buttonTextHover: "text-white",
    timelineText: "text-white",
  },

  dark: {
    name: "dark",
    displayName: "Dark",
    background: "bg-gradient-to-br from-gray-900 via-gray-800 to-black",
    text: "text-white",
    textSecondary: "text-gray-200",
    primary: "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white border-0",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-700 text-white",
    accent: "bg-gradient-to-r from-gray-600 to-gray-800",
    card: "bg-gray-800/50 backdrop-blur-xl border-gray-700/50",
    cardHover: "hover:bg-gray-700/50 hover:border-gray-600/50",
    border: "border-gray-700/50",
    gradient: "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
    shadow: "shadow-xl shadow-black/20",
    animation: "hover:scale-105 transition-all duration-300",
    perspective: "minimal",
    primaryColor: "#374151",
    secondaryColor: "#4B5563",
    overlay: "bg-black/80",
    glowColor: "0 0 20px rgba(255, 255, 255, 0.1)",
    particleColor: "#FFFFFF",
    buttonText: "text-white",
    buttonTextHover: "text-white",
    timelineText: "text-white",
  },

  light: {
    name: "light",
    displayName: "Light",
    background: "bg-gradient-to-br from-white via-gray-50 to-slate-100",
    text: "text-gray-900",
    textSecondary: "text-gray-700",
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-0",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-700 text-white",
    accent: "bg-gradient-to-r from-blue-500 to-indigo-600",
    card: "bg-white/70 backdrop-blur-xl border-gray-200/50",
    cardHover: "hover:bg-white/80 hover:border-blue-300/50",
    border: "border-gray-200/50",
    gradient: "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent",
    shadow: "shadow-xl shadow-blue-500/10",
    animation: "hover:scale-105 transition-all duration-300",
    perspective: "clean",
    primaryColor: "#2563EB",
    secondaryColor: "#4F46E5",
    overlay: "bg-white/80",
    glowColor: "0 0 20px rgba(37, 99, 235, 0.2)",
    particleColor: "#2563EB",
    buttonText: "text-black",
    buttonTextHover: "text-white",
    timelineText: "text-gray-900",
  },

  system: {
    name: "system",
    displayName: "System",
    background:
      "bg-gradient-to-br from-slate-50 via-white to-gray-100 dark:from-gray-900 dark:via-slate-900 dark:to-black",
    text: "text-gray-900 dark:text-slate-100",
    textSecondary: "text-gray-600 dark:text-slate-200",
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 dark:from-cyan-500 dark:to-blue-500 text-white border-0",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-700 text-white",
    accent: "bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-cyan-400 dark:to-blue-500",
    card: "bg-white/70 dark:bg-slate-800/50 backdrop-blur-xl border-gray-200/50 dark:border-slate-700/50",
    cardHover: "hover:bg-white/80 dark:hover:bg-slate-700/50 hover:border-blue-300/50 dark:hover:border-cyan-500/30",
    border: "border-gray-200/50 dark:border-slate-700/50",
    gradient:
      "bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent",
    shadow: "shadow-xl shadow-blue-500/10 dark:shadow-cyan-500/10",
    animation: "hover:scale-105 transition-all duration-300",
    perspective: "adaptive",
    primaryColor: "#2563EB",
    secondaryColor: "#4F46E5",
    overlay: "bg-white/80 dark:bg-black/80",
    glowColor: "0 0 20px rgba(37, 99, 235, 0.2)",
    particleColor: "#2563EB",
    buttonText: "text-black dark:text-white",
    buttonTextHover: "text-white",
    timelineText: "text-gray-900 dark:text-white",
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
  return ["neon", "dark", "light", "system"]
}

export const getThemeDisplayName = (themeName: string): string => {
  return themes[themeName]?.displayName || themeName
}
