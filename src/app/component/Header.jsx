"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [show, setShow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      // Hide/show based on scroll direction
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }

      // Add background opacity based on scroll position
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollY = window.scrollY;

      // Determine active section based on scroll position
      const sections = ["home", "skills", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition <= top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        isScrolled
          ? "bg-orange-500 shadow-lg backdrop-blur-sm"
          : "bg-gradient-to-r from-orange-500 to-orange-600 bg-opacity-90"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-2"
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-orange-500 font-bold text-lg">BK</span>
        </div>
        <h1 className="text-2xl font-bold text-white hover:text-orange-100 transition duration-300 ease-in-out">
          Bipin Karki
        </h1>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="hidden md:flex items-center space-x-1"
      >
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
            className={`relative px-4 py-2 text-white font-medium hover:text-orange-100 transition-all duration-300 ease-in-out ${
              activeSection === item.href.substring(1) ? "font-bold" : ""
            }`}
          >
            {item.name}
            {activeSection === item.href.substring(1) && (
              <motion.div
                layoutId="activeSection"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full mx-auto w-2/3"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.a>
        ))}
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden flex items-center"
      >
        <button className="text-white p-2 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </motion.div>

      {/* Contact button on desktop */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="hidden md:block"
      >
        <a
          href="#contact"
          className="px-4 py-2 bg-white text-orange-500 rounded-full font-medium hover:bg-orange-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          Get in Touch
        </a>
      </motion.div>
    </motion.header>
  );
}
