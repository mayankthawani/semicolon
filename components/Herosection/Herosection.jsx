import { Hero } from "./Hero"
import { Partners } from "./partners"
import { ParticleBackground } from "./Partical-section"

export default function HeroSection() {
  return (
    <main className="relative min-h-[100svh]">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <ParticleBackground 
          color="#00ffff"
          count={180}
          gradientStart="#0a1e3f"
          gradientEnd="#000000"
          densityArea={800}
        />
        {/* Enhanced vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_50%,transparent,rgba(0,0,0,0.7))]" />
      </div>
      
      <Hero />
      
    </main>
  )
}
