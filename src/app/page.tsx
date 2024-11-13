'use client'

import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Interests from '@/components/Interests'
import Awards from '@/components/Awards'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  return (
    <main 
      className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/cockpit.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <LoadingScreen />
      <div 
        className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-teal-500/10 fixed"
        style={{ backdropFilter: 'blur(1px)' }}
      />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Interests />
        <Awards />
        <Footer />
      </div>
    </main>
  )
}
