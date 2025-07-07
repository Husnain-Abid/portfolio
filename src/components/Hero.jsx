import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import user from "../assets/user2l.jpg"
import gsap from "gsap"

const Hero = () => {
  const heroRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })

    tl.fromTo(
      heroRef.current.querySelectorAll(".fade-up"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
    )

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.6, ease: "power3.out" }
    )
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center bg-gradient-to-b from-[#1e293b] to-[#0f172a] py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Hi, I'm <span className="text-blue-400">Husnain Abid</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-slate-300 mt-2">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-slate-400 max-w-lg fade-up">
              I build modern, responsive web applications using MongoDB,
              Express.js, React, and Node.js. Passionate about creating clean,
              user-friendly interfaces and robust backend solutions.
            </p>

            <div className="flex flex-wrap gap-4 fade-up">
              <a
                href="#projects"
                className="px-6 py-2.5 bg-blue-400 text-white rounded-md flex items-center gap-2 hover:bg-blue-500 transition-colors"
              >
                View My Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 self-center mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7 7m0 0l7-7m-7 7V3"
                  />
                </svg>
              </a>
            </div>

            <div className="flex gap-6 pt-4 fade-up">
              <a
                href="mailto:husnainabid066@gmail.com"
                className="text-gray-100 hover:text-gray-400 transition-colors"
                aria-label="Email"
              >
                <Mail />
              </a>
              <a
                href="https://www.linkedin.com/in/husnain-abid-9a9384266/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-gray-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/Husnain-Abid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-gray-400 transition-colors"
                aria-label="GitHub"
              >
                <Github />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end" ref={imageRef}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                <img
                  src={user}
                  alt="Husnain Abid"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-blue-100 rounded-full filter blur-xl opacity-70 scale-105 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
