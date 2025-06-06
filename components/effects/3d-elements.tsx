"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import type { Theme } from "../../themes/refined-theme-registry"

interface ThreeDElementsProps {
  theme: Theme
}

export default function ThreeDElements({ theme }: ThreeDElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPercent = (clientX / innerWidth - 0.5) * 2
      const yPercent = (clientY / innerHeight - 0.5) * 2

      const elements = containerRef.current.querySelectorAll(".parallax-element")
      elements.forEach((element, index) => {
        const speed = (index + 1) * 0.1
        const x = xPercent * speed * 20
        const y = yPercent * speed * 20
        ;(element as HTMLElement).style.transform =
          `translate3d(${x}px, ${y}px, 0) rotateX(${y * 0.5}deg) rotateY(${x * 0.5}deg)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 3D Floating Geometric Shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="parallax-element absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            perspective: "1000px",
          }}
          animate={{
            y: [0, -50, 0],
            rotateX: [0, 360],
            rotateY: [0, -360],
            rotateZ: [0, 180],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
            ease: "linear",
          }}
        >
          {i % 4 === 0 ? (
            // 3D Cube
            <div className="relative w-8 h-8" style={{ transformStyle: "preserve-3d" }}>
              {[...Array(6)].map((_, face) => (
                <div
                  key={face}
                  className="absolute w-8 h-8 border opacity-20"
                  style={{
                    borderColor: theme.primaryColor,
                    background: `${theme.primaryColor}10`,
                    transform:
                      face === 0
                        ? "rotateY(0deg) translateZ(16px)"
                        : face === 1
                          ? "rotateY(90deg) translateZ(16px)"
                          : face === 2
                            ? "rotateY(180deg) translateZ(16px)"
                            : face === 3
                              ? "rotateY(-90deg) translateZ(16px)"
                              : face === 4
                                ? "rotateX(90deg) translateZ(16px)"
                                : "rotateX(-90deg) translateZ(16px)",
                  }}
                />
              ))}
            </div>
          ) : i % 4 === 1 ? (
            // 3D Pyramid
            <div className="relative w-0 h-0" style={{ transformStyle: "preserve-3d" }}>
              {[...Array(4)].map((_, face) => (
                <div
                  key={face}
                  className="absolute border-l-4 border-r-4 border-b-8 border-transparent opacity-20"
                  style={{
                    borderBottomColor: theme.secondaryColor,
                    transform: `rotateY(${face * 90}deg) translateZ(8px) rotateX(45deg)`,
                  }}
                />
              ))}
            </div>
          ) : i % 4 === 2 ? (
            // 3D Sphere (using CSS)
            <div
              className="w-6 h-6 rounded-full opacity-30"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${theme.primaryColor}80, ${theme.primaryColor}20)`,
                boxShadow: `inset -2px -2px 4px ${theme.primaryColor}40, 2px 2px 8px ${theme.primaryColor}20`,
              }}
            />
          ) : (
            // 3D Torus
            <div className="relative w-8 h-8" style={{ transformStyle: "preserve-3d" }}>
              <div
                className="absolute inset-0 rounded-full border-2 opacity-30"
                style={{ borderColor: theme.secondaryColor }}
              />
              <div
                className="absolute inset-2 rounded-full border-2 opacity-20"
                style={{
                  borderColor: theme.primaryColor,
                  transform: "rotateX(90deg)",
                }}
              />
            </div>
          )}
        </motion.div>
      ))}

      {/* 3D DNA Helix */}
      <motion.div
        className="parallax-element absolute left-1/4 top-1/2 transform -translate-y-1/2"
        style={{ perspective: "1000px" }}
      >
        <div className="relative h-64" style={{ transformStyle: "preserve-3d" }}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`dna-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? theme.primaryColor : theme.secondaryColor,
                left: `${Math.cos(i * 0.5) * 20 + 20}px`,
                top: `${i * 12}px`,
                transform: `translateZ(${Math.sin(i * 0.5) * 20}px)`,
              }}
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* 3D Floating Rings */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="parallax-element absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
            perspective: "1000px",
          }}
        >
          <motion.div
            className="w-16 h-16 rounded-full border-2 opacity-20"
            style={{
              borderColor: i % 2 === 0 ? theme.primaryColor : theme.secondaryColor,
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, -360],
              rotateZ: [0, 180],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </motion.div>
      ))}

      {/* 3D Particle Constellation */}
      <div className="parallax-element absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: theme.primaryColor,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              z: [0, 100, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 3D Wireframe Structures */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wireframe-${i}`}
          className="parallax-element absolute"
          style={{
            right: `${10 + i * 20}%`,
            top: `${20 + i * 25}%`,
            perspective: "1000px",
          }}
        >
          <div className="relative w-20 h-20" style={{ transformStyle: "preserve-3d" }}>
            {/* Wireframe edges */}
            {[...Array(12)].map((_, edge) => (
              <motion.div
                key={edge}
                className="absolute bg-gradient-to-r opacity-20"
                style={{
                  background: `linear-gradient(90deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                  width: edge < 4 ? "80px" : edge < 8 ? "2px" : "2px",
                  height: edge < 4 ? "2px" : edge < 8 ? "80px" : "80px",
                  transform:
                    edge < 4
                      ? `translateY(${edge * 20}px) translateZ(${(edge % 2) * 40}px)`
                      : edge < 8
                        ? `translateX(${(edge - 4) * 20}px) translateZ(${((edge - 4) % 2) * 40}px)`
                        : `translateX(${(edge - 8) * 20}px) translateY(${(edge - 8) * 20}px) rotateY(90deg)`,
                }}
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: edge * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
