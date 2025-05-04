import React from "react";
import imgSrc from "../../img.png";
import { Button } from "../components/Button";

export const Service = () => {
  const images = [
    { src: imgSrc, colSpan: "col-span-7", rowSpan: "row-span-1" },
    { src: imgSrc, colSpan: "col-span-5", rowSpan: "row-span-1" },
    { src: imgSrc, colSpan: "col-span-4", rowSpan: "row-span-1" },
    { src: imgSrc, colSpan: "col-span-8", rowSpan: "row-span-1" },
    { src: imgSrc, colSpan: "col-span-5", rowSpan: "row-span-1" },
    { src: imgSrc, colSpan: "col-span-7", rowSpan: "row-span-1" },
  ];

  const offres = [
    {
      icon: "",
      title: "Conceptions sur mesure",
      paragraphe:
        "Chaque maison que nous construisons est conçue sur mesure, selon vos préférences. Nous proposons un processus de conception entièrement personnalisé, où nous collaborons avec vous pour créer une maison parfaitement adaptée à votre style de vie.",
    },
    {
      icon: "",
      title: "Conceptions sur mesure",
      paragraphe:
        "Chaque maison que nous construisons est conçue sur mesure, selon vos préférences. Nous proposons un processus de conception entièrement personnalisé, où nous collaborons avec vous pour créer une maison parfaitement adaptée à votre style de vie.",
    },
    {
      icon: "",
      title: "Conceptions sur mesure",
      paragraphe:
        "Chaque maison que nous construisons est conçue sur mesure, selon vos préférences. Nous proposons un processus de conception entièrement personnalisé, où nous collaborons avec vous pour créer une maison parfaitement adaptée à votre style de vie.",
    },
  ];
  return (
    <div className="text-[#084527] pb-36 tracking-tight  bg-[#F5F5F0] ">
      <header className="flex justify-center py-36">
        <h1 className="text-6xl text-center w-2/5 tracking-tighter font-bold">
          Constructions de
          <span className="text-secondary"> maisons neuves</span>
        </h1>
      </header>
      <section className="bg-white grid grid-cols-[1.5fr_1fr] items-center p-20 gap-20">
        <img src={imgSrc} alt="" />
        <div className="gap-8 flex flex-col">
          <div className="flex flex-col gap-2">
            <h3 className="uppercase font-semibold mb-2">
              ce que nous offrons
            </h3>
            <h2 className="tracking-tighter font-bold text-4xl">
              La qualité à chaque étape du processus
            </h2>
          </div>
          <p>
            Spécialisés dans la construction de maisons neuves, nous
            concrétisons votre rêve de devenir propriétaire d'une maison sur
            mesure. Que vous souhaitiez créer un chef-d'œuvre moderne ou un
            espace chaleureux et traditionnel, notre équipe d'experts vous
            accompagnera à chaque étape du processus pour que votre nouvelle
            maison reflète votre vision, votre style et vos besoins.
          </p>
        </div>
      </section>
      <section className=" px-20 py-36  ">
        <div>
          <h3 className="uppercase font-semibold mb-2">ce que nous offrons</h3>
          <h2 className=" w-2/5 tracking-tighter font-bold text-4xl mb-32">
            Nous fournissons
            <span className="text-secondary">
              {" "}
              des services professionnels dans les délais
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-x-20 gap-y-28">
          {offres.map((item, index) => (
            <div id={index} className="flex gap-4">
              <div className="w-2 h-7 relative top-[68px] bg-primary"></div>
              <div className="flex flex-col gap-5">
                <div className="h-12 w-12 border-primary border-2 rounded-sm">
                  <img src={item.icon} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>{item.paragraphe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-20 py-36">
        <h2 className="text-center tracking-tighter font-bold text-4xl mb-32">
          Dernières constructions
          <span className="text-secondary">
            <br /> de maisons neuves
          </span>
        </h2>
        <div className="grid grid-cols-12 gap-4 auto-rows-[400px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden ${img.colSpan} ${img.rowSpan}`}
            >
              <img
                src={img.src}
                alt={`img-${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white  mx-20 px-18 py-20 gap-20 grid grid-cols-2">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h3 className="uppercase font-semibold mb-2">
                ce que nous offrons
              </h3>
              <h2 className="font-bold text-5xl">
                Commençons votre projet ensemble, obtenez un devis gratuit dès
                aujourd'hui
              </h2>
            </div>
            <p>
              Notre équipe discutera de vos idées, répondra à toutes vos
              questions et vous fournira des conseils d'experts pour vous aider
              à faire le premier pas vers la maison de vos rêves.
            </p>
          </div>
          <Button text={"Demander un devis"} />
        </div>
        <img src={imgSrc} alt="" />
      </section>
    </div>
  );
};
