import { GridBackground } from "@/components/ui/GridBackground";

export function Mission() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-transparent">
      <GridBackground />
      {/* Glowing background elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#00ffff]/5 to-transparent" />
        <div className="absolute top-1/2 left-1/4 size-96 bg-[#00ffff]/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6">
            <div className="inline-block">
              <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <div className="h-px bg-gradient-to-r from-[#00ffff]/50 to-transparent mt-1" />
            </div>

            <p className="text-sm md:text-lg text-gray-300/90 leading-relaxed">
              <span className="text-[#00ffff]">Semicolon</span> is our flagship coding competition that puts Data Structures, Algorithms, and problem-solving skills to the ultimate test.
            </p>
            
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-400/90">
              <p>
                Inspired by competitive programming platforms, it pushes participants to think critically, code efficiently, and deliver under pressure.
              </p>
              <p>
                More than a competition, Semicolon is a launchpad to learn, grow, and showcase coding excellence at SRMIST.
              </p>
            </div>

            {/* Stats - Made more compact on mobile */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 pt-4 md:pt-6">
              {([
                { value: "500+", label: "Participants" },
                { value: "24hrs", label: "of Coding" },
                { value: "₹50K", label: "Prize Pool" },
              ]).map((stat) => (
                <div key={stat.label} className="text-center p-2 md:p-3 bg-black/20 rounded-lg backdrop-blur-sm">
                  <div className="text-base md:text-xl font-bold text-[#00ffff]">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Container - Adjusted for mobile */}
          <div className="relative group mt-6 md:mt-0">
            <div className="absolute inset-0 bg-[#00ffff]/10 rounded-xl md:rounded-2xl blur-2xl group-hover:bg-[#00ffff]/15 transition-all duration-300" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 overflow-hidden">
              <img
                src="/event-image.jpg" // Add your event image here
                alt="Semicolon Event"
                className="w-full aspect-[16/9] md:aspect-[4/3] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
