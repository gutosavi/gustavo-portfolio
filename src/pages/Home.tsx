import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../sections/Hero'
import Sobre from '../sections/Sobre'
import Skills from '../sections/Skills'
import Projetos from '../sections/Projetos'
import Contato from '../sections/Contato'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Sobre />
        <Skills />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default Home