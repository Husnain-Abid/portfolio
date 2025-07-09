import { useState, useEffect } from "react"
import logo from "../assets/logo1.png"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("")

  const sectionIds = ["hero", "about", "projects", "skills", "contact"]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      setIsScrolled(scrollY > 10)

      // Check which section is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section) {
          const offsetTop = section.offsetTop
          if (scrollY + 100 >= offsetTop) {
            setActiveLink(sectionIds[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`md:fixed  w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="logo" className="w-10" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {sectionIds
              .filter(id => id !== "hero") // don't show Hero in navbar
              .map(id => (
                <a
                  key={id}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    const section = document.getElementById(id)
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" })
                      setActiveLink(id)
                    }
                  }}
                  className={`text-sm font-medium ${activeLink === id
                    ? "text-gray-950  border-blue-600 pb-1"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            <a href="/Husnain’s_Resume.pdf" download
              className="ml-4 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
           {isMobileMenuOpen && (
        <div className="md:hidden container mx-auto  px-4 py-3 space-y-2 transition-all duration-300">
          <div className="flex justify-between items-center">

          </div>
          {sectionIds
            .filter((id) => id !== "hero") // don't show Hero in navbar
            .map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => {
                  setActiveLink(id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block text-sm font-medium px-4 py-2 ${
                  activeLink === id
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          <a
            href="/Husnain’s_Resume.pdf"
            download
            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
