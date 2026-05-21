import React from 'react'
import Container from './Container';
import LogoSvg from '../assets/image/marca.svg';

const NavBar = () => {
  return (
    <header className='mt-10 mb-20'>
      <Container>
        <div className='layout-grid'>
          <div className='w-52 h-10 left-0 top-0'>
            <img src={LogoSvg} />
          </div>
          <nav className="col-start-9 w-79 h-11">
            <ul className='flex flex-row ml-5 gap-10'>
              <li className="w-16 h-10 left-0 top-0 justify-start text-primary-900 text-base font-normal font-display leading-10"><a href="#sobre">Sobre</a></li>
              <li className="w-20 h-10 left-[89px] top-0 justify-start text-primary-900 text-base font-normal font-display leading-10"><a href="#projetos">Projetos</a></li>
              <li className="w-16 h-10 left-[189px] top-0 justify-start text-primary-900 text-base font-normal font-display leading-10"><a href="#skills">Skills</a></li>
              <li className="w-16 h-10 left-[277px] top-[0.07px] justify-start text-primary-900 text-base font-normal font-display leading-10"><a href="#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default NavBar