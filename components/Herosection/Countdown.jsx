"use client"

import { useEffect, useState } from "react"

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-10-22T00:00:00') // October 22, 2025

    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-2">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="bg-black/30 backdrop-blur-sm border border-[#00ffff]/20 rounded-lg p-2 sm:p-3 md:p-4">
            <div className="text-[#00ffff] text-lg sm:text-2xl md:text-4xl font-bold">
              {String(value).padStart(2, '0')}
            </div>
            <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm mt-1 uppercase">
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
