import React from 'react'
import HeroImg from '../assets/image/hero-img-2.jpg';
import Container from '../components/Container';

const Hero = () => {
  return (
    <section>
      <Container>
        <div className='layout-grid'>
          <img className="col-start-1 col-end-6 w-115 h-130 left-0 top-0 rounded-lg" src={HeroImg} />
            
            <div className='row-start-1 col-start-7 flex flex-col gap-6'>
              <div className="relative w-11 h-12">
                <div className="size-10 left-[6px] top-[87px] absolute bg-primary-300" />
                <div className="size-10 left-0 top-[81px] absolute bg-primary-500" />
              </div>
              <div className="absolute w-125 h-60 mt-23 px-6 justify-start text-primary-900 text-6xl font-bold font-display leading-16.25">Desenvolvedor Front End React &amp; TypeScript
              </div>
              <div className="w-100 h-12 left-150 mt-80 px-6 justify-start text-primary-600 text-lg font-bold font-display leading-6">Construindo aplicações web modernas, responsivas e intuitivas.
              </div>  
            </div>

        </div>
      </Container>
    </section>
  )
}

export default Hero;