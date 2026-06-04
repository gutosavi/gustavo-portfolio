import React from 'react';
import useNavBar from '../../hooks/useNavBar';
import Logo from '../ui/Logo';
import MenuMobile from './MenuMobile';
import ThemeToggleButton from '../theme/ThemeToggleButton';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const NavBar = () => {
  const { menuRef, buttonRef, isOpen, isScrolled, toggleMenu } = useNavBar();

  return (
    <header
      className="fixed top-0 left-0 px-4 z-50 h-20 w-full bg-white dark:bg-primary-800 transition-transform duration-300 ease-in-out"
      style={{
        transform: isScrolled ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      <div className="laptop:max-w-290 mx-auto">
        <div
          ref={menuRef}
          className="flex h-20 items-center justify-between bg-white dark:bg-primary-800"
        >
          <a href="/" className="cursor-pointer">
            <Logo className="w-36 laptop:w-44" />
          </a>

          <nav className="hidden laptop:block">
            <ul className="flex items-center gap-10">
              <li>
                <a
                  className="animation-menu text-primary-900 dark:text-primary-50 font-display text-lg"
                  href="#sobre"
                  aria-current="page"
                >
                  Sobre
                </a>
              </li>

              <li>
                <a
                  className="animation-menu text-primary-900 dark:text-primary-50 font-display text-lg"
                  href="#skills"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  className="animation-menu text-primary-900 dark:text-primary-50 font-display text-lg"
                  href="#projetos"
                >
                  Projetos
                </a>
              </li>

              <li>
                <a
                  className="animation-menu text-primary-900 dark:text-primary-50 font-display text-lg"
                  href="#contato"
                >
                  Contato
                </a>
              </li>
              <li>
                <ThemeToggleButton />
              </li>
            </ul>
          </nav>
          <div className="flex flex-row gap-2 laptop:hidden">
            <ThemeToggleButton />
            <button
              ref={buttonRef}
              className="flex items-center gap-2 px-1 font-display cursor-pointer font-bold text-primary-900 dark:text-primary-50 laptop:hidden"
              aria-label="Abrir menu"
              onClick={toggleMenu}
            >
              MENU
              {isOpen ? <RiCloseLine size={22} /> : <RiMenu3Line size={22} />}
            </button>
          </div>
        </div>

        <MenuMobile isOpen={isOpen} />
      </div>
    </header>
  );
};

export default NavBar;
