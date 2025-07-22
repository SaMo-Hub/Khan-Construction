import React, { useState } from 'react'
import logoTypo from "../assets/logoTypo.svg"
import { Button } from './Button'
import { Link, useLocation } from 'react-router-dom'
import { div } from 'framer-motion/client'

export const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { name: 'Service', path: '/service' },
    { name: 'Projet', path: '/projet' },
    { name: 'À Propos', path: '/propos' },
    { name: 'Contact', path: '/contact' }
  ];
  const [modal, setmodal] = useState(false)
  return (
    <div className='fixed z-20 bg-white w-full h-fit'>
    <div className='text-primary  bg-white   z- bg- z-40 relative font-medium flex justify-between items-center px-7 md:px-24 py-5 border-b border-dashed border-[#00000037]'>
     
      <Link to='/'>
        <img className='w-full h-full ' src={logoTypo} alt='Logo' />
      </Link>

      <ul className='hidden lg:flex gap-10'>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`pb-1 ${
                currentPath === link.path ? 'border-b-2 border-primary ' : ''
              }`}
              >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
<button onClick={()=> setmodal(!modal)} className=' lg:hidden flex'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

</button>
      <Button  style={"hidden lg:flex"} text='Demander un devis' />
        </div>
        <div className={`${modal ? "translate-y-[0px]" : "translate-y-[-320px]"} border-b border-dashed duration-500 border-[#00000037] transition-all top-16 absolute p-12 f text-primary flex md:hidden w-screen h-fit z-10 bg-white inset-0`}>
      <ul className=' z-30 relative md:hidden flex-col  flex gap-10'>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`pb-1 ${
                currentPath === link.path ? 'border-b-2 border-primary ' : ''
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

