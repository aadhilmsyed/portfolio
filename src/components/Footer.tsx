'use client'

import { FaLinkedin, FaGithub, FaChevronUp, FaInstagram, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const sections = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#interests', label: 'Interests' },
    { href: '#awards', label: 'Awards' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Navigation */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-6 text-gray-100">Navigation</h3>
            <div className="grid grid-cols-2 gap-4">
              {sections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:w-1/2 text-center md:text-right">
            <h3 className="text-xl font-bold mb-6 text-gray-100">Let&apos;s Connect</h3>
            <p className="text-gray-300 mb-2">
              Interested in discussing opportunities or collaborating on projects?
            </p>
            <p className="text-gray-300 mb-8">
              I&apos;d love to connect with you on LinkedIn!
            </p>
            <div className="flex justify-center md:justify-end">
              <a 
                href="https://linkedin.com/in/aadhilmsyed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 
                         hover:from-emerald-600 hover:to-emerald-700 rounded-full transition-all duration-300 
                         text-white font-semibold shadow-lg hover:shadow-emerald-500/30"
              >
                <FaLinkedin className="text-xl" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
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