import React from 'react'
import imgSrc from "../../../img.png";
import { Button } from '../../components/Button';

export const Projet = () => {
  const listProjet =[
    imgSrc,imgSrc,imgSrc,imgSrc
  ]
  return (
<section className="py-12 md:py-36">
        <h2 className="text-3xl md:text-5xl  md:text-5xl flex justify-center items-center tracking-tighter font-bold  text-center mb-10 md:mb-32">
          Certains de nos derniers projets
        </h2>
        <div className=" overflow-hidden relative">
          <div className="flex relative  gap-10">
            {listProjet.map((item,index)=> (
              
            <img
              className="md:w-[493px] w-[180px] md:h-[317px] object-cover  "
              src={imgSrc}
              alt=""
            />
            ))}
      
          </div>
        </div>
        <div className="w-full flex justify-center mt-20 items-center">
          <Button text={"Voir tout les projets"} />
        </div>
      </section>  )
}
