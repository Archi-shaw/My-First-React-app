import { motion } from 'framer-motion';
import React from 'react'
import {FaLongArrowAltUp} from "react-icons/fa";

function landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>
      <div className="textstructure mt-20 px-6">
        {[" We create "," eye-opening","presentations"].map((item, index)=>{
             return  ( 
             <div  className="masker">
            <div className='w-fit flex items-center'>
                {index ===  1 && (<motion.div initial={{ width:0 }} 
                animate={{ width:" 9vw"}}
                transition={{ease:[0.76, 0, 0.24, 1],duration:1}}className="w-[9vw] h-[5.5vw] bg-red-700 relative top-[.4vw] "></motion.div>)}
             <h1 className=" uppercase text-[6.5vw] leading-[6.7vw] tracking-tighter font-bold">
             {item}
             </h1>
             </div>
             </div>
             );
        })}
      </div>
      <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center mx-3'>
        {["For public and private companies","From the first pitch to IPO"].map((item, index) => (
            <p className="leading-none tracking-tight text-md  font-light">
            {item}
            </p>
        ))}
        <div className="start flex items-center gap-5 ">
            <div className='px-4 py-1 border-2 rounded-full border-zinc-500 text-xs font-light  mx-5 mt-1 '>START THE PROJECT</div>
            <div className='w-5 h-5 border-2  border-zinc-500 rounded-full flex items-center justify-center'>
                <span className='rotate-[45deg]'>
                <FaLongArrowAltUp />
            </span></div>
        </div>
      </div>
    </div>
  )
}

export default landing
