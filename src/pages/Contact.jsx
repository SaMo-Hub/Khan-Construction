import React, { useState } from "react";
import { Button } from "../components/Button";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    files: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "files") {
      setFormData((prev) => ({
        ...prev,
        files: [...prev.files, ...Array.from(files)],
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const removeFile = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    alert("Message envoyé !");
    // Envoi à un serveur ou service ici (ex: EmailJS, API etc)
  };

  return (
    <div className="text-[#084527] font-inter bg-[#F5F5F0] pb-32">
      <header className="flex justify-center py-36">
        <h1 className="text-6xl text-center tracking-tighter font-bold">
          Vous avez des questions ?
          <span className="text-secondary"> <br /> Contactez-nous</span>
        </h1>
      </header>

      <section className="p-20">
        <form onSubmit={handleSubmit} className="gap-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
            {/* Nom & Email */}
            <div className="flex w-full h-full flex-col gap-12">
              <div className="flex flex-col gap-2">
                <label className="font-medium">Votre nom *</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Entrez votre nom"
                  className="border border-gray-300 p-3 "
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium">Votre email *</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Entrez votre email"
                  className="border border-gray-300 p-3 "
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 h-full">
              <label className="font-medium">Votre message *</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Entrez votre message"
                className="border border-gray-300 p-3  min-h-[120px] h-full"
              />
            </div>

            {/* Coordonnées */}
            <div className="order-3 md:order-2">
              <h3 className="font-semibold text-lg mb-4">Contactez-nous</h3>
              <p>
                Besoin d’aide pour votre projet ? Contactez-nous et l’un de
                nos experts vous rappellera !
              </p>
              <p className="mt-2">📍 Rue de Manville, Montgeron</p>
              <p className="underline">📧 support@khanconstruction.fr</p>
              <p className="underline">📞 07452090434</p>
            </div>

            {/* Upload fichiers */}
            <div className="flex flex-col gap-4 order-2 md:order-3">
              <label className="font-medium">Capture d’écran (facultatif)</label>

              <label
                htmlFor="file-upload"
                className="border border-dashed border-gray-400 p-4  cursor-pointer text-center bg-white text-gray-600 hover:bg-gray-100"
              >
                Cliquez ou déposez les fichiers pour les télécharger
              </label>

              <input
                id="file-upload"
                name="files"
                type="file"
                multiple
                className="hidden"
                onChange={handleChange}
              />

              {formData.files.length > 0 && (
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  {formData.files.map((file, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span className="truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="ml-2 cursor-pointer text-red-600 hover:text-red-800"
                      >
                        ❌
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <Button text={"Soumettre"} type="submit" />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};
