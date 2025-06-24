"use client"

import axios from "axios"
import { Download, Github, HardDriveDownload, Linkedin, Mail, Send } from "lucide-react"
import { useState } from "react"
import { toast } from "react-toastify"

const Contact = () => {

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    const newErrors = {};

    // Basic field validation
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    // If there are errors, stop submission
    if (Object.keys(newErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    // Simulate sending delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSuccessMessage("Thank you! Your message has been sent.");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell me about your project or inquiry..."
                />
                {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
              </div>




              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-950 text-white rounded-md hover:bg-blue-900 transition-colors disabled:opacity-70"
              >
                <Send className="mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {successMessage && (
                <p className="text-green-600 text-sm text-center mt-4">{successMessage}</p>
              )}

            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                creative ideas, or opportunities.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full">
                    <Mail className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="ml-4">
                    <a href="mailto:husnainabid066@gmail.com" className="text-gray-700 hover:text-blue-600">
                      husnainabid066@gmail.com
                    </a>

                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full">
                    <Github className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="ml-4">
                    <a
                      href="https://github.com/Husnain-Abid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full">
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="ml-4">
                    <a
                      href="https://www.linkedin.com/in/husnain-abid-9a9384266/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Resume</h3>
              <p className="text-gray-600 mb-6">
                Want to know more about my experience and skills? Download my resume.
              </p>

<a href="/Husnain’s_Resume.pdf" download
    className="inline-flex items-center px-6 py-3 cursor-pointer bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
  >
    <HardDriveDownload className="mr-2" />
    Download Resume
</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

