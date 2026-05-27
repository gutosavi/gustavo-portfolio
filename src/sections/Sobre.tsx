import React from 'react'
import Container from '../components/Container'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'
import { cardAnimation, decorativeCardAnimation } from '../animations/animations'

const Sobre = () => {
  return (
    <Section classe={'section'} id={'sobre'}>
      <Container>
        <div className='layout-grid animate-show-left mb-10'>
          
          <div className='flex flex-col laptop:col-span-1'>
            <SectionTitle title={'Sobre mim'} style={{ width: "264px" }}/>
          </div>

          <motion.div 
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            className='relative p-10 laptop:col-span-full rounded-2xl bg-neutral-100 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden laptop:col-start-8'>

            <motion.div
              variants={decorativeCardAnimation} 
              className='absolute top-11.25 laptop:top-11.75 left-0 w-1 h-8 bg-linear-to-b
            from-primary-300
            to-primary-500'>
            </motion.div>
            
            <h2 className= 'text-5xl font-display font-bold text-primary-900 mb-10 laptop:text-6xl'>Aprendendo, evoluindo e construindo todos os dias<span className='text-primary-500'>.</span></h2>
            
            <div className='flex flex-col gap-4 text-primary-900 font-display text-lg leading-8 laptop:text-2xl'>
              <p>
                Sou um desenvolvedor front-end em formação, focado em <span className='text-primary-500'>JavaScript</span>, <span className='text-primary-500'>React</span>, <span className='text-primary-500'>TypeScript</span> e <span className='text-primary-500'>Tailwind CSS</span>, criando aplicações web modernas com foco em componentização, <span className='text-primary-500'>responsividade</span> e <span className='text-primary-500'>experiência do usuário</span>.
              </p>
              <p>
                Busco evoluir constantemente através de projetos práticos, unindo desenvolvimento técnico com organização, visão análitica e experiência em gestão.
              </p>
            </div>

          </motion.div>  
        </div>
      </Container>
    </Section>
  )
}

export default Sobre