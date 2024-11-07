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
              I am a Computer Science and Statistical Data Science student at UC Davis, combining my passion 
              for AI/ML with full-stack development. With a strong foundation in mathematics and programming, 
              I specialize in creating intelligent systems that solve real-world problems.
            </p>
            <p>
              My experience ranges from leading development teams at the Muslim Tech Collaborative to 
              implementing machine learning solutions at Seeloz Inc. I&apos;ve successfully delivered projects 
              in library management systems, supply chain optimization, and educational technology, consistently 
              achieving significant improvements in efficiency and user experience.
            </p>
            <p>
              Outside of technology, I&apos;m an aviation enthusiast and competitive speedcuber, hobbies that have 
              enhanced my analytical thinking and ability to perform under pressure. These diverse interests 
              contribute to my unique approach to problem-solving in technology.
            </p>
            <p>
              I&apos;m currently seeking opportunities where I can apply my expertise in Data Science, Machine Learning, 
              and Full-Stack Development to create innovative solutions that make a meaningful impact.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 