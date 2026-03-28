import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Heading from "./ui/Heading_sections";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: "side-pic.jpg",
      tag: "Featured - Design",
      title: "App Design Development",
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi",
      desc2:
        "Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus",
    },
    {
      id: 2,
      image: "side-pic.jpg",
      tag: "Creative - UI/UX",
      title: "Website Interface Concept",
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi",
      desc2:
        "Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus",
    },
    {
      id: 3,
      image: "side-pic.jpg",
      tag: "Marketing - Branding",
      title: "Digital Brand Identity",
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi",
      desc2:
        "Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus",
    },
  ];

  return (
    <section id="portfolio" className="bg-white dark:bg-dark-gradient pt-16">
      <div className="xl:w-[80%] w-[90%] mx-auto">
        {/* Header */}
        <Heading title="Portfolio" />

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="mt-10"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between">
                {/* Left: Image */}
                <div className=" w-full hidden lg:block ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className=" w-full object-cover"
                  />
                </div>

                {/* Right: Text */}
                <div className="w-full h-full  bg-white dark:bg-transparent dark:text-white flex flex-col justify-between pb-[21px]">
                  
                  <div className="ps-[20px] pb-[50px]">
                    <h5 className="sm:text-start font-bold leading-[100%] text-[1.5rem]">WEB DESIGN</h5>
                    <p className="sm:text-start leading-[100%] text-[1.5rem]">App for tecnology & services</p>
                  </div>
                  <div className=" border-[15px]  border-teal lg:ps-[40px] ps-[20px] py-[17px] lg:translate-x-[-35px] ">
                    <p className="text-[1.25rem] leading-[100%] font-myriad md:text-start uppercase tracking-wide">
                      {project.tag}
                    </p>
                    <h3 className="text-[2rem] sm:text-start font-bold leading-[100%] pb-[25px]">
                      {project.title}
                    </h3>
                    <p className="leading-relaxed sm:text-start mb-3">
                      {project.desc1}
                    </p>
                    <p className="leading-relaxed sm:text-start ">
                      {project.desc2}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
