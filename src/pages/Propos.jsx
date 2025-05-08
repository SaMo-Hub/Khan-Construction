import React from "react";
import imgSrc from "../../img.png";
import { Button } from "../components/Button";

export const Propos = () => {
  const etapeList = [
    {
      title: "Consultation gratuite",
      paragraphe:
        "Nous initions le processus par une consultation approfondie pour comprendre votre vision et vos objectifs.",
    },
    {
      title: "Consultation gratuite",
      paragraphe:
        "Nous initions le processus par une consultation approfondie pour comprendre votre vision et vos objectifs.",
    },
    {
      title: "Consultation gratuite",
      paragraphe:
        "Nous initions le processus par une consultation approfondie pour comprendre votre vision et vos objectifs.",
    },
  ];

  return (
    <div className="text-[#084527] bg-[#F5F5F0]">
      <header className="flex justify-center py-12 md:py-36">
        <h1 className="md:text-6xl text-4xl text-center w tracking-tighter font-bold">
          Créer des espaces <br /> avec
          <span className="text-secondary"> passion et précision</span>
        </h1>
      </header>
      <section className="bg-white   px-8 md:px-20 py-20 gap-20 grid md:grid-cols-2">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              {/* <h3 className="uppercase font-semibold mb-2">
                      ce que nous offrons
                    </h3> */}
              <h2 className="font-bold text-3xl md:text-4xl ">Notre histoire</h2>
            </div>
            <p>
              Chez Crescent, nous pensons que chaque maison raconte une
              histoire, et nous sommes là pour vous aider à écrire la vôtre.
              Forts de nombreuses années d'expérience en construction,
              rénovation et conception sur mesure, nous nous engageons à
              concrétiser votre vision. <br />
              <br />
              Qu'il s'agisse de construire une maison neuve, d'aménager un loft
              ou de réaménager un espace pour mieux répondre à vos besoins,
              notre équipe allie savoir-faire, créativité et souci du détail à
              chaque projet. Nous sommes fiers de vous proposer des solutions
              personnalisées de haute qualité qui non seulement répondent à vos
              attentes, mais les dépassent. Construisons ensemble quelque chose
              d'extraordinaire !
            </p>
          </div>
          <Button text={"Demander un devis"} />
        </div>
        <img src={imgSrc} className="h-full object-cover" alt="" />
      </section>
      <section className="px-8 md:px-20 py-12 md:py-36">
        <h2 className="tracking-tighter mb-10 md:mb-32 font-bold text-3xl md:text-4xl  md:w-2/5 ">
          Comment nous travaillons ensemble,
          <span className="text-secondary">
            {" "}
            un processus en 3 étapes simples{" "}
          </span>
        </h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
          {etapeList.map((item, index) => (
            <div className="flex flex-col bg-white border-2 border-primary/40 border-dashed gap-7 p-8">
              <img src={imgSrc} alt="" />
              <div className="flex gap-4 font-semibold items-center">
                <div className="text-white bg-primary rounded-full h-7 w-7 justify-center items-center flex">
                  {index + 1}
                </div>
                <h4>{item.title} </h4>
              </div>
              <p>{item.paragraphe}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
