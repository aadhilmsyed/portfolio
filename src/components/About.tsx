'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100])

  return (
    <section id="about" className="py-20" ref={containerRef}>
      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity, y }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/aadhil.png"
              alt="Aadhil Syed"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>
          <motion.div 
            className="flex-1 text-lg text-gray-300 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              🚀 I&apos;m on a mission to build AI-driven software that makes a meaningful impact on the world. 
              Currently, I&apos;m spearheading development for Read On, an AI-powered reading companion that helps 
              students with learning disabilities access additional academic resources.
            </p>
            <p>
              🎓 As a final-year CS + Stats DS student, I&apos;m deepening my knowledge in Algorithms, Computer 
              Systems, Software Engineering, and Statistical Learning. I&apos;m also pursuing my interests in 
              Generative AI, Natural Language Processing, and Human-Computer Interaction through various 
              certificatons.
            </p>
            <p>
              🛩️ Beyond technology, I&apos;m an aviation enthusiast and competitive speedcuber with a 10.96s PB 
              single. I also run a YouTube channel featuring my endeavors in GeoFS, a free browser-based 
              flight simulator, in which I have accumulated well over 6,000 hours of flight time.
            </p>
            <p>
              🤝 I&apos;m seeking opportunities in Full-Stack Development, AI/ML, and Data Science. If you&apos;re 
              looking to collaborate on impactful projects or share insights, feel free to reach out below!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 