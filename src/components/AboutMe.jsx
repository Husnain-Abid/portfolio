"use client"

import { useState } from "react"
import about from "../assets/about.jpg"

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("experience")

  // Data for the tabs
  const tabsData = {
    experience: [
      {
        title: "Full Stack Developer",
        company: "MustTech Solutions",
        period: "2024 - Present",
        description:
          "Developed and maintained MERN stack applications, led frontend development with React, TypeScript, and Tailwind CSS, and implemented secure RESTful APIs with JWT authentication.",
      },
      {
        title: "React Js Developer",
        company: "Msnsoft Pvt",
        period: "2023 - 2024",
        description:
          "Developed and optimized React.js applications using modern frameworks, ensuring responsive UI/UX with Tailwind CSS and integrating RESTful APIs for dynamic data handling.",
      },
      {
        title: "Junior Web Developer",
        company: "Datics AI",
        period: "2022 - 2023",
        description:
          "Built responsive websites using HTML, CSS, and JavaScript. Collaborated with designers to implement pixel-perfect UI designs.",
      },
    ],

    education: [
      {
        title: "Bachelor of Science in Computer Science",
        institution: "Khawaja Fareed University",
        period: "2019 - 2023",
        description: "Specialized in web technologies and software engineering. Graduated with honors.",
      },
      {
        title: "MERN Stack Bootcamp",
        institution: "PASHA (Pakistan Software Houses Association)",
        period: "2022 - 2023",
        description: "Gained hands-on experience in programming fundamentals, data structures, and full-stack web development using the MERN stack."
      },
    ],
    
    skills: [
      {
        category: "Frontend",
        items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB", "MySQL", "RESTful APIs", "Firebase"],
      },
      {
        category: "Tools & Others",
        items: ["Git", "Postman", "linux", "VS Code", "Figma"],
      },
    ],

  }

  // Interests data
  const interests = [
    "Open Source Contribution",
    "Web Development",
    "Tech Innovations",
    "Continuous Learning",
    "Mobile Development",
    "Photography",
    "Hiking",


  ]

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div className="space-y-8">
            {tabsData.experience.map((job, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-900"></div>
                <div className="mb-1 flex justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <span className="text-sm text-blue-900">{job.period}</span>
                </div>
                <p className="text-gray-600 mb-2">{job.company}</p>
                <p className="text-gray-700">{job.description}</p>
              </div>
            ))}
          </div>
        )

      case "education":
        return (
          <div className="space-y-8">
            {tabsData.education.map((edu, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-900"></div>
                <div className="mb-1 flex justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{edu.title}</h3>
                  <span className="text-sm text-blue-900">{edu.period}</span>
                </div>
                <p className="text-gray-600 mb-2">{edu.institution}</p>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        )

      case "skills":
        return (
          <div className="space-y-6">
            {tabsData.skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Learn more about my background and interests</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Column - Bio and Interests */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-center">
              <div className=" rounded-md overflow-hidden">
                <img src={about} alt="Profile" className="w-64 h-64 object-cover " />
              </div>
            </div>

            {/* Biography */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Biography</h3>
              <p className="text-gray-700">
                I am a passionate Full Stack Developer with 2 years of experience building scalable and user-friendly web applications. Proficient in the MERN stack, I specialize in writing clean, efficient code and solving complex problems with elegant solutions. Dedicated to continuous learning, I thrive on creating seamless digital experiences.
              </p>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            {/* <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-2 bg-white text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Download CV
              </a>
            </div> */}



          </div>

          {/* Right Column - Tabs */}
          <div className="lg:col-span-3">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-8">
              <div className="flex space-x-8">
                {Object.keys(tabsData).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-sm font-medium transition-colors ${activeTab === tab
                      ? "text-blue-900 border-b-2 border-blue-900"
                      : "text-gray-500 hover:text-gray-700"
                      }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">{renderTabContent()}</div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutMe

