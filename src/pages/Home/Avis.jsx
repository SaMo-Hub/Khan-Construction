import React, { useState } from 'react';

export const Avis = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const avisList = [
    {
      name: "Annette Black",
      img: "",
      title: "Construction d’une nouvelle maison",
      paragraphe:
        "Construire une maison est un projet colossal, mais Constant a simplifié tout le processus. Ils ont été transparents quant au calendrier et au budget et nous ont tenus informés à chaque étape.",
    },
    {
      name: "jdjnfldfkg",
      img: "",
      title: "Construction d’une nouvelle maison",
      paragraphe:
        "Construire une maison est un projet colossal, mais Constant a simplifié tout le processus. Ils ont été transparents quant au calendrier et au budget et nous ont tenus informés à chaque étape.",
    },
    {
      name: "Annette Black",
      img: "",
      title: "Construction d’une nouvelle maison",
      paragraphe:
        "Construire une maison est un projet colossal, mais Constant a simplifié tout le processus. Ils ont été transparents quant au calendrier et au budget et nous ont tenus informés à chaque étape.",
    },
  ];

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? avisList.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === avisList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="px-8 md:px-12 lg:px-24 py-12 md:py-16 lg:py-36">
      <h2 className="text-4xl sm:text-5xl tracking-tighter md:w-2/3 font-bold e mb-10 md:mb-32">
        Approuvé par
        <span className="text-[#FFB53B]"> les familles</span> et les{" "}
        <span className="text-[#FFB53B]">petites entreprises</span>
      </h2>

      {/* Flèches (visible sur mobile) */}
      {/* <div className="flex gap-4 mb-8 md:hidden">
        <button
          className="w-12 h-12 rounded-full border-2 flex items-center justify-center border-primary/45 text-primary"
          onClick={prev}
        >
          {"<"}
        </button>
        <button
          className="w-12 h-12 rounded-full border-2 flex items-center justify-center border-primary/45 text-primary"
          onClick={next}
        >
          {">"}
        </button>
      </div> */}

      {/* Mobile: un seul avis visible */}
      {/* <div className="text-white md:hidden">
        <div className="bg-[#2E2E2E] p-8 flex flex-col gap-14">
          <div className="flex flex-col gap-8">
            <h4 className="text-xl font-semibold">{avisList[currentIndex].title}</h4>
            <p>{avisList[currentIndex].paragraphe}</p>
          </div>
          <div className="flex gap-4 items-center">
            <img className="w-7 h-7 rounded-full" src={"imgSrc"} alt="" />
            {avisList[currentIndex].name}
          </div>
        </div>
      </div> */}

      {/* Desktop: grid de 3 avis */}
      <div className="grid lg:grid-cols-3 gap-10 text-white">
        {avisList.map((item, index) => (
          <div key={index} className="bg-[#2E2E2E] p-8 flex flex-col gap-14">
            <div className="flex flex-col gap-8">
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p>{item.paragraphe}</p>
            </div>
            <div className="flex gap-4 items-center">
              <img className="w-7 h-7 rounded-full" src={"imgSrc"} alt="" />
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
