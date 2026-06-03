import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import MenuMobile from './MenuMobile';
import LogoSvg from '../../assets/image/marca.svg';
import ThemeToggleButton from '../theme/ThemeToggleButton';

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target;

      if (target instanceof HTMLElement) {
        const clickedMenu = menuRef.current?.contains(target);
        const clickedButton = buttonRef.current?.contains(target);

        if (!clickedButton && !clickedMenu) {
          setIsOpen(false);
          console.log(clickedButton, clickedMenu);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 px-4 z-50 h-20 w-full bg-white dark:bg-primary-800 transition-transform duration-300 ease-in-out"
      style={{
        transform: scrollY > 500 ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      <div className="laptop:max-w-290 mx-auto">
        <div
          ref={menuRef}
          className="flex h-20 items-center justify-between bg-white dark:bg-primary-800"
        >
          <a href="/" className="cursor-pointer">
            <img
              className="w-36 laptop:w-44 text-primary-900 dark:text-primary-50"
              src={LogoSvg}
              alt="Logo"
            />
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
              onClick={() => setIsOpen(!isOpen)}
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
