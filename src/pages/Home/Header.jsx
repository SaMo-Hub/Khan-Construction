import React from 'react'
import { Button } from '../../components/Button'
import headerimg from '/public/img/headerimg.png'
export const Header = () => {
  return (
    <header>
    <div className="flex items flex-col md:flex-row gap-10 px-8 md:px-20 py-12 md:py-36">
      <div className="flex flex-col gap-12 justify-between ">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl md:text-5xl tracking-tighter font-bold">
            Nous façonnons le secteur de la construction
          </h1>
          <p className="md:text-xl">
            En tant qu'entreprise de construction de premier plan engagée
            envers l'excellence, nous apportons une richesse d'expérience et
            d'expertise à chaque projet.
          </p>
        </div>
        <Button text={"Demander un devis"} />
      </div>
      <div className="w-full md:w-[150vw] bg-black">
        <img src={headerimg} className='h-full w-full object-cover ' alt="L'image construction pour le header" />
      </div>
    </div>
  </header>  
  )
}
