import React from 'react'
import imgProjet1 from "/public/img/Project/Projet1.png"
import imgProjet2 from "/img/Project/Projet2.png"
import imgProjet3 from "/img/Project/Projet3.png"
import imgProjet4 from "/img/Project/Projet4.png"
import { Button } from '../../components/Button';

export const Projet = () => {
  const listProjet =[
    imgProjet1,imgProjet2,imgProjet3,imgProjet4
  ]
  return (
<section className="py-12 md:py-16 lg:py-36">
        <h2 className="text-4xl sm:text-5xl px-8  flex justify-center items-center tracking-tighter font-bold  text-center mb-10 md:mb-32">
          Certains de nos derniers projets
        </h2>
        <div className=" overflow-hidden relative">
          <div className="flex relative  gap-10">
            {listProjet.map((item,index)=> (
              
            <img
              className="md:w-[493px] w-[180px] md:h-[317px] object-cover  "
              src={item}
              alt=""
            />
            ))}
      
          </div>
        </div>
        <div className="w-full flex justify-center mt-20 items-center">
          <Button link={'/Projet'} text={"Voir tout les projets"} />
        </div>
      </section>  )
}
