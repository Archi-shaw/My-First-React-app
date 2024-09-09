import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[4vw]  leading-[3.5vw]'>Ochi is a strategic presentation agency for forward-thinking businesses 
        that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full flex gap-7 border-t-[1px] pt-10 mt-20 border-[#91a547] '>
        <div className='w-1/2'>
        <h1 className='text-5xl'> Our approach : </h1>
        <button className='px-7 uppercase py-4 mt-5 items-center bg-zinc-900 rounded-full flex gap-10 text-white'>Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100" ></div>
        </button>
        </div>
        <div className='w-[60vw] h-[75vh] overflow-hidden rounded-3xl bg-[#7f9044]'>
          <img className='bg-cover' src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg'></img>
        </div>
        </div>
    </div>
    
  )
}

export default About
