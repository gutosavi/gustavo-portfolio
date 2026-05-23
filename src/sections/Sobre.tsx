import React from 'react'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

const Sobre = () => {
  return (
    <section>
      <Container>
        <div className='layout-grid'>
          <div className='flex flex-col gap-2.5'>
            <div className="w-4 h-0.5 laptop:w-14 laptop:h-1.5 bg-linear-to-r from-blue-300 to-blue-500" />
            <SectionTitle title={'Sobre mim'}/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Sobre