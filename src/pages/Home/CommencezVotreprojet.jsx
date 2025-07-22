import React from 'react'
import { Button } from '../../components/Button'
import commencez from '/public/img/commencez.png'
export const CommencezVotreprojet = () => {
  return (
   <section className="bg-white mx-8 md:mx-20 p-8 md:px-18 md:py-20 gap-20 md:grid grid-cols-2">
        <div className="flex flex-col gap-12">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl ">
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
        <img src={commencez} alt="" />
      </section> 
  )
}
