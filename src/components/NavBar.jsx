import React from 'react'
import logoTypo from "../assets/logoTypo.svg"
import { Button } from './Button'
import { Link, useLocation } from 'react-router-dom'

export const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { name: 'Service', path: '/service' },
    { name: 'Projet', path: '/projet' },
    { name: 'À Propos', path: '/propos' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className='text-primary font-medium flex justify-between items-center px-24 py-5 border-b border-dashed border-[#00000037]'>
      <Link to='/'>
        <img src={logoTypo} alt='Logo' />
      </Link>

      <ul className='flex gap-10'>
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

      <Button text='Demander un devis' />
    </div>
  );
};

