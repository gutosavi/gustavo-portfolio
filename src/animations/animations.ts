import type { Variants } from 'framer-motion';

// Variants para biblioteca motions
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
    },
  },
};

export const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.4,
      delay,
      ease: 'easeIn',
    },
  }),

  hover: {
    y: -5,

    transition: {
      duration: 0.2,
    },
  },
};

export const tagAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },

  hover: {
    y: -2,
    scale: 1.05,

    transition: {
      duration: 0.2,
    },
  },
};

export const decorativeCardAnimation: Variants = {
  initial: {
    scaleY: 1,
    opacity: 0.9,
  },

  hover: {
    scaleY: 1.4,
    opacity: 1,

    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};
