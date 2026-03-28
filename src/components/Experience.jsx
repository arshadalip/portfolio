import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const stats = [
    {
      value: "300+",
      label: "Satisfied Clients",
      bg: "linear-gradient(to right, rgba(141,238,216,0.5), rgba(141,238,216,0.5))",
    },
    {
      value: "10+",
      label: "Years of Experience",
      bg: "linear-gradient(to right, rgba(169,242,226,1), rgba(169,242,226,1))",
    },
    {
      value: "30+",
      label: "Brand Partners",
      bg: "linear-gradient(to right, rgba(141,238,216,0.5), rgba(141,238,216,0.5))",
    },
    {
      value: "300+",
      label: "Projects We’ve Delivered",
      bg: "linear-gradient(to right, rgba(227,251,245,1), rgba(227,251,245,1))",
    },
  ];

  return (
    <section
      id="clients"
      className="xl:w-[80%] md:w-[90%] lg:pt-20 pt-10 sm:w-[70%] w-[90%] mx-auto text-center text-black  rounded-[15px] "
    >
      <div className="flex flex-col md:flex-row rounded-[15px] justify-center items-center gap-6 md:gap-0">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            style={{ background: item.bg }}
            className="flex-1 py-6 w-full md:rounded-none rounded-[15px] shadow-md"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
              background:
                "linear-gradient(to right, rgba(169,242,226,1), rgba(141,238,216,0.7))", // Gradient thoda glow kare
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2.25rem] font-bold">{item.value}</h2>
            <p className="mt-1 text-[1.25rem] font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
