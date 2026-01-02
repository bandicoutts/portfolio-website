'use client'

import { Linkedin, Github, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  // { name: 'Blog', href: '/blog' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate to home page first
      if (window.location.pathname !== '/') {
        window.location.href = '/' + href
        return
      }

      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
      }
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="text-base font-semibold text-zinc-100 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-sm">
            David Flynn-Coutts
          </Link>

          {/* Consolidated Navigation + Social */}
          <div className="flex items-center gap-6">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="relative px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded"
                >
                  {item.name}
                  <span className="absolute bottom-1.5 left-3 right-3 h-px bg-zinc-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </Link>
              ))}
            </div>

            {/* Contact CTA Button */}
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden md:block px-4 py-1.5 text-sm font-medium bg-accent text-white rounded-md hover:bg-accent-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Contact
            </Link>

            {/* Subtle Divider */}
            <div className="hidden md:block h-5 w-px bg-zinc-700"></div>

            {/* Social Icons + Mobile Menu */}
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/bandicoutts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/davidflynncoutts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded w-10 h-10 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors rounded-md hover:bg-zinc-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="block px-3 py-2 text-sm font-medium bg-accent text-white rounded-md hover:bg-accent-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
