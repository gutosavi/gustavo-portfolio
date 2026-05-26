import React from 'react'
import CodeIcon from '../assets/image/code-icon.svg'
import DataStorageIcon from '../assets/image/data-storage.svg'
import ServerIcon from '../assets/image/server.svg'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }} 
      className='section'
      id='skills'>
      
      <div className='bg-neutral-100 py-10'>
        <Container>
          <div className='layout-grid'>
            <div className='flex flex-col laptop:col-span-1'>
              <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-4 h-1 mb-2.5 laptop:w-14 laptop:h-1.5 bg-linear-to-r from-primary-300 to-primary-500" />
              <SectionTitle title={'Skills'} width={60}/>
            </div>

            <div className='flex flex-col gap-7 p-1 *:bg-blue-100 *:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] laptop:col-span-full overflow-hidden laptop:col-start-8'>
              <div className='relative p-5 rounded-2xl'>
                <div 
                className='absolute top-7 left-0 w-1 h-8 bg-linear-to-b
              from-primary-300
              to-primary-500'>
                </div>
                <img src={CodeIcon} className='w-16 h-12 text-primary-900 mb-3.5'/>
                <h2 className='text-primary-900 mb-2.5 font-display text-2xl font-bold leading-8'>Linguagens</h2>
                <p className='text-black text-2xl '>JavaScript, TypeScript, React, Python</p>
              </div>
              <div className='relative p-5 rounded-2xl'>
                <div 
                className='absolute top-7 left-0 w-1 h-8 bg-linear-to-b
              from-primary-300
              to-primary-500'>
                </div>
                <img src={DataStorageIcon} className='w-16 h-12 text-primary-900 mb-3.5'/>
                <h2 className='text-primary-900 mb-2.5 font-display text-2xl font-bold leading-8'>Databases</h2>
                <p className='text-black text-2xl '>SQL, PostgreSQL</p>
              </div>
              <div className='relative p-5 rounded-2xl'>
                <div 
                className='absolute top-7 left-0 w-1 h-8 bg-linear-to-b
              from-primary-300
              to-primary-500'>
                </div>
                <img src={ServerIcon} className='w-16 h-12 text-primary-900 mb-3.5'/>
                <h2 className='text-primary-900 mb-2.5 font-display text-2xl font-bold leading-8'>Server & APIs</h2>
                <p className='text-black text-2xl '>Node.js, Rest APIs</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
     
    </motion.section  >
  )
}

export default Skills