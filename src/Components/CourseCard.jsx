import React from 'react'

const CourseCard = ({data}) => {
    
  return (
    <div>
        <div className=' w-3/4 mx-auto  grid grid-cols-4 gap-4'>
            {data?.map(res=><div className='h-32 cursor-pointer hover:scale-105 duration-300 rounded-lg shadow p-2 text-left ring-[0.5px] bg-white text-sm ring-stone-400'>
                <p className='font-semibold capitalize '>{res?.name}</p>
                <p className='line-clamp-3 text-xs mt-3'>{res?.description}</p>
            </div>)}
          
        </div>
    </div>
  )
}

export default CourseCard