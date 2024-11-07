'use client'

import { FaLinkedin } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100])

  return (
    <section id="contact" className="py-20" ref={containerRef}>
      <motion.div 
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity, y }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-8 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Interested in discussing opportunities or collaborating on projects? 
          I&apos;d love to connect with you on LinkedIn!
        </motion.p>
        <motion.a 
          href="https://linkedin.com/in/aadhilmsyed"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 
                   hover:from-emerald-600 hover:to-emerald-700 rounded-full transition-all duration-300 
                   text-white font-semibold shadow-lg hover:shadow-emerald-500/30"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FaLinkedin className="text-xl" /> Connect on LinkedIn
        </motion.a>
      </motion.div>
    </section>
  )
} 