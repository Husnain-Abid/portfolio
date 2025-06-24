"use client"

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"


const Footer = () => {
  const currentYear = new Date().getFullYear()



  return (
    <footer className="bg-gradient-to-b from-[#1e293b] to-[#0f172a]  text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 sm:mb-0">
            <p className="text-sm text-gray-300">© {currentYear} Husnain Abid. All rights reserved.</p>
          </div>

          {/* Social Links and Back to Top */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Like">
              <Mail size={20} />
            </a>

          
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

