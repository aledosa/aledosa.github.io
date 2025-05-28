"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Linkedin } from "lucide-react"

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(0)

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


  const projects = [
    {
      title: "Learning Management System",
      description: "Collaboration of design and development of client page and administration page for Scouting America.",
      image: "/images/online-learning.jpg",
      tags: ["React.Js", "Storybook", "TypeScript", "NPM", "Nginx", "Jenkins Pipeline"],
      liveUrl: "https://my.scouting.org/",
      githubUrl: "https://www.linkedin.com/company/scouting-america/",
    },
    {
      title: "Customer Relationship Management System",
      description: "Frontend leader developer for Florida Blue Delinquency Department.",
      image: "/images/crm.jpg",
      tags: ["React.js", "MUI Components", "Redhat", "Swagger", "Redux", "Agile/Scrum Methodology"],
      liveUrl: "https://www.floridablue.com/",
      githubUrl: "https://www.linkedin.com/company/florida-blue/",
    },
    {
      title: "Healthcare Patient Portal",
      description:
        "An accessible patient portal with appointment scheduling, medical records, and telehealth integration.",
      image: "/images/online-healthcare.jpg",
      tags: ["Angular", "Redux", "AWS Code Commit", "Prime ng", "AWS","Frontend development","Agile/Scrum methodology"],
      liveUrl: "https://www.aryanow.com",
      githubUrl: "https://www.linkedin.com/in/aryanowcare/",
    },
    {
      title: "MVP Development",
      description: "Mobile app prototype to encourage the use of accessibility on applications based on time blindness.",
      image: "/images/mobile-app.jpg",
      tags: ["React Native", "GCP", "Figma", "Firebase"],
      liveUrl: "https://www.digitalproductschool.io/",
      githubUrl: "https://www.linkedin.com/company/digital-product-school/",
    },
  ]

  return (
    <section id="projects" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-sm font-medium uppercase tracking-widest text-purple-400 mb-2">Portfolio</div>
          <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">Developed project examples</h2>
          <div className="w-[60px] h-[2px] bg-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div
            className="lg:col-span-5 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out"
            data-animation="slide-right"
          >
            <div className="flex flex-col gap-4">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`p-6 rounded-md cursor-pointer transition-all duration-300 border-l-2 ${
                    activeProject === index ? "bg-gray-50 border-l-purple-400" : "border-l-transparent hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveProject(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3 line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="lg:col-span-7 animate-on-scroll opacity-0 translate-y-5 transition-all duration-500 ease-out delay-100"
            data-animation="slide-left"
          >
            <div className="relative rounded-md overflow-hidden shadow-lg">
              <Image
                src={projects[activeProject].image || "/vercel.svg"}
                alt={projects[activeProject].title}
                width={800}
                height={600}
                className="w-full h-auto block transition-transform duration-500 hover:scale-103"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/95 to-transparent backdrop-blur-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{projects[activeProject].title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{projects[activeProject].description}</p>
                <div className="flex gap-3">
                  <Link
                    href={projects[activeProject].liveUrl}
                    className="inline-flex items-center justify-center bg-indigo-700 text-white font-medium px-4 py-2 text-sm rounded-md transition-all hover:bg-indigo-800 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    View Project Idea <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href={projects[activeProject].githubUrl}
                    className="inline-flex items-center justify-center bg-transparent text-gray-900 font-medium px-4 py-2 text-sm rounded-md border border-gray-300 transition-all hover:bg-gray-100 hover:-translate-y-0.5"
                  >
                    <Linkedin className="mr-2 h-4 w-4" /> Company Information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="https://aledosa.github.io/portfolio_v1/" >
            <button className="inline-flex items-center justify-center text-indigo-700 font-medium px-4 py-2 border-b border-transparent transition-all hover:border-indigo-700">
              View Fun Playground <ArrowUpRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
