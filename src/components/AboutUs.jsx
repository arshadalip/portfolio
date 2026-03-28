import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="xl:pt-[144px] lg:pt-20  pt-10 gap-10 bg-white dark:bg-dark-gradient text-black dark:text-white">
      <div className="grid lg:grid-cols-2 2xl:w-[80%] w-[85%] mx-auto ">

        {/* LEFT SIDE */}
        <motion.div
          className="relative hidden lg:flex justify-center items-center text-center pe-8"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.015 }}
        >
          <img
            src="/images/about/about-light.png"
            alt=""
            className="w-[533px] h-[603px] my-auto md:pt-16 dark:hidden"
          />
          <img
            src="/images/about/about-green.png"
            alt=""
            className="w-full h-full my-auto md:pt-16 hidden dark:block"
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="font-advanium lg:text-start text-[2.25em] font-bold mb-4">
            ABOUT US:
          </h3>
          <p className="lg:text-start font-myriad text-[1.5em] leading-relaxed mb-4">
            Welcome to Pixel TechnoSol, a client-centric website
            development company committed to creating impactful digital
            experiences. At Pixel TechnoSol, our mission is to make your website
            stand out in the vast online world, ensuring it aligns perfectly with
            your business goals. We believe in delivering not just websites but
            comprehensive solutions that elevate your brand’s presence.
            Our expert team works tirelessly to provide unique designs, creative
            functionalities, and optimized performance that puts your business at
            the forefront of search engines. With a focus on client satisfaction,
            we craft websites that are as visually stunning as they are highly
            functional. At Pixel TechnoSol, clients come first. Let us turn your
            vision into a captivating website that speaks volumes about your
            business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
