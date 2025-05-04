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
    <div className='text-[#084527] bg-[#F5F5F0]'>
      <header className="flex justify-center py-36">
        <h1 className="text-6xl text-center w-2/5 tracking-tighter font-bold">
          Certains de nos derniers
          <span className="text-secondary"> projets</span>
        </h1>
      </header>
      <section>
      <div className="grid px-20 py-36 grid-cols-12 gap-4 auto-rows-[400px]">
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
    </div>
  )
}
