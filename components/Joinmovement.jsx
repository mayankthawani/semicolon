"use client"

import React from "react"
import { motion } from "framer-motion"
import { GridBackground } from "./ui/GridBackground"
import { DollarSign, Gift, Target, Users } from "lucide-react"

const PrizeCards = [
  { title: "₹20,000", subtitle: "Prize Pool", icon: DollarSign },
  { title: "Goodies", subtitle: "Exciting Rewards", icon: Gift },
  { title: "Rounds", subtitle: "Multiple Stages", icon: Target },
  { title: "Teams", subtitle: "Solo & Group", icon: Users },
]

const FeatureCards = [
  { title: "Real-Time Coding Challenges", description: "Test your skills live" },
  { title: "Time-Based Puzzles", description: "Race against the clock" },
  { title: "Logic & Innovation Tasks", description: "Think outside the box" },
  { title: "Industry Problems", description: "Real-world scenarios" },
]

const floatingAnimation = {
  initial: { y: 0 },
  animate: (i) => ({
    y: [0, -10, 0],
    x: [0, i % 2 === 0 ? 5 : -5, 0],
    rotate: [0, i % 2 === 0 ? 1 : -1, 0],
    transition: {
      duration: 4,
      delay: i * 0.2,
      ease: "easeInOut",
      repeat: Infinity,
    }
  })
}

// Keep slideAnimation only for prize cards
const slideAnimation = {
  initial: (i) => ({
    x: 0
  }),
  animate: (i) => ({
    x: "-100%",
    transition: {
      x: {
        duration: 60,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }
    }
  })
}

export function JoinMovement() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <GridBackground />

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
          >
            Join the <span className="text-[#00ffff]">Movement</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Be part of the revolution — code, collaborate, and conquer
          </p>
        </div>

        {/* Prize Cards with scroll - keep as is */}
        <div className="relative mb-12 overflow-hidden">
          <div className="relative flex">
            <motion.div 
              className="flex gap-6 shrink-0"
              initial="initial"
              animate="animate"
              variants={slideAnimation}
              custom={0}
            >
              {[...PrizeCards, ...PrizeCards, ...PrizeCards].map((card, index) => (
                <motion.div
                  key={index}
                  className="w-[280px] shrink-0 group relative bg-black/30 backdrop-blur-sm 
                           rounded-xl p-6 border border-white/10"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00ffff]/10 to-transparent opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 rounded-xl animate-pulse-slow opacity-0 group-hover:opacity-100
                                bg-[#00ffff]/10 blur-xl transition-opacity duration-300" />
                  
                  <div className="relative space-y-4 text-center">
                    <div className="flex justify-center">
                      <card.icon 
                        size={32}
                        className="text-[#00ffff] group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{card.title}</h3>
                    <p className="text-sm text-gray-400">{card.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="flex gap-6 shrink-0"
              initial="initial"
              animate="animate"
              variants={slideAnimation}
              custom={0}
            >
              {[...PrizeCards, ...PrizeCards, ...PrizeCards].map((card, index) => (
                <motion.div
                  key={index}
                  className="w-[280px] shrink-0 group relative bg-black/30 backdrop-blur-sm 
                           rounded-xl p-6 border border-white/10"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00ffff]/10 to-transparent opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 rounded-xl animate-pulse-slow opacity-0 group-hover:opacity-100
                                bg-[#00ffff]/10 blur-xl transition-opacity duration-300" />
                  
                  <div className="relative space-y-4 text-center">
                    <div className="flex justify-center">
                      <card.icon 
                        size={32}
                        className="text-[#00ffff] group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{card.title}</h3>
                    <p className="text-sm text-gray-400">{card.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Feature Cards - continuous scroll */}
        <div className="relative overflow-hidden">
          <div className="relative flex">
            <div className="flex shrink-0">
              <motion.div 
                className="flex gap-6 shrink-0"
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  x: {
                    duration: 60,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }
                }}
              >
                {[...FeatureCards, ...FeatureCards, ...FeatureCards].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="w-[280px] shrink-0 group relative bg-black/20 
                             backdrop-blur-sm rounded-full px-6 py-3 border border-white/10"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="text-center">
                      <h4 className="text-sm font-medium text-white">{feature.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div 
                className="flex gap-6 shrink-0"
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  x: {
                    duration: 60,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }
                }}
              >
                {[...FeatureCards, ...FeatureCards, ...FeatureCards].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="w-[280px] shrink-0 group relative bg-black/20 
                             backdrop-blur-sm rounded-full px-6 py-3 border border-white/10"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="text-center">
                      <h4 className="text-sm font-medium text-white">{feature.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}


