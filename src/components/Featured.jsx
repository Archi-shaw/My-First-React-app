import React from 'react'

function Featured() {
  return (
    <div className='w-full py-10'>
      <div className='w-full px-20 border-b-[1px] border-zinc-800  pb-20'>
        <h1 className='text-5xl tracking-tight'> Featured projects </h1>
      </div>
      <div className='px-20'>
      <div className='cards w-full mt-10 flex gap-10'>
        <div className='cardcontainer w-1/2 rounded-xl relative h-[80vh] '>
        <div className='w-full h-full overflow-hidden'>
        <img className='bg-cover w-full h-full' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png'></img>
        </div>
        </div>
        <div className='cardcontainer relative w-1/2 rounded-xl h-[80vh]'>
        <div className='w-full h-full overflow-hidden'>
        <img className='bg-cover w-full h-full' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg'></img>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
