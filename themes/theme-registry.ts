export interface Theme {
  name: string
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
}

const themes: Record<string, Theme> = {
  developer: {
    name: "Developer",
    background: "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900",
    text: "text-slate-100",
    textSecondary: "text-slate-300",
    primary: "bg-blue-600 hover:bg-blue-700 text-white border-0",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-100",
    accent: "bg-gradient-to-r from-blue-500 to-indigo-600",
    card: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50",
    cardHover: "hover:bg-slate-700/80",
    border: "border-slate-600/50",
    gradient: "bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-blue-500/20",
    animation: "hover:scale-105 transition-all duration-300",
    perspective: "technical",
    primaryColor: "#3B82F6",
    secondaryColor: "#6366F1",
    overlay: "bg-slate-900/80",
  },

  editor: {
    name: "Video Editor",
    background: "bg-gradient-to-br from-red-950 via-orange-950 to-amber-950",
    text: "text-orange-50",
    textSecondary: "text-orange-200",
    primary: "bg-red-600 hover:bg-red-700 text-white border-0",
    secondary: "bg-orange-600 hover:bg-orange-700 text-white",
    accent: "bg-gradient-to-r from-red-500 to-orange-500",
    card: "bg-red-900/60 backdrop-blur-sm border-red-700/40",
    cardHover: "hover:bg-red-800/60",
    border: "border-red-600/40",
    gradient: "bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-red-500/30",
    animation: "hover:scale-105 hover:rotate-1 transition-all duration-300",
    perspective: "cinematic",
    primaryColor: "#DC2626",
    secondaryColor: "#EA580C",
    overlay: "bg-red-950/80",
  },

  designer: {
    name: "Designer",
    background: "bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100",
    text: "text-purple-900",
    textSecondary: "text-purple-700",
    primary: "bg-purple-600 hover:bg-purple-700 text-white border-0",
    secondary: "bg-pink-500 hover:bg-pink-600 text-white",
    accent: "bg-gradient-to-r from-purple-500 to-pink-500",
    card: "bg-white/80 backdrop-blur-sm border-purple-200/60",
    cardHover: "hover:bg-purple-50/80",
    border: "border-purple-300/60",
    gradient: "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-purple-500/20",
    animation: "hover:scale-105 transition-all duration-300",
    perspective: "creative",
    primaryColor: "#9333EA",
    secondaryColor: "#EC4899",
    overlay: "bg-purple-900/80",
  },

  photographer: {
    name: "Photographer",
    background: "bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900",
    text: "text-gray-100",
    textSecondary: "text-gray-300",
    primary: "bg-amber-500 hover:bg-amber-600 text-black border-0",
    secondary: "bg-gray-700 hover:bg-gray-600 text-gray-100",
    accent: "bg-gradient-to-r from-amber-400 to-yellow-500",
    card: "bg-gray-800/70 backdrop-blur-sm border-amber-500/30",
    cardHover: "hover:bg-gray-700/70",
    border: "border-amber-400/30",
    gradient: "bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-amber-500/20",
    animation: "hover:scale-105 transition-all duration-300",
    perspective: "visual",
    primaryColor: "#F59E0B",
    secondaryColor: "#EAB308",
    overlay: "bg-gray-900/80",
  },

  gamedev: {
    name: "Game Developer",
    background: "bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-950",
    text: "text-violet-100",
    textSecondary: "text-violet-300",
    primary: "bg-violet-600 hover:bg-violet-700 text-white border-0",
    secondary: "bg-purple-600 hover:bg-purple-700 text-white",
    accent: "bg-gradient-to-r from-violet-500 to-purple-500",
    card: "bg-violet-900/50 backdrop-blur-sm border-violet-600/40",
    cardHover: "hover:bg-violet-800/50",
    border: "border-violet-500/40",
    gradient: "bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-violet-500/30",
    animation: "hover:scale-105 hover:glow transition-all duration-300",
    perspective: "gaming",
    primaryColor: "#7C3AED",
    secondaryColor: "#A855F7",
    overlay: "bg-violet-950/80",
  },

  musician: {
    name: "Musician",
    background: "bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950",
    text: "text-emerald-100",
    textSecondary: "text-emerald-300",
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white border-0",
    secondary: "bg-teal-600 hover:bg-teal-700 text-white",
    accent: "bg-gradient-to-r from-emerald-500 to-teal-500",
    card: "bg-emerald-900/50 backdrop-blur-sm border-emerald-600/40",
    cardHover: "hover:bg-emerald-800/50",
    border: "border-emerald-500/40",
    gradient: "bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-emerald-500/30",
    animation: "hover:scale-105 hover:pulse transition-all duration-300",
    perspective: "artistic",
    primaryColor: "#059669",
    secondaryColor: "#0D9488",
    overlay: "bg-emerald-950/80",
  },

  artist: {
    name: "Artist",
    background: "bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100",
    text: "text-rose-900",
    textSecondary: "text-rose-700",
    primary: "bg-rose-600 hover:bg-rose-700 text-white border-0",
    secondary: "bg-pink-500 hover:bg-pink-600 text-white",
    accent: "bg-gradient-to-r from-rose-500 to-pink-500",
    card: "bg-white/80 backdrop-blur-sm border-rose-200/60",
    cardHover: "hover:bg-rose-50/80",
    border: "border-rose-300/60",
    gradient: "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-rose-500/20",
    animation: "hover:scale-105 hover:rotate-1 transition-all duration-300",
    perspective: "artistic",
    primaryColor: "#E11D48",
    secondaryColor: "#EC4899",
    overlay: "bg-rose-900/80",
  },

  consultant: {
    name: "Consultant",
    background: "bg-gradient-to-br from-slate-50 via-gray-100 to-zinc-100",
    text: "text-slate-900",
    textSecondary: "text-slate-700",
    primary: "bg-slate-700 hover:bg-slate-800 text-white border-0",
    secondary: "bg-blue-600 hover:bg-blue-700 text-white",
    accent: "bg-gradient-to-r from-slate-600 to-blue-600",
    card: "bg-white/90 backdrop-blur-sm border-slate-200/80",
    cardHover: "hover:bg-slate-50/90",
    border: "border-slate-300/80",
    gradient: "bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent",
    shadow: "shadow-xl shadow-slate-300/50",
    animation: "hover:shadow-2xl transition-all duration-300",
    perspective: "professional",
    primaryColor: "#475569",
    secondaryColor: "#2563EB",
    overlay: "bg-slate-900/80",
  },

  architect: {
    name: "Architect",
    background: "bg-gradient-to-br from-stone-100 via-neutral-50 to-gray-100",
    text: "text-stone-900",
    textSecondary: "text-stone-700",
    primary: "bg-stone-700 hover:bg-stone-800 text-white border-0",
    secondary: "bg-amber-600 hover:bg-amber-700 text-white",
    accent: "bg-gradient-to-r from-stone-600 to-amber-600",
    card: "bg-white/90 backdrop-blur-sm border-stone-200/80",
    cardHover: "hover:bg-stone-50/90",
    border: "border-stone-300/80",
    gradient: "bg-gradient-to-r from-stone-700 to-amber-600 bg-clip-text text-transparent",
    shadow: "shadow-xl shadow-stone-300/50",
    animation: "hover:shadow-2xl transition-all duration-300",
    perspective: "structural",
    primaryColor: "#57534E",
    secondaryColor: "#D97706",
    overlay: "bg-stone-900/80",
  },

  lawyer: {
    name: "Lawyer",
    background: "bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950",
    text: "text-blue-100",
    textSecondary: "text-blue-300",
    primary: "bg-blue-700 hover:bg-blue-800 text-white border-0",
    secondary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    accent: "bg-gradient-to-r from-blue-600 to-indigo-600",
    card: "bg-blue-900/50 backdrop-blur-sm border-blue-700/40",
    cardHover: "hover:bg-blue-800/50",
    border: "border-blue-600/40",
    gradient: "bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent",
    shadow: "shadow-2xl shadow-blue-500/30",
    animation: "hover:scale-105 transition-all duration-300",
    perspective: "legal",
    primaryColor: "#1D4ED8",
    secondaryColor: "#4338CA",
    overlay: "bg-blue-950/80",
  },

  doctor: {
    name: "Doctor",
    background: "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50",
    text: "text-green-900",
    textSecondary: "text-green-700",
    primary: "bg-green-700 hover:bg-green-800 text-white border-0",
    secondary: "bg-emerald-600 hover:bg-emerald-700 text-white",
    accent: "bg-gradient-to-r from-green-600 to-emerald-600",
    card: "bg-white/90 backdrop-blur-sm border-green-200/80",
    cardHover: "hover:bg-green-50/90",
    border: "border-green-300/80",
    gradient: "bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent",
    shadow: "shadow-xl shadow-green-300/50",
    animation: "hover:shadow-2xl transition-all duration-300",
    perspective: "medical",
    primaryColor: "#15803D",
    secondaryColor: "#059669",
    overlay: "bg-green-900/80",
  },
}

export const getTheme = (themeName: string, customColors?: { primary?: string; secondary?: string }): Theme => {
  const baseTheme = themes[themeName] || themes.developer

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

export const getThemesByCategory = () => {
  return {
    tech: ["developer", "gamedev", "designer"],
    creative: ["artist", "photographer", "editor", "musician"],
    professional: ["consultant", "lawyer", "doctor", "architect"],
    lifestyle: ["fitness", "travel", "fashion"],
  }
}
