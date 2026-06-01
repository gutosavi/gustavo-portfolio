import React from 'react';
import CodeIcon from '../assets/image/code-icon.svg';
import DataStorageIcon from '../assets/image/data-storage.svg';
import ServerIcon from '../assets/image/server.svg';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import Section from '../components/Section';
import Card from '../components/Card';
import { decorativeCardAnimation } from '../animations/animations';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <Section classe={'section'} id={'skills'}>
      <div className="relative overflow-hidden bg-neutral-100 dark:bg-primary-950 px-4 py-20">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            pointer-events-none
            absolute
            -top-20
            -right-20
            h-72
            w-72
            rounded-full
            bg-primary-400/5
            blur-3xl
          "
        />
        <Container>
          <div className="layout-grid">
            <div className="flex flex-col laptop:col-span-1 px-1">
              <SectionTitle title={'Skills'} style={{ width: '240px' }} />
            </div>

            <div className="flex flex-col gap-7 px-1 py-4 *:bg-primary-100 *:dark:bg-primary-900 *:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] laptop:col-span-full overflow-hidden laptop:col-start-8">
              <Card classe={'relative p-5 rounded-2xl'} delay={0.2}>
                <motion.div
                  variants={decorativeCardAnimation}
                  className="absolute top-7 left-0 w-1 h-8 bg-linear-to-b
                from-primary-300
                to-primary-500"
                ></motion.div>
                <img
                  src={CodeIcon}
                  className="w-16 h-12 text-primary-900 dark:bg-primary-50 mb-3.5"
                />
                <h2 className="text-primary-900 dark:text-primary-50 mb-2.5 font-display text-2xl font-bold leading-8">
                  Linguagens
                </h2>
                <p className="text-black dark:text-white text-2xl ">
                  JavaScript, TypeScript, React, Python
                </p>
              </Card>
              <Card classe={'relative p-5 rounded-2xl'} delay={0.4}>
                <motion.div
                  variants={decorativeCardAnimation}
                  className="absolute top-7 left-0 w-1 h-8 bg-linear-to-b
                from-primary-300
                to-primary-500"
                ></motion.div>
                <img
                  src={DataStorageIcon}
                  className="w-16 h-12 text-primary-900 dark:bg-primary-50 mb-3.5"
                />
                <h2 className="text-primary-900 dark:text-primary-50 mb-2.5 font-display text-2xl font-bold leading-8">
                  Databases
                </h2>
                <p className="text-black dark:text-white text-2xl ">
                  SQL, PostgreSQL
                </p>
              </Card>
              <Card classe={'relative p-5 rounded-2xl'} delay={0.6}>
                <motion.div
                  variants={decorativeCardAnimation}
                  className="absolute top-7 left-0 w-1 h-8 bg-linear-to-b
                from-primary-300
                to-primary-500"
                ></motion.div>
                <img
                  src={ServerIcon}
                  className="w-16 h-12 text-primary-900 dark:bg-primary-50 mb-3.5"
                />
                <h2 className="text-primary-900 dark:text-primary-50 mb-2.5 font-display text-2xl font-bold leading-8">
                  Server & APIs
                </h2>
                <p className="text-black dark:text-white text-2xl ">
                  Node.js, Rest APIs
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Skills;
