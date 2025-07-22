import React from "react";
// import logo from "../assets/logoTypo.svg";
import logo from "/public/img/logotypowhite.svg";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="font-inter flex-col flex  gap-12 bg-[#00190D] p-8 md:p-20 text-white ">
      <div className="flex md:flex-row flex-col justify-between gap-20 ">
        <div className="flex flex-col gap-4">
          <img src={logo} alt="" />
          <p>Construire des rêves, une brique à la fois.</p>
        </div>
        <div className="flex flex-wrap w-fit gap-20">
          <div className="flex flex-col gap-3">
            <h5 className="text-white/40">Liens rapides</h5>
            <div className="flex flex-col gap-2">
              <p>Projets</p>
              <p>A Propos</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-white/40">Liens rapides</h5>
            <div className="flex flex-col gap-2">
              <p>Projets</p>
              <p>A Propos</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-white/40">Liens rapides</h5>
            <div className="flex flex-col gap-2">
              <p>Projets</p>
              <p>A Propos</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-dashed text-white/20 border" />
      <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between">
        <p cl>© KhanContruction, Inc. 2025</p>
        <div className="md:flex-row flex-col flex gap-4">
          <Link>Politique de confidentialité</Link>
          <Link>Conditions générales </Link>
        </div>
      </div>
    </div>
  );
};
