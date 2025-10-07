"use client"

export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Dark background matching hero section exactly */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1e3f] to-black" />

      {/* Vertical lines container */}
      <div className="absolute inset-0">
        {/* Mobile vertical lines */}
        <div className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 100px,
              rgba(0, 255, 255, 0.05) 100px,
              rgba(0, 255, 255, 0.05) 101px
            )`
          }}
        />
        
        {/* Desktop vertical lines */}
        <div className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 200px,
              rgba(0, 255, 255, 0.05) 200px,
              rgba(0, 255, 255, 0.05) 201px
            )`
          }}
        />

        {/* Glowing lines - adjusted for mobile */}
        <div className="absolute inset-0 opacity-70 md:opacity-100">
          <div className="absolute left-1/4 md:left-1/3 h-full w-[1px] md:w-[2px]">
            <div className="h-full w-full bg-[#00ffff]/20" />
            <div className="absolute inset-0 w-full bg-[#00ffff]/10 blur-[8px]" />
          </div>
          <div className="absolute right-1/4 md:right-1/3 h-full w-[1px] md:w-[2px]">
            <div className="h-full w-full bg-[#00ffff]/20" />
            <div className="absolute inset-0 w-full bg-[#00ffff]/10 blur-[8px]" />
          </div>
        </div>

        {/* Moving glow effect */}
        <div className="absolute inset-y-0 -left-[100px] w-[200px] animate-aurora">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#00ffff]/5 to-transparent blur-2xl" />
        </div>
      </div>

      {/* Vignette - strengthened for mobile */}
      <div
        className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_50%,transparent_0%,rgba(0,0,0,0.8)_100%)] md:bg-[radial-gradient(100%_100%_at_50%_50%,transparent_0%,rgba(0,0,0,0.7)_100%)]"
      />
    </div>
  )
}
