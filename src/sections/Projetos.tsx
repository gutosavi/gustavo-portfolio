import React from 'react'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import { motion } from 'framer-motion'
import AnimationCard from '../components/AnimationCard'
import Tags from '../components/Tags'

const Projetos = () => {
  return (
    <Section classe={'section'} id={'projetos'}>
      <Container>
        <div className='layout-grid mb-10'>
          
          <div className='flex flex-col laptop:col-span-1'>
              <SectionTitle title={'Projetos'} style={{ width: "200px" }}/>
          </div>

          <div className='flex flex-col gap-7 p-2 *:bg-neutral-100 *:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] laptop:col-span-full overflow-hidden laptop:col-start-8'>
            <AnimationCard classe={'relative p-5 rounded-2xl'} delay={0.2}>
              <h2 className='text-primary-900 mb-1.5 font-display text-2xl font-bold leading-8'>Movies App</h2>
              <p className='text-primary-900 text-sm'>Aplicação web desenvolvida com React + TypeScript para busca e navegação de filmes</p>
              <div className='flex flex-row gap-2 mt-6 text-sm'>
                <Tags text={'JavaScript'}></Tags>
                <Tags text={'React'}></Tags>
                <Tags text={'TypeScript'}></Tags>
                <Tags text={'CSS'}></Tags>
                <Tags text={'API Rest'}></Tags>
              </div>
            </AnimationCard>

          </div>

        </div>
      </Container>
    </Section>
  )
}

export default Projetos