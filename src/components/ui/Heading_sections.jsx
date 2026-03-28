import React from "react";

const Heading = ({ title }) => {
  return (
    <h3 className="font-advanium dark:text-white pb-10 md:text-[3.125rem] text-[2.125rem] font-bold text-center">
      {title}
    </h3>
  );
};

export default Heading;
