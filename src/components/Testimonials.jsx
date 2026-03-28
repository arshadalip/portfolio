import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Heading from "./ui/Heading_sections";

const testimonials = [
  {
    name: "Nevine Acotanza",
    image: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    text: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
  },
  {
    name: "John Carter",
    image: "https://i.pravatar.cc/100?img=2",
    rating: 5,
    text: "Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Vestibulum ante ipsum primis in faucibus orci luctus.",
  },
  {
    name: "Sofia Malik",
    image: "https://i.pravatar.cc/100?img=3",
    rating: 4,
    text: "Curabitur euismod, justo non feugiat varius, lacus justo faucibus orci, sed egestas velit lorem nec justo. Praesent ut imperdiet velit.",
  },
  {
    name: "Michael Brown",
    image: "https://i.pravatar.cc/100?img=4",
    rating: 5,
    text: "Suspendisse sit amet metus ut sapien commodo sagittis. Aenean non massa non nulla accumsan tincidunt.",
  },
  {
    name: "Lisa Turner",
    image: "https://i.pravatar.cc/100?img=5",
    rating: 4,
    text: "Duis malesuada, nisl a convallis gravida, justo sem elementum magna, vitae elementum erat odio sit amet purus.",
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="testimonial"
      className="pt-10 lg:pt-20 bg-white text-gray-800 dark:bg-dark-gradient"
    >
      <div className="w-[90%] md:w-full mx-auto">
        {/* Heading */}
        <Heading title="Testimonials" />
        <div className="relative ">
          {/* Teal background */}
          <div className="absolute  top-0 right-0 w-[55%] h-full md:bg-[#24A28E] z-0" />
          <div className="flex items-center">
            {/* Left Column */}
            <div className=" relative hidden md:flex z-10 md:w-[70%]  w-full h-full md:h-[550px] items-end  flex-col justify-center">
              <div className=" absolute  top-0 right-0 text-[10rem] text-gray-200 font-extrabold leading-none select-none -mb-8">
                “
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-8 max-w-sm">
                Here’s what our clients say <br /> about their journey with us.
              </h3>

              {/* Custom Navigation Buttons */}
              <div className="flex w-[50%] absolute md:static bottom-0 space-x-3">
                <button
                  ref={prevRef}
                  className="bg-[#065F46] text-white w-10 h-10 rounded-md flex items-center justify-center hover:bg-[#053B44] transition"
                >
                  &lt;
                </button>
                <button
                  ref={nextRef}
                  className="bg-[#065F46] text-white w-10 h-10 rounded-md flex items-center justify-center hover:bg-[#053B44] transition"
                >
                  &gt;
                </button>
              </div>
            </div>
            
            {/* Right Column — Swiper */}
            <div className=" z-10 relative w-full overflow-hidden">
              <h3 className="md:hidden text-xl md:text-2xl mx-auto font-semibold text-gray-900 dark:text-white mb-8 max-w-sm">
                Here’s what our clients say <br /> about their journey with us.
              </h3>
              <Swiper
                modules={[Navigation]}
                spaceBetween={16} // ✅ Adds visible gap between cards
                slidesPerView={2}
                loop={true}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 12 },
                  768: { slidesPerView: 2, spaceBetween: 16 },
                  1280: { slidesPerView: 3, spaceBetween: 16 },
                 
               
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index} className="md:my-auto">
                    
                    <div className="bg-white my-auto shadow-cc p-8 md:min-h-[317px] min-h-[250px] md:w-[410px] border border-gray-100 flex flex-col  transition">
                      
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <div className="text-yellow-500 text-sm">
                            {"★".repeat(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
