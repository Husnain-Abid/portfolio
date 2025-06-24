import { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ArrowUp } from "lucide-react"; // Import your icon (or use SVG directly)
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
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

        <ToastContainer position="top-right" autoClose={5000} />


      </div>
    </>
  );
}

export default App;
