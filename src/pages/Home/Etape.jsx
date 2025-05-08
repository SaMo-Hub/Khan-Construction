import React, { useState } from "react";
import imgSrc from "../../../img.png";

export const Etape = () => {
    const [etapeOpenIndex, setetapeOpenIndex] = useState(0);

    const toggleEtape = (index) => {
      setetapeOpenIndex(etapeOpenIndex === index ? null : index);
    };
  const etapeList = [
    {
      title: "Fournir des solutions rapides",
      paragraphe:
        "Engager l'architecte pour traduire la vision du client en conceptions conceptuelles.",
    },
    {
      title: "Fournir des solutions rapides",
      paragraphe:
        "Engager l'architecte pour traduire la vision du client en conceptions conceptuelles.",
    },
  ];
  return (
    <section className="md:px-20 px-8 py-12 md:py-36">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter  md:w-[708px] mb-10 md:mb-32">
        Une équipe dévouée offrant{" "}
        <span className="text-[#FFB53B] ">des résultats exceptionnels.</span>
      </h2>

      <div className="grid md:grid-cols-[1.5fr_1fr] gap-20 h-full items-center">
        <img
          className="w-[708px] colspan-2 h-[708px] object-cover  "
          src={imgSrc}
          alt=""
        />

        {/* <div className="w-[708px] h-[708px] bg-black  "></div> */}
        <div className="flex flex-col  gap-16">
          {etapeList.map((item, index) => (
            <div
              id={index}
              onClick={() => toggleEtape(index)}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-[30px] h-[30px] bg-primary/20 rounded-full "></div>
                <p className="text-xl font-semibold">{item.title} </p>
              </div>
              <div
                className={` ${etapeOpenIndex === index ? "block" : "hidden"}`}
              >
                <p className=" py-2">{item.paragraphe}</p>
              </div>
              <hr className="border-2  text-primary/40 rounded-full " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
