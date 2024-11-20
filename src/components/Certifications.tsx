'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Certifications() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100])

  const certifications = [
    {
      title: "Machine Learning Specialization",
      organization: "Stanford University & DeepLearning.AI",
      logo: "/stanford.png",
      date: "Jun 2023"
    },
    {
      title: "Data Science Fundamentals with Python & SQL Specialization",
      organization: "IBM",
      logo: "/ibm.png",
      date: "Jun 2023"
    },
    {
      title: "Deep Learning Specialization",
      organization: "DeepLearning.AI",
      logo: "/DLAI.png",
      date: "Jul 2024"
    },
    {
      title: "Natural Language Processing Specialization",
      organization: "DeepLearning.AI",
      logo: "/DLAI.png",
      date: "Jul 2024"
    },
    {
      title: "Generative AI with Large Language Models",
      organization: "DeepLearning.AI",
      logo: "/DLAI.png",
      date: "Aug 2024"
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      organization: "Meta",
      logo: "/meta.png",
      date: "Oct 2024"
    },
    {
      title: "DevOps & Software Engineering Professional Certificate",
      organization: "IBM",
      logo: "/ibm.png",
      date: "Expected: Nov 2024"
    },
    {
      title: "iOS Developer Professional Certificate",
      organization: "Meta",
      logo: "/meta.png",
      date: "Expected: Dec 2024"
    },
    {
      title: "AWS Fundamentals Specialization",
      organization: "Amazon Web Services",
      logo: "/aws.png",
      date: "Expected: Jan 2025"
    }
  ]

  return (
    <section id="certifications" className="py-20" ref={containerRef}>
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        style={{ opacity, y }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg 
                transition-all duration-300 border border-gray-600 flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-24 h-24 bg-gray-900/50 rounded-lg p-4">
                  <Image
                    src={cert.logo}
                    alt={`${cert.organization} logo`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-100 mb-2 text-center">{cert.title}</h3>
                <p className="text-emerald-400 text-center mb-2">{cert.organization}</p>
                <p className="text-gray-400 text-sm text-center mt-auto">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 