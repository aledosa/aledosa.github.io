"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  // Added all this comments due to Formspree integration
  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.1 },
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

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormState({
  //     ...formState,
  //     [e.target.name]: e.target.value,
  //   })
  // }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Handle form submission here
  //   console.log(formState)
  //   // Reset form
  //   setFormState({ name: "", email: "", message: "" })
  //   // Show success message
  //   alert("Message sent successfully!")
  // }

  return (
    <section id="contact" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-sm font-medium uppercase tracking-widest text-purple-400 mb-2">Contact</div>
          <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">Let's discuss your project</h2>
          <div className="w-[60px] h-[2px] bg-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div
            className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out"
            data-animation="slide-right"
          >
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              I'm currently available for freelance work and full-time opportunities. If you're looking for a front-end
              engineer who can bring your vision to life with elegance and precision, let's connect.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-md shadow-sm">
                  <Mail className="h-5 w-5 text-indigo-700" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 leading-relaxed">adfavor3@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-md shadow-sm">
                  <Phone className="h-5 w-5 text-indigo-700" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600 leading-relaxed">+1 (512) 265-7590</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-md shadow-sm">
                  <MapPin className="h-5 w-5 text-indigo-700" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Austin, TX
                    <br />
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out delay-100"
            data-animation="slide-left"
          >
            {/* <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md flex flex-col gap-6"> */}
            <form className="bg-white p-8 rounded-md shadow-md flex flex-col gap-6" action="https://formspree.io/f/mqapawkq" method="POST" >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    // value={formState.name}
                    // onChange={handleChange}
                    placeholder="Your name"
                    className="bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    // value={formState.email}
                    // onChange={handleChange}
                    placeholder="Your email"
                    className="bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  // value={formState.message}
                  // onChange={handleChange}
                  placeholder="Tell me about your project"
                  className="bg-gray-50 border border-gray-300 rounded-md p-3 text-gray-900 min-h-[150px] resize-y focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center w-full bg-indigo-700 text-white font-medium p-4 rounded-md transition-all hover:bg-indigo-800 hover:-translate-y-0.5 hover:shadow-md"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
