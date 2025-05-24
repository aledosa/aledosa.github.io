"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-white/95 backdrop-blur-sm shadow-sm" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-800 tracking-tight">
          Alexa Dominguez
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <Link
            href="#about"
            className="ml-8 text-sm font-medium text-gray-600 hover:text-gray-900 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-purple-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="ml-8 text-sm font-medium text-gray-600 hover:text-gray-900 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-purple-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Expertise
          </Link>
          <Link
            href="#projects"
            className="ml-8 text-sm font-medium text-gray-600 hover:text-gray-900 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-purple-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="ml-8 text-sm font-medium text-gray-600 hover:text-gray-900 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-purple-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
          <Link href="https://www.linkedin.com/in/alexa-dominguez">
          <button className="ml-8 px-5 py-2 text-sm font-medium border border-purple-300 text-indigo-700 rounded-md transition-all hover:bg-purple-300 hover:text-white">
            Resume
          </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex text-gray-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-sm shadow-md">
          <nav className="flex flex-col w-full max-w-7xl mx-auto px-4 py-6">
            <Link
              href="#about"
              className="py-3 text-gray-600 font-medium border-b border-gray-100 hover:text-indigo-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="py-3 text-gray-600 font-medium border-b border-gray-100 hover:text-indigo-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Expertise
            </Link>
            <Link
              href="#projects"
              className="py-3 text-gray-600 font-medium border-b border-gray-100 hover:text-indigo-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="py-3 text-gray-600 font-medium border-b border-gray-100 hover:text-indigo-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="https://www.linkedin.com/in/alexa-dominguez">
              <button className="mt-4 py-3 border border-purple-300 text-indigo-700 rounded-md font-medium w-full text-center transition-all hover:bg-purple-300 hover:text-white">
                Resume
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
