import { useState } from "react";

import imgSrc from "../../img.png";
import { Button } from "../components/Button";
import { Header } from "./Home/Header";
import { Service } from "./Home/Service";
import { Etape } from "./Home/Etape";
import { Projet } from "./Home/Projet";
import { Avis } from "./Home/Avis";
import { Faq } from "./Home/Faq";
export const Home = () => {
 
 


  return (
    <div className="font-inter tracking-tight text-[#084527] pb-20 bg-[#F5F5F0] ">
      <Header/>
      <hr className="border border-dashed border-[#00000037]" />
      <Etape/>
      <hr className="border border-dashed border-[#00000037]" />
      <Projet/>
      <hr className="border border-dashed border-[#00000037]" />
      <Avis/>
      <Faq/> 
    {/*  <Service/>
      */}
      
    
      <section className="bg-white mx-8 md:mx-20 p-8 md:px-18 md:py-20 gap-20 md:grid grid-cols-2">
        <div className="flex flex-col gap-12">
          <h2 className="font-bold text-3xl md:text-5xl ">
            Commençons votre projet ensemble, obtenez un devis gratuit dès
            aujourd'hui
          </h2>
          <Button text={"Demander un devis"} />
          <div className="flex gap-12">
            <div className="hidden md:flex gap-4">
              <p>Travail professionnel</p>
            </div>
          </div>
        </div>
        <img src={imgSrc} alt="" />
      </section> 
    </div>
  );
};
