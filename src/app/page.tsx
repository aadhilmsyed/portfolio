'use client'

import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
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
      <LoadingScreen />
      <div 
        className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-teal-500/10 fixed"
        style={{ backdropFilter: 'blur(1px)' }}
      />
      <div className="relative z-10 w-full">
        <Navbar />
        <div className="w-full px-6 md:px-12 lg:px-16">
          <Hero />
          <About />
          <div className="text-center py-12 animate-bounce">
            <p className="text-2xl font-semibold bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 text-transparent bg-clip-text 
              shadow-lg p-6 rounded-lg backdrop-blur-sm border border-emerald-500/20 inline-block">
              Check out the navigation bar above to explore more about my accomplishments! 👆
            </p>
          </div>
          <Skills />
          <Contact />
          <div className="text-center py-8">
            <p className="text-white text-base font-light">
              This website was built using React, TypeScript, Node.js, Next.js, and Tailwind CSS
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
