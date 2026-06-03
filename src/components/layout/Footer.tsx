import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-900 dark:bg-primary-800 h-20 px-4 py-7 mx-auto">
      <div className="laptop:max-w-290">
        <div className="flex flex-row justify-between items-center">
          <div>
            <p className="text-neutral-100 dark:text-primary-50 text-[12px] laptop:text-xl font-bold font-display">
              © 2026 Gustavo Savi. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex flex-row gap-5 *:text-neutral-100 *:dark:text-primary-50">
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
      </div>
    </footer>
  );
};

export default Footer;
