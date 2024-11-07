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
        className="max-w-6xl mx-auto px-4"
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
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-600"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex items-center justify-center md:w-48">
                  <div className="relative w-32 h-32 bg-gray-900/50 rounded-lg p-4">
                    <Image
                      src={cert.logo}
                      alt={`${cert.organization} logo`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="flex-1 flex items-center">
                  <div className="w-full">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-100">{cert.title}</h3>
                        <p className="text-emerald-400">{cert.organization}</p>
                      </div>
                      <p className="text-gray-400 text-sm whitespace-nowrap">{cert.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 