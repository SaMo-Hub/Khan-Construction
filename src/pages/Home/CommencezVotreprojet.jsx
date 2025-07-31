import React from 'react'
import { Button } from '../../components/Button'
import commencez from '/public/img/Home/commencez.png'
export const CommencezVotreprojet = () => {
  return (
   <section className="my-12 md:my-16 lg:my-36 bg-white mx-8 lg:mx-24 p-7 space-y-6 md:px-12 lg:px-24 md:py-20 gap-20 md:grid grid-cols-2">
        <div className="flex flex-col gap-12">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl ">
            Commençons votre projet ensemble, obtenez un devis gratuit dès
            aujourd'hui
          </h2>
          <Button text={"Demander un devis"} />
          {/* <div className="flex gap-12">
            <div className="hidden md:flex gap-4">
              <p>Travail professionnel</p>
            </div>
          </div> */}
        </div>
        <img className='w-full' src={commencez} alt="" />
      </section> 
  )
}
