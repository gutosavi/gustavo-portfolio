import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Container from './Container';
import MenuMobile from './MenuMobile';
import LogoSvg from '../assets/image/marca.svg';

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
      className="fixed top-0 left-0 px-4 z-50 h-20 w-full bg-white transition-transform duration-300 ease-in-out"
      style={{
        transform: scrollY > 500 ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      <Container>
        <div
          ref={menuRef}
          className="flex h-20 items-center justify-between bg-white"
        >
          <a href="/" className="cursor-pointer">
            <img className="w-36 laptop:w-44" src={LogoSvg} alt="Logo" />
          </a>

          <nav className="hidden laptop:block">
            <ul className="flex items-center gap-10">
              <li>
                <a
                  className="animation-menu text-primary-900 font-display text-lg"
                  href="#sobre"
                >
                  Sobre
                </a>
              </li>

              <li>
                <a
                  className="animation-menu text-primary-900 font-display text-lg"
                  href="#skills"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  className="animation-menu text-primary-900 font-display text-lg"
                  href="#projetos"
                >
                  Projetos
                </a>
              </li>

              <li>
                <a
                  className="animation-menu text-primary-900 font-display text-lg"
                  href="#contato"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <button
            ref={buttonRef}
            className="flex items-center gap-2 px-2 font-display cursor-pointer font-bold text-primary-900 laptop:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            MENU
            {isOpen ? <RiCloseLine size={22} /> : <RiMenu3Line size={22} />}
          </button>
        </div>

        <MenuMobile isOpen={isOpen} />
      </Container>
    </header>
  );
};

export default NavBar;
