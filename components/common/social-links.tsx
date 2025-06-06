"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram, ExternalLink, Mail, Youtube, Music } from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/refined-theme-registry"

interface SocialLinksProps {
  config: PortfolioConfig
  theme: Theme
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  email: Mail,
  youtube: Youtube,
  spotify: Music,
  dribbble: ExternalLink,
  behance: ExternalLink,
  twitch: ExternalLink,
}

export default function SocialLinks({ config, theme }: SocialLinksProps) {
  // Filter social links based on theme and enabled status
  const enabledSocials = config.social.filter((social) => {
    if (!social.enabled) return false
    if (social.themes && !social.themes.includes(config.theme.name) && !social.themes.includes("all")) return false
    return true
  })

  return (
    <div className="flex justify-center lg:justify-start space-x-4">
      {enabledSocials.map((social, index) => {
        const Icon = iconMap[social.platform as keyof typeof iconMap] || ExternalLink

        return (
          <motion.div
            key={social.platform}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${theme.card} ${theme.border} border flex items-center justify-center relative overflow-hidden group`}
              aria-label={`Visit ${social.platform}`}
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at center, ${theme.primaryColor}30, transparent)`,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon with animation */}
              <motion.div
                className="relative z-10"
                animate={{ rotate: [0, 0] }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
