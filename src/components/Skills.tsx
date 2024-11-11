'use client'

import { FaCode, FaTools, FaChartBar, FaCloud, FaBrain } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Skills() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8])

  const skills = {
    languages: {
      icon: <FaCode className="w-6 h-6" />,
      title: "Programming Languages",
      items: [
        "Python", "TypeScript", "JavaScript",
        "Java", "C", "C++", "R", "SQL",
        "HTML/CSS", "Assembly", "Haskell"
      ]
    },
    cloudServicesAndDevOps: {
      icon: <FaCloud className="w-6 h-6" />,
      title: "Cloud Services and DevOps",
      items: [
        "AWS EC2", "PostgreSQL", "MySQL",
        "File Systems", "AWS S3", "CI/CD",
        "REST API", "Docker", "Git"
      ]
    },
    programmingTools: {
      icon: <FaTools className="w-6 h-6" />,
      title: "Developer Tools",
      items: [
        "VS Code", "Eclipse", "Jupyter",
        "IntelliJ", "Xcode", "GitHub", "Jira",
        "Confluence", "PowerBI"
      ]
    },
    frameworks: {
      icon: <FaTools className="w-6 h-6" />,
      title: "Frameworks & Libraries",
      items: [
        "React", "Next.js", "Node.js", "Chakra UI",
        "Discord API", "Pygame", "CMake",
        "Flask", "Django"
      ]
    },
    datascience: {
      icon: <FaChartBar className="w-6 h-6" />,
      title: "Data Science & ML",
      items: [
        "PyTorch", "TensorFlow", "Scikit-learn", "Seaborn",
        "Pandas", "NumPy", "Matplotlib",
        "Keras", "NLTK", "SB3"
      ]
    },
    ai: {
      icon: <FaBrain className="w-6 h-6" />,
      title: "AI Services",
      items: [
        "OpenAI", "Google Gemini",
        "DALL-E", "TTS", "Whisper", "Flan-T5",
        "BERT", "GPT-4", "BloombergGPT"
      ]
    }
  }

  return (
    <section id="skills" className="py-20" ref={containerRef}>
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        style={{ opacity, y }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gray-100"
          style={{ scale }}
        >
          Technologies I&apos;ve Worked With
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category], index) => (
            <motion.div 
              key={key} 
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300
                         border border-gray-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                rotate: 1,
                transition: { type: "spring", stiffness: 300 }
              }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-emerald-400 bg-gray-900/50 p-3 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-100">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-900/50 text-gray-300 rounded-full text-sm
                             hover:bg-emerald-900/30 hover:text-emerald-300 
                             transition-colors duration-200 border border-gray-600
                             shadow-sm hover:shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 