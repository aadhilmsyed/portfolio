'use client'

import { FaChevronDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Hero() {
  const tagline = "Building AI-Driven Software for the World"

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/cockpit.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-teal-500/10"
        style={{ backdropFilter: 'blur(1px)' }}
      />
      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400">
          Aadhil Mubarak Syed
        </h1>
        <p className="text-2xl text-gray-200 mb-8 font-light">
          Data Science · AI/ML · Full-Stack Development
        </p>
        <motion.div 
          className="text-gray-400 mb-10 text-lg h-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 1 }}
            animate={{
              width: "100%"
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
              delay: 1
            }}
            className="inline-block"
          >
            {tagline.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: (index * 0.1) + 1,
                  ease: "easeOut"
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>
      </div>
      
      {/* Scroll Prompt */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
        <p className="text-gray-200 text-base font-medium">
          Scroll to Read More About Me
        </p>
        <motion.button
          onClick={scrollToNextSection}
          className="text-gray-400 hover:text-emerald-400 transition-colors"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: 1, 
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 3
          }}
          aria-label="Scroll to next section"
        >
          <FaChevronDown className="text-3xl" />
        </motion.button>
      </div>
    </section>
  )
} 