import React from "react";

export const Button = ({ text,type }) => {
  return (
    <button type={type} className="font-semibold cursor-pointer flex w-fit items-center justify-center  px-5 py-4 relative bg-[#ffb53b] hover:bg-[#FF9F00] text-[#094a2e] ">
        {text}
    </button>
  );
};
