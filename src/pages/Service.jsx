import React from "react";
import imgProjet1 from "/public/img/Project/Projet1.png"
import imgProjet2 from "/img/Project/Projet2.png"
import imgProjet3 from "/img/Project/Projet3.png"
import imgProjet4 from "/img/Project/Projet4.png"
import imgProjet5 from "/img/Project/Projet5.png"
import imgProjet6 from "/img/Project/Projet6.png"
import { Button } from "../components/Button";
import clsx from "clsx";
import qualiteachaqueprocessus from "/public/img/Service/qualiteachaqueprocessus.png"
import contactez from '/public/img/Service/Contactez-nous.png'
import { useLocation } from "react-router-dom";
import { serviceList } from "../list";


export const Service = () => {
  const images = [
    { src: imgProjet1, colSpan: "7", rowSpan: "row-span-1" },
    { src: imgProjet2, colSpan: "5", rowSpan: "row-span-1" },
    { src: imgProjet3, colSpan: "4", rowSpan: "row-span-1" },
    { src: imgProjet4, colSpan: "8", rowSpan: "row-span-1" },
    { src: imgProjet5, colSpan: "5", rowSpan: "row-span-1" },
    { src: imgProjet6, colSpan: "7", rowSpan: "row-span-1" },
  ];

  const offres = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>

      ),
      title: "Conceptions sur mesure",
      paragraphe:
        "Chaque maison que nous construisons est conçue sur mesure, selon vos préférences. Nous proposons un processus de conception entièrement personnalisé, où nous collaborons avec vous pour créer une maison parfaitement adaptée à votre style de vie.",
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>
),
      title: "Équipe expérimentée",
      paragraphe:
"Notre équipe d'architectes, de constructeurs et de gestionnaires de projets possède des années d'expérience dans la construction résidentielle."
    },
    
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>
),
      title: "Artisanat de haute qualité",
      paragraphe:
"Nous utilisons uniquement les meilleurs matériaux et les dernières techniques de construction, garantissant que votre maison est non seulement belle mais construite pour durer."
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
</svg>
),
      title: "Processus transparent",
      paragraphe:
"De la consultation initiale à la remise finale, nous vous tenons informés à chaque étape du projet."
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
</svg>

),
      title: "Pratiques durables",
      paragraphe:
"Nous nous engageons à intégrer des solutions écologiques dans nos constructions et des meilleures pratiques pour réduire vos futurs coûts de services publics."
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

),
      title: "Livraison dans les limites du budget",
      paragraphe:
"Notre équipe s'engage à livrer votre nouvelle maison dans les délais et dans le budget convenu, sans compromettre la qualité ou le savoir-faire."
    },
  ];

  const currentPath = useLocation().pathname;
  const selectedService = serviceList.find(service => service.path === currentPath);

  console.log(selectedService);
  

  return (
    <div className="text-[#084527] py-[66px] pb-36 tracking-tight  bg-[#F5F5F0] ">
      <header className="flex justify-center py-12 md:py-36">
        <h1 className="md:text-6xl text-4xl text-center md:w-2/5 tracking-tighter font-bold">
          {selectedService.title}
        </h1>
      </header>
      <section className="bg-white flex flex-col md:grid grid-cols-[1.5fr_1fr] items-center p-8 md:p-20 gap-10 md:gap-20">
        <img src={selectedService.img} alt="Qualité du service" className="order-2 w-full md:order-1 " />
        <div className="gap-8 order-1 flex flex-col">
          <div className="flex flex-col gap-2">
            <h3 className="uppercase font-semibold mb-2">
              ce que nous offrons
            </h3>
            <h2 className="tracking-tighter font-bold text-3xl md:text-4xl">
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
      <section className="px-8 md:px-20 py-36  ">
        <div>
          <h3 className="uppercase font-semibold mb-2">ce que nous offrons</h3>
          <h2 className="text-3xl md:text-4xl w-[80%] tracking-tighter font-bold  mb-32">
            Nous fournissons
            <span className="text-secondary">
              {" "}
              des services professionnels dans les délais
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-x-20 gap-y-28">
          {offres.map((item, index) => (
            <div id={index} className="flex bg- gap-4">
              <div className="w-2 h-7 relative top-[68px] bg-primary"></div>
              <div className="flex flex-col gap-5">
                <div className="h-12 w-12 justify-center items-center flex border-primary border-2 rounded-sm">
                {item.icon}
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
      <section className="px-8 md:px-20 py-36">
      <h2 className=" text-center text-3xl md:text-5xl  tracking-tighter font-bold mb-32">
          Dernières constructions
          <span className="text-secondary">
            <br /> de maisons neuves
          </span>
        </h2>
        <div className="md:grid flex flex-col md:grid-cols-12 gap-4 md:auto-rows-[400px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={clsx(
                "relative overflow-hidden",
                img.colSpan && `col-span-${img.colSpan}`,
                img.rowSpan && `row-span-${img.rowSpan}`
              )}
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
      <section className="bg-white gap-8 flex flex-col mx-8 md:mx-20 p-10 md:px-18 md:py-20 md:gap-20 md:grid grid-cols-2">
        <div className="flex flex-col gap-6 md:gap-12">
          <div className="flex flex-col gap-5 md:gap-7">
            <div className="flex flex-col gap-2">
              <h3 className="uppercase font-semibold mb-2">
                ce que nous offrons
              </h3>
              <h2 className="font-bold text-3xl md:text-5xl">
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
        {/* <img src={contactez} alt="" /> */}
      </section>
    </div>
  );
};
