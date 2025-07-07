"use client"

import { Code, Eye } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const [filter, setFilter] = useState("all")
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  // Animate heading and filter buttons on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".projects-filters", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate project cards on filter change
useEffect(() => {
  if (cardsRef.current.length) {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 75%", // trigger when section is in view
      once: true,
      onEnter: () => {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          }
        )
      },
    })

    return () => {
      trigger.kill()
    }
  }
}, [])




  
const handleFilterChange = (value) => {
    if (filter === value) return
    setIsAnimating(true)
    setTimeout(() => {
      setFilter(value)
      setIsAnimating(false)
    }, 300)
  }

  const projects = [
    {
      id: 1,
      title: "Dream Hire",
      description: "A Fiverr-inspired freelance platform with user-friendly UI, animation effects, and role-based access.",
      image: "https://imgscf.slidemembers.com/docs/1/1/893/find_your_dream_job_hiring_platform_best_powerpoint_templates_892750.jpg",
      category: ["frontend"],
      technologies: ["React", "Tailwind", "Framer Motion", "Redux"],
      demoLink: "https://dream-hire-five.vercel.app/",
      codeLink: "https://github.com/Husnain-Abid/dream-hire",
    },
    {
      id: 2,
      title: "Job Portal",
      description: "Full-stack job portal with Recruiter and Candidate roles, featuring job filters, authentication, and dynamic UI.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRsl1bqkq3tg39ykaNKLaiA2qXqd1PaG1sw&s",
      category: ["fullstack"],
      technologies: ["ReactJS", "Redux", "Tailwind", "Node.js", "Express", "MongoDB"],
      demoLink: "https://job-portal-sigma-gules.vercel.app/",
      codeLink: "https://github.com/Husnain-Abid/job-portal",
    },
    {
      id: 3,
      title: "Locksmith Pro LA",
      description: "A static business website for a locksmith company with custom animations and smooth transitions.",
      image: "https://img.freepik.com/free-photo/profile-view-attractive-handyman-using-power-drill-fix-door-knob-house_662251-2747.jpg?semt=ais_hybrid&w=740",
      category: ["frontend"],
      technologies: ["HTML/CSS", "Bootstrap", "jQuery", "GSAP"],
      demoLink: "https://locksmithprola.vercel.app/",
      codeLink: "https://github.com/Husnain-Abid/locksmithprola",
    },
    {
      id: 4,
      title: "Sufiyah Portfolio",
      description: "A custom portfolio website with password-protected project section and animated transitions.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fa912f100471043.5f0987ea0fe9c.png",
      category: ["frontend"],
      technologies: ["React", "HTML/CSS", "Redux"],
      demoLink: "https://portfolio-bay-two-32.vercel.app/",
      codeLink: "https://github.com/Husnain-Abid/Portfolio",
    },
    {
      id: 5,
      title: "Netflix Clone",
      description: "A clone of Netflix with authentication, dynamic movie categories, and full-stack integration.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHOkRCZ_JhvWPgW6KZWvOwJ1AdeAgQ0R-zw&s",
      category: ["fullstack"],
      technologies: ["ReactJS", "Redux", "Tailwind", "Node.js", "Express", "MongoDB"],
      demoLink: "https://github.com/Husnain-Abid/netflix-clone",
      codeLink: "https://github.com/Husnain-Abid/netflix-clone",
    },
    {
      id: 6,
      title: "Restaurant Management Backend",
      description: "Backend APIs for a restaurant management system with authentication, role handling, and menu controls.",
      image: "https://mediasoftbd.com/wp-content/uploads/2021/03/Restaurent-Front.png",
      category: ["backend"],
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      demoLink: "https://github.com/Husnain-Abid/Food-App",
      codeLink: "https://github.com/Husnain-Abid/Food-App",
    },
  ]

  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.category.includes(filter))

  const filterOptions = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 projects-heading">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, including web applications, APIs, and design projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 projects-filters">
          <div className="inline-flex rounded-md shadow-sm">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleFilterChange(option.value)}
                className={`px-4 py-2 text-sm font-medium ${filter === option.value
                    ? "bg-blue-900 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                  } ${option.value === "all" ? "rounded-l-md" : ""
                  } ${option.value === "fullstack" ? "rounded-r-md" : ""} border border-gray-300`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"
            }`}
        >
          {filteredProjects.map((project, i) => (
            <div
              ref={(el) => (cardsRef.current[i] = el)}
              key={project.id}
              className="bg-white rounded-lg overflow-hidden scale-100 shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    className="inline-flex items-center text-sm text-gray-700 hover:text-blue-900"
                  >
                    <Eye className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    className="inline-flex items-center text-sm text-gray-700 hover:text-blue-900"
                  >
                    <Code className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
