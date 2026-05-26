import React from 'react'
import HeroImg from '../assets/image/hero-img-2.jpg';
import Container from '../components/Container';
import Typewriter from '../components/Typewriter';
import Decoration from '../components/Decoration';

const Hero = () => {
  return (
    <section className='section'>
      <Container>
        <div className='layout-grid animate-show-left'>
          <img className="hidden laptop:block laptop:col-start-1 laptop:col-end-7 w-full h-full object-cover left-0 top-0 rounded-lg" src={HeroImg} />
            
          <div className='col-span-full mx-auto max-w-96 pl-5 pb-5
          laptop:pl-0
          laptop:row-start-1 laptop:col-end-13 laptop:col-span-5 flex flex-col gap-6'>
            <div className='laptop:mt-20'>
              <Decoration />
              <h1 className="relative text-5xl w-96 mx-auto laptop:mx-0 laptop:w-full laptop:text-6xl font-bold font-display leading-tight laptop:leading-16.25 text-primary-900 laptop:z-50">Desenvolvedor Front End React & TypeScript
              </h1>
              <Typewriter text={"Coonstruindo aplicações web modernas, responsivas e intuitivas."} />
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Hero;