import { useState } from "react";


import { Button } from "../components/Button";
import { Header } from "./Home/Header";
import { Service } from "./Home/Service";
import { Etape } from "./Home/Etape";
import { Projet } from "./Home/Projet";
import { Avis } from "./Home/Avis";
import { Faq } from "./Home/Faq";
import { CommencezVotreprojet } from "./Home/CommencezVotreprojet";
export const Home = () => {
 
 


  return (
    <div className="font-inter pt-[66px] tracking-tight text-[#084527] bg-[#F5F5F0] ">
       <Header/>
      <hr className="border border-dashed border-[#00000037]" />
     {/* <Etape/> */}
      <hr className="border border-dashed border-[#00000037]" />
      <Projet/>
      <hr className="border border-dashed border-[#00000037]" />
      <Avis/>
      <hr className="border border-dashed border-[#00000037]" />
      <Faq/>  
    {/*  <Service/>
      */}
      <hr className="border border-dashed border-[#00000037]" />
      
    
      <CommencezVotreprojet/>
    </div>
  );
};
