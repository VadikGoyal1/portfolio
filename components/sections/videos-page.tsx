"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Clock, Shield, Eye, ExternalLink, Youtube, VideoIcon } from "lucide-react"
import type { PortfolioConfig } from "../../config/portfolio-config"
import type { Theme } from "../../themes/theme-registry"

interface VideosPageProps {
  config: PortfolioConfig
  theme: Theme
  isMobile: boolean
}

const platformIcons = {
  youtube: Youtube,
  vimeo: VideoIcon,
  drive: VideoIcon,
  default: VideoIcon,
}

export default function VideosPage({ config, theme, isMobile }: VideosPageProps) {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const [filter, setFilter] = useState<string | null>(null)

  // Get unique categories
  const categories = Array.from(new Set(config.videos?.map((video) => video.category) || []))

  // Filter videos
  const filteredVideos = filter
    ? config.videos?.filter((video) => video.category === filter) || []
    : config.videos || []

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2,
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

  const handleVideoClick = (videoUrl: string, platform: string) => {
    if (platform === "youtube") {
      // Extract video ID and open in new tab
      const videoId = videoUrl.split("v=")[1]?.split("&")[0]
      window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")
    } else if (platform === "vimeo") {
      window.open(videoUrl, "_blank")
    } else if (platform === "drive") {
      // Convert Google Drive link to preview
      const fileId = videoUrl.split("/d/")[1]?.split("/")[0]
      window.open(`https://drive.google.com/file/d/${fileId}/preview`, "_blank")
    } else {
      window.open(videoUrl, "_blank")
    }
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${theme.gradient}`}>My Video Work</h1>
          <p className={`text-lg sm:text-xl ${theme.textSecondary} max-w-3xl mx-auto`}>
            Professional video content and creative projects showcasing my editing expertise
          </p>
        </motion.div>

        {/* Filters */}
        {categories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8"
          >
            <Button
              variant={filter === null ? "default" : "outline"}
              onClick={() => setFilter(null)}
              className={filter === null ? theme.primary : `${theme.border} ${theme.textSecondary}`}
              size={isMobile ? "sm" : "default"}
            >
              All Videos
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category ? theme.primary : `${theme.border} ${theme.textSecondary}`}
                size={isMobile ? "sm" : "default"}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        )}

        {/* Videos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredVideos.map((video, index) => {
            const PlatformIcon = platformIcons[video.platform as keyof typeof platformIcons] || platformIcons.default

            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className={`${theme.card} overflow-hidden ${theme.animation} h-full group cursor-pointer`}>
                  <div className="relative">
                    <div className="aspect-video bg-gray-900 flex items-center justify-center relative overflow-hidden">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Play Overlay */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="icon"
                          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${theme.accent} hover:scale-110 transition-transform`}
                          onClick={() => handleVideoClick(video.videoUrl, video.platform)}
                        >
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                        </Button>
                      </div>

                      {/* Duration Badge */}
                      <Badge className="absolute bottom-2 right-2 bg-black/70 text-white text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {video.duration}
                      </Badge>

                      {/* Platform Badge */}
                      <Badge className="absolute top-2 left-2 bg-black/70 text-white text-xs">
                        <PlatformIcon className="w-3 h-3 mr-1" />
                        {video.platform}
                      </Badge>

                      {/* Protected Badge */}
                      {video.protected && (
                        <Badge className="absolute top-2 right-2 bg-red-600 text-white text-xs">
                          <Shield className="w-3 h-3 mr-1" />
                          Protected
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-4 sm:p-6">
                    <h3 className={`text-lg sm:text-xl font-bold mb-2 ${theme.text}`}>{video.title}</h3>
                    <p className={`${theme.textSecondary} mb-3 text-sm sm:text-base line-clamp-2`}>
                      {video.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className={`${theme.border} ${theme.textSecondary} text-xs`}>
                        {video.category}
                      </Badge>
                      <Badge variant="outline" className={`${theme.border} ${theme.textSecondary} text-xs`}>
                        {video.year}
                      </Badge>
                      {video.views && (
                        <Badge variant="outline" className={`${theme.border} ${theme.textSecondary} text-xs`}>
                          <Eye className="w-3 h-3 mr-1" />
                          {video.views}
                        </Badge>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      {video.client && (
                        <div className={`text-xs sm:text-sm ${theme.textSecondary}`}>Client: {video.client}</div>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className={`${theme.border} ${theme.textSecondary} ml-auto`}
                        onClick={() => handleVideoClick(video.videoUrl, video.platform)}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Watch
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <VideoIcon className={`w-12 h-12 mx-auto mb-4 ${theme.textSecondary}`} />
            <h3 className={`text-xl font-bold mb-2 ${theme.text}`}>No videos found</h3>
            <p className={theme.textSecondary}>
              {filter ? "No videos match the selected filter." : "Video content will be displayed here when available."}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
