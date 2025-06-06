"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code } from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/theme-registry"
import ThreeDCard from "../effects/3d-card-effects"

interface ProjectsPageProps {
  config: PortfolioConfig
  theme: Theme
}

export default function ProjectsPage({ config, theme }: ProjectsPageProps) {
  const [filter, setFilter] = useState<string | null>(null)
  const [activeProject, setActiveProject] = useState<number | null>(null)

  // Get unique categories
  const categories = Array.from(new Set(config.projects.map((project) => project.category)))

  // Filter projects
  const filteredProjects = filter ? config.projects.filter((project) => project.category === filter) : config.projects

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
      },
    },
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${theme.gradient}`}>My Projects</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">Explore my recent work and personal projects</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            variant={filter === null ? "default" : "outline"}
            onClick={() => setFilter(null)}
            className={filter === null ? theme.primary : `${theme.border}`}
          >
            All Projects
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={filter === category ? theme.primary : `${theme.border}`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ThreeDCard intensity={0.8} className="h-full">
                <Card
                  className={`${theme.card} overflow-hidden ${theme.animation} h-full cursor-pointer`}
                  onClick={() => setActiveProject(index)}
                >
                  {/* Rest of the card content remains the same */}
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className={theme.secondary}>{project.category}</Badge>
                      {project.featured && <Badge className={theme.accent}>Featured</Badge>}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="opacity-80 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className={theme.border}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm opacity-60">{project.year}</div>
                      <div className="flex gap-2">
                        {project.github && (
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button size="icon" variant="ghost">
                              <Github className="w-4 h-4" />
                            </Button>
                          </Link>
                        )}
                        {project.live && (
                          <Link href={project.live} target="_blank" rel="noopener noreferrer">
                            <Button size="icon" variant="ghost">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ThreeDCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <Code className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="opacity-70">No projects match the selected filter. Try selecting a different category.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
