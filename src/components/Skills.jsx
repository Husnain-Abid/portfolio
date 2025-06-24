import { useState } from "react"

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend")

  // Skills data organized by category
  const skillsData = {
    frontend: [
      { name: "JavaScript", proficiency: 90 },
      { name: "HTML/CSS", proficiency: 95 },
      { name: "React", proficiency: 80 },
      { name: "Tailwind CSS", proficiency: 88 },
    ],
    backend: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express", proficiency: 80 },
      { name: "MongoDB", proficiency: 75 },
      { name: "MySQL", proficiency: 70 },
      { name: "Firebase", proficiency: 65 },
    ],
    tools: [
      { name: "Git", proficiency: 90 },
      { name: "Figma", proficiency: 70 },
      { name: "linux", proficiency: 75 },
      { name: "Postman", proficiency: 80 },
      { name: "VS Code", proficiency: 75 },
    ],
  }

  // Get skills for the active tab
  const activeSkills = skillsData[activeTab] || []

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I specialize in modern web technologies with a focus on creating responsive, accessible, and performant
            applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm bg-gray-100 p-1">
            {Object.keys(skillsData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Skills with Progress Bars */}
        <div className="  grid md:grid-cols-2  gap-10 ">
          {activeSkills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-gray-800 font-medium">{skill.name}</span>
                <span className="text-gray-600">{skill.proficiency}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-900 h-2.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-12 text-gray-600 italic">
          Always learning and expanding my skillset to stay current with industry trends.
        </div>
      </div>
    </section>
  )
}

export default Skills

