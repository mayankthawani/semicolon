"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50",
      "bg-black/10 backdrop-blur-xl border-b border-white/5",
      "transition-all duration-300"
    )}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 z-50">
          <div aria-hidden className="size-8 rounded-lg bg-[#00ffff]/20 ring-1 ring-[#00ffff]/30 backdrop-blur-sm" />
          <span className="font-sans text-sm md:text-base font-medium tracking-wide text-white">
            TEAM SRM <span className="text-[#00ffff]">HACKATHON</span>
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50 p-2"
        >
          <span className={cn(
            "block w-6 transition-all duration-300",
            "before:block before:w-6 before:h-0.5 before:bg-[#00ffff]",
            "after:block after:w-6 after:h-0.5 after:bg-[#00ffff] after:mt-1.5",
            isMobileMenuOpen && "before:rotate-45 before:translate-y-1.5 after:-rotate-45 after:translate-y-0"
          )} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
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

        {/* Desktop Register Button */}
        <Link
          href="#register"
          className="hidden md:inline-flex rounded-md bg-[#00ffff]/10 px-5 py-2 text-sm 
                   font-medium text-[#00ffff] ring-1 ring-[#00ffff]/30 hover:bg-[#00ffff]/20 
                   hover:ring-[#00ffff]/50 transition-all duration-200 backdrop-blur-sm"
        >
          REGISTER
        </Link>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-xl transition-transform duration-300 md:hidden",
          "flex flex-col items-center justify-center gap-8",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {["Home", "Community", "About"].map((item) => (
            <Link 
              key={item}
              href="#" 
              className="text-lg text-gray-300 hover:text-[#00ffff] transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#register"
            className="mt-4 rounded-md bg-[#00ffff]/10 px-6 py-2.5 text-base 
                     font-medium text-[#00ffff] ring-1 ring-[#00ffff]/30"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            REGISTER
          </Link>
        </div>
      </nav>
    </header>
  )
}

