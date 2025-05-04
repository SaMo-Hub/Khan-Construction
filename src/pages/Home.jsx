import { useState } from "react";
import { NavBar } from "../components/NavBar";
import { Button } from "../components/Button";
import imgSrc from "../../img.png";
export const Home = () => {
  const serviceList = [
    {
      img: "",
      title: "Constructions de maisons neuves",
      paragraphe:
        "Spécialisés dans la construction de maisons neuves, nous concrétisons votre rêve de devenir propriétaire d'une maison sur mesure. ",
    },
    {
      img: "",
      title: "Constructions de maisons neuves",
      paragraphe:
        "Spécialisés dans la construction de maisons neuves, nous concrétisons votre rêve de devenir propriétaire d'une maison sur mesure. ",
    },
  ];
  const avisList = [
    {
      name: "Annette Black",
      img: "",
      title: "Construction d’une nouvelle maison",
      paragraphe:
        "Construire une maison est un projet colossal, mais Constant a simplifié tout le processus. Ils ont été transparents quant au calendrier et au budget et nous ont tenus informés à chaque étape.",
    },
    {
      name: "jdjnfldfkg",
      img: "",
      title: "Construction d’une nouvelle maison",
      paragraphe:
        "Construire une maison est un projet colossal, mais Constant a simplifié tout le processus. Ils ont été transparents quant au calendrier et au budget et nous ont tenus informés à chaque étape.",
    },
    {
      name: "Annette Black",
      img: "",
      title: "Construction d’une nouvelle maison",
      paragraphe:
        "Construire une maison est un projet colossal, mais Constant a simplifié tout le processus. Ils ont été transparents quant au calendrier et au budget et nous ont tenus informés à chaque étape.",
    },
  ];
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
  const etapeList = [
    {
      title: "Fournir des solutions rapides",
      paragraphe:
        "Engager l'architecte pour traduire la vision du client en conceptions conceptuelles.",
    },
    {
      title: "Fournir des solutions rapides",
      paragraphe:
        "Engager l'architecte pour traduire la vision du client en conceptions conceptuelles.",
    },
  ];
  const [faqOpenIndex, setfaqOpenIndex] = useState(null);
  const [etapeOpenIndex, setetapeOpenIndex] = useState(0);

  const toggle = (index) => {
    setfaqOpenIndex(faqOpenIndex === index ? null : index);
  };
  const toggleEtape = (index) => {
    setetapeOpenIndex(etapeOpenIndex === index ? null : index);
  };

  return (
    <div className="font-inter tracking-tight text-[#084527] pb-20 bg-[#F5F5F0] ">
      <header>
        <div className="flex gap-10 px-20 py-36">
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col gap-7">
              <h1 className="text-6xl tracking-tighter font-bold">
                Nous façonnons le secteur de la construction
              </h1>
              <p className="text-xl">
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
      <hr className="border border-dashed border-[#00000037]" />
      <section className="py-36">
        <h2 className="text-5xl tracking-tighter font-bold  text-center mb-32">
          Construire l'excellence :
        </h2>
        <div className="relative  overflow-hidden flex gap-10">
          <div className="relative left-20 flex gap-10">
            {serviceList.map((item, index) => (
              <div id={index} className="relative h-[410px] ">
                <div className=" h-full  w-[800px] bg-amber-950">
                  <img
                    src={item.img}
                    alt="Illustration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 z-0"></div>
                </div>
                {/* Texte par-dessus l'image */}
                <div className="absolute bottom-0 flex flex-col gap-5 p-8 z-10 text-white">
                  <h3 className="text-2xl ">{item.title}</h3>
                  <p className="text-lg">{item.paragraphe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-20 py-36">
        <h2 className="text-5xl font-bold tracking-tighter  w-[708px] mb-32">
          Une équipe dévouée offrant{" "}
          <span className="text-[#FFB53B] ">des résultats exceptionnels.</span>
        </h2>

        <div className="grid grid-cols- grid-cols-[1.5fr_1fr] gap-20 h-full items-center">
          <img
            className="w-[708px] colspan-2 h-[708px] object-cover  "
            src={imgSrc}
            alt=""
          />

          {/* <div className="w-[708px] h-[708px] bg-black  "></div> */}
          <div className="flex flex-col  gap-16">
            {etapeList.map((item, index) => (
              <div
                id={index}
                onClick={() => toggleEtape(index)}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[30px] h-[30px] bg-primary/20 rounded-full "></div>
                  <p className="text-xl">{item.title} </p>
                </div>
                <div
                  className={` ${
                    etapeOpenIndex === index ? "block" : "hidden"
                  }`}
                >
                  <p className=" py-2">{item.paragraphe}</p>
                </div>
                <hr className="border-2  text-primary/40 rounded-full " />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" py-36">
        <h2 className="text-5xl tracking-tighter font-bold  text-center mb-32">
          Certains de nos derniers projets
        </h2>
        <div className=" overflow-hidden relative">
          <div className="flex relative  gap-10">
            <img
              className="w-[493px] h-[317px] object-cover  "
              src={imgSrc}
              alt=""
            />
            <img
              className="w-[493px] h-[317px] object-cover  "
              src={imgSrc}
              alt=""
            />
            <img
              className="w-[493px] h-[317px] object-cover  "
              src={imgSrc}
              alt=""
            />
            <img
              className="w-[493px] h-[317px] object-cover  "
              src={imgSrc}
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex justify-center mt-20 items-center">
          <Button text={"Demander un devis"} />
        </div>
      </section>
      <section className="px-20 py-36">
        <h2 className="text-5xl tracking-tighter font-bold  w-[708px] mb-32">
          Approuvé par
          <span className="text-[#FFB53B] "> les familles</span> et les{" "}
          <span className="text-[#FFB53B] ">petites entreprises</span>
        </h2>
        <div className="text-white grid grid-cols-3 gap-10">
          {avisList.map((item, index) => (
            <div className="bg-[#2E2E2E] p-8 flex flex-col gap-14 ">
              <div className="flex flex-col gap-8">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p>{item.paragraphe}</p>
              </div>
              <div className="flex gap-4">
                <img className="w-7 h-7 rounded-full" src={imgSrc} alt="" />
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-20 py-36 grid grid-cols-2 gap-10">
        <div>
          <h2 className="text-5xl tracking-tighter font-bold  mb-12">
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
                <p className="text-lg font-semibold">{item.title}</p>
                <div
                  className={`w-[26px] h-[26px] bg-primary rounded-full text-white flex items-center justify-center `}
                >
                  <p
                    className={`transform transition-transform duration-300 ${
                      faqOpenIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {"<"}
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
      <section className="bg-white mx-20 px-18 py-20 gap-20 grid grid-cols-2">
        <div className="flex flex-col gap-12">
          <h2 className="font-bold text-5xl">
            Commençons votre projet ensemble, obtenez un devis gratuit dès
            aujourd'hui
          </h2>
          <Button text={"Demander un devis"} />
          <div className="flex gap-12">
            <div className="flex gap-4">
              <p>Travail professionnel</p>
            </div>
          </div>
        </div>
        <img src={imgSrc} alt="" />
      </section>
    </div>
  );
};
