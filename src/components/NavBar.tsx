import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Container from './Container';
import LogoSvg from '../assets/image/marca.svg';

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className='mt-10 mb-20'>
      <Container>
        <div className='laptop:flex flex-row items-center'>
          <div className='flex flex-row justify-between items-center w-full'>
            <a className='cursor-pointer' href="/"><img className='w-36 laptop:w-44' src={LogoSvg} /></a>
            <button className='flex flex-row items-center gap-2 font-display font-bold text-primary-900 cursor-pointer laptop:hidden' onClick={() => setIsOpen(!isOpen)}>
              MENU
              {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
          <nav className="laptop:col-start-12 justify-self-end">
            <ul className='hidden laptop:flex flex-row ml-3 gap-10'>
              
              <li className="text-primary-900 text-lg font-display leading-10"><a className='animation-menu' href="#sobre">Sobre</a>
              </li>
              
              <li className="text-primary-900 text-lg font-display leading-10"><a className='animation-menu' href="#projetos">Projetos</a>
              </li>
              
              <li className="text-primary-900 text-lg font-display leading-10"><a className='animation-menu' href="#skills">Skills</a>
              </li>
              
              <li className="text-primary-900 text-lg  font-normal font-display leading-10"><a className='animation-menu' href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* menu mobile */}
        {isOpen && (
          <nav className={`
              laptop:hidden
              overflow-hidden
              transition-all
              duration-500
              ease-in-out

              backdrop-blur-md
              rounded-2xl

              ${isOpen
                ? "max-h-96 opacity-100 mt-8 p-6"
                : "max-h-0 opacity-0 p-0"}
            `}>
            <ul className="flex flex-col items-center gap-6 text-2xl">
              <li>
                <a className="animation-menu text-primary-900" href="#sobre">
                  Sobre
                </a>
              </li>

              <li>
                <a className="animation-menu text-primary-900" href="#projetos">
                  Projetos
                </a>
              </li>

              <li>
                <a className="animation-menu text-primary-900" href="#skills">
                  Skills
                </a>
              </li>

              <li>
                <a className="animation-menu text-primary-900" href="#contato">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          )
        }
      </Container>
    </header>
  )
}

export default NavBar