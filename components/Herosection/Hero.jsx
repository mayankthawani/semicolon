import Link from "next/link"
import { Countdown } from "./Countdown"

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-6xl w-full px-3 sm:px-4 md:px-6 py-6 md:py-0 text-center">
        <div className="space-y-3 sm:space-y-4 md:space-y-8">
          {/* Get Ready Text - Adjusted for better visibility on all screens */}
          <p className="text-sm xs:text-base sm:text-lg md:text-base 
                       text-[#00ffff]/80 font-medium tracking-wider animate-fade-in 
                       px-1 mx-auto max-w-[90%] sm:max-w-none">
            GET READY FOR THE BIGGEST TECH EVENT
          </p>

          {/* Main Heading - Improved desktop scaling */}
          <h1 className="text-pretty font-sans text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                       font-black leading-tight tracking-tighter animate-fade-in-up">
            <div className="flex flex-row items-center justify-center 
                          gap-1 xs:gap-2 sm:gap-3 md:gap-6 lg:gap-4
                          min-[320px]:text-[28px] min-[375px]:text-[32px] min-[390px]:text-[36px]
                          md:text-inherit">
              <span className="text-white whitespace-nowrap tracking-normal md:tracking-wide lg:tracking-wider">
                SEMICOLON
              </span>
              <span className="text-[#00ffff] relative whitespace-nowrap lg:tracking-wider">
                11.0
                <span className="absolute -inset-2 md:-inset-3 lg:-inset-4 bg-[#00ffff]/10 blur-xl -z-10"></span>
              </span>
            </div>
          </h1>

          {/* Countdown - Adjusted spacing */}
          <div className="mt-3 xs:mt-4 sm:mt-6 md:mt-12 mb-3 xs:mb-4 sm:mb-6 md:mb-8 px-1">
            <Countdown />
          </div>

          {/* Description - Better text scaling */}
          <p className="max-w-[92%] xs:max-w-[85%] md:max-w-2xl mx-auto 
                     text-sm xs:text-base sm:text-lg md:text-base 
                     leading-relaxed text-gray-300/90 animate-fade-in-up-delay">
            Join us for an immersive experience where coding meets creativity. 
            Network with fellow developers, learn from industry experts, and showcase 
            your skills in this unique tech celebration.
          </p>

          {/* Button - Adjusted for better mobile display */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center 
                        animate-fade-in-up-delay mt-4 sm:mt-6 md:mt-12 px-2">
            <Link
              href="#register"
              className="group relative inline-flex items-center justify-center 
                       overflow-hidden rounded-lg p-[1px] hover:cursor-pointer 
                       w-[90%] xs:w-[85%] sm:w-auto"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                           bg-[conic-gradient(from_90deg_at_50%_50%,#E2E2E2_0%,#1A1A1A_50%,#E2E2E2_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center 
                           justify-center rounded-lg bg-gradient-to-b from-[#242424] 
                           via-[#1A1A1A] to-black px-8 py-4 text-lg font-medium 
                           text-white backdrop-blur-3xl transition-all duration-200 
                           hover:scale-105 hover:from-[#363636] hover:via-[#292929] 
                           hover:to-[#1A1A1A]">
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

