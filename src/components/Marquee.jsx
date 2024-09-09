import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"className='w-full py-20 bg-[#004D43] rounded-tl-3xl  rounded-tr-3xl'>
        <div className='border-t-2 border-b-2 border-gray-500 '>
      <div className="text  flex font-bold whitespace-nowrap overflow-hidden ">
        {/* <h1 className='text- [10vw] leading-none'> We are ochi </h1> */}
        <motion.h1 intial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:3}} className='text-[18vw] leading-none uppercase mb-[3vw] pb-2 tracking-tighter pr-20 '> We are ochi </motion.h1>
        <motion.h1 intial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:3}} className='text-[18vw] leading-none uppercase mb-[3vw] pb-2 tracking-tighter  pr-20 '> We are ochi </motion.h1>
        <motion.h1 intial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:3}}  className='text-[18vw] leading-none uppercase mb-[3vw] pb-2 tracking-tighter  pr-20 '> We are ochi </motion.h1>
       </div>
       </div>
    </div>
  )
}

export default Marquee
