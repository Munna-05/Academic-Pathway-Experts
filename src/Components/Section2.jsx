import React from 'react'

const Section2 = () => {
  return (
    <div className='h-60 flex mt-24 bg-stone-100 justify-center items-center'>
       <div className='grid text-left    px-4 w-2/3 mx-auto'>
       <h1 className='text-5xl font-bold text-stone-700'>Study Abroad</h1>
        <p className='w-1/2 mt-2'>Open your mind to a whole new world, experience world-class education, and develop a global perspective.</p>
        <div className='flex gap-3 mt-2'>
        <button className='px-3 text-xs  capitalize border border-stone-700 hover:text-white hover:border-blue-400 rounded-md h-8 text-stone-900 outline-none hover:bg-blue-400'>learn more</button>
        <button className='px-3 text-xs  capitalize border border-stone-700 hover:text-white hover:border-blue-400 rounded-md h-8 text-stone-900 outline-none hover:bg-blue-400'>Enquire now</button>
        </div>
       </div>
    </div>
  )
}

export default Section2