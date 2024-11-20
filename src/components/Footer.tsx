'use client'

import { FaLinkedin, FaGithub, FaChevronUp, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2024 Aadhil Mubarak Syed. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a 
              href="https://linkedin.com/in/aadhilmsyed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://github.com/aadhilmsyed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://www.instagram.com/aadhilmsyed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a 
              href="https://www.youtube.com/@GeoFSFlightsChannel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaYoutube className="text-xl" />
            </a>
            <button 
              onClick={scrollToTop}
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors text-gray-400 hover:text-emerald-400"
              aria-label="Scroll to top"
            >
              <FaChevronUp className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
} 