import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = window.innerWidth < 768 ? 80 : 100;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrollTo = sectionTop - offset;

      window.scrollTo({ top: scrollTo, behavior: "smooth" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "clients", label: "Clients" },
    { id: "testimonial", label: "Testimonial" },
    { id: "contact", label: "Contact" },
  ];

  // Water-drop like mobile menu animation
  const menuVariants = {
    hidden: { opacity: 0, x: 50, y: -50, scale: 0.95, rotate: 5 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
    exit: { opacity: 0, x: 50, y: -50, scale: 0.95, rotate: -5, transition: { duration: 0.9, ease: "easeInOut" } },
  };

  return (
    <nav className="sticky top-0 z-40 bg-[rgba(255,255,255,1)]   dark:bg-[#052E33]  backdrop-blur-[60px] shadow-md">
      <div className="flex justify-between w-[90%] mx-auto items-center lg:py-5 py-3">
        {/* Logo */}
        <div onClick={() => handleScroll("home")} className="flex items-center space-x-2 cursor-pointer">
          <img src="/logo.png" alt="Pixel TechnoSol Logo" className="2xl:h-[102px] xl:h-24 lg:h-20 md:h-16 sm:h-14 h-12 dark:hidden" />
          <img src="/darkmodelogo.png" alt="Pixel TechnoSol Logo" className="2xl:h-[102px] xl:h-24 lg:h-20 md:h-16 sm:h-14 h-12 hidden dark:block" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-lg font-medium dark:text-white text-[#060606]">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`cursor-pointer pb-[14px] ap-li dark:aplid lg:text-2xl border-b-[3px]  md:text-lg transition-all duration-300 ${
                activeSection === item.id
                  ? "text-[#41b79a] dark:text-[#41b79a]  ap-active border-b-[3px] border-[#41b79a]"
                  : "hover:text-[#41b79a]"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          {menuOpen ? (
            <X
              size={28}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-gray-700 dark:text-white transform transition-all duration-300 rotate-180 scale-110"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer text-gray-700 dark:text-white transform transition-all duration-300"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden flex flex-col items-center space-y-6 py-6 bg-white dark:bg-dark-gradient dark:text-white text-lg font-medium shadow-xl "
          >
            {navItems.map((item, i) => (
              <motion.li
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`cursor-pointer transition-all   duration-300 ${
                  activeSection === item.id
                    ? "text-[#41b79a] border-b-2 border-[#41b79a]"
                    : "hover:text-[#41b79a]"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.3 } }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0.9 } }}
              >
                {item.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
