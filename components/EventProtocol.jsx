"use client"

import { motion } from "framer-motion"
import { MapPin, Rocket, Calendar, Clock } from "lucide-react"
import { GridBackground } from "./ui/GridBackground"

const eventDetails = [
  { title: "Location", value: "TP-1, 8th Floor, Turing Hall", icon: MapPin },
  { title: "Registration", value: "Open — Join Immediately", icon: Rocket },
  { title: "Date", value: "October 22, 2025", icon: Calendar },
  { title: "Time", value: "9 AM Onwards", icon: Clock }
]

const cardAnimation = {
  initial: { y: 0 },
  animate: (i) => ({
    y: [0, -10, 0],
    transition: {
      duration: 3,
      delay: i * 0.2,
      ease: "easeInOut",
      repeat: Infinity,
    }
  })
}

export function EventProtocol() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <GridBackground />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
          >
            Event <span className="text-[#00ffff]">Details</span>
          </motion.h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Glowing Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ffff]/30 to-transparent">
            {/* Traveling Pulse */}
            <div className="absolute inset-0 -translate-y-1/2">
              <div className="h-1 w-20 bg-[#00ffff]/50 blur-sm animate-timeline-pulse" />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-4 gap-6">
            {eventDetails.map((detail, index) => (
              <motion.div
                key={detail.title}
                variants={cardAnimation}
                initial="initial"
                animate="animate"
                custom={index}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group relative bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                {/* Glow Effects */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00ffff]/10 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 rounded-xl animate-pulse-slow opacity-0 group-hover:opacity-100
                              bg-[#00ffff]/10 blur-xl transition-opacity duration-300" />
                
                <div className="relative space-y-3 text-center">
                  <div className="flex justify-center">
                    <detail.icon size={24} className="text-[#00ffff]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#00ffff]">{detail.title}</h3>
                    <p className="mt-1 text-sm text-gray-300">{detail.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {eventDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              {/* Mobile Card Content */}
              <div className="relative space-y-2 text-center">
                <div className="flex justify-center">
                  <detail.icon size={20} className="text-[#00ffff]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#00ffff]">{detail.title}</h3>
                  <p className="mt-1 text-xs text-gray-300">{detail.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
