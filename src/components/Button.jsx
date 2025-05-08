import React from "react";

export const Button = ({style, text,type }) => {
  return (
    <button type={type} className={`${style} font-semibold cursor-pointer flex w-fit items-center justify-center  px-5 py-4 relative bg-[#ffb53b] hover:bg-[#FF9F00] text-[#094a2e]`}>
        {text}
    </button>
  );
};
