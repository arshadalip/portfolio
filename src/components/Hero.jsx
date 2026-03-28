import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

const images = ["/images/hero/hero-1.jpg", "/images/hero/hero-2.png"];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000); // change every 8s
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative md:h-[90vh] flex items-center justify-start overflow-hidden text-white py-20"
    >
      {/* Background Layers */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out transform scale-105 animate-kenburns`}
          style={{
            backgroundImage: `url(${img})`,
            opacity: index === current ? 1 : 0,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-0"></div>

      {/* Content */}
      <div className="relative md:w-[80%] w-[85%]  mx-auto">
        <h1 className="font-dmserif lg:text-[4rem] text-start text-xl md:text-4xl font-bold leading-tight mb-6">
          <span className="text-teal">We&nbsp;</span>
          <ReactTyped
            strings={[
              "Design Beautiful Websites",
              "Develop Modern Experiences",
              "Make Businesses Shine",
            ]}
            typeSpeed={70}
            backSpeed={40}
            backDelay={1500}
            loop
            cursorChar="|"
          />
        </h1>

        <p className=" text-start max-w-xl md:text-[1.38rem] mb-8 text-gray-200">
          At{" "}
          <span className="font-semibold text-teal-400">Pixel TechnoSol</span>,
          we blend creativity and technology to craft websites that are visually
          stunning, user-friendly, and built to grow your business.
        </p>

        <div className="flex justify-start">
          <button className="bg-teal text-black hover:text-teal hover:bg-cyandark btn-css  font-semibold md:py-3 py-2 md:px-8 px-4 rounded-full shadow-lg transition-all">
            Get Started
          </button>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes kenburns {
            0% { transform: scale(1.05) translate(0,0); }
            50% { transform: scale(1.1) translate(-10px, -10px); }
            100% { transform: scale(1.05) translate(0,0); }
          }
          .animate-kenburns {
            animation: kenburns 8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
