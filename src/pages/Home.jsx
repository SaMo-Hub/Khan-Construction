import React from "react";
import { NavBar } from "../components/NavBar";
import { Button } from "../components/Button";

export const Home = () => {
  return (
    <div className="font-inter text-[#084527] bg-[#F5F5F0] ">
      <header>
        <div className="flex gap-10 px-20 py-36">
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col gap-7">
              <h1 className="text-6xl">
                Nous façonnons le secteur de la construction
              </h1>
              <p className="text-xl">
                En tant qu'entreprise de construction de premier plan engagée
                envers l'excellence, nous apportons une richesse d'expérience et
                d'expertise à chaque projet.
              </p>
            </div>
            <Button text={"Demander un devis"} />
          </div>
          <div className="h-[491px] w-full bg-black"></div>
        </div>
      </header>
      <hr className="border border-dashed border-[#00000037]" />
      <section className="py-36">
        <h2 className="text-5xl font-bold  text-center mb-32">
          Construire l'excellence :
        </h2>
        <div className="relative  overflow-hidden flex gap-10">
          <div className="relative left-20 flex gap-10">
            <div className="relative h-[610px]">
              {/* Image de fond */}
              {/* <img
            src="/chemin/vers/ton-image.jpg"
            alt="Illustration"
            className="w-full h-full object-cover"
          /> */}
              <div className=" h-full  w-[1029px] bg-amber-950">
                <div className="absolute inset-0 bg-black/40 z-0"></div>
              </div>
              {/* Texte par-dessus l'image */}
              <div className="absolute bottom-0 flex flex-col gap-5 p-8 z-10 text-white">
                <h3 className="text-3xl">Constructions de maisons neuves</h3>
                <p className="text-xl">
                  Spécialisés dans la construction de maisons neuves, nous
                  concrétisons votre rêve de devenir propriétaire d'une maison
                  sur mesure.
                </p>
              </div>
            </div>
            <div className="relative h-[610px]">
              {/* Image de fond */}
              {/* <img
            src="/chemin/vers/ton-image.jpg"
            alt="Illustration"
            className="w-full h-full object-cover"
          /> */}
              <div className=" w-[1029px] h-full bg-amber-950">
                <div className="absolute inset-0 bg-black/40 z-0"></div>
              </div>
              {/* Texte par-dessus l'image */}
              <div className="absolute bottom-0 flex flex-col gap-5 p-8 z-10 text-white">
                <h3 className="text-3xl">Constructions de maisons neuves</h3>
                <p className="text-xl">
                  Spécialisés dans la construction de maisons neuves, nous
                  concrétisons votre rêve de devenir propriétaire d'une maison
                  sur mesure.
                </p>
              </div>
            </div>
            <div className="relative h-[610px]">
              {/* Image de fond */}
              {/* <img
            src="/chemin/vers/ton-image.jpg"
            alt="Illustration"
            className="w-full h-full object-cover"
          /> */}
              <div className=" w-[1029px] h-full bg-amber-950">
                <div className="absolute inset-0 bg-black/40 z-0"></div>
              </div>
              {/* Texte par-dessus l'image */}
              <div className="absolute bottom-0 flex flex-col gap-5 p-8 z-10 text-white">
                <h3 className="text-3xl">Constructions de maisons neuves</h3>
                <p className="text-xl">
                  Spécialisés dans la construction de maisons neuves, nous
                  concrétisons votre rêve de devenir propriétaire d'une maison
                  sur mesure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-20 py-36">
        <h2 className="text-5xl font-bold  w-[708px] mb-32">
          Une équipe dévouée offrant{" "}
          <span className="text-[#FFB53B] ">des résultats exceptionnels.</span>
        </h2>

        <div className="flex gap-20 h-full items-center">
          <div className="w-[708px] h-[708px] bg-black  "></div>
          <div className="flex flex-col h-full gap-16">
            <div>
              <div className="flex items-center gap-4">
                <div className="w-[38px] h-[38px] bg-primary/20 rounded-full "></div>
                <p className="text-2xl">Fournir des solutions rapides</p>
              </div>
              <hr className="border-2 mt-5 text-primary/40 rounded-full " />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <div className="w-[38px] h-[38px] bg-primary/20 rounded-full "></div>
                <p className="text-2xl">Fournir des solutions rapides</p>
              </div>
              <hr className="border-2 mt-5 text-primary/40 rounded-full " />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
