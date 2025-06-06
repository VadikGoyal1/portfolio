"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  Play,
  Code2,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react"
import { portfolioConfig } from "../config/portfolio-config"

export default function PortfolioWebsite() {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const config = portfolioConfig

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const themeClasses = isDark ? "bg-black text-white" : "bg-white text-gray-900"

  const cardClasses = isDark ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-200"

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
          isDark ? "bg-black/20 border-gray-800" : "bg-white/20 border-gray-200"
        } border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {config.personal.name}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {config.navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.href.slice(1)
                        ? "text-blue-500"
                        : isDark
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <div className="flex items-center space-x-2">
                <Sun className={`w-4 h-4 ${isDark ? "text-gray-500" : "text-yellow-500"}`} />
                <Switch checked={isDark} onCheckedChange={setIsDark} className="data-[state=checked]:bg-blue-600" />
                <Moon className={`w-4 h-4 ${isDark ? "text-blue-400" : "text-gray-500"}`} />
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${isDark ? "bg-gray-900" : "bg-white"} border-t ${isDark ? "border-gray-800" : "border-gray-200"}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {config.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-blue-500"
                      : isDark
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="grid grid-cols-12 gap-4 opacity-5">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${isDark ? "bg-white" : "bg-gray-900"}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative mx-auto w-32 h-32">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow" />
              <div
                className={`absolute inset-1 rounded-full flex items-center justify-center ${isDark ? "bg-black" : "bg-white"}`}
              >
                <Image
                  src={config.personal.avatar || "/placeholder.svg"}
                  alt={config.personal.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                <span className="block">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {config.personal.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-light">{config.personal.title}</p>
            </div>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {config.personal.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`px-8 py-3 ${
                  isDark
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Play className="mr-2 w-4 h-4" />
                Watch Demo
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              {config.social.map((social) => {
                const Icon =
                  {
                    github: Github,
                    linkedin: Linkedin,
                    twitter: Twitter,
                    email: Mail,
                  }[social.platform] || ExternalLink

                return (
                  <Link
                    key={social.platform}
                    href={social.url}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      isDark
                        ? "bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                    } hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full ${isDark ? "border-gray-600" : "border-gray-400"}`}>
            <div className={`w-1 h-3 rounded-full mx-auto mt-2 animate-pulse ${isDark ? "bg-white" : "bg-gray-900"}`} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>Get to know me better</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                {config.about.description}
              </p>

              <div className="grid grid-cols-2 gap-6">
                {config.about.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {config.about.services.map((service, index) => (
                <Card key={index} className={`p-6 ${cardClasses} hover:scale-105 transition-transform duration-300`}>
                  <CardContent className="p-0 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      {service.icon === "code" && <Code2 className="w-6 h-6 text-white" />}
                      {service.icon === "design" && <Palette className="w-6 h-6 text-white" />}
                      {service.icon === "mobile" && <Smartphone className="w-6 h-6 text-white" />}
                      {service.icon === "web" && <Globe className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-900/50" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.projects.map((project, index) => (
              <Card
                key={index}
                className={`${cardClasses} overflow-hidden group hover:scale-105 transition-all duration-300`}
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
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
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-500/20 text-blue-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className={`text-lg mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{config.contact.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
            >
              <Mail className="mr-2 w-5 h-5" />
              {config.contact.email}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={`px-8 py-3 ${
                isDark
                  ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${isDark ? "border-gray-800" : "border-gray-200"}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className={`text-sm mb-4 md:mb-0 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            © 2024 {config.personal.name}. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {config.social.map((social) => {
              const Icon =
                {
                  github: Github,
                  linkedin: Linkedin,
                  twitter: Twitter,
                  email: Mail,
                }[social.platform] || ExternalLink

              return (
                <Link
                  key={social.platform}
                  href={social.url}
                  className={`transition-colors ${
                    isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </footer>
    </div>
  )
}
