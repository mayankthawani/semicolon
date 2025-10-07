"use client"

/**
 * Install:
 *   npm i react-tsparticles tsparticles-slim
 *   # or: yarn add react-tsparticles tsparticles-slim
 *   # or: pnpm add react-tsparticles tsparticles-slim
 */

import { useCallback, memo, useEffect, useState } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

function ParticleBackgroundBase({
  color = "#00ffff",
  count = 100, // fixed lower count
  gradientStart = "#0a1e3f",
  gradientEnd = "#000000",
  className = "",
  densityArea = 1200, // increased area for better scatter
} = {}) {
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (_container) => {
    // no-op; kept for future hooks
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 -z-10 ${className}`}
      style={{
        background: `linear-gradient(180deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
        width: "100vw",
        minHeight: "100svh", // ensure full viewport coverage using svh to avoid mobile viewport quirks
      }}
    >
      <Particles
        id="particle-network"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          detectRetina: true,
          fullScreen: { enable: false },
          background: {
            // Canvas is transparent; gradient is applied on the wrapper div
            color: { value: "transparent" },
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: ["grab", "repulse"]
              },
              onClick: {
                enable: true,
                mode: ["push", "attract"]
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.5,
                  color: "#00ffff"
                }
              },
              repulse: {
                distance: 100,
                duration: 0.4,
                speed: 1
              },
              push: {
                quantity: 4,
                size: 1
              },
              attract: {
                distance: 200,
                duration: 0.4,
                factor: 3
              }
            },
          },
          particles: {
            number: {
              value: isMobile ? 50 : count, // reduce particles on mobile
              density: {
                enable: true,
                area: isMobile ? 900 : densityArea,
                factor: isMobile ? 1500 : 2000
              },
            },
            color: { value: color },
            links: {
              enable: true,
              color,
              distance: isMobile ? 100 : 150,
              opacity: 0.4,
              width: isMobile ? 0.8 : 1,
              triangles: {
                enable: false
              }
            },
            move: {
              enable: true,
              speed: isMobile ? 0.8 : 1.2,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
              attract: {
                enable: false
              }
            },
            opacity: {
              value: 0.7,
              random: false,
              animation: {
                enable: false // disabled animation for consistent look
              }
            },
            size: {
              value: { min: isMobile ? 0.8 : 1, max: isMobile ? 1.5 : 2 },
              random: true
            },
            interactivity: {
              modes: {
                repulse: {
                  distance: isMobile ? 100 : 150,
                  duration: 0.4,
                  speed: isMobile ? 0.8 : 1,
                  factor: isMobile ? 15 : 20
                },
                grab: {
                  distance: isMobile ? 100 : 150,
                  links: {
                    opacity: 0.6,
                    color: "#00ffff"
                  }
                },
                push: {
                  quantity: 1 // limit new particles on click
                }
              }
            }
          }
        }}
        // Ensure canvas covers wrapper fully
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: isMobile ? "none" : "auto" // disable interactions on mobile for better performance
        }}
      />
    </div>
  )
}



export const ParticleBackground = memo(ParticleBackgroundBase)
export default ParticleBackground
