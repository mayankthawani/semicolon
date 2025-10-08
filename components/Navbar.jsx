"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState, useCallback } from "react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = useCallback((e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }, [])

  const navItems = [
    { label: "Home", href: "home" },
    { label: "Community", href: "details" },
    { label: "About", href: "about" }
  ]

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50",
      "bg-black/10 backdrop-blur-xl border-b border-white/5",
      "transition-all duration-300"
    )}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 z-50">
          <img className="w-10 h-10" src="/hack-logo.png" alt="" />
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
          {navItems.map((item) => (
            <li key={item.label}>
              <button 
                onClick={(e) => handleScroll(e, item.href)}
                className="text-sm text-gray-300 hover:text-[#00ffff] transition-colors duration-200"
              >
                {item.label}
              </button>
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

        {/* Mobile Menu - Single dropdown version */}
        <div className={cn(
          "absolute top-full left-0 right-0 transition-all duration-300 md:hidden",
          "border-b border-white/10 bg-[#0a1e3f]/95 backdrop-blur-md",
          "flex flex-col items-center py-4",
          isMobileMenuOpen 
            ? "translate-y-0 opacity-100 pointer-events-auto" 
            : "-translate-y-4 opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col items-center gap-4 w-full px-6">
            {navItems.map((item) => (
              <button 
                key={item.label}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-base text-gray-300 hover:text-[#00ffff] transition-colors duration-200 py-2 w-full text-center"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="#register"
              className="w-full mt-2 rounded-md bg-[#00ffff]/10 px-6 py-2.5 text-base 
                       font-medium text-[#00ffff] ring-1 ring-[#00ffff]/30 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              REGISTER
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

