'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Awards() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100])

  const awards = [
    {
      title: "Honors Scholar",
      description: "Recognized for outstanding academic achievement and commitment to scholarly excellence"
    },
    {
      title: "Dean's List",
      description: "Fall 2021, Spring 2022, Fall 2022, Spring 2023"
    },
    {
      title: "Highest Honors",
      description: "Graduated with 3.5+ GPA, demonstrating consistent academic excellence"
    },
    {
      title: "Eagle Scout Rank",
      description: "Highest achievement attainable in the Boy Scouts of America, demonstrating leadership and community service"
    }
  ]

  return (
    <section id="awards" className="py-20" ref={containerRef}>
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        style={{ opacity, y }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Awards & Honors
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
              <h3 className="text-xl font-bold text-gray-100 mb-2">{award.title}</h3>
              <p className="text-gray-300">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 