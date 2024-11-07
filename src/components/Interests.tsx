'use client'

import { FaPlane, FaCube, FaCode, FaChess } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Interests() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100])

  const interests = [
    {
      icon: <FaPlane className="w-8 h-8" />,
      title: "Aviation & Flight Simulation",
      description: "Passionate virtual pilot with extensive experience in flight simulation. Active member of various aviation communities, contributing to realistic flight operations and training scenarios."
    },
    {
      icon: <FaCube className="w-8 h-8" />,
      title: "Speedcubing",
      description: "Competitive speedcuber skilled in solving Rubik's cubes and other twisty puzzles. This hobby has enhanced my problem-solving abilities and pattern recognition skills."
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Competitive Programming",
      description: "Regular participant in coding competitions and algorithmic challenges, constantly pushing the boundaries of problem-solving and optimization."
    },
    {
      icon: <FaChess className="w-8 h-8" />,
      title: "Strategic Gaming",
      description: "Enthusiast of strategy games that require analytical thinking and decision-making, applying these skills to both professional and personal challenges."
    }
  ]

  return (
    <section id="interests" className="py-20" ref={containerRef}>
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
          Personal Interests
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="text-emerald-400 mr-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {interest.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-100">{interest.title}</h3>
              </div>
              <p className="text-gray-300">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 