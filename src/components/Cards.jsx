import React from 'react'

function cards() {
  return (
    <div className='w-full h-screen mt-20  px-32'>
      <div className='cardcontainer flex items-center flex-row  gap-4 mt-16 w-full h-[50vh]'>
      <div className='card w-1/3 h-full flex relative items-center justify-center rounded-xl bg-[#004D43]'>
      <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
      <button className=' px-5 py-1 absolute rounded-full text-xs border-2 left-2 bottom-2'>@2019-2022</button></div>
      <div className='card w-1/3 relative h-full flex items-center justify-center rounded-xl bg-[#00372f]'>
      <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
      <button className='  px-5 py-1 absolute rounded-full border-2 text-xs left-2 bottom-2'>RATING 5.0 ON CLUTCH</button></div>
      <div className='card  relative w-1/3 h-full flex items-center justify-center rounded-xl bg-[#012923]'>
      <img src='https://ochi.design/wp-content/uploads/2022/04/logo003.png '></img>
      <button className=' px-5 py-1 absolute rounded-full text-xs border-2 left-2 bottom-2'>BUSSINESS BOTCAMP ALUMINI</button></div>
    </div>
    </div>
  )
}

export default cards
