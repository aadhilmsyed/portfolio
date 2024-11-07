'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Education() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100])

  const education = [
    {
      school: "University of California, Davis",
      logo: "/UCDavis.png",
      location: "Davis, CA",
      degree: "Bachelor of Science, Computer Science and Statistical Data Science",
      date: "Jun 2025",
      computerScience: [
        "ECS 122A - Algorithm Design & Analysis",
        "ECS 122B - Algorithm Design & Analysis",
        "ECS 140A - Programming Languages",
        "ECS 150 - Operating Systems & System Programming",
        "ECS 154A - Computer Architecture",
        "ECS 154B - Computer Architecture",
        "ECS 160 - Software Engineering",
        "ECS 165A - Database Systems I",
        "ECS 170 - Artificial Intelligence",
        "ECS 171 - Machine Learning",
        "ECS 174 - Computer Vision",
        "ECS 188 - Ethics in Age of Technology"
      ],
      statistics: [
        "MAT 168 - Optimization",
        "STA 106 - Analysis of Variance",
        "STA 108 - Regression Analysis",
        "STA 131A - Intro to Probability Theory",
        "STA 131B - Intro to Mathematical Statistics",
        "STA 135 - Multivariate Data Analysis",
        "STA 141A - Fundamentals of Statistical Data Science",
        "STA 141B - Data and Web Technologies for Data Analysis",
        "STA 141C - Big Data and High Performance Statistical Computing",
        "STA 142A - Statistical Learning I",
        "STA 142B - Statistical Learning II",
        "STA 160 - Practice in Statistical Data Science"
      ]
    },
    {
      school: "Las Positas College",
      logo: "/LasPositas.png",
      location: "Livermore, CA",
      degree: "Associate of Science, Mathematics and Computer Science",
      date: "May 2023",
      computerScience: [
        "CS 1 - Computing Fundamentals I",
        "CS 2 - Computing Fundamentals II",
        "CS 7 - Intro to Computer Programming Concepts",
        "CS 17 - Discrete Mathematical Structures",
        "CS 20 - Advanced Programming with Data Structures/C++",
        "CS 21 - Computer Organization and Assembly Language Programming"
      ],
      mathematics: [
        "MATH 1 - Calculus I",
        "MATH 2 - Calculus II",
        "MATH 3 - Multivariable Calculus",
        "MATH 5 - Ordinary Differential Equations",
        "MATH 7 - Elementary Linear Algebra",
        "MATH 40 - Statistics & Probability"
      ]
    }
  ]

  return (
    <section id="education" className="py-20" ref={containerRef}>
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
          Education
        </motion.h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Logo Section */}
                <div className="flex items-center justify-center md:w-48">
                  <div className="relative w-32 h-32 bg-gray-900/50 rounded-lg p-4">
                    <Image
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                
                {/* Information Section */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-100">{edu.school}</h3>
                      <p className="text-lg text-gray-300">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-300">{edu.location}</p>
                      <p className="text-gray-400">{edu.date}</p>
                    </div>
                  </div>

                  {/* Coursework Section */}
                  {edu.school === "University of California, Davis" ? (
                    <div className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Computer Science Column */}
                        <div>
                          <div className="mb-3">
                            <span className="font-semibold text-gray-100 text-lg">
                              Computer Science
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {edu.computerScience?.map((course, i) => (
                              <motion.li 
                                key={i} 
                                className="text-gray-300 text-sm pl-4 border-l-2 border-gray-600 hover:border-emerald-400 hover:text-emerald-300 transition-all duration-200"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ x: 5 }}
                              >
                                {course}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Statistics Column */}
                        <div>
                          <div className="mb-3">
                            <span className="font-semibold text-gray-100 text-lg">
                              Statistical Data Science
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {edu.statistics?.map((course, i) => (
                              <li key={i} className="text-gray-300 text-sm pl-4 border-l-2 border-gray-600 hover:border-emerald-400 hover:text-emerald-300 transition-all duration-200">
                                {course}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Computer Science Column */}
                        <div>
                          <div className="mb-3">
                            <span className="font-semibold text-gray-100 text-lg">
                              Computer Science
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {edu.computerScience?.map((course, i) => (
                              <li key={i} className="text-gray-300 text-sm pl-4 border-l-2 border-gray-600 hover:border-emerald-400 hover:text-emerald-300 transition-all duration-200">
                                {course}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Mathematics Column */}
                        <div>
                          <div className="mb-3">
                            <span className="font-semibold text-gray-100 text-lg">
                              Mathematics
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {edu.mathematics?.map((course, i) => (
                              <li key={i} className="text-gray-300 text-sm pl-4 border-l-2 border-gray-600 hover:border-emerald-400 hover:text-emerald-300 transition-all duration-200">
                                {course}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 