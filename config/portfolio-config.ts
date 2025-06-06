export const portfolioConfig = {
  // Theme Selection - Change this to switch entire theme and perspective
  theme: {
    name: "travel", // Options: "developer", "designer", "photographer", "writer", "minimal", "creative", "corporate", "gaming", "editor", "gamedev", "musician", "artist", "consultant", "teacher", "chef", "fitness", "travel", "fashion", "architect", "lawyer", "doctor"
    customColors: {
      primary: "#DC2626", // Custom primary color (optional)
      secondary: "#EA580C", // Custom secondary color (optional)
    },
  },

  // Personal Information
  personal: {
    name: "Vadik Goyal",
    title: "Video Editor & Motion Designer",
    subtitle: "Crafting visual stories that captivate and inspire",
    description:
      "Professional video editor with 5+ years of experience creating compelling visual narratives for brands, films, and digital content",
    avatar: "https://cdn.discordapp.com/avatars/779365065014247425/7aa7e67f02ff50b2994eda6acb9be698.webp?size=1024",
    location: "Haryana, India",
    email: "vypergamer111@gmail.com",
    website: "https://chillparadise.fun",
    tagline: "Edit • Create • Inspire",
  },

  // Loading Screen Configuration
  loader: {
    enabled: true, // Enable/disable loading screen
    duration: 15000, // Duration in milliseconds (15 seconds)
    customText: "Initializing {name}...", // Custom loading text ({name} will be replaced)
    showWebsiteUrl: false, // Show website URL at bottom
    showProgress: true, // Show progress percentage and time
    showIcon: true, // Show theme icon
  },

  // Feature Toggles - Control what appears based on profession
  features: {
    timeline: true,
    skills: true,
    testimonials: false,
    blog: false,
    services: true,
    achievements: true,
    certifications: false,
    gallery: false, // For photographers, artists
    videos: true, // For content creators, editors
    projects: false, // For developers, designers
    portfolio: true, // For creative professionals
    pricing: false,
    faq: false,
    newsletter: false,
    darkMode: true,
    animations: true,
    particles: true,
    music: false,
    chatbot: false,
    downloadProtection: true,
    rightClickDisabled: true,
    devToolsDisabled: true,
    loadingScreen: true, // Enable loading screen

    // Contact features
    contactForm: false, // Disable contact form
    showAddress: false, // Hide physical address
    showPhone: false, // Hide phone number
    socialOnly: true, // Only show social links
  },

  // Navigation - Dynamic based on theme
  navigation: [
    { name: "Home", href: "home", icon: "home", enabled: true },
    { name: "About", href: "about", icon: "user", enabled: true },
    {
      name: "Timeline",
      href: "timeline",
      icon: "clock",
      enabled: true,
      themes: ["developer", "designer", "corporate", "editor", "gamedev"],
    },
    {
      name: "Projects",
      href: "projects",
      icon: "briefcase",
      enabled: false,
      themes: ["developer", "designer", "gamedev"],
    },
    {
      name: "Portfolio",
      href: "portfolio",
      icon: "briefcase",
      enabled: false, // Disable this since we're already in a portfolio
      themes: ["editor", "photographer", "artist", "designer", "architect"],
    },
    { name: "Gallery", href: "gallery", icon: "image", enabled: false, themes: ["photographer", "artist", "designer"] },
    {
      name: "Videos",
      href: "videos",
      icon: "video",
      enabled: true,
      themes: ["editor", "musician", "teacher", "fitness"],
    },
    { name: "Contact", href: "contact", icon: "mail", enabled: true },
  ],

  // Social Links
  social: [
    { platform: "github", url: "https://github.com", enabled: false, themes: ["developer", "gamedev", "designer"] },
    { platform: "linkedin", url: "https://linkedin.com", enabled: true, themes: ["all"] },
    { platform: "twitter", url: "https://twitter.com", enabled: true, themes: ["all"] },
    {
      platform: "instagram",
      url: "https://instagram.com",
      enabled: true,
      themes: ["photographer", "artist", "fashion", "travel", "editor", "chef", "fitness"],
    },
    { platform: "dribbble", url: "https://dribbble.com", enabled: false, themes: ["designer", "artist"] },
    {
      platform: "behance",
      url: "https://behance.com",
      enabled: true,
      themes: ["designer", "photographer", "artist", "editor"],
    },
    {
      platform: "youtube",
      url: "https://youtube.com",
      enabled: true,
      themes: ["editor", "musician", "teacher", "chef", "fitness", "travel"],
    },
    { platform: "spotify", url: "https://spotify.com", enabled: false, themes: ["musician"] },
    { platform: "twitch", url: "https://twitch.tv", enabled: false, themes: ["gamedev", "gaming"] },
    { platform: "vimeo", url: "https://vimeo.com", enabled: true, themes: ["editor", "photographer", "artist"] },
  ],

  // Timeline Data - Theme specific
  timeline: [
    {
      year: "2024",
      title: "Senior Video Editor",
      company: "Creative Studios",
      description: "Leading post-production for major brand campaigns and documentaries",
      technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D"],
      type: "work",
      achievements: ["Edited 50+ commercial projects", "Won 3 industry awards"],
    },
    {
      year: "2023",
      title: "Motion Graphics Designer",
      company: "Digital Agency",
      description: "Created stunning motion graphics and visual effects for digital campaigns",
      technologies: ["After Effects", "Cinema 4D", "Blender", "Photoshop"],
      type: "work",
      achievements: ["Increased client engagement by 40%", "Managed 20+ concurrent projects"],
    },
    {
      year: "2022",
      title: "Film & Media Production Degree",
      company: "Art Institute",
      description: "Bachelor's in Film & Media Production with focus on post-production",
      technologies: ["Video Editing", "Color Grading", "Sound Design", "Visual Effects"],
      type: "education",
      achievements: ["Graduated Summa Cum Laude", "Best Student Film Award"],
    },
  ],

  // About Information - Theme specific
  about: {
    description:
      "I'm a passionate video editor and motion designer with expertise in creating compelling visual narratives. I specialize in transforming raw footage into polished, engaging content that tells powerful stories.",
    longDescription:
      "With over 5 years of experience in the creative industry, I've had the privilege of working with diverse clients from startups to Fortune 500 companies. My journey began with a fascination for visual storytelling, and it has evolved into a deep passion for creating content that moves, inspires, and engages audiences worldwide.",

    stats: [
      { label: "Videos Edited", value: "500+", icon: "video", color: "red" },
      { label: "Years Experience", value: "5+", icon: "calendar", color: "orange" },
      { label: "Happy Clients", value: "100+", icon: "users", color: "yellow" },
      { label: "Awards Won", value: "15+", icon: "award", color: "green" },
    ],

    skills: [
      { name: "Adobe Premiere Pro", level: 95, category: "Video Editing", color: "#9999FF", icon: "video" },
      { name: "After Effects", level: 90, category: "Motion Graphics", color: "#9999FF", icon: "zap" },
      { name: "DaVinci Resolve", level: 85, category: "Color Grading", color: "#FF6B6B", icon: "palette" },
      { name: "Cinema 4D", level: 80, category: "3D Animation", color: "#4ECDC4", icon: "box" },
      { name: "Photoshop", level: 88, category: "Graphics", color: "#45B7D1", icon: "image" },
      { name: "Audition", level: 75, category: "Audio Editing", color: "#96CEB4", icon: "music" },
      { name: "Blender", level: 70, category: "3D Modeling", color: "#FFEAA7", icon: "cube" },
      { name: "Final Cut Pro", level: 82, category: "Video Editing", color: "#DDA0DD", icon: "scissors" },
    ],

    services: [
      {
        title: "Video Editing",
        description: "Professional video editing for commercials, documentaries, and social media content",
        icon: "video",
        price: "$75/hour",
        features: ["Color Correction", "Audio Sync", "Multi-cam Editing"],
      },
      {
        title: "Motion Graphics",
        description: "Eye-catching motion graphics and animations for brands and digital content",
        icon: "zap",
        price: "$85/hour",
        features: ["2D/3D Animation", "Logo Animation", "Kinetic Typography"],
      },
      {
        title: "Color Grading",
        description: "Professional color grading to enhance the visual appeal of your content",
        icon: "palette",
        price: "$60/hour",
        features: ["Cinematic Look", "Brand Consistency", "HDR Grading"],
      },
    ],
  },

  // Videos - For editors, content creators with external link support
  videos: [
    {
      title: "Brand Commercial - TechStart",
      description: "30-second commercial showcasing innovative tech solutions",
      thumbnail: "/placeholder.svg?height=200&width=300",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // YouTube link
      duration: "0:30",
      category: "Commercial",
      year: "2024",
      client: "TechStart Inc",
      protected: true,
      views: "50K+",
      platform: "youtube",
    },
    {
      title: "Documentary Trailer",
      description: "Emotional trailer for environmental documentary",
      thumbnail: "/placeholder.svg?height=200&width=300",
      videoUrl: "https://vimeo.com/123456789", // Vimeo link
      duration: "2:15",
      category: "Documentary",
      year: "2024",
      client: "Green Earth Films",
      protected: true,
      views: "25K+",
      platform: "vimeo",
    },
    {
      title: "Social Media Campaign",
      description: "Series of short-form videos for Instagram and TikTok",
      thumbnail: "/placeholder.svg?height=200&width=300",
      videoUrl: "https://drive.google.com/file/d/1234567890/view", // Google Drive link
      duration: "0:15",
      category: "Social Media",
      year: "2024",
      client: "Fashion Brand X",
      protected: true,
      views: "100K+",
      platform: "drive",
    },
  ],

  // Portfolio - For creative professionals
  portfolio: [
    {
      title: "Award-Winning Commercial",
      description: "Gold award winner at Creative Awards 2024",
      image: "/placeholder.svg?height=400&width=600",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "Commercial",
      year: "2024",
      client: "Global Brand",
      awards: ["Gold - Creative Awards 2024"],
      featured: true,
    },
  ],

  // Contact Information
  contact: {
    title: "Let's Create Together",
    description:
      "Ready to bring your vision to life? Let's discuss how we can create compelling visual content that engages your audience.",
    availability: "Available for new projects",
    responseTime: "Usually responds within 12 hours",
    timezone: "PST (UTC-8)",
    preferredContact: "email",
  },

  // SEO and Meta
  seo: {
    title: "Vadik Goyal - Video Editor & Motion Designer",
    description: "Professional video editor specializing in commercials, documentaries, and motion graphics",
    keywords: ["video editor", "motion graphics", "after effects", "premiere pro", "commercial editing"],
    author: "Vadik Goyal",
    siteUrl: "https://chillparadise.fun",
    image: "/placeholder.svg?height=630&width=1200",
  },
}

export type PortfolioConfig = typeof portfolioConfig
