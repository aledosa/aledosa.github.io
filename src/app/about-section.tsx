"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.2 },
    )

    const section = sectionRef.current
    if (section) {
      const elements = section.querySelectorAll(".animate-on-scroll")
      elements.forEach((el) => observer.observe(el))
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".animate-on-scroll")
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  return (
    <section id="about" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-sm font-medium uppercase tracking-widest text-purple-400 mb-2">About Me</div>
          <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">The story behind my craft</h2>
          <div className="w-[60px] h-[2px] bg-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">
          <div
            className="lg:col-span-5 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out"
            data-animation="slide-right"
          >
            <div className="relative">
              <div className="rounded-md overflow-hidden shadow-lg">
                <Image
                  src="/images/team-working.jpg"
                  alt="Software Development"
                  width={600}
                  height={600}
                  className="w-full h-auto block transition-transform duration-500 hover:scale-103"
                />
              </div>
              <div className="absolute -top-5 -right-5 w-[100px] h-[100px] border-2 border-purple-300 rounded-md -z-10"></div>
            </div>
          </div>

          <div
            className="lg:col-span-7 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out delay-100"
            data-animation="slide-left"
          >
            <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">My Approach</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 5 years of experience in front-end development, I&apos;ve cultivated a deep understanding of creating
              seamless, accessible, and performant web applications. My journey began with a passion for the
              intersection of consulting and technology, which has guided my career ever since.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I specialize in crafting elegant user interfaces with modern frameworks like React Js, while
              maintaining a strong foundation in semantic HTML, CSS architecture, and JavaScript fundamentals. I believe
              in writing clean, maintainable code that scales with the business and accomplish client requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 pt-8 border-t border-gray-200">
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600 leading-relaxed">
                  5+ Years
                  <br />
                  Front-End Development and Engineering
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600 leading-relaxed">
                  Austin, TX | Merida, MX
                  <br />
                  Available for remote work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
