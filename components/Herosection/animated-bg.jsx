export function AnimatedBg() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="bg-crystal absolute inset-0" />
      <div className="bg-shards absolute -inset-10 opacity-40 mix-blend-screen" />
      <div className="bg-particles absolute inset-0 opacity-35" />
      {/* vignette for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,transparent,rgba(0,0,0,0.45))]" />
    </div>
  )
}
