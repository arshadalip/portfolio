import React from "react";
import Heading from "./ui/Heading_sections";
import { useInView } from "../hooks/useInView.ts";

const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "We build custom, responsive, and scalable websites that deliver smooth performance, seamless functionality, and help businesses grow online.",
      
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "We design intuitive, user-friendly interfaces with smooth navigation and responsive layouts that keep visitors engaged with your brand.",
      iconBg: "bg-cyan-900",
    },
    {
      icon: "🖌️",
      title: "Graphic Design",
      description:
        "We create logos, branding, and custom graphics that enhance your brand identity and engage your audience online.",
      
    },
    {
      icon: "🚀",
      title: "SEO Optimization",
      description:
        "We optimize websites for speed, performance, and search engine visibility to boost rankings, drive traffic, and grow your online presence.",
      
    },
    {
      icon: "📱",
      title: "Business Strategy",
      description:
        "We help businesses create effective digital strategies that align with goals, improve efficiency, and maximize long-term growth.",
      
    },
  ];

  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section
      id="services"
      ref={ref}
      className={`bg-white dark:bg-dark-gradient text-center lg:pt-20 pt-10 px-4 text-black transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Section Heading */}
      <Heading title="Our Services" />

      {/* Services Cards */}
      <div className="flex justify-center items-center flex-wrap gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-[330px] py-[1.2rem] px-[.8rem] group transition-all duration-700"
            style={{
              transitionDelay: `${index * 120}ms`, // slight stagger for cards
            }}
          >
            {/* Background layers */}
            <div className="absolute inset-0 w-[80%] h-full mx-auto rounded-lg bg-teal transition-all duration-500 ease-in-out group-hover:bg-tealGreen"></div>

            <div className="absolute inset-0 h-[70%] w-full my-auto rounded-lg bg-teal transition-all duration-500 ease-in-out group-hover:bg-tealGreen"></div>

            {/* Main Card */}
            <div className="relative shadow-css bg-white min-h-[336px] rounded-[15px] px-2 py-[1.83rem] z-10 transition-all duration-500 ease-in-out group-hover:-translate-y-2">
              <div
                className={`w-10 h-10 mx-auto mb-[1.8rem] ${service.iconBg} text-white rounded-full flex items-center justify-center transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:bg-cyandark bg-teal`}
              >
                <span className="text-lg">{service.icon}</span>
              </div>
              <h3 className="font-bold mb-[2.628rem] transition-colors duration-500 group-hover:text-[#073D44]">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 transition-colors duration-500 group-hover:text-gray-800">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
