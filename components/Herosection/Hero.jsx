import Link from "next/link"
import { Countdown } from "./Countdown"

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-12 md:pt-32 md:pb-24 text-center">
        <div className="space-y-6 md:space-y-8">
          <p className="text-xs md:text-base text-[#00ffff]/80 font-medium tracking-wider animate-fade-in">
            GET READY FOR THE BIGGEST TECH MEETUP
          </p>

          <h1 className="text-pretty font-sans text-[32px] sm:text-[40px] font-black leading-[1.1] tracking-tighter md:text-7xl lg:text-8xl animate-fade-in-up">
            <span className="text-white inline-block">SEMICOLON</span>
            <span className="text-[#00ffff] inline-block ml-2 md:ml-4 relative">
              11.0
              <span className="absolute -inset-1 bg-[#00ffff]/10 blur-xl -z-10"></span>
            </span>
          </h1>

          <div className="mt-8 md:mt-12 mb-6 md:mb-8">
            <Countdown />
          </div>

          <p className="mt-4 md:mt-6 max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed text-gray-300/90 animate-fade-in-up-delay mx-auto px-2 md:px-0">
            Join us for an immersive experience where coding meets creativity. 
            Network with fellow developers, learn from industry experts, and showcase 
            your skills in this unique tech celebration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-in-up-delay mt-6 md:mt-8">
            <Link
              href="#register"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg p-[1px] hover:cursor-pointer"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E2E2_0%,#1A1A1A_50%,#E2E2E2_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-b from-[#242424] via-[#1A1A1A] to-black px-8 py-3 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-200 hover:scale-105 hover:from-[#363636] hover:via-[#292929] hover:to-[#1A1A1A]">
                Register Now
                <span className="ml-2 text-[#00ffff]">→</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

