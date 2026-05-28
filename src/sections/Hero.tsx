import React from 'react'
import Section from '../components/Section';
import Container from '../components/Container';
import Typewriter from '../components/Typewriter';
import Decoration from '../components/Decoration';
import TerminalHeader from '../components/TerminalHeader';

const Hero = () => {

  return (
    <Section classe='section' id='hero'>
      <Container>
        <div className='layout-grid items-center animate-show-left'>
          <TerminalHeader />
            
          <div className='col-span-full mx-auto max-w-96 pl-5 pb-5
          laptop:pl-0
          laptop:row-start-1 laptop:col-end-13 laptop:col-span-5 flex flex-col gap-6'>
            <div className='laptop:my-20'>
              <Decoration />
              <h1 className="relative text-5xl w-96 mx-auto laptop:mx-0 laptop:w-full laptop:text-6xl font-bold font-display leading-tight laptop:leading-16.25 text-primary-900 laptop:z-49">Desenvolvedor Front End React & TypeScript
              </h1>
              <Typewriter className={'text-lg font-display h-15 laptop:text-lg font-bold leading-6 text-primary-600 mt-4 ml-1 laptop:mt-7'} text={"CConstruindo aplicações web modernas, responsivas e intuitivas."} />
            </div>
          </div>

        </div>
      </Container>
    </Section>
  )
}

export default Hero;