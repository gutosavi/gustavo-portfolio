import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="bg-primary-900 h-28 px-4 py-10">
      <Container>
        <div className="flex flex-row justify-between items-center">
          <div>
            <p className="text-neutral-100 text-[12px] laptop:text-xl font-bold font-display">
              © 2026 Gustavo Savi. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex flex-row gap-5 *:text-neutral-100">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/gustavo-savi"
            >
              <FaLinkedin className="size-5 laptop:size-7" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gutosavi"
            >
              <FaGithub className="size-5 laptop:size-7" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/gutosavi"
            >
              <FaInstagram className="size-5 laptop:size-7" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
