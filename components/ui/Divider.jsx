export function Divider() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-4">
      <hr className="border-none h-px bg-gradient-to-r from-transparent via-[#00ffff]/50 to-transparent 
                     before:content-[''] before:absolute before:inset-0 before:blur-sm before:bg-gradient-to-r before:from-transparent before:via-[#00ffff]/30 before:to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-[#00ffff] animate-pulse 
                     after:absolute after:inset-0 after:rounded-full after:bg-[#00ffff]/50 after:blur-md after:animate-pulse" />
    </div>
  )
}
        {/* Secondary glow */}
        <div className="absolute inset-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ffff]/20 to-transparent blur-[4px]" />
        
        {/* Animated dot */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-2 w-2 rounded-full bg-[#00ffff] animate-pulse" />
          <div className="absolute inset-0 h-2 w-2 rounded-full bg-[#00ffff] blur-md animate-pulse" />
          <div className="absolute inset-0 h-2 w-2 rounded-full bg-[#00ffff]/50 blur-xl animate-pulse delay-75" />
        </div>
     