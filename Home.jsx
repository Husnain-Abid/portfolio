import { useEffect, useState } from "react";
import AboutMe from "./src/components/AboutMe";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import Hero from "./src/components/Hero";
import Navbar from "./src/components/Navbar";
import Projects from "./src/components/Projects";
import Skills from "./src/components/Skills";



import { ArrowUp } from "lucide-react"; // Import your icon (or use SVG directly)


function Home() {

  
  const [showButton, setShowButton] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
        <Footer />

        {/* Scroll to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-14 right-6 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        )}



      </div>
    </>
  );
}

export default Home;
