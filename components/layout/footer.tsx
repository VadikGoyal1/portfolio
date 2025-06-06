"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Heart, ExternalLink } from "lucide-react"
import type { Theme } from "../../themes/refined-theme-registry"

interface FooterProps {
  theme: Theme
}

export default function Footer({ theme }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className={`relative z-10 ${theme.card} border-t ${theme.border} py-6 mt-12`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left - Copyright */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <motion.p className={`text-sm ${theme.textSecondary}`}>
              © {currentYear}{" "}
              <motion.span
                className={theme.gradient}
                style={{ textShadow: theme.glowColor }}
                whileHover={{ scale: 1.05 }}
              >
                Vadik Goyal
              </motion.span>
              . All rights reserved.
            </motion.p>
            <motion.div
              className="flex items-center justify-center md:justify-start mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Heart className="w-3 h-3 text-red-500 mr-1" />
              <p className={`text-xs ${theme.textSecondary}`}>
                Made with passion and{" "}
                <motion.span
                  className={theme.gradient}
                  style={{ textShadow: theme.glowColor }}
                  whileHover={{ scale: 1.05 }}
                >
                  creativity
                </motion.span>
              </p>
            </motion.div>
          </div>

          {/* Center - Social Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme.textSecondary} hover:${theme.text} transition-colors duration-300`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Right - Website URL */}
          <motion.a
            href="https://chillparadise.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.span className={`text-sm ${theme.gradient} font-medium`} style={{ textShadow: theme.glowColor }}>
              chillparadise.fun
            </motion.span>
            <motion.div
              className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity"
              whileHover={{ rotate: 15 }}
            >
              <ExternalLink className="w-3 h-3" />
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1px] origin-left"
              style={{ background: `linear-gradient(90deg, ${theme.primaryColor}, ${theme.secondaryColor})` }}
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  )
}
