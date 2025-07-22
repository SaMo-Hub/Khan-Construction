import React, { useState } from "react";

export const Faq = () => {
      const faqList = [
        {
          title:
            "Combien de temps dure généralement un projet de rénovation de maison ou d’aménagement de combles ?",
          paragraphe:
            "La durée d'une rénovation ou d'un aménagement de combles dépend de l'ampleur du projet. Les petits projets, comme la rénovation d'une salle de bains, peuvent prendre quelques semaines, tandis que les rénovations ou aménagements de combles plus importants peuvent prendre plusieurs mois. Nous vous fournirons un calendrier détaillé lors de la phase de planification afin de vous donner une idée précise de ce à quoi vous attendre.",
        },
        {
          title:
            "Combien de temps dure généralement un projet de rénovation de maison ou d’aménagement de combles ?",
          paragraphe:
            "La durée d'une rénovation ou d'un aménagement de combles dépend de l'ampleur du projet. Les petits projets, comme la rénovation d'une salle de bains, peuvent prendre quelques semaines, tandis que les rénovations ou aménagements de combles plus importants peuvent prendre plusieurs mois. Nous vous fournirons un calendrier détaillé lors de la phase de planification afin de vous donner une idée précise de ce à quoi vous attendre.",
        },
        {
          title:
            "Combien de temps dure généralement un projet de rénovation de maison ou d’aménagement de combles ?",
          paragraphe:
            "La durée d'une rénovation ou d'un aménagement de combles dépend de l'ampleur du projet. Les petits projets, comme la rénovation d'une salle de bains, peuvent prendre quelques semaines, tandis que les rénovations ou aménagements de combles plus importants peuvent prendre plusieurs mois. Nous vous fournirons un calendrier détaillé lors de la phase de planification afin de vous donner une idée précise de ce à quoi vous attendre.",
        },
      ];
      
      const [faqOpenIndex, setfaqOpenIndex] = useState(null);
     
      const toggle = (index) => {
        setfaqOpenIndex(faqOpenIndex === index ? null : index);
      };
  return (
    <section className="px-8 md:px-20 py-12 md:py-36 lg:grid grid-cols-2 gap-10">
    <div className="mb-24 md:mb-0">
      <h2 className=" text-3xl md:text-5xl  tracking-tighter font-bold mb-1 md:mb-4">
        Question fréquamment posées
      </h2>
      <p>Quelles sont les questions que les clients se posent toujours ?</p>
    </div>
    <div className="flex flex-col gap-12">
      {faqList.map((item, index) => (
        <div
          key={index}
          onClick={() => toggle(index)}
          className="flex flex-col gap-2 cursor-pointer transition-all duration-300"
        >
          <div className="flex justify-between  items-center gap-12">
            <p className="text-lg w-full font-[600]">{item.title}</p>
            <div
              className={`w-[26px] h-[26px] bg-primary rounded-full text-white flex items-center justify-center `}
            >
              <p
                className={`w-[26px] flex items-center justify-center text-center transform transition-transform duration-300 ${
                  faqOpenIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

              </p>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              faqOpenIndex === index
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className=" py-2">{item.paragraphe}</p>
          </div>

          <hr className="border border-primary/70 rounded-full" />
        </div>
      ))}
    </div>
  </section>
        )
}
