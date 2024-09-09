import React, { useEffect,useState,useRef } from 'react'

export default function Eyes() {
    const [rotate,setRotate] = useState(0)
useEffect((e)=>{
    window.addEventListener("mousemove",(e)=>{
        let mousex = e.clientX;
        let mousey = e.clientY;
        let deltax = mousex - window.innerWidth/2;
        let deltay = mousey - window.innerHeight/2;
        var angle = Math.atan2(deltay,deltax) * (180/Math.PI);
        setRotate(angle-180)
    })
})

  return (
    <div className='Eyes w-full h-screen overflow-hidden'>
        <div data-scroll  data-scroll-speed="-.7" className='relative w-full  h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
      <div className='absolute flex gap-6 top-1/2 left-1/2 mb-40 -translate-x-[50%] -translate-y-[50%] '>
      <div className='flex items-center justify-center w-[15vw]  rounded-full h-[15vw] bg-white'>
      <div className='w-2/3 relative rounded-full h-2/3 bg-black'>
      <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
      <div className='w-10 rounded-full h-10 bg-white'></div> </div></div>
      </div>
      <div className='flex items-center justify-center w-[15vw]  rounded-full h-[15vw] bg-white'>
      <div className='w-2/3 relative  rounded-full h-2/3 bg-black'>
      <div  style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
      <div className='w-10 rounded-full h-10 bg-white'></div></div></div>
      </div>
        </div>
      </div>
    </div>
  )
}
