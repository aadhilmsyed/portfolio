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
      company: "Read On",
      logo: "/ReadOn.png",
      location: "Davis, CA",
      position: "Founder / Lead Developer",
      date: "Oct 2023 - Present",
      description: "Read On is an AI-powered reading companion designed to enhance your learning experience through multiple interactive tools. Read On harnesses the power of artificial intelligence to transform the learning experience for special needs children. By combining visual, auditory, and interactive elements, we've created a comprehensive platform that breaks down traditional barriers to learning. Whether it's using AI-generated images to help visual learners grasp complex concepts, providing phonetic breakdowns for those struggling with reading, or offering text-to-speech capabilities for auditory learners, every feature has been thoughtfully designed to support and empower these extraordinary children.",
      fullWidth: true
    },
    {
      company: "Muslim Tech Collaborative",
      logo: "/mtc.png",
      location: "Davis, CA",
      position: "Technical Project Lead",
      date: "Nov 2023 - Apr 2024",
      achievements: [
        "Led a team of 10 professionals in the development & deployment of a library management system for the Islamic Center of Davis, organizing 500+ books with a structured check-out/check-in database using PostgreSQL and AWS Cognito for secure and robust user authentication.",
        "Directed the creation and implementation of a responsive web application using React (front-end) and Node.js with Express (back-end), efficiently managing over 1,000 daily requests via a RESTful API to provide real-time updates on book availability and return statuses.",
        "Integrated automated SMS and email notifications for upcoming due dates and overdue returns through Twilio and Amazon SES, successfully yielding against overdue items and enhancing book retrieval efficiency by 40% with systematic shelving and organized data.",
        "Deployed the application on AWS infrastructure (EC2, S3, RDS) to ensure consistent 99.9% uptime, utilizing AWS CloudWatch for proactive monitoring, GitHub for version control, and Docker for streamlined deployment, ensuring operational stability and reliability."
      ]
    },
    {
      company: "Seeloz Inc.",
      logo: "/seeloz.png",
      location: "Santa Clara, CA",
      position: "Data Science Intern",
      date: "Jul 2023 - Oct 2023",
      achievements: [
        "Spearheaded end-to-end execution of MLOps product cycle, optimizing client-provided datasets for AI-driven supply chain forecasting.",
        "Trained Machine Learning models using Reinforcement Learning algorithms from Stable-Baselines 3 library and tested on a two-year interval, producing a 82% increase in average procurements and a 38% increase in on-time deliveries/orders, translating to 2.70M SAR profit.",
        "Leveraged Program Management expertise to configure Python data processing scripts using Pandas and Numpy, optimizing operational efficiency, resulting in a 15% increase in forecasting accuracy and 48% increase in inventory management, equivalent to 2.95M SAR in savings.",
        "Produced Microsoft PowerBI dashboard showcasing historical vs. AI supply chain metrics including demand, inventory levels, orders, deliveries, and procurements, offering impactful solutions and actionable insights for clients."
      ]
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
              className={`bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg 
                transition-all duration-300 border border-gray-600 ${exp.fullWidth ? 'lg:col-span-2' : ''}`}
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

              {exp.description ? (
                <p className="text-gray-300 leading-relaxed text-[15px]">
                  {exp.description}
                </p>
              ) : (
                <ul className="space-y-4 text-gray-300 leading-relaxed text-[15px]">
                  {exp.achievements?.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">✦</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 