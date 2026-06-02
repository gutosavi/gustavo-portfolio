import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/contact/ContactForm';
import ContactIcon from '../components/ContactIcon';
import WhatsAppIcon from '../assets/image/whatsapp-icon.svg';
import LinkedinIcon from '../assets/image/linkedin-icon.svg';
// import EmailIcon from '../assets/image/mail-icon.svg';

const Contato = () => {
  return (
    <Section classe={'section'} id={'contato'}>
      <div className="relative overflow-hidden bg-neutral-100 dark:bg-primary-950 py-20">
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
            will-change-transform
          "
        />
        <Container>
          <div className="layout-grid px-4 laptop:px-0">
            <div className="flex flex-col laptop:col-span-1">
              <SectionTitle title={'Contato'} style={{ width: '195px' }} />
            </div>
            <div className="flex flex-col gap-7 p-1 laptop:col-span-full overflow-hidden laptop:col-start-8">
              <div className="flex flex-col gap-8 w-full">
                <h1 className="text-primary-900 dark:text-primary-50 text-[58px] font-bold font-display leading-15 py-2">
                  Vamos trabalhar juntos
                  <span className="text-primary-500 dark:text-primary-400">
                    ?
                  </span>
                </h1>
                <div className="w-10 h-1 bg-linear-to-b from-primary-300 to-primary-500" />
                <h2 className="text-primary-900 dark:text-primary-50 text-3xl font-bold font-display leading-8">
                  Tem um projeto em mente?
                </h2>
                <p className="text-primary-900 dark:text-primary-50 text-2xl font-normal font-display leading-8 py-2">
                  Estou disponível para projetos freelance, consultorias e
                  parcerias. Respondo geralmente em poucas horas. A forma mais
                  rápida é pelo WhatsApp.
                </p>
              </div>
              <div className="flex flex-col gap-8 w-full pt-15 pb-10">
                <ContactIcon
                  name="whatsapp"
                  contact="(54)981177415"
                  icon={WhatsAppIcon}
                  href={'https://api.whatsapp.com/send?phone=54981177415'}
                  delay={0.1}
                />

                {/* <ContactIcon
                  name="email"
                  contact="gutosavi@hotmail.com"
                  icon={EmailIcon}
                  href={'mailto:gutosavi@hotmail.com'}
                  delay={0.3}
                /> */}

                <ContactIcon
                  name="linkedin"
                  contact="www.linkedin.com/in/gustavo-savi"
                  icon={LinkedinIcon}
                  href="https://www.linkedin.com/in/gustavo-savi"
                  delay={0.5}
                />
              </div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Contato;
