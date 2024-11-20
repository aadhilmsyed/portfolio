'use client'

import Navbar from '@/components/Navbar'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import QuickLoadingScreen from '@/components/QuickLoadingScreen'
import PageHeader from '@/components/PageHeader'

export default function ExperienceProjects() {
  return (
    <main 
      className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/cockpit.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <QuickLoadingScreen />
      <div 
        className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-teal-500/10 fixed"
        style={{ backdropFilter: 'blur(1px)' }}
      />
      <div className="relative z-10 w-full">
        <Navbar />
        <div className="w-full px-6 md:px-12 lg:px-16">
          <PageHeader 
            title="Experience & Projects"
            description="Explore my professional journey and the innovative projects I've developed in AI, machine learning, and software development."
          />
          <Experience />
          <Projects />
        </div>
        <Footer />
      </div>
    </main>
  )
} 