'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Experience() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100])

  const experiences = [
    {
      company: "Muslim Tech Collaborative",
      logo: "/mtc.png",
      location: "Davis, CA",
      position: "Technical Project Lead",
      date: "Nov 2023 - Apr 2024",
      description: "At MTC, I had the incredible opportunity to lead a talented team of 10 developers in creating a transformative library management system for the Islamic Center of Davis. I architected a robust solution using PostgreSQL and AWS Cognito for authentication, ensuring secure access for our 500+ book collection. Working closely with my team, I guided the development of a responsive web application built with React and Node.js, which now handles over 1,000 daily requests through our RESTful API. One of my proudest achievements was implementing an automated notification system using Twilio and Amazon SES, which significantly improved our book return rates. To ensure reliability, I orchestrated the deployment on AWS infrastructure using EC2, S3, and RDS, implementing comprehensive monitoring with AWS CloudWatch. Through careful version control with GitHub and containerization with Docker, we maintained a remarkable 99.9% uptime, making the library's resources consistently accessible to our community."
    },
    {
      company: "Seeloz Inc.",
      logo: "/seeloz.png",
      location: "Santa Clara, CA",
      position: "Data Science Intern",
      date: "Jul 2023 - Oct 2023",
      description: "During my time at Seeloz, I dove deep into the fascinating world of AI-driven supply chain optimization. I took ownership of the MLOps product cycle for SCAS, where I worked on enhancing supply chain forecasting through advanced machine learning techniques. One of my key projects involved training models using Reinforcement Learning algorithms from the Stable-Baselines 3 library. After testing over a two-year period, I was thrilled to see the results: an 82% increase in average procurements and a 38% improvement in delivery timing, which translated to a substantial 2.70M SAR profit.\n\nI also developed Python data processing pipelines using Pandas and NumPy, which boosted our forecasting accuracy by 15% and improved inventory management efficiency by 48%. To help visualize our achievements, I collaborated with the team through Jira and Confluence to create comprehensive PowerBI dashboards that tracked everything from demand patterns to procurement metrics, providing our clients with clear insights into their supply chain performance."
    }
  ]

  return (
    <section id="experience" className="py-20" ref={containerRef}>
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
          Work Experience
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex items-center justify-center md:w-48">
                  <div className="relative w-32 h-32 bg-gray-900/50 rounded-lg p-4">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain p-2"
                      priority
                    />
                  </div>
                </div>

                <div className="flex-1 flex items-center">
                  <div className="w-full">
                    <div className="h-[4.5rem] flex items-center">
                      <h3 className="text-2xl font-bold text-gray-100 leading-tight">
                        {exp.company}
                      </h3>
                    </div>
                    <p className="text-xl text-emerald-400 mb-2 font-semibold">{exp.position}</p>
                    <p className="text-gray-300 mb-1">{exp.location}</p>
                    <p className="text-gray-400 text-sm">{exp.date}</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-[15px]">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 