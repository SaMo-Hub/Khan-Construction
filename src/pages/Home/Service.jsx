import React from "react";
import imgSrc from "../../../img.png";

export const Service = () => {
  const serviceList = [
    {
      img: "",
      title: "Constructions de maisons neuves",
      paragraphe:
        "Spécialisés dans la construction de maisons neuves, nous concrétisons votre rêve de devenir propriétaire d'une maison sur mesure. ",
    },
    {
      img: "",
      title: "Constructions de maisons neuves",
      paragraphe:
        "Spécialisés dans la construction de maisons neuves, nous concrétisons votre rêve de devenir propriétaire d'une maison sur mesure. ",
    },
  ];
  return (
    <section className="py-36">
      <h2 className="text-3xl md:text-5xl  tracking-tighter font-bold  text-center mb-32">
        Construire l'excellence :
      </h2>
      <div className="relative  overflow-hidden flex gap-10">
        <div className="relative left-20 flex gap-10">
          {serviceList.map((item, index) => (
            <div id={index} className="relative h-[410px] ">
              <div className=" h-full  w-[800px] bg-amber-950">
                <img
                  src={item.img}
                  alt="Illustration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 z-0"></div>
              </div>
              {/* Texte par-dessus l'image */}
              <div className="absolute bottom-0 flex flex-col gap-5 p-8 z-10 text-white">
                <h3 className="text-2xl ">{item.title}</h3>
                <p className="text-lg">{item.paragraphe}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
