'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Projects() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100])

  const projects = [
    {
      title: "Read On: AI-Powered Reading Companion",
      link: "github.com/aadhilmsyed/ReadOn",
      logo: "/book.png",
      date: "Oct 2024",
      abstract: "An innovative educational platform that leverages cutting-edge AI technologies to create personalized learning materials for special needs education, reducing preparation time by 85% while improving learning outcomes.",
      description: "Read On emerged from a deep understanding of the challenges faced by special needs educators in creating personalized learning materials. Using Next.js 14 and TypeScript, I built a platform that transforms the way educational content is created and delivered. The system's four specialized learning modes - phonetics, visualization, comprehension, and read aloud - were carefully designed to address different learning styles and needs. By integrating advanced AI services like OpenAI's DALL-E 3 and Google Gemini, the platform can generate highly relevant and accurate educational content in minutes rather than hours. The real impact became clear during testing, where we saw a 40% improvement in reading comprehension scores. What makes this project particularly meaningful is its practical application - educators can now focus more time on direct student interaction rather than material preparation, leading to better educational outcomes for students with diverse learning needs."
    },
    {
      title: "ECS 150 Final Project: Distributed File System",
      link: "github.com/amubaraksyed/DistributedFileSystem",
      logo: "/DFS.png",
      date: "Jun 2024",
      abstract: "A robust distributed file system implementation that handles concurrent access for thousands of files while maintaining sub-50ms response times, mirroring the functionality of enterprise solutions like Amazon S3.",
      description: "Building a distributed file system from scratch was an exciting challenge that pushed the boundaries of my systems programming knowledge. I focused on creating a system that could not only handle massive scale - managing up to 10,000 files across 100,000+ disk blocks - but also maintain exceptional performance under load. The architecture I designed uses a sophisticated block allocation system with 4KB blocks, carefully managing disk space while ensuring fast access times. One of the most rewarding aspects was developing the command-line utilities that make the system accessible and practical. These tools (ds3ls, ds3cat, ds3bits) provide familiar interfaces for users while handling complex operations behind the scenes. The RESTful API layer ensures reliable concurrent access, making the system not just a academic exercise but a practical solution for distributed storage needs."
    },
    {
      title: "Predicting the 2024 NBA Champion with Machine Learning",
      link: "github.com/amubaraksyed/NBAChampion",
      logo: "/nba.png",
      date: "Jun 2024",
      abstract: "A deep learning project that successfully predicted the 2024 NBA champion using a sophisticated neural network trained on 30 years of historical data and over 50 performance metrics.",
      description: "Working with a talented team of four, I embarked on an exciting journey to combine my passion for basketball with machine learning. We developed a deep neural network using TensorFlow that could predict NBA champions with remarkable accuracy. The project began with extensive data collection, where I used Beautiful Soup to scrape historical team performance data spanning three decades. Through careful exploratory data analysis using Matplotlib and Seaborn, we identified key performance indicators that had strong correlations with championship success. The visualization of metrics like 3-point percentage and free throw rate revealed fascinating patterns in championship DNA. Our model's training process was rigorous, and the results were impressive - achieving over 90% accuracy in testing and, most excitingly, correctly predicting the 2024 NBA champion. To make our findings accessible, we created an interactive HTML interface using Flask and Django, accompanied by detailed documentation including a comprehensive research report and demonstration video. This project perfectly merged statistical analysis with modern web technologies, creating a tool that both basketball fans and data scientists could appreciate."
    },
    {
      title: "Connect-4 AI with Optimized AI Algorithms",
      link: "github.com/aadhilmsyed/Connect4-AI",
      logo: "/C4.png",
      date: "Apr 2024",
      abstract: "An intelligent Connect Four game engine that showcases the power of advanced search algorithms, achieving unbeatable performance through optimized Minimax and Alpha-Beta pruning implementations.",
      description: "This project emerged from my fascination with game theory and artificial intelligence. I set out to create not just another Connect Four game, but a sophisticated AI opponent that could demonstrate the real-world application of theoretical concepts. The heart of the system lies in its implementation of Minimax and Alpha-Beta pruning algorithms, which I meticulously optimized to make decisions within 500 milliseconds. The results were remarkable - the AI achieved a perfect win rate against its Monte Carlo counterpart in our testing phase. To make the project more accessible and educational, I developed a flexible command-line interface that allows users to experiment with different AI opponents and visualization options. The system's architecture, built with NumPy for efficient board state management and Pygame for visualization, creates an engaging platform for both casual players and those interested in AI strategy development."
    },
    {
      title: "Events CoPilot: Discord Bot for Flight Simulation Server",
      link: "github.com/aadhilmsyed/EventsBot",
      logo: "/GE.png",
      date: "Oct 2023",
      abstract: "A sophisticated Discord bot that revolutionized flight logging and community management for a 1,000+ member aviation simulation server through automated tracking and real-time weather data integration.",
      description: "What started as a solution for our growing flight simulation community turned into a comprehensive automation platform. I engineered Events CoPilot to streamline our server operations, focusing on making flight logging seamless and efficient. The bot now handles everything from automatic role assignments to real-time flight tracking with remarkable 99% accuracy. One of the most exciting features I implemented was the integration of live METAR weather data, which pilots can now access instantly instead of navigating through external websites. By leveraging AWS for hosting and PostgreSQL for data management, I ensured the bot maintains consistent uptime and reliability. The impact was immediate and significant - our manual workload dropped dramatically, and the community's engagement increased substantially. Through careful documentation and user-friendly features, we've seen the server grow and thrive, with members actively using the bot's capabilities for their virtual flying adventures."
    }
  ]

  return (
    <section id="projects" className="py-20" ref={containerRef}>
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
          Personal Projects
        </motion.h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-8 mb-6">
                {project.logo && (
                  <div className="flex items-center justify-center md:w-48">
                    <div className="relative w-32 h-32 bg-gray-900/50 rounded-lg p-4">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        fill
                        className="object-contain p-2"
                        priority
                      />
                    </div>
                  </div>
                )}

                <div className="flex-1 flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <a 
                        href={`https://${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl font-bold text-gray-100 hover:text-emerald-400 transition-colors duration-200"
                      >
                        {project.title}
                      </a>
                      <p className="text-gray-400">{project.date}</p>
                    </div>
                    <p className="text-gray-300 mt-2 italic">
                      {project.abstract}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 