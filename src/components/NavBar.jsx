import React from 'react'
import logoTypo from "../assets/logoTypo.svg"
import { Button } from './Button'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-24 py-5 border-b border-dashed border-[#00000037] '>
        <Link to={'/'}>
        <img src={logoTypo} alt="fdd" />
        </Link>
        <ul className='flex gap-10'>
            <li>
              <Link to={"./service"}>
              Service
              </Link>
            </li>
            <li>
              <Link to={"./projet"}>
              Projet
              </Link>
            </li>
            <li>
              <Link to={"./propos"}>
              à Propos
              </Link>
            </li>
            <li>
              <Link to={"./contact"}>
                Contact
              </Link>
            </li>
           
        </ul>
        <Button text={"Demander un devis"}/>
    </div>
  )
}

