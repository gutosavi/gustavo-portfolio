import React from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Container from '../components/Container';
import Card from '../components/Card';
import Tags from '../components/Tags';
import { motion } from 'framer-motion';
import { decorativeCardAnimation } from '../animations/animations';
import { RiGithubLine, RiArrowRightUpLine } from 'react-icons/ri';
import LinkCard from '../components/LinkCard';

const Projetos = () => {
  return (
    <Section classe={'section'} id={'projetos'}>
      <Container>
        <div className="layout-grid">
          <div className="flex flex-col laptop:col-span-1 px-1">
            <SectionTitle title={'Projetos'} style={{ width: '200px' }} />
          </div>

          <div className="flex flex-col gap-7 px-1 py-4 *:bg-neutral-100 *:dark:bg-primary-950 *:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] laptop:col-span-full overflow-hidden laptop:col-start-8">
            <Card
              classe="group relative rounded-2xl border border-neutral-200 p-5 transition-all duration-300 hover:border-primary-300"
              delay={0.2}
            >
              <motion.div
                variants={decorativeCardAnimation}
                className="absolute top-6 left-0 h-8 w-1 bg-linear-to-b from-primary-300 to-primary-500"
              />

              <div className="transition-transform duration-300 group-hover:scale-[1.01]">
                <h2 className="mb-1.5 font-display text-2xl font-bold leading-8 text-primary-900 dark:text-primary-50">
                  Movies App
                </h2>

                <p className="text-sm text-primary-900 dark:text-primary-50">
                  Aplicação web desenvolvida com React + TypeScript para busca e
                  navegação de filmes
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-sm">
                  <Tags text="JavaScript" />
                  <Tags text="React" />
                  <Tags text="HTML" />
                  <Tags text="CSS" />
                  <Tags text="API Rest" />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6 border-t border-neutral-200 pt-4">
                <LinkCard
                  href="https://github.com/gutosavi/react-movies-app"
                  text="GitHub"
                  icon={RiGithubLine}
                />
                <LinkCard
                  href="https://github.com/gutosavi/react-movies-app"
                  text="Live Demo"
                  icon={RiArrowRightUpLine}
                />
              </div>
            </Card>

            <Card
              classe="group relative rounded-2xl border border-neutral-200 p-5 transition-all duration-300 hover:border-primary-300"
              delay={0.2}
            >
              <motion.div
                variants={decorativeCardAnimation}
                className="absolute top-6 left-0 h-8 w-1 bg-linear-to-b from-primary-300 to-primary-500"
              />

              <div className="transition-transform duration-300 group-hover:scale-[1.01]">
                <h2 className="mb-1.5 font-display text-2xl font-bold leading-8 text-primary-900 dark:text-primary-50">
                  To Do List - React
                </h2>

                <p className="text-sm text-primary-900 dark:text-primary-50">
                  Projeto desenvolvido em React, com temperatura atual baseada
                  na localização do usuário, além de modo claro/escuro
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-sm">
                  <Tags text="JavaScript" />
                  <Tags text="React" />
                  <Tags text="HTML" />
                  <Tags text="CSS" />
                  <Tags text="API Rest" />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6 border-t border-neutral-200 pt-4">
                <LinkCard
                  href="https://github.com/gutosavi/react-to-do-list"
                  text="GitHub"
                  icon={RiGithubLine}
                />
                <LinkCard
                  href="https://github.com/gutosavi/react-to-do-list"
                  text="Live Demo"
                  icon={RiArrowRightUpLine}
                />
              </div>
            </Card>

            <Card
              classe="group relative rounded-2xl border border-neutral-200 p-5 transition-all duration-300 hover:border-primary-300"
              delay={0.2}
            >
              <motion.div
                variants={decorativeCardAnimation}
                className="absolute top-6 left-0 h-8 w-1 bg-linear-to-b from-primary-300 to-primary-500"
              />

              <div className="transition-transform duration-300 group-hover:scale-[1.01]">
                <h2 className="mb-1.5 font-display text-2xl font-bold leading-8 text-primary-900 dark:text-primary-50">
                  Consulta CEP
                </h2>

                <p className="text-sm text-primary-900 dark:text-primary-50">
                  Aplicação web para consulta de endereços a partir de um CEP
                  utilizando consumo de API pública
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-sm">
                  <Tags text="JavaScript" />
                  <Tags text="HTML" />
                  <Tags text="CSS" />
                  <Tags text="API Rest" />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6 border-t border-neutral-200 pt-4">
                <LinkCard
                  href="https://github.com/gutosavi/busca-cep"
                  text="GitHub"
                  icon={RiGithubLine}
                />
                <LinkCard
                  href="https://github.com/gutosavi/busca-cep"
                  text="Live Demo"
                  icon={RiArrowRightUpLine}
                />
              </div>
            </Card>

            <Card
              classe="group relative rounded-2xl border border-neutral-200 p-5 transition-all duration-300 hover:border-primary-300"
              delay={0.2}
            >
              <motion.div
                variants={decorativeCardAnimation}
                className="absolute top-6 left-0 h-8 w-1 bg-linear-to-b from-primary-300 to-primary-500"
              />

              <div className="transition-transform duration-300 group-hover:scale-[1.01]">
                <h2 className="mb-1.5 font-display text-2xl font-bold leading-8 text-primary-900 dark:text-primary-50">
                  CRUD Tarefas
                </h2>

                <p className="text-sm text-primary-900 dark:text-primary-50">
                  Um aplicativo de gerenciamento de tarefas (CRUD) desenvolvido
                  em JavaScript puro
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-sm">
                  <Tags text="JavaScript" />
                  <Tags text="HTML" />
                  <Tags text="CSS" />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6 border-t border-neutral-200 pt-4">
                <LinkCard
                  href="https://github.com/gutosavi/CRUD-Tarefas"
                  text="GitHub"
                  icon={RiGithubLine}
                />
                <LinkCard
                  href="https://github.com/gutosavi/CRUD-Tarefas"
                  text="Live Demo"
                  icon={RiArrowRightUpLine}
                />
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Projetos;
