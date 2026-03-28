import React from "react";
import { motion } from "framer-motion";
import Heading from "./ui/Heading_sections";

const WhyChooseUs = () => {
  return (
    <motion.section
      id="clients"
      className="lg:pt-20 pt-10 dark:bg-dark-gradient text-center bg-white text-black"
      initial={{ opacity: 0, y: 80 }}          // Start hidden and below
      whileInView={{ opacity: 1, y: 0 }}       // Animate when visible
      viewport={{ once: true, amount: 0.1, }}   // Animate only once when 30% visible
      transition={{ duration: 0.8, ease: "easeOut" }}  // Smooth animation
    >
      <div className="2xl:w-[80%] mx-auto  w-[90%]">
        <Heading title="Why Choose Us" />
        <p className="text-gray-700 max-w-3xl dark:text-white mx-auto mb-14 font-medium">
          At Pixel TechnoSol, we don’t just build websites, we create digital
          experiences that help businesses grow. Our focus is on combining
          creativity with technology to deliver solutions that truly make an
          impact.
        </p>

        <div className="flex justify-center items-center flex-wrap gap-10">
          {[
            {
              title: "Client-Focused Approach",
              desc: "We listen, understand, and deliver websites tailored to your business goals.",
            },
            {
              title: "Creative & Modern Designs",
              desc: "Engaging visuals that capture attention and reflect your brand identity.",
              color: "#0c3d47",
            },
            {
              title: "Reliable Development",
              desc: "Scalable, secure, and high-performing websites built with the latest technology.",
            },
            {
              title: "SEO & Performance Optimized",
              desc: "Websites designed to rank better and load faster.",
            },
            {
              title: "Dedicated Support",
              desc: "Engaging visuals that capture attention and reflect your brand identity.",
              color: "#0c3d47",
            },
            {
              title: "Proven Expertise",
              desc: "A skilled team with experience across multiple industries and platforms.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="relative p-[14px] group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Teal background (moves from bottom to top on hover) */}
              <div className="absolute left-0 right-0 bottom-0 h-[60%]  w-full z-0 rounded-[30px] bg-teal group-hover:bg-tealGreen transition-all duration-700 ease-in-out  group-hover:-translate-y-[120px]"></div>

              {/* White card */}
              <div className="relative z-10 bg-white shadow_card font-myriad min-h-[266px] sm:min-w-[263px] rounded-[20px] p-8">
                <h3 className="text-[1.5rem] md:w-[202px] mx-auto font-bold mb-2">
                  {card.title}
                </h3>
                <div className="w-12 h-[3px] mx-auto mb-3 bg-teal group-hover:bg-tealGreen"></div>
                <p className="text-black text-[1.25rem] sm:w-[275px] mx-auto">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
