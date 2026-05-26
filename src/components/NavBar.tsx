import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Container from './Container';
import LogoSvg from '../assets/image/marca.svg';
import MenuMobile from './MenuMobile';

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className='mt-10 mb-20 relative'>
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

              <li className="text-primary-900 text-lg font-display leading-10"><a className='animation-menu' href="#skills">Skills</a>
              </li>
              
              <li className="text-primary-900 text-lg font-display leading-10"><a className='animation-menu' href="#projetos">Projetos</a>
              </li>
              
              
              <li className="text-primary-900 text-lg  font-display leading-10"><a className='animation-menu' href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* menu mobile */}
        <MenuMobile isOpen={isOpen} />
      </Container>
    </header>
  )
}

export default NavBar