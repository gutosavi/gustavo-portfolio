import React from 'react';
import NavBar from '../components/layout/NavBar';
import Hero from '../sections/Hero';
import Sobre from '../sections/Sobre';
import Skills from '../sections/Skills';
import Projetos from '../sections/Projetos';
import Contato from '../sections/Contato';
import Footer from '../components/layout/Footer';
import ScrollProgress from '../components/ui/ScrollProgress';

const Home = () => {
  return (
    <>
      <ScrollProgress />
      <div
        className="
          min-h-screen
          bg-white
          dark:bg-primary-950"
      >
        <NavBar />
        <main>
          <Hero />
          <Sobre />
          <Skills />
          <Projetos />
          <Contato />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
