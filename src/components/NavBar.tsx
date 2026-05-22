import React from 'react'
import Container from './Container';
import LogoSvg from '../assets/image/marca.svg';

const NavBar = () => {
  return (
    <header className='mt-10 mb-20'>
      <Container>
        <div className='layout-grid items-center'>
          <div className='w-36 tablet:w-44'>
            <img src={LogoSvg} />
          </div>
          <nav className="col-start-12 justify-self-end">
            <ul className='hidden tablet:flex flex-row ml-3 gap-10'>
              <li className="text-primary-900 text-base font-normal font-display leading-10"><a className='animation-menu' href="#sobre">Sobre</a></li>
              <li className="text-primary-900 text-base font-normal font-display leading-10"><a className='animation-menu' href="#projetos">Projetos</a></li>
              <li className="text-primary-900 text-base font-normal font-display leading-10"><a className='animation-menu' href="#skills">Skills</a></li>
              <li className="text-primary-900 text-base font-normal font-display leading-10"><a className='animation-menu' href="#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default NavBar