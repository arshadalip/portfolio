import React from "react";
import "../Slider.css";

const LogoSlider = () => {
  const logos = [
    { src: "/images/tools/Adobe-Illustrator-Logo.png", alt: "Adobe Illustrator" },
    { src: "/images/tools/webflow-new2506.logowik.com.png", alt: "Webflow" },
    { src: "/images/tools/laravel_logo.png", alt: "Laravel" },
    { src: "/images/tools/Node_logo_NodeJS.png", alt: "Node.js" },
    { src: "/images/tools/80314.png", alt: "Shopify" },
    { src: "/images/tools/adobe-photoshop^2019^photoshop-logo.png", alt: "Adobe Photoshop" },
  ];

  // Repeat logos 3x for a perfect loop
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logo-slider-container bg-white dark:bg-dark-gradient pt-10 lg:pt-20 overflow-hidden">
      <div className="logo-slider-track flex items-center gap-10">
        .
        {repeatedLogos.map((logo, index) => (
          <div className="w-[230px] h-[90px] bg-white flex justify-center items-center p-5 rounded-[15px]" key={index}>
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-12 w-auto object-contain inline-block"
            />
            </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
