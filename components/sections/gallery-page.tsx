"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, MapPin, Calendar } from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/theme-registry"

interface GalleryPageProps {
  config: PortfolioConfig
  theme: Theme
  isMobile: boolean
}

export default function GalleryPage({ config, theme, isMobile }: GalleryPageProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string | null>(null)

  const categories = Array.from(new Set(config.gallery?.map((item) => item.category) || []))
  const filteredGallery = filter
    ? config.gallery?.filter((item) => item.category === filter) || []
    : config.gallery || []

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: isMobile ? 10 : 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.4 : 0.6,
      },
    },
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${theme.gradient}`}>Gallery</h1>
          <p className="text-lg sm:text-xl opacity-80 max-w-3xl mx-auto">
            A collection of my visual work and creative projects
          </p>
        </motion.div>

        {/* Filters */}
        {categories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8"
          >
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === null ? `${theme.primary} text-white` : `${theme.card} hover:scale-105`
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === category ? `${theme.primary} text-white` : `${theme.card} hover:scale-105`
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredGallery.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`${theme.card} overflow-hidden cursor-pointer ${theme.animation}`}
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-square relative">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-white/80">
                        {item.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredGallery[selectedImage]?.image || "/placeholder.svg"}
                alt={filteredGallery[selectedImage]?.title || ""}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />

              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-bold mb-2">{filteredGallery[selectedImage]?.title}</h3>
                <p className="opacity-80">{filteredGallery[selectedImage]?.description}</p>
                <div className="flex justify-center gap-4 mt-2 text-sm opacity-60">
                  <Badge variant="outline" className="border-white/20 text-white">
                    {filteredGallery[selectedImage]?.category}
                  </Badge>
                  <span>{filteredGallery[selectedImage]?.year}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
