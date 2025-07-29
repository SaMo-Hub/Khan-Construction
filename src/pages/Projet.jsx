import React from 'react'
import imgProjet1 from "/public/img/Project/Projet1.png"
import imgProjet2 from "/img/Project/Projet2.png"
import imgProjet3 from "/img/Project/Projet3.png"
import imgProjet4 from "/img/Project/Projet4.png"
import imgProjet5 from "/img/Project/Projet5.png"
import imgProjet6 from "/img/Project/Projet6.png"
import { Button } from "../components/Button";
import clsx from "clsx";
export const Projet = () => {
   const images = [
      { src: imgProjet1, colSpan: "7", rowSpan: "row-span-1" },
      { src: imgProjet2, colSpan: "5", rowSpan: "row-span-1" },
      { src: imgProjet3, colSpan: "4", rowSpan: "row-span-1" },
      { src: imgProjet4, colSpan: "8", rowSpan: "row-span-1" },
      { src: imgProjet5, colSpan: "5", rowSpan: "row-span-1" },
      { src: imgProjet6, colSpan: "7", rowSpan: "row-span-1" },
    ];
  return (
    <div className='text-[#084527] py-[66px] bg-[#F5F5F0]'>
      <header className="flex justify-center py-12 md:py-36">
        <h1 className="text-4xl md:text-6xl text-center md:w-2/5 tracking-tighter font-bold">
          Certains de nos derniers
          <span className="text-secondary"> projets</span>
        </h1>
      </header>
      <section>
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
    </div>
  )
}
