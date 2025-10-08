"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { GridBackground } from "./ui/GridBackground"

const faqs =[
  {
    question: "Who can participate in Semicolon 11.0?",
    answer: "Open to all SRMIST students passionate about coding. Whether you're a beginner or an experienced coder, everyone is welcome to participate."
  },
  {
    question: "What should I bring to Semicolon 11.0?",
    answer: "Bring your laptop, charger, student ID, and enthusiasm for coding. We'll provide the workspace, internet, and refreshments."
  },
  {
    question: "Can I participate individually or in a team?",
    answer: "This is an individual coding competition. Each participant will compete on their own."
  },
  {
    question: "Is there any registration fee?",
    answer: "Yes, there is a registration fee of ₹100 for all participants."
  },
  {
    question: "What if I'm a beginner?",
    answer: "Perfect! We welcome beginners and provide mentorship and support throughout the competition to help you learn and improve."
  },
  {
    question: "How are submissions judged?",
    answer: "Submissions are evaluated based on correctness, efficiency, and passing all test cases. Our panel of judges will verify your solutions against predefined test cases."
  }
]


export function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null)

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
            Frequently Asked <span className="text-[#00ffff]">Questions</span>
          </motion.h2>
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.9, y: 20 }} // Changed from opacity: 0 to 0.9
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full group relative bg-black/50 backdrop-blur-sm rounded-xl p-6 
                         border border-[#00ffff]/10 text-left transition-all duration-200 
                         hover:bg-[#00ffff]/5 hover:border-[#00ffff]/20"
              >
                {/* Question */}
                <div className="flex justify-between items-center gap-4">
                  <h3 className="font-medium text-gray-200 pr-2">{faq.question}</h3>
                  <span className={`text-[#00ffff] transition-transform duration-200 
                                ${activeIndex === index ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm text-gray-400 border-t border-white/5 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00ffff]/10 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
