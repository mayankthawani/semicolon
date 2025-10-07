"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <header className={cn("sticky top-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/5")}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div aria-hidden className="size-8 rounded-lg bg-[#00ffff]/20 ring-1 ring-[#00ffff]/30 backdrop-blur-sm" />
          <span className="font-sans text-sm md:text-base font-medium tracking-wide text-white">
            TEAM SRM <span className="text-[#00ffff]">HACKATHON</span>
          </span>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {["Home", "Community", "About"].map((item) => (
            <li key={item}>
              <Link 
                href="#" 
                className="text-sm text-gray-300 hover:text-[#00ffff] transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#register"
          className="rounded-md bg-[#00ffff]/10 px-5 py-2 text-sm font-medium text-[#00ffff] ring-1 
                   ring-[#00ffff]/30 hover:bg-[#00ffff]/20 hover:ring-[#00ffff]/50 transition-all 
                   duration-200 backdrop-blur-sm"
        >
          REGISTER
        </Link>
      </nav>
    </header>
  )
}

