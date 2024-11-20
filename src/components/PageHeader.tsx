'use client'

import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  const scrollToContent = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="h-screen flex items-center justify-center relative">
      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        <motion.h1 
          className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-2xl text-gray-200 mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Scroll Prompt */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
        <p className="text-gray-200 text-base font-medium">
          Scroll to View Content
        </p>
        <motion.button
          onClick={scrollToContent}
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
          aria-label="Scroll to content"
        >
          <FaChevronDown className="text-3xl" />
        </motion.button>
      </div>
    </section>
  )
} 