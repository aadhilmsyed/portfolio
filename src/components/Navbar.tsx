'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/degrees-certificates', label: 'Degrees & Certificates' },
    { href: '/experience-projects', label: 'Experience & Projects' },
    { href: '/research-publications', label: 'Research & Publications' },
    { href: '/interests', label: 'Personal Interests' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-sm z-50">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link 
              href="/" 
              className="text-lg md:text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Aadhil&apos;s Portfolio
            </Link>
          </div>
          <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm md:text-base px-3 py-2 rounded-md whitespace-nowrap ${
                  pathname === item.href
                    ? 'text-emerald-400 font-medium'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 