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
            "Gérez-vous tous les aspects du processus de construction, y compris la conception et les permis de construire ?",
          paragraphe:
            "Oui, nous proposons une approche globale pour vos projets de construction. Notre équipe prend en charge l'intégralité de la prestation, des consultations initiales de conception et des permis de construire jusqu'à la construction et aux finitions finales. Nous travaillons en étroite collaboration avec vous pour concrétiser votre vision et nous nous chargeons des permis et approbations nécessaires.",
        },
        {
          title:
"Quel est le coût moyen de la construction d’une nouvelle maison ou de la réalisation d’une rénovation majeure ?",          paragraphe:
            "Les coûts varient en fonction de la taille, des matériaux et de la complexité du projet. Pour une construction neuve, les prix peuvent varier de 200 000 à plus de 400 000€, tandis que les rénovations importantes démarrent généralement autour de 50 000 £. Nous fournissons des devis détaillés et détaillés avant le début des travaux afin d'éviter toute mauvaise surprise.",
        },
        {
          title:
           "Êtes-vous capable de travailler dans le cadre d’un budget spécifique ?",
          paragraphe:
            "Absolument ! Nous comprenons que chaque client a un budget et nous nous efforçons de proposer des solutions abordables sans compromettre la qualité. Lors de la phase de planification, nous discuterons de votre budget et vous recommanderons les matériaux, les conceptions et les approches qui y correspondent, vous garantissant ainsi le meilleur rapport qualité-prix.",
        },
        {
          title:
           "Comment démarrer un projet de construction d’une nouvelle maison ou de rénovation ?",
          paragraphe:
            "Démarrer est simple ! Contactez-nous pour planifier une consultation où nous discuterons de votre vision, de votre budget et de votre calendrier. Nous vous accompagnerons tout au long du processus, de la planification et de la conception à la construction, et vous fournirons un plan d'action clair pour lancer votre projet.",
        },
       
      ];
      
      const [faqOpenIndex, setfaqOpenIndex] = useState(null);
     
      const toggle = (index) => {
        setfaqOpenIndex(faqOpenIndex === index ? null : index);
      };
  return (
    <section className="px-8 md:px-12 lg:px-24 py-12 md:py-16 lg:py-36 lg:grid grid-cols-2 gap-10">
    <div className="mb-24 md:mb-0">
      <h2 className=" text-4xl sm:text-5xl  tracking-tighter font-bold mb-1 md:mb-4">
        Question fréquamment posées
      </h2>
      <p className="lg:block hidden ">Quelles sont les questions que les clients se posent toujours ?</p>
    </div>
    <div className="flex mt-12 lg:mt flex-col gap-12">
      {faqList.map((item, index) => (
        <div
          key={index}
          onClick={() => toggle(index)}
          className="flex flex-col gap-2 cursor-pointer transition-all duration-300"
        >
          <div className="flex justify-between  items-center gap-12">
            <p className="text-lg w-full font-[600]">{item.title}</p>
            <div
              className={`${
                  faqOpenIndex === index ? "rotate-180" : "rotate-0"
                }  min-w-[26px] transition-transform duration-300  min-h-[26px] bg-primary rounded-full text-white flex items-center justify-center `}
            >
             
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>


            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              faqOpenIndex === index
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="tracking-tight py-2">{item.paragraphe}</p>
          </div>

          <hr className="border border-primary/70 rounded-full" />
        </div>
      ))}
    </div>
  </section>
        )
}
