import React from 'react'
import { Button } from '../../components/Button'

export const Header = () => {
  return (
    <header>
    <div className="flex flex-col md:flex-row gap-10 px-8 md:px-20 py-12 md:py-12">
      <div className="flex flex-col gap-12 justify-between ">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl md:text-6xl tracking-tighter font-bold">
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
      <div className="h-[491px] w-full bg-black"></div>
    </div>
  </header>  
  )
}
