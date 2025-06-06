"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Briefcase, GraduationCap, Award } from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/refined-theme-registry"

interface TimelinePageProps {
  config: PortfolioConfig
  theme: Theme
  isMobile: boolean
}

export default function TimelinePage({ config, theme, isMobile }: TimelinePageProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null)

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

  const timelineItems = [
    {
      id: "job1",
      type: "work",
      icon: Briefcase,
      title: "Senior Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Led development of multiple high-profile projects, mentored junior developers, and implemented CI/CD pipelines that reduced deployment time by 40%.",
      skills: ["React", "Node.js", "AWS", "Docker"],
    },
    {
      id: "job2",
      type: "work",
      icon: Briefcase,
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained web applications for clients across various industries. Improved application performance by 30% through code optimization.",
      skills: ["JavaScript", "TypeScript", "React", "Express"],
    },
    {
      id: "edu1",
      type: "education",
      icon: GraduationCap,
      title: "Master's in Computer Science",
      company: "Tech University",
      period: "2016 - 2018",
      description:
        "Specialized in artificial intelligence and machine learning. Graduated with honors and published two research papers.",
      skills: ["Machine Learning", "Data Structures", "Algorithms"],
    },
    {
      id: "award1",
      type: "award",
      icon: Award,
      title: "Innovation Award",
      company: "Tech Conference 2022",
      period: "2022",
      description:
        "Recognized for developing an innovative solution that helped businesses reduce operational costs by 25%.",
      skills: ["Innovation", "Problem Solving"],
    },
    {
      id: "job3",
      type: "work",
      icon: Briefcase,
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2015 - 2018",
      description:
        "Worked in an agile team to develop and launch a successful mobile application with over 100,000 downloads.",
      skills: ["JavaScript", "React Native", "Firebase"],
    },
    {
      id: "edu2",
      type: "education",
      icon: GraduationCap,
      title: "Bachelor's in Computer Engineering",
      company: "State University",
      period: "2011 - 2015",
      description: "Graduated with first-class honors. Participated in multiple hackathons and coding competitions.",
      skills: ["Java", "C++", "Web Development"],
    },
  ]

  const getIconColor = (type: string) => {
    switch (type) {
      case "work":
        return theme.primaryColor
      case "education":
        return theme.secondaryColor
      case "award":
        return "#FFD700" // Gold color for awards
      default:
        return theme.primaryColor
    }
  }

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
          My Journey
        </motion.h1>
        <motion.p className={`text-lg text-white max-w-2xl mx-auto`}>
          A timeline of my professional experience, education, and achievements.
        </motion.p>
      </motion.div>

      <motion.div className="relative" variants={containerVariants} initial="hidden" animate="visible">
        {/* Timeline center line */}
        <div
          className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5"
          style={{ background: `linear-gradient(to bottom, ${theme.primaryColor}, ${theme.secondaryColor})` }}
        />

        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`relative mb-12 ${index % 2 === 0 ? "md:pr-8 md:text-right md:ml-auto md:mr-1/2" : "md:pl-8 md:ml-1/2"} md:w-1/2`}
            variants={itemVariants}
            onMouseEnter={() => setActiveItem(item.id)}
            onMouseLeave={() => setActiveItem(null)}
          >
            {/* Timeline dot */}
            <motion.div
              className="absolute top-0 w-6 h-6 rounded-full z-10 flex items-center justify-center"
              style={{
                left: isMobile ? "-12px" : index % 2 === 0 ? "calc(100% + 20px)" : "-32px",
                background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                boxShadow: `0 0 10px ${getIconColor(item.type)}`,
              }}
              animate={
                activeItem === item.id
                  ? {
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        `0 0 10px ${getIconColor(item.type)}`,
                        `0 0 20px ${getIconColor(item.type)}`,
                        `0 0 10px ${getIconColor(item.type)}`,
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1, repeat: activeItem === item.id ? Number.POSITIVE_INFINITY : 0 }}
            >
              <item.icon className="w-3 h-3 text-white" />
            </motion.div>

            {/* Content card */}
            <motion.div
              className={`${theme.card} ${theme.border} border rounded-xl p-6 relative overflow-hidden`}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 10px 30px -10px ${theme.primaryColor}30`,
                y: -5,
              }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                initial={{ x: "-100%" }}
                animate={activeItem === item.id ? { x: ["100%", "-100%"] } : {}}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <div className="flex items-center mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                  style={{
                    background: `linear-gradient(45deg, ${theme.primaryColor}20, ${theme.secondaryColor}20)`,
                  }}
                >
                  <item.icon
                    className="w-5 h-5"
                    style={{
                      color: getIconColor(item.type),
                    }}
                  />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${theme.text}`}>{item.title}</h3>
                  <p className={`${theme.textSecondary}`}>
                    {item.company} • {item.period}
                  </p>
                </div>
              </div>

              <p className={`text-white mb-4`}>{item.description}</p>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      background: `linear-gradient(45deg, ${theme.primaryColor}30, ${theme.secondaryColor}30)`,
                      color: "white",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(90deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={activeItem === item.id ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Year indicator for desktop */}
            {!isMobile && (
              <motion.div
                className={`absolute top-0 ${index % 2 === 0 ? "left-full ml-12" : "right-full mr-12"} hidden md:block`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center">
                  <Calendar className={`w-4 h-4 ${theme.textSecondary} ${index % 2 === 0 ? "mr-2" : "ml-2 order-2"}`} />
                  <span className={`text-sm font-medium ${theme.textSecondary}`}>{item.period}</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
