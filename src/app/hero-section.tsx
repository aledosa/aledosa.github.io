"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Front-End Engineer"
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }

    // Blink cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [typedText])

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <div className="text-sm font-medium uppercase tracking-widest text-purple-400 mb-4 opacity-0 animate-[fadeIn_0.8s_ease_forwards_0.5s]">
        Personal, Business and Tech Development
        </div>
        <h1 className="mb-6 opacity-0 animate-[fadeIn_0.8s_ease_forwards_0.7s]">
          <span className="text-6xl md:text-7xl font-light text-gray-900 tracking-tight leading-tight">
          Harmony
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-normal text-indigo-700 mb-8 h-12 opacity-0 animate-[fadeIn_0.8s_ease_forwards_0.9s]">
          {typedText}
          <span className={`transition-opacity duration-150 ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease_forwards_1.1s]">
        Transforming complex ideas into elegant, intuitive interfaces. Clean code and thoughtful
        design to drive business goals and users.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-[fadeIn_0.8s_ease_forwards_1.3s]">
        <Link href="#projects">
          <button className="inline-flex items-center justify-center bg-indigo-700 text-white font-medium px-6 py-3 rounded-md transition-all hover:bg-indigo-800 hover:-translate-y-0.5 hover:shadow-md">
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          </Link>
          <Link href="#contact">
          <button className="inline-flex items-center justify-center bg-transparent text-gray-900 font-medium px-6 py-3 rounded-md border border-gray-300 transition-all hover:bg-gray-100 hover:-translate-y-0.5">
            Contact Me
          </button>
          </Link>
        </div>

        <div className="flex justify-center gap-6 opacity-0 animate-[fadeIn_0.8s_ease_forwards_1.5s]">
          <Link href="https://www.github.com/aledosa" className="text-gray-600 transition-all hover:text-indigo-700 hover:-translate-y-0.5">
            <Github />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/alexa-dominguez" className="text-gray-600 transition-all hover:text-indigo-700 hover:-translate-y-0.5">
            <Linkedin />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#contact" className="text-gray-600 transition-all hover:text-indigo-700 hover:-translate-y-0.5">
            <Mail />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-purple-300 opacity-10 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[15%] left-[15%] w-[200px] h-[200px] rounded-full bg-indigo-600 opacity-10 animate-[float_10s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-[40%] left-[5%] w-[150px] h-[150px] rounded-full bg-indigo-900 opacity-10 animate-[float_7s_ease-in-out_infinite_0.5s]"></div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 animate-[fadeIn_0.8s_ease_forwards_1.7s]">
        <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">Scroll to explore</span>
        <div className="w-[1px] h-[60px] bg-gray-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[20px] bg-purple-400 animate-[scrollDown_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  )
}
