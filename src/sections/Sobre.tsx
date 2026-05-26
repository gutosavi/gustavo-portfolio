import React from 'react'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'

const Sobre = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='section'
      id='sobre'>
      <Container>
        <div className='layout-grid animate-show-left mb-10'>
          
          <div className='flex flex-col laptop:col-span-1'>
            <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }} 
            className="w-4 h-1 mb-2.5 laptop:w-14 laptop:h-1.5 bg-linear-to-r from-primary-300 to-primary-500" />
            <SectionTitle title={'Sobre mim'} style={{ width: "264px" }}/>
          </div>


          <div className='relative p-10 laptop:col-span-full rounded-2xl bg-neutral-100 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden laptop:col-start-8'>

            <div 
              className='absolute top-11.25 laptop:top-11.75 left-0 w-1 h-8 bg-linear-to-b
            from-primary-300
            to-primary-500'>
            </div>
            
            <h2 className= 'text-5xl font-display font-bold text-primary-900 mb-10 laptop:text-6xl'>Aprendendo, evoluindo e construindo todos os dias<span className='text-primary-500'>.</span></h2>
            
            <div className='flex flex-col gap-4 text-primary-900 font-display text-lg leading-8 laptop:text-2xl'>
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
    </motion.section>
  )
}

export default Sobre