import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from './Typewriter';

const TerminalHeader = () => {
  const [typingDone, setTypingDone] = React.useState(false);
  const [visibleItems, setVisibleItems] = React.useState(0);

  const fadeStyle = (index: number): React.CSSProperties => ({
    opacity: visibleItems >= index ? 1 : 0,
    transform: visibleItems >= index ? 'translateY(0)' : 'translateY(8px)',
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  });

  React.useEffect(() => {
    const totalItens = 5;

    if (!typingDone) return;
    if (visibleItems >= totalItens) return;

    const timer = setTimeout(() => {
      setVisibleItems((prev) => prev + 1);
    }, 500);

    return () => clearTimeout(timer);
  }, [typingDone, visibleItems]);

  return (
    <motion.div
      className="
          mx-auto
          relative
          isolate
          w-90
          laptop:block
          laptop:col-start-2
          laptop:w-100
          h-72
          my-5
          rounded-2xl
          border
          border-white/10
          bg-[#0B1110]/95
          text-[12px]
          font-mono
          text-white
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
          tracking-wide"
      aria-hidden="true"
    >
      <div
        className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_70%)]
            blur-3xl
          "
      />
      <div className="flex flex-row items-center gap-2.5 p-5 border-b border-white/10 rounded-t-lg">
        <div className="size-2.5 bg-red-400 rounded-full" />
        <div className="size-2.5 bg-amber-400 rounded-full" />
        <div className="size-2.5 bg-green-500 rounded-full" />
      </div>
      <div>
        <div className="grid grid-cols-1 gap-2 p-5">
          <Typewriter
            text="$$ npm run start"
            className="text-[14px] font-mono text-green-400/90"
            onComplete={() => setTypingDone(true)}
            speed={100}
          />
          <div className="text-neutral-300" style={fadeStyle(1)}>
            <span>&gt;</span>
            <span> vite v7.0 ready in 320ms</span>
          </div>
          <div className="text-neutral-300" style={fadeStyle(2)}>
            <span className="text-green-400">✓</span>
            <span className="text-neutral-300">
              {' '}
              TypeScript compiled successfully
            </span>
          </div>
          <div style={fadeStyle(3)}>
            <span className="text-green-400">✓</span>
            <span className="text-neutral-300"> API connected</span>
          </div>
          <div style={fadeStyle(4)}>
            <span className="text-green-400">✓</span>
            <span className="text-neutral-300"> Components rendered</span>
          </div>
          <div style={fadeStyle(5)}>
            <span className="text-green-400">✓</span>
            <span className="text-neutral-300"> Portfolio deployed at </span>
            <span className="text-primary-400">gustavosavi.dev</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalHeader;
