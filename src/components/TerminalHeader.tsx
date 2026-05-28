import React from 'react'
import { motion } from 'framer-motion';
import Typewriter from './Typewriter'

const TerminalHeader = () => {
  const [typingDone, setTypingDone] = React.useState(false);

  return (
      <motion.div
        className='
          hidden
          relative
          isolate
          laptop:block
          laptop:col-start-2
          w-100
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
          backdrop-blur-xl' 
          aria-hidden='true'>
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
        <div className='flex flex-row items-center gap-2.5 p-5 border-b border-white/10 rounded-t-lg'>
          <div className='size-2.5 bg-red-400 rounded-full' />
          <div className='size-2.5 bg-amber-400 rounded-full'/>
          <div className='size-2.5 bg-green-500 rounded-full'/>
        </div>
        <div>
          <div className='grid grid-cols-1 gap-2 p-5'>
            <Typewriter text='nnpm run start' className='text-[14px] font-mono text-green-400/90 tracking-wide' onComplete={() => setTypingDone(true)} speed={100} />
            <div>terminal linha</div>
            <div>terminal linha</div>
          </div>
        </div>
      </motion.div>
  )
}

export default TerminalHeader