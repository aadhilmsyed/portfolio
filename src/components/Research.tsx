'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaFilePdf } from 'react-icons/fa'

export default function Research() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100])

  const research = [
    {
      title: "Predicting the 2024 NBA Champion Using Machine Learning",
      authors: "Aadhil M. Syed, et al.",
      date: "June 2024",
      logo: "/nba.png",
      abstract: "This research analyzed three decades of NBA data to identify key championship predictors. Through comprehensive data analysis across 20 dimensions, we uncovered critical success factors including net rating differentials, offensive efficiency, and veteran experience impact. Our deep neural network model achieved 90% accuracy in predicting historical championships (1994-2023) and successfully identified the Boston Celtics as 2024 championship contenders, as validated by their current performance.",
      keyFindings: [
        {
          title: "Model Performance and Prediction",
          points: [
            "The DNN model achieved 90% accuracy (27 out of 30 correct predictions) for historical champions from 1994-2023",
            "Predicted the Boston Celtics as 2024 NBA Champions with 37.86% likelihood",
            "Only failed to predict three championships: 2005 Spurs, 2016 Cavaliers, and 2022 Warriors"
          ]
        },
        {
          title: "Statistical Trends in Championship Teams",
          points: [
            "Evolution in playing style: increased pace and higher three-point attempt rates over time",
            "Championship teams consistently showed higher net ratings (difference between offensive and defensive ratings)",
            "Efficiency metrics proved crucial: higher three-point conversion rates and effective field goal percentages",
            "Veteran experience matters: championship teams typically had higher average player age than non-champions",
            "Higher assist rates in recent years, indicating importance of ball movement"
          ]
        },
        {
          title: "Counter-intuitive Findings",
          points: [
            "Having the highest regular-season win percentage doesn't necessarily predict championship success (only 10 times in past three decades)",
            "Season-to-season improvement wasn't strongly correlated with championship success",
            "Strength of schedule and attendance figures showed minimal correlation with championship outcomes"
          ]
        },
        {
          title: "Technical Insights",
          points: [
            "Using all numerical features (rather than just significant ones identified in EDA) improved model accuracy from 67% to over 80%",
            "Optimal model configuration: 100 epochs, batch size of 64, and hidden layer size of 256 units",
            "The model regularly fluctuated between predicting Boston Celtics and Minnesota Timberwolves during training iterations"
          ]
        },
        {
          title: "Limitations",
          points: [
            "Cannot account for \"X-factor\" players who can significantly influence playoff games",
            "Doesn't factor in real-time developments like injuries or mid-season trades",
            "Some probability scores for teams (like Oklahoma City Thunder at 0.16%) seemed disproportionate to their actual performance level"
          ]
        }
      ],
      githubLink: "github.com/amubaraksyed/NBAChampion",
      pdfLink: "/ECS171_Report.pdf"
    }
  ]

  return (
    <section id="research" className="py-20" ref={containerRef}>
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
          Reports & Publications
        </motion.h2>
        <div className="space-y-12">
          {research.map((paper, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-8 mb-6">
                <div className="flex items-center justify-center md:w-48">
                  <div className="relative w-32 h-32 bg-gray-900/50 rounded-lg p-4">
                    <Image
                      src={paper.logo}
                      alt="Research visualization"
                      fill
                      className="object-contain p-2"
                      priority
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">{paper.title}</h3>
                  <p className="text-emerald-400 mb-2">{paper.authors}</p>
                  <p className="text-gray-400 text-sm mb-4">{paper.date}</p>
                  <p className="text-gray-300 mb-6 italic">{paper.abstract}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={paper.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
                    >
                      <FaFilePdf /> View Full Paper
                    </a>
                    <a 
                      href={`https://${paper.githubLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white rounded-lg transition-colors"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-600 pt-6">
                <h4 className="text-lg font-semibold text-gray-100 mb-6">Key Findings</h4>
                <div className="space-y-8">
                  {paper.keyFindings.map((finding, i) => (
                    <div key={i}>
                      <h5 className="text-emerald-400 font-medium mb-3">{finding.title}</h5>
                      <ul className="space-y-2">
                        {finding.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-2 text-gray-300">
                            <span className="text-emerald-400 mt-1">✦</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 