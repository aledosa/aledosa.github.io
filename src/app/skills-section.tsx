"use client"

import { useEffect, useRef } from "react"
import { Code, Layers, Layout, Palette, Sparkles, Zap } from "lucide-react"

export function SkillsSection() {
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
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      const elements = section.querySelectorAll(".skill-card")
      elements.forEach((el, index) => {
        // Add delay based on index
        el.setAttribute("style", `transition-delay: ${index * 100}ms`)
        observer.observe(el)
      })
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".skill-card")
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  const skills = [
    {
      title: "Modern Frameworks",
      icon: <Layout className="h-6 w-6 text-indigo-700" />,
      description: "Building scalable applications with modern JavaScript frameworks.",
      technologies: ["React.js", "Next.js", "TypeScript", "Redux", "Material UI", "JavaScript", "Angular.js", "React Native", "Bootstrap"],
    },
    {
      title: "UI/UX Implementation",
      icon: <Palette className="h-6 w-6 text-indigo-700" />,
      description: "Translating designs into pixel-perfect, responsive interfaces.",
      technologies: ["CSS Architecture", "Styled Components", "Framer Motion", "Design Systems"],
    },
    {
      title: "Performance Optimization",
      icon: <Zap className="h-6 w-6 text-indigo-700" />,
      description: "Optimizing web applications for speed and user experience.",
      technologies: ["Lazy Loading", "Code Splitting", "Bundle Analysis", "Core Web Vitals"],
    },
    {
      title: "Accessibility",
      icon: <Sparkles className="h-6 w-6 text-indigo-700" />,
      description: "Creating inclusive experiences that work for everyone.",
      technologies: ["WCAG 2.1", "Semantic HTML", "Keyboard Navigation", "App Flow Analysis", "CSS"],
    },
    {
      title: "Frontend Architecture",
      icon: <Layers className="h-6 w-6 text-indigo-700" />,
      description: "Designing scalable and maintainable frontend systems.",
      technologies: ["Component Libraries", "Micro-frontends", "State Management", "API Integration: REST & GraphQL"],
    },
    {
      title: "Testing & Quality",
      icon: <Code className="h-6 w-6 text-indigo-700" />,
      description: "Ensuring reliability through comprehensive testing strategies.",
      technologies: ["Jest", "React Testing Library", "Unit Testing", "Storybook", "CI/CD", "E2E Testing"],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-sm font-medium uppercase tracking-widest text-purple-400 mb-2">Expertise</div>
          <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">Specialized skills & technologies</h2>
          <div className="w-[60px] h-[2px] bg-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="skill-card bg-white rounded-md p-8 shadow-sm transition-all duration-500 ease-out opacity-0 translate-y-5 hover:-translate-y-1 hover:shadow-md h-full"
            >
              <div className="inline-flex items-center justify-center w-[50px] h-[50px] bg-gray-50 rounded-md mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{skill.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
