export function Partners() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-20">
      <div className="mt-4 md:mt-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10"></div>
        <div className="grid grid-cols-2 items-center gap-4 sm:gap-6 md:grid-cols-4 md:gap-12 
                    bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
          {([
            { src: "/spotify-logo.png", alt: "Spotify" },
            { src: "/slack-logo.png", alt: "Slack" },
            { src: "/y-combinator-logo.png", alt: "Y Combinator" },
            { src: "/discord-logo.png", alt: "Discord" }
          ]).map((logo) => (
            <img 
              key={logo.alt}
              src={logo.src} 
              alt={logo.alt} 
              className="h-6 sm:h-7 md:h-8 w-[90px] sm:w-[100px] md:w-[120px] object-contain brightness-200 opacity-70 
                       hover:opacity-100 transition-opacity duration-200" 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
