"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Monitor,
  ChevronDown,
  Download,
} from "lucide-react"

export default function PortfolioWebsite() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Dashboard",
      description: "Analytics dashboard for tracking portfolio performance",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      github: "#",
      live: "#",
    },
  ]

  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "UI/UX Design", level: 88 },
    { name: "MongoDB", level: 82 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              CodeDefender
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="#projects" className="hover:text-blue-400 transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="hover:text-blue-400 transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div
          className={`text-center z-10 max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Code className="w-12 h-12 text-blue-400" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Designer
            </span>
            <br />
            <span className="text-white">to Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting beautiful digital experiences with clean code and innovative design
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                I'm a passionate full-stack developer with a strong background in design. I love creating digital
                experiences that are not only functional but also visually stunning and user-friendly.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                With expertise in modern web technologies and a keen eye for design, I bridge the gap between creativity
                and functionality to deliver exceptional digital solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-blue-400" />
                  <span>Web Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-purple-400" />
                  <span>Mobile Apps</span>
                </div>
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-pink-400" />
                  <span>UI/UX Design</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Code className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-300">Developer & Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400 mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-blue-500/20 text-blue-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">© 2024 CodeDefender. All rights reserved.</div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
