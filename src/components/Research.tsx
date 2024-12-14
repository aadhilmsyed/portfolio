'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaFilePdf, FaChevronDown, FaChevronRight } from 'react-icons/fa'

export default function Research() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100])

  const [openKeyFindings, setOpenKeyFindings] = useState<{ [key: string]: boolean }>({})
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})

  const toggleKeyFindings = (paperTitle: string) => {
    setOpenKeyFindings(prev => ({
      ...prev,
      [paperTitle]: !prev[paperTitle]
    }))
  }

  const toggleSection = (paperTitle: string, sectionTitle: string) => {
    const key = `${paperTitle}-${sectionTitle}`
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const publications = [
    {
      title: "Predicting the 2024 NBA Champion Using Machine Learning",
      authors: "Zareb Islam, Aadhil Mubarak Syed, Jaynor Singson, Dylan Tran",
      mentor: "Dr. Saterah Rafatirad",
      date: "June 2024",
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
    },
    {
      title: "China's Rise: Economic Opportunity or Threat to the US?",
      authors: "Ehsaan Mohammed, Aadhil Mubarak Syed, Naya Nethi",
      mentor: "Dr. Peter Kramlinger",
      date: "November 2024",
      abstract: "This report explores the implications of China's rapid economic ascent for the U.S., focusing on GDP trends, trade balance dynamics, and R&D investments. Utilizing structured datasets from the World Bank API, advanced scraping methods for trade data, and predictive modeling, the research highlights interdependencies and competitive pressures in the global economic landscape. The study concludes with an interactive dashboard, enabling dynamic exploration of insights.",
      keyFindings: [
        {
          title: "Economic Growth Trends",
          points: [
            "China's Cumulative Growth: 1,469.27% increase in GDP from 2000-2023, compared to the U.S.'s 267%",
            "R&D Investments: Predicted to narrow; China's share of GDP allocated to R&D is forecasted to grow from 2.69% in 2024 to 3.50% by 2035, while the U.S. is projected to increase from 3.26% to 3.65%"
          ]
        },
        {
          title: "Trade Dynamics",
          points: [
            "Persistent Trade Deficit: The U.S. trade deficit with China widened over two decades, underscoring dependencies in machinery, consumer goods, and industrial equipment",
            "Seasonal Trends: Consistently higher deficits in spring, partially due to post-Lunar New Year production cycles",
            "Limited Tariff Impact: Policy interventions like the U.S.-China trade war showed minimal long-term effect on deficit reduction"
          ]
        },
        {
          title: "Innovation and Sentiment",
          points: [
            "Media Narratives: Analysis reveals optimism in Chinese discourse around innovation, while U.S. narratives emphasize regulatory and compliance challenges",
            "Technological Race: Increased mentions of 'AI' and 'blockchain' in Chinese media, aligning with national priorities"
          ]
        },
        {
          title: "Technical Insights",
          points: [
            "Data Acquisition: Custom scripts using Python (requests, BeautifulSoup, Selenium) ensured robust scraping of dynamic content",
            "Predictive Modeling: Linear regression models achieved R² values of 0.98 (China) and 0.96 (U.S.) for R&D forecasting",
            "Interactive Dashboard: Developed with Next.js and React, providing access to visualizations of trade and growth metrics"
          ]
        },
        {
          title: "Limitations",
          points: [
            "Scope of Variables: Analysis does not fully encompass geopolitical factors like trade sanctions or pandemic recovery policies",
            "Real-Time Data Dependency: Lag in data availability could affect the relevance of short-term insights",
            "Sector Granularity: Sector-specific breakdowns rely on imputed data for missing years, introducing potential biases"
          ]
        }
      ],
      githubLink: "github.com/aadhilmsyed/us-cn-economy",
      pdfLink: "/STA141B_Report.pdf"
    },
    {
      title: "Optimizing Aerodynamic Efficiency in Commercial Aviation",
      authors: "Aadhil Mubarak Syed",
      mentor: "Dr. William Pezzaglia",
      date: "October 2022",
      abstract: "This study investigates the aerodynamic performance of ten distinct flap configurations through computational simulation and interactive visualization. Using Python-based modeling techniques, it evaluates lift-to-drag ratios, airflow patterns, and thermal characteristics across various flap designs. Results offer data-driven insights for optimizing flap performance and formulating design recommendations for commercial aviation.",
      keyFindings: [
        {
          title: "Flap Performance Insights",
          points: [
            "Optimal Efficiency: Fowler flaps demonstrated the highest lift-to-drag ratio (32.83 at 14° angle of attack) among single-surface designs",
            "Advanced Configurations: Triple-slotted flaps showed superior aerodynamic efficiency, with a maximum lift-to-drag ratio of 35.11",
            "Plain Flaps: Provided stable, linear performance with lower drag, suitable for high-speed, long-range scenarios"
          ]
        },
        {
          title: "Speed and Effectiveness Trends",
          points: [
            "Low-Speed Dominance: Complex designs like Fowler and triple-slotted flaps excel at low airspeeds (100 knots)",
            "High-Speed Adaptability: Simpler configurations, such as plain and split flaps, proved more effective at higher speeds (400 knots)"
          ]
        },
        {
          title: "Aerodynamic Trade-Offs",
          points: [
            "High Lift vs. Drag Penalty: Sophisticated designs enhanced lift significantly but incurred higher drag, particularly at high angles of attack",
            "Efficiency Peaks: Advanced designs offered superior lift-to-drag ratios at low angles of attack, critical for takeoff and landing phases"
          ]
        },
        {
          title: "Technical Insights",
          points: [
            "Simulation Framework: Python-based simulations used the NACA 0012 airfoil as a baseline, modeling flight conditions from -5° to 20° angles of attack",
            "Comprehensive Testing: Lift and drag coefficients were calculated for Reynolds numbers representative of commercial aviation, with deflection angles spanning 0° to 45°",
            "Interactive Visualization: Developed a real-time visualization tool enabling dynamic exploration of aerodynamic parameters like force vectors and angle of attack"
          ]
        },
        {
          title: "Limitations",
          points: [
            "Operational Context: Results may vary under real-world conditions, such as turbulent airflow or varying atmospheric densities",
            "Narrow Scope: Focused primarily on lift and drag coefficients without extensive consideration of structural constraints or material properties",
            "Data Precision: Simulation accuracy is dependent on input fidelity, with minor deviations possible due to interpolation errors"
          ]
        }
      ],
      githubLink: "github.com/aadhilmsyed/aerodynamic-simulator",
      pdfLink: "/PHYS1B_Report.pdf"
    },
    {
      title: "Probability Theory in Cubing",
      subtitle: "MATH 10 Honors: Discrete Mathematics",
      mentor: "Professor Seth Lavender",
      date: "Under Development...",
      abstract: "A mathematical analysis of probability theory applied to speedcubing algorithms and pattern recognition.",
      comingSoon: true
    }
  ]

  return (
    <section id="research" className="py-20" ref={containerRef}>
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
          Previous Publications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((paper, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg 
                transition-all duration-300 border border-gray-600 flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {paper.comingSoon ? (
                <div className="h-full flex flex-col justify-center items-center">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">{paper.title}</h3>
                  <p className="text-emerald-400 mb-4">{paper.subtitle}</p>
                  {paper.mentor && (
                    <p className="text-white mb-4">Research Mentor: {paper.mentor}</p>
                  )}
                  <p className="text-gray-400 text-lg">{paper.date}</p>
                  <p className="text-gray-300 mt-4 italic">{paper.abstract}</p>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-4 flex-grow">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-100 mb-2">{paper.title}</h3>
                      <p className="text-emerald-400 mb-2">{paper.authors}</p>
                      {paper.mentor && (
                        <p className="text-white mb-2">Research Mentor: {paper.mentor}</p>
                      )}
                      <p className="text-gray-400 text-sm mb-4">{paper.date}</p>
                      <p className="text-gray-300 mb-6 italic">{paper.abstract}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-8">
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

                  {paper.keyFindings && (
                    <div className="mt-auto pt-8 border-t border-gray-600">
                      <button 
                        onClick={() => toggleKeyFindings(paper.title)}
                        className="w-full flex items-center justify-between text-lg font-semibold text-gray-100 mb-6 hover:text-emerald-400 transition-colors"
                      >
                        <span>Key Findings</span>
                        {openKeyFindings[paper.title] ? (
                          <FaChevronDown className="w-4 h-4" />
                        ) : (
                          <FaChevronRight className="w-4 h-4" />
                        )}
                      </button>
                      
                      {openKeyFindings[paper.title] && (
                        <div className="space-y-4">
                          {paper.keyFindings.map((finding, i) => (
                            <div key={i} className="border-l-2 border-gray-700 pl-4">
                              <button
                                onClick={() => toggleSection(paper.title, finding.title)}
                                className="w-full flex items-center justify-between text-emerald-400 font-medium mb-2 hover:text-emerald-300 transition-colors"
                              >
                                <span>{finding.title}</span>
                                {openSections[`${paper.title}-${finding.title}`] ? (
                                  <FaChevronDown className="w-3 h-3" />
                                ) : (
                                  <FaChevronRight className="w-3 h-3" />
                                )}
                              </button>
                              
                              {openSections[`${paper.title}-${finding.title}`] && (
                                <ul className="space-y-2 mt-2">
                                  {finding.points.map((point, j) => (
                                    <li key={j} className="flex items-start gap-2 text-gray-300">
                                      <span className="text-emerald-400 mt-1">✦</span>
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 