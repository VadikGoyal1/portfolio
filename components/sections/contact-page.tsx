"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/refined-theme-registry"

interface ContactPageProps {
  config: PortfolioConfig
  theme: Theme
  isMobile: boolean
}

export default function ContactPage({ config, theme, isMobile }: ContactPageProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      title: "Email",
      value: "vypergamer@gmail.com",
      link: "mailto:vypergamer@gmail.com",
    },
    {
      id: "location",
      icon: MapPin,
      title: "Location",
      value: "Haryana, India",
      link: "https://maps.google.com/?q=Haryana,India",
    },
    {
      id: "github",
      icon: Github,
      title: "GitHub",
      value: "github.com/vadikgoyal1",
      link: "https://github.com/vadikgoyal1",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/vadik-goel",
      link: "https://linkedin.com/in/vadik-goel",
    },
    {
      id: "twitter",
      icon: Twitter,
      title: "Twitter",
      value: "twitter.com/Vadikgoyal1",
      link: "https://twitter.com/Vadikgoyal1",
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className={`text-4xl sm:text-5xl font-bold mb-4 ${theme.gradient}`}
          style={{ textShadow: theme.glowColor }}
          animate={{
            textShadow: [theme.glowColor, `0 0 20px ${theme.primaryColor}60`, theme.glowColor],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          Get in Touch
        </motion.h1>
        <motion.p className={`text-lg ${theme.textSecondary} max-w-2xl mx-auto`}>
          I'm always open to new opportunities and collaborations. Feel free to reach out through any of these channels.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contactMethods.map((method) => (
          <motion.a
            key={method.id}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative overflow-hidden rounded-xl ${theme.card} ${theme.border} border p-6 flex flex-col items-center text-center transition-all duration-300`}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: `0 10px 30px -10px ${theme.primaryColor}30`,
              y: -5,
            }}
            onMouseEnter={() => setHoveredCard(method.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              initial={{ x: "-100%" }}
              animate={hoveredCard === method.id ? { x: ["100%", "-100%"] } : {}}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Icon with animated background */}
            <motion.div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 relative overflow-hidden ${theme.card}`}
              style={{
                background: `linear-gradient(45deg, ${theme.primaryColor}20, ${theme.secondaryColor}20)`,
                boxShadow: `0 0 20px ${theme.primaryColor}30`,
              }}
              animate={
                hoveredCard === method.id
                  ? {
                      boxShadow: [
                        `0 0 20px ${theme.primaryColor}30`,
                        `0 0 30px ${theme.primaryColor}50`,
                        `0 0 20px ${theme.primaryColor}30`,
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <motion.div
                animate={
                  hoveredCard === method.id
                    ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0, -10, 0],
                      }
                    : {}
                }
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <method.icon className={`w-8 h-8 ${theme.text}`} />
              </motion.div>
            </motion.div>

            <h3 className={`text-xl font-bold mb-2 ${theme.text}`}>{method.title}</h3>
            <p className={`${theme.textSecondary}`}>{method.value}</p>

            {/* Animated border */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{
                background: `linear-gradient(90deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
              }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={hoveredCard === method.id ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className={`mt-16 text-center ${theme.textSecondary}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-lg">Looking forward to connecting with you!</p>
      </motion.div>
    </div>
  )
}
