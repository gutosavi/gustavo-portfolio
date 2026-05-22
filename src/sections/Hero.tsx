import React from 'react'
import HeroImg from '../assets/image/hero-img-2.jpg';
import Container from '../components/Container';
import Typewriter from '../components/Typewriter';

const Hero = () => {
  return (
    <section>
      <Container>
        <div className='layout-grid animate-show-left'>
          <img className="hidden laptop:block laptop:col-start-1 laptop:col-end-7 w-full h-full object-cover left-0 top-0 rounded-lg" src={HeroImg} />
            
            <div className='col-span-full pl-10
            laptop:pl-0
            laptop:row-start-1 laptop:col-end-13 laptop:col-span-5 flex flex-col gap-6'>
              <div className="relative w-11 h-12">
                <div className="absolute size-10 top-13 right-6.5 laptop:top-15 laptop:right-4 m-1 bg-primary-300" />
                <div className="absolute size-10 top-13 right-8.75 laptop:top-14.75 laptop:right-6.75 bg-primary-500" />
              </div>
              <h1 className="text-4xl w-96 mx-auto laptop:mx-0 laptop:w-full laptop:text-[55px] font-bold font-display leading-tight laptop:leading-16.25 text-primary-900 z-50">Desenvolvedor Front End React & TypeScript
              </h1>
              <Typewriter text={"Coonstruindo aplicações web modernas, responsivas e intuitivas."} />
            </div>

        </div>
      </Container>
    </section>
  )
}

export default Hero;