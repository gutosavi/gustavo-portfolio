import React from 'react';

interface MenuMobileProp {
  isOpen: boolean;
}

const MenuMobile = ({ isOpen }: MenuMobileProp) => {
  return (
    <nav
      className={`
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            z-50
            w-full
            
            laptop:hidden
            overflow-hidden
            transition-all
            duration-500
            ease-in-out

            backdrop-blur-md
            rounded-2xl
            shadow-xl

            ${isOpen ? 'max-h-96 opacity-100 p-6' : 'max-h-0 opacity-0 p-0'}
          `}
    >
      <ul className="flex flex-col items-center gap-6 text-2xl">
        <li>
          <a
            className="animation-menu text-primary-900 font-display"
            href="#sobre"
          >
            Sobre
          </a>
        </li>

        <li>
          <a
            className="animation-menu text-primary-900 font-display"
            href="#skills"
          >
            Skills
          </a>
        </li>

        <li>
          <a
            className="animation-menu text-primary-900 font-display"
            href="#projetos"
          >
            Projetos
          </a>
        </li>

        <li>
          <a
            className="animation-menu text-primary-900 font-display"
            href="#contato"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMobile;
