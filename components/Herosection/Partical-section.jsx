"use client"

/**
 * Install:
 *   npm i react-tsparticles tsparticles-slim
 *   # or: yarn add react-tsparticles tsparticles-slim
 *   # or: pnpm add react-tsparticles tsparticles-slim
 */

import { useCallback, memo } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

function ParticleBackgroundBase({
  color = "#00ffff",
  count = 120, // reduced count
  gradientStart = "#0a1e3f",
  gradientEnd = "#000000",
  className = "",
  densityArea = 1000, // increased area for better distribution
} = {}) {
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
              value: count,
              density: {
                enable: true,
                area: densityArea,
                factor: 1500 // increased for better spread
              },
            },
            color: { value: color },
            links: {
              enable: true,
              color,
              distance: 200, // increased distance between connections
              opacity: 0.3,
              width: 0.8,
              triangles: {
                enable: false
              }
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true, // enable random movement
              straight: false,
              outModes: {
                default: "bounce"
              },
              attract: {
                enable: true,
                rotateX: 1200, // increased rotation
                rotateY: 1200
              }
            },
            opacity: {
              value: 0.6,
              random: true, // randomize opacity
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.3,
                sync: false
              }
            },
            size: {
              value: { min: 0.8, max: 1.5 }
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
          pointerEvents: "auto" // Enable mouse interactions
        }}
      />
    </div>
  )
}



export const ParticleBackground = memo(ParticleBackgroundBase)
export default ParticleBackground
