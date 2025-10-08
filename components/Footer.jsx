import { GridBackground } from "./ui/GridBackground";

export function Footer() {
  const sections = [
    {
      title: "Event Info",
      items: [
        { label: "Date", value: "October 22, 2025" },
        { label: "Duration", value: "8 Hours" },
        { label: "Venue", value: "SRM University" },
        { label: "Prize Pool", value: "₹20,000" },
      ]
    },
    {
      title: "Contact Us",
      items: [
        { label: "Email", value: "srmhackathon5@gmail.com" },
        { label: "Phone", value: "+91 6381 949 898" },
        
       
      ]
    },
    {
      title: "Quick Links",
      items: [
        { label: "Register Now", href: "#register" },
        { label: "About Event", href: "#about" },
        { label: "Schedule", href: "#schedule" },
        { label: "FAQ", href: "#faq" },
      ]
    },
  ]

  return (
    <footer className="relative ">
      {/* Background layers */}
      <GridBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/95 pointer-events-none" />
      
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        {/* Logo and tagline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            SEMI<span className="text-[#00ffff]">COLON</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            SRM's Premier Competitive Coding Event
          </p>
        </div>

        {/* Grid sections */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {sections.map((section) => (
            <div key={section.title} className="space-y-4 backdrop-blur-sm rounded-lg p-6 
                                             bg-black/20 border border-white/5 hover:border-[#00ffff]/20 
                                             transition-colors duration-300">
              <h3 className="text-lg font-semibold text-[#00ffff] flex items-center gap-2">
                {section.title}
                <div className="h-px flex-1 bg-gradient-to-r from-[#00ffff]/50 to-transparent" />
              </h3>
              {section.title === "Quick Links" ? (
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="group inline-flex text-gray-300/90 hover:text-[#00ffff] transition-colors duration-200"
                      >
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-px left-0 h-px w-0 bg-[#00ffff] transition-all duration-200 group-hover:w-full" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.value}>
                      <div className="group text-gray-300/90">
                        <span className="text-[#00ffff]/70 text-sm">{item.label}: </span>
                        <span className="text-gray-300 hover:text-[#00ffff] transition-colors duration-200">
                          {item.value}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Connect Section - New Style */}
          <div className="space-y-6 backdrop-blur-sm rounded-lg p-6 
                       bg-black/20 border border-white/5 hover:border-[#00ffff]/20 
                       transition-colors duration-300">
            <h3 className="text-lg font-semibold text-[#00ffff]">Connect</h3>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#linkedin" className="group">
                <div className="p-3 rounded-full border border-white/10 bg-black/30 
                              group-hover:border-[#00ffff]/50 group-hover:bg-[#00ffff]/10 
                              transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#00ffff]" 
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </a>

              <a href="#instagram" className="group">
                <div className="p-3 rounded-full border border-white/10 bg-black/30 
                              group-hover:border-[#00ffff]/50 group-hover:bg-[#00ffff]/10 
                              transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#00ffff]" 
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>

              <a href="#discord" className="group">
                <div className="p-3 rounded-full border border-white/10 bg-black/30 
                              group-hover:border-[#00ffff]/50 group-hover:bg-[#00ffff]/10 
                              transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#00ffff]" 
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
              </a>
            </div>

            {/* Register Now Button */}
            <a href="#register" className="block mt-6">
              <button className="w-full py-3 px-6 rounded-lg bg-[#00ffff]/10 border border-[#00ffff]/20 
                               text-[#00ffff] font-medium hover:bg-[#00ffff]/20 
                               transition-all duration-300">
                Register Now
              </button>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-gray-400">
            © 2025 TEAM SRM HACKATHON, SRMIST KTR. All rights reserved.
            <br />
            <span className="text-xs opacity-75">
              Built by TEAM SRM HACKATHON Web Team
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
