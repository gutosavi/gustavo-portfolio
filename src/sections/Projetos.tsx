import React from 'react'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import { motion } from 'framer-motion'

const Projetos = () => {
  return (
    <Section classe={'section'} id={'projetos'}>
      <Container>
        <div className='flex flex-col laptop:col-span-1'>
            <SectionTitle title={'Projetos'} style={{ width: "200px" }}/>
        </div>
      </Container>
    </Section>
  )
}

export default Projetos