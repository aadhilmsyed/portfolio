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
      logo: "/ReadOn.png",
      date: "Oct 2024",
      achievements: [
        "Developed an AI-powered educational platform using Next.js 14 and TypeScript, enabling special needs educators to generate personalized materials in under 2 minutes, reducing preparation time by up to 85% and effectively supporting diverse learning styles across classrooms.",
        "Designed an accessible and intuitive interface using React with 4 specialized learning modes — phonetics, visualization, comprehension, and read aloud — achieving a 40% improvement in reading comprehension in sample testing and reducing lesson preparation time by 87%.",
        "Integrated cutting-edge generative backend AI services using Python and Node.js, including OpenAI DALL-E 3 and TTS and Google Gemini, to fully automate resource creation with a 95% content accuracy rate, significantly expanding support for varied learning needs."
      ]
    },
    {
      title: "Events CoPilot: Discord Bot for Flight Simulation Server",
      link: "github.com/aadhilmsyed/EventsBot",
      logo: "/GE.png",
      date: "Oct 2023",
      achievements: [
        "Engineered a custom Discord bot using Python and the Discord API for a 1,000+ member aviation community, automating real-time flight logging with 99% accuracy and boosting role assignment efficiency by 92%, reducing manual workload.",
        "Led end-to-end execution, utilizing GitHub for CI/CD and AWS EC2 for cloud-based hosting solutions, achieving 99.9% uptime and an 87% reduction in response latency for global users; integrated PostgreSQL to ensure 94% data accuracy, delivering a scalable solution.",
        "Integrated real-time METAR data retrieval through weather report API requests, reducing report access time by 96% and enhancing accessibility by 14%; created technical and non-technical documentation, improving usability by 600% and expanding server reach by 22%."
      ]
    },
    {
      title: "Connect-4 AI with Optimized AI Algorithms",
      link: "github.com/aadhilmsyed/Connect4-AI",
      logo: "/C4.png",
      date: "Apr 2024",
      achievements: [
        "Developed an AI Connect Four game using Python with advanced Minimax and Alpha-Beta Pruning algorithms, achieving a flawless 100% win rate (20/20) for AlphaBetaAI against Monte Carlo AI, demonstrating the power and effectiveness of optimized search strategies.",
        "Implemented efficient data handling with NumPy and interactive visualization with Pygame, optimizing AI operations to consistently complete within 500 ms of CPU time, ensuring responsive gameplay and real-time decision-making under tight constraints.",
        "Built a highly customizable command-line interface with argparse, allowing users to seamlessly configure game settings, select between AI or human players, and enable visualizations, enhancing overall flexibility, usability, and adaptability for various simulation and testing modes."
      ]
    },
    {
      title: "ECS 150 Final Project: Distributed File System",
      link: "github.com/amubaraksyed/DistributedFileSystem",
      logo: "/DFS.png",
      date: "Jun 2024",
      achievements: [
        "Developed a distributed file server capable of managing up to 10,000 files and directories, providing concurrent access with over 99% API response reliability through a RESTful API supporting read, write, and delete operations, similar to Amazon S3.",
        "Engineered key system components to efficiently handle HTTP requests and manage 4KB block-size disk allocations and inode structures across 100,000+ simulated disk blocks, consistently achieving response times under 50ms for typical operational demands.",
        "Built command-line utilities (ds3ls, ds3cat, ds3bits) to facilitate file system management; enabled efficient retrieval and metadata access, processing directory entries sorted via std::strcmp to support large-scale file navigation and retrieval with accuracy up to 98%."
      ]
    },
    {
      title: "Predicting the 2024 NBA Champion with Machine Learning",
      link: "github.com/amubaraksyed/NBAChampion",
      logo: "/nba.png",
      date: "Jun 2024",
      achievements: [
        "Collaborated with a team of 4 students to build a deep neural network (DNN) model using TensorFlow to predict the NBA champion based on 50+ regular-season team performance metrics, achieving over 90% accuracy in testing and correctly predicting the 2024 NBA champion.",
        "Conducted exploratory data analysis (EDA) on historical data from the past 30 NBA seasons, utilizing Matplotlib and Seaborn to visualize 20+ statistical features such as 3-point percentage and free throw rate, identifying metrics with strong correlations to championship likelihood.",
        "Employed NumPy and Pandas for data processing to clean and organize extensive datasets, and used Beautiful Soup for web scraping to gather and compile historical team performance metrics, enhancing the model's accuracy and robustness.",
        "Produced a comprehensive 9-page research report detailing methodology, EDA findings, and model performance, along with an HTML interface built with Flask and Django, a 5-minute demonstration video, and a GitHub repository for further exploration and replication."
      ]
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
                  </div>
                </div>
              </div>

              <ul className="space-y-4 text-gray-300 leading-relaxed">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✦</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 