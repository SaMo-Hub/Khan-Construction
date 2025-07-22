import React from 'react'
import imgSrc from "../../img.png";

export const Projet = () => {
    const images = [
      { src: imgSrc, colSpan: "col-span-7", rowSpan: "row-span-1" },
      { src: imgSrc, colSpan: "col-span-5", rowSpan: "row-span-1" },
      { src: imgSrc, colSpan: "col-span-4", rowSpan: "row-span-1" },
      { src: imgSrc, colSpan: "col-span-8", rowSpan: "row-span-1" },
      { src: imgSrc, colSpan: "col-span-5", rowSpan: "row-span-1" },
      { src: imgSrc, colSpan: "col-span-7", rowSpan: "row-span-1" },
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
      <div className="grid px-8 md:px-20 py-12 md:py-36 md:grid-cols-12 gap-4 md:auto-rows-[400px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden md:${img.colSpan} md:${img.rowSpan}`}
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
