import React from "react";

export const Button = ({ text }) => {
  return (
    <div className="font-semibold flex w-fit items-center justify-center  px-5 py-4 relative bg-[#ffb53b] text-[#094a2e] ">
        {text}
    </div>
  );
};
