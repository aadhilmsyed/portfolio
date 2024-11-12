import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/cockpit.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-teal-500/10"
        style={{ backdropFilter: 'blur(1px)' }}
      />
      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400">
          Aadhil Mubarak Syed
        </h1>
        <p className="text-2xl text-gray-200 mb-8 font-light">
          Data Science · AI/ML · Full-Stack Development
        </p>
        <p className="text-gray-400 mb-10 text-lg">
          Empowering Technology Through AI-Driven Solutions
        </p>
        <div className="flex justify-center space-x-6 mt-6">
          <a 
            href="https://linkedin.com/in/aadhilmsyed" 
            className="px-8 py-3 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-white hover:to-gray-200 
                     rounded-full transition-all duration-300 text-gray-800 font-semibold shadow-lg hover:shadow-white/30
                     flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
          <a 
            href="https://github.com/aadhilmsyed" 
            className="px-8 py-3 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-white hover:to-gray-200 
                     rounded-full transition-all duration-300 text-gray-800 font-semibold shadow-lg hover:shadow-white/30
                     flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl" /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
} 