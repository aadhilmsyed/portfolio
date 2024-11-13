'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaPlane } from 'react-icons/fa'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [startTransition, setStartTransition] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setStartTransition(true)
    }, 2000)

    setTimeout(() => {
      setIsLoading(false)
    }, 2800)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-gray-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Background reveal effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"
            initial={{ y: '100%' }}
            animate={startTransition ? { y: 0 } : {}}
            transition={{ duration: 0.4 }}
          />

          {/* Airplane and text container */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: 0 }}
            animate={startTransition ? { y: '-100%' } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Multiple Cloud animations */}
            <motion.div
              className="absolute w-16 h-10 bg-white/20 rounded-full blur-sm"
              initial={{ x: -40, y: -30 }}
              animate={startTransition ? 
                { x: -80, y: -90, opacity: 0 } : 
                { x: [-40, 40, -40], y: [-30, -20, -30] }}
              transition={startTransition ? {
                duration: 0.8
              } : {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute w-20 h-12 bg-white/15 rounded-full blur-sm"
              initial={{ x: 30, y: -50 }}
              animate={startTransition ? 
                { x: 60, y: -110, opacity: 0 } : 
                { x: [30, -30, 30], y: [-50, -40, -50] }}
              transition={startTransition ? {
                duration: 0.8
              } : {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute w-14 h-8 bg-white/25 rounded-full blur-sm"
              initial={{ x: -60, y: 20 }}
              animate={startTransition ? 
                { x: -120, y: -40, opacity: 0 } : 
                { x: [-60, -20, -60], y: [20, 30, 20] }}
              transition={startTransition ? {
                duration: 0.8
              } : {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute w-24 h-14 bg-white/10 rounded-full blur-sm"
              initial={{ x: 50, y: 0 }}
              animate={startTransition ? 
                { x: 100, y: -60, opacity: 0 } : 
                { x: [50, 0, 50], y: [0, 10, 0] }}
              transition={startTransition ? {
                duration: 0.8
              } : {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Airplane */}
            <motion.div
              className="relative"
              initial={{ scale: 1 }}
              animate={startTransition ? 
                { scale: 0.8, y: -50 } : 
                { 
                  x: [-20, 20, -20],
                  y: [-8, 8, -8],
                  rotate: [-2, 2, -2]
                }}
              transition={startTransition ? {
                duration: 0.8
              } : {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            >
              {/* Vertical airplane from the start */}
              <div className="rotate-[-90deg] scale-75">
                <FaPlane className="w-24 h-24 text-emerald-400" />
              </div>
              
              {/* Trail effect */}
              <motion.div
                className="absolute top-full left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-400/50 to-transparent"
                initial={{ height: 0, opacity: 0 }}
                animate={startTransition ? 
                  { height: '100vh', opacity: [0, 0.5, 0] } : 
                  { height: [20, 40, 20], opacity: [0.2, 0.4, 0.2] }}
                transition={startTransition ? {
                  duration: 0.8
                } : {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              className="absolute mt-60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <motion.p
                className="text-gray-400 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                Preparing for Landing. Fasten your Seatbelts...
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 