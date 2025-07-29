import React from "react";
import { Link } from "react-router-dom";

export const Button = ({style, text,type, link }) => {
  return (
    <Link to={link && link} type={type} className={`${style} font-semibold cursor-pointer flex w-fit items-center justify-center  px-5 py-4 relative bg-[#ffb53b] hover:bg-[#FF9F00] text-[#094a2e]`}>
        {text}
    </Link>
  );
};
