import React from 'react'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

const Sobre = () => {
  return (
    <section>
      <Container>
        <div className='relative layout-grid animate-show-left'>
          
          <div className="
            absolute

            laptop:-left-6
            laptop:top-10

            tablet:-left-4
            tablet:top-8

            -left-2
            top-6

            w-14
            h-1.5

            rotate-90
            rounded-full

            bg-linear-to-r
            from-blue-300
            to-blue-500
          " />

          <div className='flex flex-col laptop:col-span-1'>
            <div className="w-4 h-1 mb-2.5 laptop:w-14 laptop:h-1.5 bg-linear-to-r from-blue-300 to-blue-500" />
            <SectionTitle title={'Sobre mim'}/>
          </div>

          <div className='laptop:col-span-full mx-auto max-w-140 rounded-2xl bg-neutral-200 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden laptop:col-start-8'>
            
            <h2 className= 'm-10 text-5xl font-display font-bold text-primary-900 mb-10 laptop:text-6xl'>Aprendendo, evoluindo e construindo todos os dias<span className='text-primary-500'>.</span></h2>
            
            <div className='flex flex-col gap-4 m-10 text-primary-900 font-display text-lg leading-8 laptop:text-2xl'>
              <p>
                Sou um desenvolvedor front-end em formação, focado em <span className='text-primary-500'>JavaScript</span>, <span className='text-primary-500'>React</span>, <span className='text-primary-500'>TypeScript</span> e <span className='text-primary-500'>Tailwind CSS</span>, criando aplicações web modernas com foco em componentização, <span className='text-primary-500'>responsividade</span> e <span className='text-primary-500'>experiência do usuário</span>.
              </p>
              <p>
                Busco evoluir constantemente através de projetos práticos, unindo desenvolvimento técnico com organização, visão análitica e experiência em gestão.
              </p>
            </div>

          </div>  
        </div>
      </Container>
    </section>
  )
}

export default Sobre